/**
 * Type definitions for the fxhash library in Jest environment
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
  params: (params: unknown[]) => void;

  /** Define features for the project */
  features: (features: Record<string, unknown>) => void;

  /** Get a specific feature */
  getFeature: (name: string) => unknown;

  /** Get all features */
  getFeatures: () => Record<string, unknown>;

  /** Get a transformed parameter value */
  getParam: <T>(id: string) => T;

  /** Get all transformed parameter values */
  getParams: () => Record<string, unknown>;

  /** Get a raw parameter value */
  getRawParam: <T>(id: string) => T;

  /** Get all raw parameter values */
  getRawParams: () => Record<string, unknown>;

  /** Get a random parameter value */
  getRandomParam: <T>(id: string) => T;

  /** Get parameter definitions */
  getDefinitions: () => unknown[];

  /** Stringify parameters for display */
  stringifyParams: (params?: Record<string, unknown>) => string;

  /** Register event listeners */
  on: (
    event: string,
    validator: (newValues: Record<string, unknown>) => boolean | Promise<boolean>,
    callback: (optInDefault: boolean, newValues: Record<string, unknown>) => void
  ) => () => void;

  /** Emit an event */
  emit: (event: string, data: unknown) => void;
}
