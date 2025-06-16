import React, { useState } from "react";
import Form from "../Form/Form";
function Sidenav({ updateHandler, data, addExperienceTemplate }) {
  const [isShow, setIsShow] = useState(false);

  const showSidebar = () => {
    setIsShow((prev) => setIsShow(!prev));
  };

  return (
    <div
      className={`${
        isShow ? "w-14" : "w-1/4"
      } bg-green-300 ease-in-out duration-100 h-screen`}
    >
      <button onClick={showSidebar}> {isShow ? "Show" : "Hide"}</button>
      <Form
        updateHandler={updateHandler}
        data={data}
        addExperienceTemplate={addExperienceTemplate}
      />
    </div>
  );
}

export default Sidenav;
