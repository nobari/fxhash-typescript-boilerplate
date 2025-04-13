/**
 * Parameters model for fxhash project
 * Following SOLID principles, this model focuses only on parameter structure
 */

/**
 * Interface for all parameter types
 */
export interface IParameter {
  id: string;
  name: string;
  type: string;
  update?: 'code-driven';
  options?: Record<string, unknown>;
}

/**
 * Number parameter
 */
export interface INumberParameter extends IParameter {
  type: 'number';
  default?: number;
  options?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

/**
 * BigInt parameter
 */
export interface IBigIntParameter extends IParameter {
  type: 'bigint';
  default?: bigint;
  options?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

/**
 * String parameter
 */
export interface IStringParameter extends IParameter {
  type: 'string';
  default?: string;
  options?: {
    minLength?: number;
    maxLength?: number;
  };
}

/**
 * Selection parameter
 */
export interface ISelectParameter extends IParameter {
  type: 'select';
  default?: string;
  options: {
    options: string[];
  };
}

/**
 * Color parameter
 */
export interface IColorParameter extends IParameter {
  type: 'color';
  default?: string;
}

/**
 * Boolean parameter
 */
export interface IBooleanParameter extends IParameter {
  type: 'boolean';
  default?: boolean;
}

/**
 * Union type of all parameter types
 */
export type FxHashParameter =
  | INumberParameter
  | IBigIntParameter
  | IStringParameter
  | ISelectParameter
  | IColorParameter
  | IBooleanParameter;

/**
 * Factory function to create parameters
 */
export const createNumberParameter = (
  id: string,
  name: string,
  options?: INumberParameter['options'],
  defaultValue?: number
): INumberParameter => ({
  id,
  name,
  type: 'number',
  options,
  ...(defaultValue !== undefined && { default: defaultValue }),
});

export const createBigIntParameter = (
  id: string,
  name: string,
  options?: IBigIntParameter['options'],
  defaultValue?: bigint
): IBigIntParameter => ({
  id,
  name,
  type: 'bigint',
  update: 'code-driven',
  options,
  ...(defaultValue !== undefined && { default: defaultValue }),
});

export const createStringParameter = (
  id: string,
  name: string,
  options?: IStringParameter['options'],
  defaultValue?: string
): IStringParameter => ({
  id,
  name,
  type: 'string',
  update: 'code-driven',
  options,
  ...(defaultValue !== undefined && { default: defaultValue }),
});

export const createSelectParameter = (
  id: string,
  name: string,
  options: string[],
  defaultValue?: string
): ISelectParameter => ({
  id,
  name,
  type: 'select',
  update: 'code-driven',
  options: { options },
  ...(defaultValue !== undefined && { default: defaultValue }),
});

export const createColorParameter = (
  id: string,
  name: string,
  defaultValue?: string
): IColorParameter => ({
  id,
  name,
  type: 'color',
  update: 'code-driven',
  ...(defaultValue !== undefined && { default: defaultValue }),
});

export const createBooleanParameter = (
  id: string,
  name: string,
  defaultValue?: boolean
): IBooleanParameter => ({
  id,
  name,
  type: 'boolean',
  update: 'code-driven',
  ...(defaultValue !== undefined && { default: defaultValue }),
});
