import { useState } from "react";
import Text from "./../components/input/text";

function Customer() {
  const [info, setInfo] = useState();
  console.log(info);
  return (
    <>
      <p>
        title :
        <Text name="title" itemSelected={info} setItemSelected={setInfo} />
      </p>
      <p>
        details :
        <Text name="details" itemSelected={info} setItemSelected={setInfo} />
      </p>
      <p>
        color :
        <Text name="color" itemSelected={info} setItemSelected={setInfo} array />
      </p>
      <p>
      material :
        <Text name="material" itemSelected={info} setItemSelected={setInfo} array />
      </p>
    </>
  );
}

export default Customer;