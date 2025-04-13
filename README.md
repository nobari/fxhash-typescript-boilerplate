# fxhash TypeScript Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)](https://www.typescriptlang.org/)
[![fxhash](https://img.shields.io/badge/fxhash-compatible-blue)](https://www.fxhash.xyz/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Jest: tested](https://img.shields.io/badge/Jest-tested-brightgreen)](https://jestjs.io/)
[![CI: GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF)](https://github.com/features/actions)

A production-ready TypeScript boilerplate for [fxhash](https://www.fxhash.xyz/) generative art projects following SOLID principles. This boilerplate provides a structured foundation for creating high-quality generative art NFTs with modern development practices.

## Features

- **TypeScript** implementation with strict typing and comprehensive type definitions
- **SOLID principles** applied throughout the codebase for maintainable, extensible code
- **Modular architecture** with clear separation of concerns
- **Parameter-based customization** with type-safe access to fxhash parameters
- **Optimized build process** that generates minimal output for fxhash deployment
- **Code quality tools** including ESLint, Prettier, and Jest for testing
- **Git hooks** for ensuring code quality with every commit
- **100% test coverage** for services and models

## Prerequisites

- Node.js 16+ and npm
- [fxhash CLI](https://github.com/fxhash/fxhash-package) installed globally (`npm install -g fxhash`)

## Installation

```bash
# Clone the repository
git clone https://github.com/nobari/fxhash-typescript-boilerplate.git
cd fxhash-typescript-boilerplate

# Install dependencies
npm install
```

## Development

Start the local development server to preview your project:

```bash
npm run dev
```

This will start a development server at `http://localhost:3000` with live reloading enabled.

Build the project for development:

```bash
npm run build
```

## Code Quality

Format your code with Prettier:

```bash
npm run format
```

Lint your code with ESLint:

```bash
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## Testing

This project uses Jest for testing with jsdom to simulate a browser environment. Tests are located in the `src/__tests__` directory.

Run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode (useful during development)
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

All services and models are 100% tested. We enforce code coverage thresholds to maintain quality.

## Deployment to fxhash

Build for fxhash:

```bash
# Standard build
npm run fxbuild

# Minified build (recommended for production)
npm run fxbuild:minify
```

The build process:
1. Compiles TypeScript to JavaScript
2. Copies only the necessary files to a temporary build directory
3. Removes TypeScript declaration files and source maps
4. Creates a highly optimized `upload.zip` file (typically ~8KB) ready for upload to the fxhash platform
5. Cleans up temporary files

After running the build command, upload the generated `upload.zip` file to fxhash when minting your project.

## Project Structure

```
├── src/                      # Source files
│   ├── index.ts              # Main entry point
│   ├── index.html            # HTML template
│   ├── styles.css            # Stylesheet
│   ├── fxhash.min.js         # fxhash library
│   ├── __tests__/            # Test files
│   ├── types/                # TypeScript type definitions
│   │   └── fxhash.d.ts       # fxhash type definitions
│   ├── services/             # Service layer
│   │   ├── ColorService.ts   # Color-related functionality
│   │   └── ParamService.ts   # Parameter handling
│   └── models/               # Data models
│       └── Parameters.ts     # Parameter definitions
├── dist/                     # Compiled output (not in VCS)
├── .husky/                   # Git hooks configuration
├── .github/                  # GitHub workflows and templates
├── package.json              # Project manifest
├── tsconfig.json             # TypeScript configuration
├── tsconfig.eslint.json      # TypeScript configuration for ESLint
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── jest.config.js            # Jest configuration
└── README.md                 # Project documentation
```

## SOLID Principles Implementation

This project adheres to SOLID principles:

1. **Single Responsibility Principle**: Each class and module has one responsibility
   - Example: `ColorService` handles only color-related operations
   - Example: `ParamService` manages only parameter interactions

2. **Open/Closed Principle**: Code is open for extension but closed for modification
   - Example: The parameter system allows adding new parameter types without modifying existing code

3. **Liskov Substitution Principle**: Subtypes are substitutable for their base types
   - Example: All parameter types implement a common interface and can be used interchangeably

4. **Interface Segregation Principle**: Clients depend only on interfaces they use
   - Example: Services expose minimal interfaces with clearly defined methods

5. **Dependency Inversion Principle**: High-level modules depend on abstractions
   - Example: Components depend on service interfaces rather than concrete implementations

## fxhash Integration

This project is designed to work seamlessly with the fxhash platform, leveraging its features:

- Random hash-based generation with deterministic outputs
- Parameter configuration with type safety
- Minter information access
- Context-aware rendering for different environments

## Available Scripts

- `npm run dev` - Start the fxhash development server
- `npm run build` - Compile TypeScript to JavaScript for development
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix auto-fixable ESLint issues
- `npm run format` - Format code with Prettier
- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run fxbuild` - Create a minimal zip file for uploading to fxhash (~8KB)
- `npm run fxbuild:minify` - Create a minified zip file for uploading to fxhash

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Sadegh Nobari**

- GitHub: [@nobari](https://github.com/nobari)

## Acknowledgments

- [fxhash](https://www.fxhash.xyz/) for creating an incredible platform for generative art
- The TypeScript community for providing excellent tools and resources 