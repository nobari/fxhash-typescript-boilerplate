/**
 * Type definitions for the fxhash library
 */

/**
 * Represents a color parameter in different formats
 */
interface IFxHashColorFormat {
  hex: {
    rgb: string;
    rgba: string;
  };
  obj: {
    rgb: {
      r: number;
      g: number;
      b: number;
    };
    rgba: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
  arr: {
    rgb: [number, number, number];
    rgba: [number, number, number, number];
  };
}

/**
 * Parameter options for different parameter types
 */
interface IFxHashParamOptions {
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  maxLength?: number;
  options?: string[];
}

/**
 * Parameter definition for fxhash
 */
interface IFxHashParam {
  id: string;
  name: string;
  type: 'number' | 'bigint' | 'string' | 'select' | 'color' | 'boolean';
  update?: 'code-driven';
  default?: any;
  options?: IFxHashParamOptions;
}

/**
 * The main $fx object provided by fxhash
 */
export interface IFxHash {
  /** The hash provided by fxhash */
  hash: string;
  
  /** A random function seeded by the hash */
  rand: (() => number) & { reset: () => void };
  
  /** The minter's address */
  minter: string;
  
  /** A random function seeded by the minter's address */
  randminter: (() => number) & { reset: () => void };
  
  /** The iteration number */
  iteration: number;
  
  /** The context of the execution */
  context: string;
  
  /** Function to emit when preview mode is active */
  preview: () => void;
  
  /** Whether preview mode is active */
  isPreview: boolean;
  
  /** The input bytes used for deterministic generation */
  inputBytes?: string;
  
  /** Define parameters for the project */
  params: (params: IFxHashParam[]) => void;
  
  /** Define features for the project */
  features: (features: Record<string, any>) => void;
  
  /** Get a specific feature */
  getFeature: (name: string) => any;
  
  /** Get all features */
  getFeatures: () => Record<string, any>;
  
  /** Get a transformed parameter value */
  getParam: <T>(id: string) => T;
  
  /** Get all transformed parameter values */
  getParams: () => Record<string, any>;
  
  /** Get a raw parameter value */
  getRawParam: <T>(id: string) => T;
  
  /** Get all raw parameter values */
  getRawParams: () => Record<string, any>;
  
  /** Get a random parameter value */
  getRandomParam: <T>(id: string) => T;
  
  /** Get parameter definitions */
  getDefinitions: () => IFxHashParam[];
  
  /** Stringify parameters for display */
  stringifyParams: (params?: Record<string, any>) => string;
  
  /** Register event listeners */
  on: (
    event: string,
    validator: (newValues: Record<string, any>) => boolean | Promise<boolean>,
    callback: (optInDefault: boolean, newValues: Record<string, any>) => void
  ) => () => void;
  
  /** Emit an event */
  emit: (event: string, data: any) => void;
}

declare global {
  // Extend the Window interface to include $fx
  interface Window {
    $fx: IFxHash;
  }
  
  const $fx: IFxHash;
}

export {}; 