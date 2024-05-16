import React from "react";
import { getAllEntities } from "../services/apiFacade";
import { useState, useEffect } from "react";
import EntitiesForm from "./EntitiesForm";
import EntitiesList from "./EntitiesList";
import { createEntity } from "../services/apiFacade";



const blankEntity = {
  id: "",
  templateField1: "",
  templateField2: "",
};

export default function Entities({ isLoggedIn, loggedInUser }) {

  const [entities, setEntities] = useState([]);
  const [entityToEdit, setEntityToEdit] = useState({ ...blankEntity });

  function editEntity(entity) {
    setEntityToEdit(entity);
  }




  function addEntity(entity) {
    try {
      const entityCreated = createEntity(entity);

      entityCreated.then((parsed) => {
        const entityCreatedParsed = parsed;

        console.log("Entity created with fetch: " + entityCreatedParsed);

        delete entityCreatedParsed.dtoTWOSet;

        setEntities((previousEntities) => [...previousEntities, entityCreatedParsed]);
      });
    } catch (error) {
      // Handle any errors that occur during the fetch or result handling
      console.error("Error:", error);
    }
  }


  

  function updateEntity(entity) {
    /*
      
      fetchData(`${APIURL}/${entity.id}`, (entityCreated) => setEntities(entities.map((p) => p.id === entityCreated.id ? {...entityCreated} : p)), 'PUT', entity);
       */
  }

  function addOrUpdateEntity(entity) {
    if (entity.id != "") {
      //updateEntity(entity);
    } else {
      delete entity.id;

      addEntity(entity);
    }
  }

  function deleteById(id) {
    /*fetchData(`${APIURL}/${id}`, ()=>{}, 'DELETE');
  
      setEntities([...entities.filter(p => p.id != id)]);
      */
  }

  async function getEntities() {
    try {
      const allEntities = getAllEntities();

      allEntities.then((parsed)=>{
        const allEntitiesCreatedParsed = parsed;
        console.log(allEntitiesCreatedParsed);

      setEntities(allEntitiesCreatedParsed);

      })
      
    } catch (err) {
      console.log(
        "Some error happened getting all entities. The error: " + err
      );
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      getEntities();
    }
  }, [isLoggedIn]);

  return (
    <>
      <div>
        <h1>Entities</h1>

        {loggedInUser.roles.includes("admin") ? (
          <EntitiesForm
            blankEntity={blankEntity}
            entityToEdit={entityToEdit}
            addOrUpdateEntity={addOrUpdateEntity}
          />
        ) : (
          <></>
        )}
        <b></b>
        <p>All entities: </p>
        <EntitiesList
          entities={entities}
          deleteById={deleteById}
          editEntity={editEntity}
        />
      </div>
    </>
  );
}
