# Contributing to Sports Social

Thank you for your interest in contributing to Sports Social! This document provides guidelines and information for contributors.

## How to Contribute

### 1. Fork the Repository

- Click the "Fork" button on the GitHub repository page
- Clone your forked repository to your local machine

### 2. Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
# or
git checkout -b bugfix/issue-description
```

### 3. Make Your Changes

- Write clean, readable code
- Follow the existing code style and conventions
- Add comments where necessary
- Update documentation if needed

### 4. Test Your Changes

- Ensure the app runs without errors
- Test the functionality you've added/modified
- Check that existing features still work

### 5. Commit Your Changes

Use conventional commit format:

```bash
git commit -m "feat: add new user profile feature"
git commit -m "fix: resolve authentication bug"
git commit -m "docs: update API documentation"
```

### 6. Push and Create a Pull Request

```bash
git push origin feature/amazing-feature
```

Then create a Pull Request on GitHub with a clear description of your changes.

## Pull Request Guidelines

### Title Format

- Use conventional commit format: `type: description`
- Examples: `feat: add dark mode`, `fix: resolve login issue`

### Description

- Clearly describe what the PR does
- Include any relevant issue numbers
- List any breaking changes
- Add screenshots for UI changes

### Code Review

- Address any feedback from reviewers
- Keep commits clean and logical
- Squash commits if requested

## Development Setup

### Prerequisites

- Node.js (v14+)
- MongoDB
- Git

### Local Development

1. Clone the repository
2. Install dependencies: `npm install` (in both client/ and server/)
3. Set up environment variables
4. Start the development servers

## Code Style Guidelines

### JavaScript/React

- Use ES6+ features
- Prefer functional components with hooks
- Use meaningful variable and function names
- Add PropTypes for component props

### CSS

- Use consistent naming conventions
- Prefer CSS custom properties for theming
- Keep styles modular and reusable

### Backend

- Follow RESTful API conventions
- Use async/await for asynchronous operations
- Implement proper error handling
- Add input validation

## Bug Reports

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots if applicable

## Feature Requests

For feature requests:

- Describe the feature clearly
- Explain the use case
- Consider implementation complexity
- Check if it aligns with project goals

## Documentation

Help improve documentation by:

- Fixing typos or unclear sections
- Adding examples
- Updating outdated information
- Adding new sections as needed

## Issue Labels

We use labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

## Recognition

Contributors will be recognized in:

- Repository README
- Release notes
- GitHub contributors page

## Questions?

If you have questions about contributing:

- Open an issue for discussion
- Check existing issues and PRs
- Join our community discussions

## Contact

- **Luke Grech** - [GitHub](https://github.com/lukegrc)

Thank you for contributing to Sports Social!
