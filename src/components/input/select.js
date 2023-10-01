function Select({index, name, items, itemSelected, setItemSelected }) {
  //

  function handleSelect(e) {
    const { value } = e.target;
    setItemSelected((prevItemSelected) => {
      const store = [...prevItemSelected];
      const fields = { ...store[index], [name]: value };
      store[index] = fields;
      return store;
    });
  }

  //
  return (
    <>
      <select
        name={name}
        value={itemSelected?.[name]}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        {items?.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
