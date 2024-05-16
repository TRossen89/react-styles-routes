import { useReducer } from "react";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/globalVariables.js";

const getAllEntities = async () => {
  try {
    const result = await fetch(`${BASE_URL_DEV}/entityOne`);

    if (!result.ok) {
      throw new Error("Fect didn't work");
      console.log("fetch dign't work");
    }

    const data = await result.json();
    return data;

  } catch (err) {

    if (err.status) {
      err.fullError.then((e) => console.log(e.detail));

    } else {
      console.log("Network error");
    }
  }
};

const login = async (username, password) => {
  try {
    const result = await fetch(`${BASE_URL_DEV}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    const data = await result.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.userName);

      return data.token;
    }
  } catch (e) {
    console.log(e);
  }
};

export { login };
export {getAllEntities};
//login("tobias@email.dk", "1234");
