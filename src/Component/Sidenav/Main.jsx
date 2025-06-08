import Resume from "../CV/Resume";
function Main({ data }) {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center">
      <Resume data={data} />
    </div>
  );
}

export default Main;
