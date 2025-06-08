import React, { useState } from "react";

function Form({ updateHandler, data, addExperienceTemplate }) {
  return (
    <form action="" className="text-sm">
      <div className="flex flex-col gap-2 mx-2">
        <h2>General Information</h2>
        <label htmlFor="name" className="flex flex-1 flex-col text-start">
          Name
          <input
            type="text"
            id="name"
            value={data.name}
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-1 flex-col text-start">
          Email :
          <input
            type="email"
            id="email"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="phone" className="flex flex-1 flex-col text-start">
          Phone :
          <input
            type="tel"
            id="phone"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="location" className="flex flex-1 flex-col text-start">
          Location :
          <input
            type="text"
            id="location"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="location" className="flex flex-1 flex-col text-start">
          Contribution :
          <textarea
            value={data.contribution}
            type="text"
            placeholder="separated by commas"
            id="contribution"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => addExperienceTemplate(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="summary" className="flex flex-1 flex-col text-start">
          Summary :
          <textarea
            type="textarea"
            id="summary"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 mx-2">
        <h2>Educational Information</h2>
        <label htmlFor="school" className="flex flex-1 flex-col text-start">
          School
          <input
            type="text"
            id="school"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white "
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="titleStudy" className="flex flex-1 flex-col text-start">
          Title of Study
          <input
            type="text"
            id="titleStudy"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="dateStudy" className="flex flex-1 flex-col text-start">
          Date Study
          <input
            type="date"
            id="dateStudy"
            className="flex flex-1  border-none rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 mx-2">
        <h2>Educational Information</h2>
        <label
          htmlFor="companyName"
          className="flex flex-1 flex-col text-start"
        >
          Company Name
          <input
            type="text"
            id="companyName"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="position" className="flex flex-1 flex-col text-start">
          Position
          <input
            type="text"
            id="position"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
        <label htmlFor="duration" className="flex flex-1 flex-col text-start">
          Duration
          <input
            type="number"
            id="duration"
            className="flex flex-1 border-none border-1 rounded-sm  p-1 bg-white"
            onChange={(e) => updateHandler(e.target.id, e.target.value)}
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="text-white border-red border-1 px-8 py-2 m-4"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
