
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/globalVariables.js";


//const URL = BASE_URL_DEV;


function deleteEntity(id) {
  // Initiate the fetch request

  const token = localStorage.getItem("token");


  return fetch(`${BASE_URL_PROD}/entityOne/${id}`, {
    method: "DELETE", // HTTP method to create an entity
    headers: {
    
      Authorization: `Bearer ${token}`, // Authorization header with token
    }
  })
    .then((response) => {
      // First then() handles the response object
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Return the parsed JSON from the response
      return response.json(); // response.json() returns a promise
    })
    .then((result) => {
      // Second then() handles the parsed JSON data
      console.log(result); // Return the result to the caller
    })
    .catch((error) => {
      // catch() handles any errors in the promise chain
      console.error("Error creating entity:", error); // Log any errors to the console
      throw error; // Re-throw the error so it can be handled by the caller
    });
}




function createEntity(data) {
  // Initiate the fetch request

  const token = localStorage.getItem("token");


  return fetch(`${BASE_URL_PROD}/entityOne`, {
    method: "POST", // HTTP method to create an entity
    headers: {
      "Content-Type": "application/json", // Sending JSON data
      Authorization: `Bearer ${token}`, // Authorization header with token
    },
    body: JSON.stringify(data), // Convert the data object to a JSON string
  })
    .then((response) => {
      // First then() handles the response object
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Return the parsed JSON from the response
      return response.json(); // response.json() returns a promise
    })
    .then((result) => {
      // Second then() handles the parsed JSON data
      return result; // Return the result to the caller
    })
    .catch((error) => {
      // catch() handles any errors in the promise chain
      console.error("Error creating entity:", error); // Log any errors to the console
      throw error; // Re-throw the error so it can be handled by the caller
    });
}

function getAllEntities() {

  return fetch(`${BASE_URL_PROD}/entityOne`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetch didn't work");
      }
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.detail));
      } else {
        console.log("Network error");
      }
    });
}

function updateEntity(data, id) {
  // Initiate the fetch request

  const token = localStorage.getItem("token");


  return fetch(`${BASE_URL_PROD}/entityOne/${id}`, {
    method: "PUT", // HTTP method to create an entity
    headers: {
      "Content-Type": "application/json", // Sending JSON data
      Authorization: `Bearer ${token}`, // Authorization header with token
    },
    body: JSON.stringify(data), // Convert the data object to a JSON string
  })
    .then((response) => {
      // First then() handles the response object
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Return the parsed JSON from the response
      return response.json(); // response.json() returns a promise
    })
    .then((result) => {
      // Second then() handles the parsed JSON data
      return result; // Return the result to the caller
    })
    .catch((error) => {
      // catch() handles any errors in the promise chain
      console.error("Error creating entity:", error); // Log any errors to the console
      throw error; // Re-throw the error so it can be handled by the caller
    });
}


//


const login = async (username, password) => {

  try {
    const result = await fetch(`${BASE_URL_PROD}/auth/login`, {
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
export { getAllEntities };
export { createEntity };
export { deleteEntity };
export { updateEntity };
//login("tobias@email.dk", "1234");
