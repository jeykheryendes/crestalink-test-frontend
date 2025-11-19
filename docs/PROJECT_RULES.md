# Project Rules

## Summary

- [Generals](#generals)
- [Classes](#classes)
- [Code documentation](#code-documentation)
- [Commit convention](#commit-convention)
- [Dependencies](#dependencies)
- [Folders](#folders)
- [Git workflow](#git-workflow)
- [Import order](#import-order)
- [Naming policies](#naming-policies)
- [Package manager](#package-manager)
- [Project manager](#project-manager)
- [Project versioning](#project-versioning)
- [Remote repository](#remote-repository)
- [Software architecture](#software-architecture)
- [Sprints](#sprints)
- [Styling](#styling)
- [Types](#types)

## Generals

- **NEVER** use `any` except in exceptional cases.
- **NEVER** use `console.log` on `JavaScript` or `TypeScript`.

### Classes

- **ALWAYS** use `access modifiers` on **class methods** and **properties**, even if they are **public**.

## Code documentation

- **ALWAYS** use `TsDoc` to document the code.

## Commit convention

Please refer to the [Commit convention](./COMMIT_CONVENTION.md) file for more information about commit convention
naming.

## Dependencies

1. **ALWAYS** install dependencies as **exact**.

## Folders

Please refer to the [Project Structure](./PROJECT_STRUCTURE.md) file for more information.

## Git workflow

Please refer to the [Git workflow](./GIT_WORKFLOW.md) file for more information.

## Naming policies

Please refer to the [Naming policies](./NAMING_POLICIES.md) file for more information.

## Package manager

For this project we use `bun` as package manager.

## Project manager

For this project we use `Jira` to manage **tasks** and **sprints**.

## Project versioning

For this project we use `Changeset` to manage the package version and **Changelog** file.

## Remote repository

For this project the remote repository is `Github`.

## Software architecture

For this project we use **Clean Architecture** as software architecture inside of **modules** if project need to scale on time neither use favorite structure.

## Sprints

For this project the sprints is **1 week** long. After each sprint, on moday release take a place.

Every time that it will release a new version we have to change **package version** using `Changeset`.

## Styling

- **ALWAYS** use `TailwindCSS` for styling asociated to theme and components and view customizations and `CSS` for
  global, bases and layouting styles.

### Types

- **ALWAYS** separate **type**, **interface** into its own **file**, ensuring each file has a **single responsibility**.
