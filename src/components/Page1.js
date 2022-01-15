import FormComponent from "./FormComponent";
import { useState } from "react";

const Page1 = () => {
  const [data, setData] = useState('test');
  const UpdateFromChild = (dataFromChild) => {
    setData(dataFromChild)
  }
  return (
    <div>
      <FormComponent parentCallback={UpdateFromChild} />
      <p>{data}</p>
    </div>
  ) 
}

export default Page1;