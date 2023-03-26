// Awaited
type User = {
  username: string;
  password: string;
};

type UserFromPromise = Awaited<Promise<User>>;

// Partial
type UserButAllTheFieldsAreNotRequired = Partial<User>;

// Required
type UserWithAllFieldsRequired = Required<UserButAllTheFieldsAreNotRequired>;

// Readonly
// 1st way
interface Cat1 {
  readonly name: string;
  readonly breed: string;
}

// 2nd way
type Cat2 = Readonly<{
  name: string;
  breed: string;
}>;

const cat: Cat1 = {
  name: "cat",
  breed: "cat",
};

// Will cause compile error
// cat.name = "puss"

// Record
type MyCat = "cat" | "puss" | "duss";

const cats: Partial<Record<MyCat, Cat1>> = {
  cat: {
    name: "cat",
    breed: "cat",
  },
};

// Pick
type CatName = Pick<Cat1, "name">;

// Omit
type CatWithoutName = Omit<Cat1, "name">;

// Exclude
type MyCatWithoutDuss = Exclude<MyCat, "duss">;

// Non Nullable
type SomeType = string | number | undefined | null;
type NonNullableSomeType = NonNullable<SomeType>;

// Parameters
function makeCat(cat: Cat1, anotherCat: Cat2) {
  return {
    ...cat,
    ...anotherCat,
  };
}

type MakeCatParams = Parameters<typeof makeCat>;

// Return type
type ReturnTypeOfMakeCat = ReturnType<typeof makeCat>;

// String manipulation types
type Colors = "Red" | "Green" | "Blue";
type UpperCasedColors = Uppercase<Colors>;
type LowerCasedColors = Lowercase<Colors>;
type UncapitalizedColors = Uncapitalize<Colors>;
type CapitalizedColors = Capitalize<UncapitalizedColors>;

export function main() {}
