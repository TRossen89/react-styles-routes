import React from "react";
import { useState, useEffect } from "react";
import EntitiesForm from "./EntitiesForm";
import EntitiesList from "./EntitiesList";
import {
  createEntity,
  deleteEntity,
  getAllEntities,
  updateEntity
} from "../services/apiFacade";




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

        setEntities((previousEntities) => [
          ...previousEntities,
          entityCreatedParsed,
        ]);
      });
    } catch (error) {
      // Handle any errors that occur during the fetch or result handling
      console.error("Error:", error);
    }
  }

  function updateEntityFrontend(entity) {

    const entityWithdtoTWOSet = {"id": entity.id, "templateField1": entity.templateField1, "templateField2": entity.templateField2, "dtoTWOSet": []};

    try {
      const entityUpdated = updateEntity(entityWithdtoTWOSet, entityWithdtoTWOSet.id);

      entityUpdated.then((parsed) => {
        
        const entityUpdatedParsed = parsed;

        console.log("Entity updated with fetch: " + entityUpdatedParsed);

        delete entityUpdatedParsed.dtoTWOSet;

        setEntities(entities.map((p) => p.id === entityUpdatedParsed.id ? {...entityUpdatedParsed} : p))

      
      });
    } catch (error) {
      // Handle any errors that occur during the fetch or result handling
      console.error("Error:", error);
    }

  }

  function addOrUpdateEntity(entity) {
    if (entity.id != "") {
      updateEntityFrontend(entity);
    } else {
      delete entity.id;

      addEntity(entity);
    }
  }

  function deleteById(id) {
    deleteEntity(id)
      .then(() => {
        setEntities([...entities.filter((p) => p.id != id)]);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch or result handling
        console.error("Error:", error);
      });
  }

  async function getEntities() {
    try {
      const allEntities = getAllEntities();

      allEntities.then((parsed) => {
        const allEntitiesCreatedParsed = parsed;
        console.log(allEntitiesCreatedParsed);

        setEntities(allEntitiesCreatedParsed);
      });
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
