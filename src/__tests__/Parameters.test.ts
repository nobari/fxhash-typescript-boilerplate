/**
 * Tests for Parameters module
 */
import {
  createNumberParameter,
  createBigIntParameter,
  createStringParameter,
  createSelectParameter,
  createColorParameter,
  createBooleanParameter,
} from '../models/Parameters';

describe('Parameters', () => {
  describe('Factory Functions', () => {
    it('should create a number parameter correctly', () => {
      const param = createNumberParameter('test_id', 'Test Number', { min: 0, max: 10 }, 5);

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test Number');
      expect(param.type).toBe('number');
      expect(param.options).toEqual({ min: 0, max: 10 });
      expect(param.default).toBe(5);
    });

    it('should create a number parameter without default value', () => {
      const param = createNumberParameter('test_id', 'Test Number', { min: 0, max: 10 });

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test Number');
      expect(param.type).toBe('number');
      expect(param.options).toEqual({ min: 0, max: 10 });
      expect(param.default).toBeUndefined();
    });

    it('should create a bigint parameter correctly', () => {
      const param = createBigIntParameter(
        'test_id',
        'Test BigInt',
        { min: 0, max: 100 },
        BigInt(50)
      );

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test BigInt');
      expect(param.type).toBe('bigint');
      expect(param.update).toBe('code-driven');
      expect(param.options).toEqual({ min: 0, max: 100 });
      expect(param.default).toBe(BigInt(50));
    });

    it('should create a string parameter correctly', () => {
      const param = createStringParameter(
        'test_id',
        'Test String',
        { minLength: 1, maxLength: 10 },
        'default'
      );

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test String');
      expect(param.type).toBe('string');
      expect(param.update).toBe('code-driven');
      expect(param.options).toEqual({ minLength: 1, maxLength: 10 });
      expect(param.default).toBe('default');
    });

    it('should create a select parameter correctly', () => {
      const param = createSelectParameter('test_id', 'Test Select', ['a', 'b', 'c'], 'b');

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test Select');
      expect(param.type).toBe('select');
      expect(param.update).toBe('code-driven');
      expect(param.options).toEqual({ options: ['a', 'b', 'c'] });
      expect(param.default).toBe('b');
    });

    it('should create a color parameter correctly', () => {
      const param = createColorParameter('test_id', 'Test Color', '#ff0000');

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test Color');
      expect(param.type).toBe('color');
      expect(param.update).toBe('code-driven');
      expect(param.default).toBe('#ff0000');
    });

    it('should create a boolean parameter correctly', () => {
      const param = createBooleanParameter('test_id', 'Test Boolean', true);

      expect(param.id).toBe('test_id');
      expect(param.name).toBe('Test Boolean');
      expect(param.type).toBe('boolean');
      expect(param.update).toBe('code-driven');
      expect(param.default).toBe(true);
    });
  });
});
