type ApiResponse<T> = {
  code: string;
  data: T;
};

type ApiError = {
  message: string;
};

type UserData = {
  username: string;
  password: string;
};

function fetchData<T>(data: T): ApiResponse<T> | ApiError {
  if (Math.random() > 0.5) {
    return {
      code: "success",
      data,
    };
  }

  return {
    message: "something went wrong.",
  };
}

export function main() {
  const dataWithPossibleError = fetchData<UserData>({
    username: "user",
    password: "123",
  });

  console.log(dataWithPossibleError);
}
