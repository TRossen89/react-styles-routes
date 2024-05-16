import React, { useEffect, useState } from "react";

const EntitiesForm = ({ addOrUpdateEntity, blankEntity, entityToEdit }) => {
  
  const [entity, setEntity] = useState({ ...entityToEdit });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;

    setEntity({ ...entity, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({...entity});

    addOrUpdateEntity({ ...entity });
    setEntity(blankEntity)
  }

  useEffect(() => {
    setEntity({ ...entityToEdit });
  }, [entityToEdit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input
          id="id"
          readOnly
          placeholder="id"
          value={entity.id}
          onChange={handleChange}
        />

        <label htmlFor="templateField1">TemplateField1</label>
        <input
          id="templateField1"
          type="text"
          placeholder="templateField1"
          value={entity.templateField1}
          onChange={handleChange}
        />

        <label htmlFor="templateField2">TemplateField2</label>
        <input
          id="templateField2"
          type="text"
          placeholder="templateField2"
          value={entity.templateField2}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
        <button type="button" onClick={() => setEntity(blankEntity)}>
          {" "}
          Reset{" "}
        </button>
      </form>
    </div>
  );
};

export default EntitiesForm;
