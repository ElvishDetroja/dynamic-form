import { useState, useEffect } from "react";
import Text from "./../components/input/text";
import Select from "./../components/input/select";

function Owner() {
  const [main, setMain] = useState([]);
  const [final, setFinal] = useState();

  const typeOptions = ["string", "option"];

  function handleAddMore() {
    setMain([...main, { key: "", type: "", value: "" }]);
  }

  function handleDelete(index) {
    setMain((prevMain) => {
      const updatedMain = [...prevMain];
      updatedMain.splice(index, 1);
      return updatedMain;
    });
  }

  // function handleSelect(e) {
  //   const { value } = e.target;
  //   setItemSelected((prevItemSelected) => {
  //     const store = [...prevItemSelected];
  //     const fields = { ...store[index], [name]: value };
  //     store[index] = fields;
  //     return store;
  //   });
  // }

  function handleOnChange(e, index) {
    const { name, value } = e.target;
    setFinal((prevItemSelected) => {
      const store = [...prevItemSelected];
      const fields = { ...store[index], [name]: value };
      store[index] = fields;
      return store;
    });
  }

  useEffect(() => {
    let console = {};
    main.forEach((ma) => {
      if (ma.type == "option") {
        const val = ma.value.split(", ");
        return (console = { ...console, [ma.key]: val });
      }
      console = { ...console, [ma.key]: ma.value };
    });
    setFinal(console);
  }, [main]);

  console.log(final);

  return (
    <>
      {main.map((ma, index) => (
        <div key={index}>
          <Text
            index={index}
            name="key"
            itemSelected={main}
            setItemSelected={setMain}
            handleOnChange={handleOnChange}
          />
          <Select
            index={index}
            items={typeOptions}
            name="type"
            itemSelected={main}
            setItemSelected={setMain}
            handleOnChange={handleOnChange}
          />
          <Text
            index={index}
            name="value"
            itemSelected={main}
            setItemSelected={setMain}
            handleOnChange={handleOnChange}
          />
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={handleAddMore}>Add Field</button>
    </>
  );
}

export default Owner;
