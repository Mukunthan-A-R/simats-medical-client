import React from "react";
import { PencilIcon } from "lucide-react";
import { aquaButtonStyle, aquaGlossEffect } from "../utils/constants";

// pulled-out style objects for readability
const headerContainerStyle = {
  backgroundColor: "white",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1), 0 0 1px rgba(0,0,0,0.25)",
  border: "1px solid rgba(0,0,0,0.1)",
};

const headerGradientStyle = {
  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
  boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.3)",
};

const glossyOverlayStyle = {
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 51%, rgba(0,0,0,0.05) 100%)",
  borderTopLeftRadius: "0.75rem",
  borderTopRightRadius: "0.75rem",
};

const profileImageBorderStyle = {
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.3)",
  border: "3px solid white",
  borderRadius: "0.75rem",
};

const editButtonStyle = {
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
  boxShadow: "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
  border: "1px solid rgba(0,0,0,0.15)",
};

export default function StudentProfileHeader({
  userDataVal,
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4kHDPwdUsng85LawKD6dQ78XErUyhu3PDu1XLAryK7jrw2mulwXmUwG3GSVr8z7RiK0&usqp=CAU",
  onEditClick,
}) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-md mb-6"
      style={headerContainerStyle}
    >
      {/* Gradient header */}
      <div className="relative h-26" style={headerGradientStyle}>
        {/* Aqua glossy effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={glossyOverlayStyle}
        />

        {/* Profile image */}
        <div className="absolute -bottom-16 left-4 w-28 sm:w-32 h-30 sm:h-32 rounded-xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0  pointer-events-none"
            style={profileImageBorderStyle}
          />
          <img
            src={imgSrc}
            alt={userDataVal.name}
            className="h-30 sm:h-full w-full object-cover"
          />
        </div>

        {/* Edit button */}
        <button
          onClick={onEditClick}
          className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={editButtonStyle}
          aria-label="Edit profile"
        >
          <PencilIcon size={14} className="text-blue-600" />
        </button>
      </div>

      {/* Student info */}
      <div className="pt-20 pb-4 px-4">
        <h2
          className="text-xl font-semibold text-gray-800 truncate"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.5)" }}
        >
          {userDataVal?.name || "User"}
        </h2>
        <p className="text-gray-500 text-sm">{`Student ID: ${userDataVal?.student_id}`}</p>
      </div>
    </div>
  );
}
