/**
 * ParamService - Responsible for parameter management
 * Following the Single Responsibility Principle
 */
import { FxHashParameter } from '../models/Parameters';

/**
 * Interface for parameter service operations
 * Follows Interface Segregation Principle
 */
export interface IParamService {
  /**
   * Defines parameters for the fxhash project
   * @param params - Array of parameter definitions
   */
  defineParams(params: FxHashParameter[]): void;

  /**
   * Defines features for the fxhash project
   * @param features - Record of feature definitions
   */
  defineFeatures(features: Record<string, unknown>): void;

  /**
   * Gets random values for all parameters
   * @returns Object containing random values for each parameter
   */
  getRandomParams(): Record<string, unknown>;
}

/**
 * Implementation of the parameter service
 * Uses dependency inversion by depending on abstractions
 */
export class ParamService implements IParamService {
  private readonly params: FxHashParameter[] = [];

  /**
   * Defines parameters for the fxhash project
   * @param params - Array of parameter definitions
   */
  public defineParams(params: FxHashParameter[]): void {
    this.params.length = 0; // Clear array without creating a new instance
    this.params.push(...params); // Add new params
    window.$fx.params(params);
  }

  /**
   * Defines features for the fxhash project
   * @param features - Record of feature definitions
   */
  public defineFeatures(features: Record<string, unknown>): void {
    window.$fx.features(features);
  }

  /**
   * Gets random values for all parameters
   * @returns Object containing random values for each parameter
   */
  public getRandomParams(): Record<string, unknown> {
    const randomParams: Record<string, unknown> = {};

    for (const param of this.params) {
      randomParams[param.id] = window.$fx.getRandomParam<unknown>(param.id);
    }

    return randomParams;
  }
}

// Singleton instance for convenient usage
const paramService = new ParamService();
export default paramService;
