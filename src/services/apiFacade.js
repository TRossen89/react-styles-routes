import { useReducer } from "react";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/globalVariables.js";


const getAllEntities = async () => {

    
}



const login = async (username, password) => {
  try {
    const result = await fetch(`${BASE_URL_DEV}auth/login`, {
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
    }

  } catch (e) {
    console.log(e);
  }
};

export { login };
//login("tobias@email.dk", "1234");
