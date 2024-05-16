import React from 'react'
import { getAllEntities } from '../services/apiFacade';
import { useState, useEffect } from 'react';
import EntitiesForm from './EntitiesForm';
import EntitiesList from './EntitiesList';




const blankEntity = { 
    "id": '',
    "templateField1": '', 
    "templateField2": '',
    
  
  }

export default function Entities({isLoggedIn}) {

    
    const [entities, setEntities] = useState([]);
    const [entityToEdit, setEntityToEdit] = useState({...blankEntity});
  
  
    function editEntity(entity){
      setEntityToEdit(entity)

    }
  
    function addEntity(entity){
  /*
      fetchData(APIURL, (entityCreated)=>{setEntities([...entities, entityCreated])}, 'POST', entity)
      */
    }
  
    function updateEntity(entity){
        /*
      
      fetchData(`${APIURL}/${entity.id}`, (entityCreated) => setEntities(entities.map((p) => p.id === entityCreated.id ? {...entityCreated} : p)), 'PUT', entity);
       */
    }
  
    function addOrUpdateEntity(person){/*
  
      if(person.id != ''){
        updateEntity(person);
      }
      
      else{
        delete person.id;
        addEntity(person);
      }
      */
  
    }
  
    
    function deleteById(id){
  
      /*fetchData(`${APIURL}/${id}`, ()=>{}, 'DELETE');
  
      setEntities([...entities.filter(p => p.id != id)]);
      */
    }

    async function getEntities() {

        try{
            
            const allEntities = await getAllEntities();
            console.log(allEntities);

            setEntities(allEntities);

        }catch (err) {
            console.log("Some error happened getting all entities. The error: " + err);
          }

        
    };
  

    useEffect(()=>{
      
        if(isLoggedIn){
            getEntities();

        }
      
  
      }, [isLoggedIn]);
  
  
    return (
      <>
      <div>
        <h1>Entities</h1>
        <EntitiesForm blankEntity = {blankEntity} entityToEdit={entityToEdit} addOrUpdateEntity={addOrUpdateEntity}/>
        <EntitiesList entities={entities} deleteById = {deleteById} editEntity={editEntity}/>
      </div>
        
      </>
    )
  }
  

