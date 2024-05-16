import React from "react";

export default function EntitiesList({ entities, deleteById, editEntity }) {
  return (
    <div>
      <h1> List of persons</h1>

      <table className="table table-striped">
        <thead>
          <tr key={crypto.randomUUID()}>
            <th>Id</th>
            <th>Field1</th>
            <th>Field2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {entities.map((entity) => (
            <tr key={crypto.randomUUID()}>
              <td>{entity.id}</td>
              <td>{entity.templateField1}</td>
              <td>{entity.templateField2}</td>
              <td>
                <button onClick={() => editEntity({ ...entity })}>Edit</button>
                <button onClick={() => deleteById(entity.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
