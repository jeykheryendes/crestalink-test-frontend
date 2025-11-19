# Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to maintain a consistent commit history
and automate changelog generation.

## Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Commit Types

- **bugfix**: Bug fix
- **build**: Changes to the build system or external dependencies
- **chore**: Other tasks that don't modify src or test
- **cicd**: Changes to CI configuration files
- **docs**: Documentation changes
- **feature**: New feature for the user
- **hotfix**: Urgent fixes
- **performance**: Performance improvements
- **refactor**: Code refactoring
- **release**: Release preparation
- **revert**: Revert a previous commit
- **review**: Code review
- **style**: Changes that don't affect the code (whitespace, formatting, etc.)
- **test**: Add or fix tests
- **update** Update dependencies and libraries
- **wip**: Work in progress

## Examples

### New features

```bash
git commit -m "feat: add JWT authentication"
git commit -m "feat(auth): implement Google OAuth login"
```

### Bug fixes

```bash
git commit -m "fix: fix email validation error"
git commit -m "fix(api): resolve CORS issue in endpoints"
```

### Documentation

```bash
git commit -m "docs: update README with installation instructions"
git commit -m "docs(api): add endpoint documentation"
```

### Refactoring

```bash
git commit -m "refactor: reorganize folder structure"
git commit -m "refactor(services): extract business logic to separate services"
```

### Tests

```bash
git commit -m "test: add unit tests for UserService"
git commit -m "test(e2e): add integration tests for API"
```

### Build and CI

```bash
git commit -m "build: update development dependencies"
git commit -m "ci: configure GitHub Actions for automatic tests"
```

### Chores

```bash
git commit -m "chore: update .gitignore"
git commit -m "chore: configure commitlint"
```

## Rules

1. **Type in lowercase**: `feat`, `fix`, `docs`, etc.
2. **Description in lowercase**: no capital letters at the beginning
3. **No final period**: in the description
4. **Maximum 72 characters**: in the header line
5. **Optional body**: for more detailed explanations
6. **Optional footer**: for issue references, breaking changes, etc.

## Breaking Changes

For changes that break backward compatibility, use `!` after the type:

```bash
git commit -m "feat!: change authentication API"
git commit -m "fix!: fix API response format"
```

## Issue References

```bash
git commit -m "fix: resolve memory issue

Closes #123"
git commit -m "feat: add pagination

Fixes #456"
```

## Useful Commands

- `npm run commitlint:check`: Check the last commit
- `npm run commitlint`: Check a specific commit

## Husky Integration

This project is configured with Husky to automatically run commitlint on each commit. If a commit doesn't follow the
conventions, it will be rejected.

## Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitizen](https://github.com/commitizen/cz-cli) - Tool for creating commits interactively
- [Commitlint](https://github.com/conventional-changelog/commitlint) - Linter for commits
