# Naming Policies

## Summary

- [Generals](#generals)
- [Constants](#constants)
- [Dictionaries](#dictionaries)
- [Enums](#enums)
- [Interfaces](#interfaces)
- [Types](#types)
- [Variants](#variants)

## Generals

Filenames must be use the following standard naming:

```bash
[name-name].[filetype].[extension]
```

Where **name** are words separated by **hyphens** and **filetype** are the type of file and **extension** are the
extension of the file.

## Constants

`Constants` must be defined as follows:

```typescript
export const NAME = value;
```

The **file naming** must be as follows:

```bash
[name].constant.ts
```

## Dictionaries

`Dictionaries` must be defined as follows:

```typescript
export const nameDictionary = {
  key: value,
  ...
} as const;
```

We can also define using **Map** or **Set**.

The **file naming** must be as follows:

```bash
[name].dictionary.ts
```

## Enums

`Enums` must be defined as follows:

```typescript
export enum NamePlural {
  VALUE1 = value1,
  VALUE2 = value2,
  ...
}
```

The **file naming** must be as follows:

```bash
[name].enum.ts
```

## Interfaces

`Interfaces` must be defined as follows:

```typescript
export interface Name {
  property1: type;
  method: () => type;
  ...;
}
```

The **file naming** must be as follows:

```bash
[name].interface.ts
```

## Types

`Types` must be defined as follows:

```typescript
export type Name = type;
```

The **file naming** must be as follows:

```bash
[name].type.ts
```

## Variants

`Variants` must be defined as follows:

```typescript
export const nameVariants = {
  "scale-down": "object-scale-down",
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  none: "object-none",
} as const;

export type NameVariantType = keyof typeof nameVariants;
```

The **file naming** must be as follows:

```bash
[name].variant.ts
```
