import { useReducer } from "react";
import { BASE_URL_DEV, BASE_URL_PROD } from "../utils/globalVariables.js";

const login = async(username, password) => {
    
    try{
        const result = await fetch(`${BASE_URL_PROD}auth/login`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                "email": username,
                "password": password
    
            })
        })
            const data = await result.json();
            console.log(data)


    }
    catch(e){
        console.log(e);
    }
}


login("tobias@email.dk", "1234");