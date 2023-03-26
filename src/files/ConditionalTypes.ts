type Bird = {
  canFly: boolean;
  legs: 2;
};

type Wolf = {
  canFly: false;
  legs: 4;
};

type Elephant = {
  canFly: false;
  legs: 4;
};

type HasFourLegs<T> = T extends { legs: 4 } ? T : never;

type Animal = Bird | Wolf | Elephant;
type AnimalsWithFourLegs = HasFourLegs<Animal>;
