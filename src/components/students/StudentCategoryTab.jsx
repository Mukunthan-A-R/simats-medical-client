import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

const StudentCategoryTab = ({ name }) => {
  const category = { percentage: 87 };
  const [toggleCategory, setToggleCategory] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between mb-1.5 cursor-pointer"
        onClick={() => setToggleCategory(!toggleCategory)}
      >
        <div className="flex items-center">
          <ChevronDownIcon
            size={16}
            className={`mr-1 text-blue-600 transition-transform 
                 ${toggleCategory == 1 ? "rotate-180" : ""}
            `}
          />
          <p className="text-xs font-medium text-gray-700">{name}</p>
        </div>
        <p className="text-xs font-medium text-gray-700">28 / 35</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mb-2">
        <div
          className="h-2.5 rounded-full"
          style={{
            width: `${category.percentage}%`,
            background:
              category.percentage >= 100
                ? "linear-gradient(to right, #10b981, #059669)"
                : "linear-gradient(to right, #4d90fe, #0066cc)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        ></div>
      </div>
      {toggleCategory && <p>hi nigga</p>}
    </div>
  );
};

export default StudentCategoryTab;
