import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { formatDate } from "../../utils/constants";

export function StudentNotificationCard({
  notification,
  handleViewDetails,
  getNotificationIcon,
  aquaButtonStyle,
  aquaGlossEffect,
  getNotificationBgColor,
}) {
  const backgroundGradient = notification.isRead
    ? "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(250,250,250,0.7))"
    : notification.type === "medcall"
    ? "linear-gradient(to bottom, rgba(255,240,240,0.8), rgba(255,230,230,0.8))"
    : "linear-gradient(to bottom, rgba(240,246,255,0.8), rgba(230,240,255,0.8))";

  return (
    <li
      key={notification.id}
      className={`p-4 transition-colors duration-150 cursor-pointer ${getNotificationBgColor(
        notification
      )}`}
      onClick={() => handleViewDetails(notification)}
      style={{
        background: backgroundGradient,
        boxShadow: !notification.isRead
          ? "inset 0 0 0 1px rgba(0,0,0,0.05)"
          : "none",
      }}
    >
      <div className="flex items-center">
        <div
          className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background:
              notification.type === "patient"
                ? "linear-gradient(to bottom, #99c2ff, #66a3ff)"
                : notification.type === "lab"
                ? "linear-gradient(to bottom, #99e6b3, #66cc80)"
                : notification.type === "academic"
                ? "linear-gradient(to bottom, #ffdb99, #ffcc66)"
                : "linear-gradient(to bottom, #d6b9ff, #b388ff)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {getNotificationIcon(notification.type)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-900 truncate">
              {notification.title}
            </p>
            {!notification.isRead && (
              <span className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></span>
            )}
          </div>

          <p className="text-sm text-gray-500 truncate">
            {notification.description}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {formatDate(notification.date)} at {notification.time}
          </p>
        </div>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: "linear-gradient(to bottom, #f8f9fa, #e2e6ea)",
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <ChevronRightIcon size={16} className="text-blue-600" />
        </div>
      </div>
    </li>
  );
}
