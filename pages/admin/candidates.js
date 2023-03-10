import { BiUserPlus } from "react-icons/bi";

import Form from "../../components/form";
import { useState } from "react";

export default function Candidates() {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(!visible);
  };

  return (
    <section>
      <main className="py-5">
        <h1 className="text-center font-bold py-10">Candidates List</h1>

        <div className="container mx-auto flex justify-between py-5 border-bottom">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex bg-primary text-white px-4 py-2 border rounded"
            >
              Add Candidate <BiUserPlus size={23}></BiUserPlus>
            </button>
          </div>
        </div>
        {/*collapsible form*/}
        <div className="container mx-auto py-2">
          {" "}
          {visible ? <Form /> : <></>}
        </div>
      </main>
    </section>
  );
}
