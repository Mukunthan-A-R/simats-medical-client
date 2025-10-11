import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import StudentCategoryTab from "./StudentCategoryTab";

const StudentTabScoreCategories = () => {
  const category = { percentage: 87 };

  return (
    <div className="px-4 sm:px-10 flex flex-col gap-2">
      <StudentCategoryTab name="Internal Medicine" />
      <StudentCategoryTab name="Pediatrics" />
      <StudentCategoryTab name="Surgery" />
      <StudentCategoryTab name="OB/GYN" />
      <StudentCategoryTab name="Psychiatry" />
      <StudentCategoryTab name="Emergency Medicine" />
    </div>
  );
};

export default StudentTabScoreCategories;
