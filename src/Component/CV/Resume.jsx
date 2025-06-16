import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
function Resume({ data }) {
  const [hover, setHover] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const isButtonHover = () => {
    setButtonHover(true);
  };
  const isNotButtonHover = () => {
    setButtonHover(false);
  };
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`${
          hover || buttonHover ? "blur-xs" : "blur-none"
        } w-5/12 h-11/12  shadow-2xl px-10 py-5 select-none`}
      >
        <h1 className="font-bold  text-2xl">
          {data.name.length > 0 ? data.name : "John Doe"}
        </h1>
        <ol className="flex justify-around text-sm items-center">
          <li>
            {data.email.length > 0
              ? `@${data.email}`
              : "@johndoeprofessional@gmail.com"}
          </li>
          <li>
            {data.phone.length > 0 ? `(+63) ${data.phone}` : "(+63) 1234567890"}
          </li>
          <li>
            {data.location.length > 0 ? data.location : "Burges, New York USA"}
          </li>
        </ol>
        <div className="place-self-center w-full border-t-1 border-black"></div>
        <p className="text-justify text-xs mt-3 break-all">
          {data.summary.length > 0
            ? data.summary
            : "Aspiring Software Developer with hands-on experience in full-stack web development, database management, and user interface design using React and Tailwind CSS. Skilled in integrating authentication, dynamic content, and scalable features. Eager to learn and contribute to innovative development teams."}
        </p>
        <h1 className="font-bold">Personal Experience</h1>
        <div className="place-self-center w-full border-t-1 border-black"></div>
        <div>
          <h1 className="text-start text-xs">
            {data.expLocation?.length > 0
              ? data.expLocation
              : "Burges, New York USA"}
          </h1>
          <div className="flex justify-between">
            <p>
              {data.position.length > 0 ? data.position : "Web Developer"} at{" "}
              {data.companyName.length > 0 ? data.companyName : "Meta"}
            </p>
            <p className="text-xs">
              {data.start.length > 0 ? data.start : "2022-04-16"} -
              {data.end.length > 0 ? data.end : "2023-12-12"}
            </p>
          </div>
          <ol className="flex flex-col">
            {data.contribution[0]?.length !== 0 &&
            data.contribution.length >= 1 ? (
              <>
                {data.contribution.map((contribute, index) => (
                  <li
                    className="list-disc text-xs text-justify break-all "
                    key={index}
                  >
                    {contribute}
                  </li>
                ))}
              </>
            ) : (
              <>
                <li className="list-disc text-xs text-justify">
                  Implemented real-time user authentication using Firebase
                  Authentication for secure access control.
                </li>
                <li className="list-disc text-xs text-justify">
                  Developed a responsive dashboard interface using React and
                  Tailwind CSS to enhance user experience across devices.
                </li>
                <li className="list-disc text-xs text-justify">
                  Integrated Google Maps API to display user locations and
                  visualize scheduling data dynamically.
                </li>
              </>
            )}
          </ol>
        </div>
        <h1 className="font-bold">Educational Background</h1>
        <div className="place-self-center w-full border-t-1 border-black"></div>
        <div className="flex justify-between">
          <h2>
            {data.school.length > 0 ? data.school : "National University"} -{" "}
            {data.titleStudy.length > 0
              ? data.titleStudy
              : "BS, Computer Science"}
          </h2>
          <h2>
            {data.dateStudy.length > 0
              ? data.dateStudy
              : "August 2020 - May 2025"}
          </h2>
        </div>
      </div>

      {(hover || buttonHover) && (
        <div className="fixed">
          <DownloadButton
            isButtonHover={isButtonHover}
            buttonHover={buttonHover}
            isNotButtonHover={isNotButtonHover}
            data={data}
          />
        </div>
      )}
    </>
  );
}

export default Resume;
