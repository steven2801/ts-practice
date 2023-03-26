// union object types
// use switch case to handle different types
type BasePayload = {
  username: string;
  password: string;
};

type Action =
  | {
      type: "LOGIN";
      payload: BasePayload;
    }
  | {
      type: "REGISTER";
      payload: BasePayload & {
        confirmPassword: string;
      };
    }
  | {
      type: "LOGOUT";
    };

function handleAuth(action: Action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload.username + " is logged in.");
      break;
    case "REGISTER":
      const { password, confirmPassword } = action.payload;
      console.log(
        `${password} and ${confirmPassword} is ${password === confirmPassword ? "the same" : "not the same"}.`
      );
      break;
    case "LOGOUT":
      console.log("Logged out.");
      break;
    default:
      throw Error("Unknown action type.");
  }
}

export function main() {
  handleAuth({
    type: "LOGIN",
    payload: {
      username: "user",
      password: "123",
    },
  });

  handleAuth({
    type: "REGISTER",
    payload: {
      username: "user",
      password: "123",
      confirmPassword: "123",
    },
  });

  handleAuth({
    type: "LOGOUT",
  });
}
