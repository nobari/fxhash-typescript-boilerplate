# Contributing to fxhash TypeScript Boilerplate

Thank you for considering contributing to this project! This document outlines the process for contributing to the fxhash TypeScript Boilerplate.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Describe the behavior you observed and what you expected to see
- Include screenshots if possible
- Include environment details (OS, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- A clear and descriptive title
- A detailed description of the proposed functionality
- Explain why this enhancement would be useful to most users
- List any examples from other projects if applicable

### Pull Requests

- Fill in the required template
- Follow the TypeScript and project style guides
- Include appropriate test cases
- Update the documentation accordingly
- End all files with a newline
- Keep pull requests focused on a single topic

## Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run the tests (`npm test`)
6. Make sure your code lints (`npm run lint`)
7. Format your code (`npm run format`)
8. Commit your changes (`git commit -m 'Add some amazing feature'`)
9. Push to the branch (`git push origin feature/amazing-feature`)
10. Open a Pull Request

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

All TypeScript code is linted with ESLint and formatted with Prettier.

- Use `const` for variables that are never reassigned, `let` otherwise
- Prefer template literals over string concatenation
- Use arrow functions over function expressions
- Add types to function parameters and return values
- Use interfaces for object types
- Follow SOLID principles
- Write unit tests for all new code

### Documentation Styleguide

- Use [Markdown](https://guides.github.com/features/mastering-markdown/) for documentation
- Reference code with backticks (`)
- Include code comments that explain "why", not "what"
- Keep documentation up-to-date as code changes

## Project Structure

Please follow the established project structure:

```
├── src/                      # Source files
│   ├── index.ts              # Main entry point
│   ├── services/             # Service layer 
│   └── models/               # Data models
├── test/                     # Tests
```

## Additional Notes

### Issue and Pull Request Labels

This project uses labels to help organize and prioritize issues and pull requests:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed

## Thank You!

Thank you for contributing to the fxhash TypeScript Boilerplate project! 