import React from "react";

function Text({ index, name, itemSelected, setItemSelected }) {
  //
  function handleValue(e) {
    const { value } = e.target;
    setItemSelected((prevItemSelected) => {
      const store = [...prevItemSelected];
      const fields = { ...store[index], [name]: value };
      store[index] = fields;
      return store;
    });
  }

  return (
    <input
      type="text"
      name={name}
      value={itemSelected?.[index]?.[name] || ""}
      onChange={handleValue}
    />
  );
}

export default Text;
