// pluck certain key/keys from array of object or the object itself
type Dog = {
  name: string;
  breed: string;
  age: number;
};

const dogs: Dog[] = [
  {
    name: "doggy",
    breed: "cihuahua",
    age: 20,
  },
  {
    name: "boggy",
    breed: "bulldog",
    age: 10,
  },
];

function pluckOne<T>(data: T | T[], key: keyof T) {
  if (Array.isArray(data)) {
    return data.map((d) => d[key]);
  }

  return data[key];
}

function pluckMoreThanOne<T>(data: T | T[], key: (keyof T)[]) {
  if (Array.isArray(data)) {
    return data.map((d) => {
      const obj = {} as Record<keyof T, T[keyof T]>;
      key.forEach((k) => {
        obj[k] = d[k];
      });
      return obj;
    });
  }

  return key.map((k) => data[k]);
}

export function main() {
  console.log(pluckOne(dogs, "breed"));
  console.log("---------------------");
  console.log(pluckOne(dogs[0], "breed"));
  console.log("---------------------");
  console.log(pluckMoreThanOne(dogs, ["age", "breed"]));
  console.log("---------------------");
  console.log(pluckMoreThanOne(dogs[0], ["age", "breed"]));
}
