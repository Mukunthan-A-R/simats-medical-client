import React, { useState } from "react";
import SecondaryVitalSelect from "../dropDown/SecondaryVitalSelect";

const NewSecondaryVitalsForm = ({ assignmentId }) => {
  return (
    <div>
      <SecondaryVitalSelect
        onChange={(vital) => console.log("Selected vital:", vital)}
      />

      <p>HI there</p>
    </div>
  );
};

export default NewSecondaryVitalsForm;
