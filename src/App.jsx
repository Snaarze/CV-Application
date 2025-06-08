import { useState } from "react";
import "./App.css";
import Sidenav from "./Component/Sidenav/Sidenav";
import Main from "./Component/Sidenav/Main";
import Footer from "./Component/Sidenav/Footer";
function App() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    school: "",
    contribution: "",
    titleStudy: "",
    dateStudy: "",
    companyName: "",
    position: "",
    duration: "",
  };
  const [data, setData] = useState(initialState);

  const updateHandler = (key, property) => {
    setData({ ...data, [key]: property });
  };

  const addExperienceTemplate = (key, property) => {
    const convertToBulletin = property.split(",");
    setData({ ...data, [key]: convertToBulletin });
  };
  console.log(data.contribution[0]?.length);
  console.log(data.contribution.length);
  return (
    <>
      <div className="flex w-min-screen h-min-screen">
        <Sidenav
          data={data}
          updateHandler={updateHandler}
          addExperienceTemplate={addExperienceTemplate}
        />
        <div className="flex flex-col w-full h-screen">
          <Main data={data} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
