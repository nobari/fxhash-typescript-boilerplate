/**
 * Main entry point for the fxhash project
 * Implements the original functionality with TypeScript and SOLID principles
 */

// Import services
import colorService from './services/ColorService';
import paramService from './services/ParamService';

// Import parameter factory functions
import {
  createNumberParameter,
  createBigIntParameter,
  createStringParameter,
  createSelectParameter,
  createColorParameter,
  createBooleanParameter,
  FxHashParameter
} from './models/Parameters';

/**
 * Define all the parameters for the project
 */
const defineParameters = (): void => {
  const params: FxHashParameter[] = [
    createNumberParameter(
      "number_id",
      "A number/float64",
      {
        min: 1,
        max: 10,
        step: 0.0001,
      }
    ),
    createBigIntParameter(
      "bigint_id",
      "A bigint",
      {
        min: Number.MIN_SAFE_INTEGER * 4,
        max: Number.MAX_SAFE_INTEGER * 4,
        step: 1,
      }
    ),
    createStringParameter(
      "string_id_long",
      "A string long",
      {
        minLength: 1,
        maxLength: 512,
      }
    ),
    createSelectParameter(
      "select_id",
      "A selection",
      ["apple", "orange", "pear"]
    ),
    createColorParameter(
      "color_id",
      "A color"
    ),
    createBooleanParameter(
      "boolean_id",
      "A boolean"
    ),
    createStringParameter(
      "string_id",
      "A string",
      {
        minLength: 1,
        maxLength: 512,
      }
    ),
  ];

  paramService.defineParams(params);
};

/**
 * Define features for the project
 */
const defineFeatures = (): void => {
  paramService.defineFeatures({
    "A random feature": Math.floor($fx.rand() * 10),
    "A random boolean": $fx.rand() > 0.5,
    "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
    "Feature from params, its a number": $fx.getParam<number>("number_id"),
  });
};

/**
 * Update the document based on the parameters
 */
const updateDocument = (): void => {
  const bgcolor = $fx.getParam<{ hex: { rgba: string } }>("color_id").hex.rgba;
  const textcolor = colorService.getContrastTextColor(bgcolor.replace("#", ""));

  // Update the document based on the parameters
  document.body.style.background = bgcolor;
  document.body.innerHTML = `
  <div style="color: ${textcolor};">
    <p>
    hash: ${$fx.hash}
    </p>
    <p>
    minter: ${$fx.minter}
    </p>
    <p>
    iteration: ${$fx.iteration}
    </p>
    <p>
    inputBytes: ${$fx.inputBytes}
    </p>
    <p>
    context: ${$fx.context}
    </p>
    <p>
    params:
    </p>
    <pre>
    ${$fx.stringifyParams($fx.getRawParams())}
    </pre>
  <div>
  `;

  // Create button to emit random params
  const btn = document.createElement("button");
  btn.textContent = "emit random params";
  btn.addEventListener("click", handleRandomizeClick);
  document.body.appendChild(btn);
};

/**
 * Handle click on the randomize button
 */
const handleRandomizeClick = (): void => {
  $fx.emit("params:update", paramService.getRandomParams());
  main();
};

/**
 * Main function to initialize the project
 */
const main = (): void => {
  updateDocument();
};

/**
 * Initialize the project
 */
const initialize = (): void => {
  defineParameters();
  defineFeatures();
  main();

  // Set up event listeners
  $fx.on(
    "params:update",
    (newRawValues: { number_id?: number }): boolean => {
      // opt-out default behaviour
      if (newRawValues.number_id === 5) return false;
      // opt-in default behaviour
      return true;
    },
    (optInDefault: boolean, newValues: Record<string, any>): void => main()
  );
};

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
} 