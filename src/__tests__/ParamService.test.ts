/**
 * Tests for ParamService
 * Note: Using Jest mocks for window.$fx
 */
import { ParamService } from '../services/ParamService';
import { createNumberParameter } from '../models/Parameters';
import type { IFxHash } from '../types/fxhash';

describe('ParamService', () => {
  let paramService: ParamService;
  
  // Mock for window.$fx
  const mockParams = jest.fn();
  const mockFeatures = jest.fn();
  const mockGetRandomParam = jest.fn();
  
  beforeEach(() => {
    // Reset mocks
    mockParams.mockReset();
    mockFeatures.mockReset();
    mockGetRandomParam.mockReset();
    
    // Setup global $fx mock safely
    const mockFx: Partial<IFxHash> = {
      params: mockParams,
      features: mockFeatures,
      getRandomParam: mockGetRandomParam,
    };
    
    // Properly type the window.$fx property
    Object.defineProperty(window, '$fx', {
      value: mockFx,
      writable: true,
      configurable: true
    });
    
    paramService = new ParamService();
  });
  
  afterEach(() => {
    // Clean up
    jest.restoreAllMocks();
  });
  
  describe('defineParams', () => {
    it('should pass parameters to $fx.params', () => {
      const testParams = [
        createNumberParameter('test_id', 'Test Number', { min: 0, max: 10 }, 5),
      ];
      
      paramService.defineParams(testParams);
      
      expect(mockParams).toHaveBeenCalledWith(testParams);
    });
  });
  
  describe('defineFeatures', () => {
    it('should pass features to $fx.features', () => {
      const testFeatures = {
        'feature1': 'value1',
        'feature2': 42,
      };
      
      paramService.defineFeatures(testFeatures);
      
      expect(mockFeatures).toHaveBeenCalledWith(testFeatures);
    });
  });
  
  describe('getRandomParams', () => {
    it('should get random values for each parameter', () => {
      // Setup
      const testParams = [
        createNumberParameter('param1', 'Param 1'),
        createNumberParameter('param2', 'Param 2'),
      ];
      
      mockGetRandomParam.mockImplementation((id: string) => {
        if (id === 'param1') return 42;
        if (id === 'param2') return 100;
        return null;
      });
      
      // Define params first to populate internal params array
      paramService.defineParams(testParams);
      
      // Get random parameters
      const result = paramService.getRandomParams();
      
      // Verify
      expect(result).toEqual({
        param1: 42,
        param2: 100,
      });
      expect(mockGetRandomParam).toHaveBeenCalledWith('param1');
      expect(mockGetRandomParam).toHaveBeenCalledWith('param2');
    });
  });
}); 