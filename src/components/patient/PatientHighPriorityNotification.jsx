import {
  AlertTriangleIcon,
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  PillIcon,
} from "lucide-react";
import React from "react";
import { formatDate } from "../../utils/constants";

const PatientHighPriorityNotification = ({
  data: groupedNotifications,
  getNotificationIcon,
}) => {
  const getNotificationBgColor = (notification) =>
    !notification.isRead ? "bg-blue-100 hover:bg-blue-200" : "hover:bg-gray-50";

  return (
    <div
      className="overflow-y-auto rounded-xl custom-scrollbar-hide"
      style={{ maxHeight: "20rem" }}
    >
      <div className="px-4 py-4 bg-red-200 border-b border-red-100">
        <p className="text-sm font-medium text-red-900 flex items-center">
          <AlertTriangleIcon size={14} className="mr-2" />
          High Priority
        </p>
      </div>

      <ul className="divide-y divide-gray-100">
        {groupedNotifications.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 transition-colors duration-150 cursor-pointer ${getNotificationBgColor(
              notification
            )}`}
            onClick={() => handleViewDetails(notification)}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-10 w-10 rounded-full ${
                  notification.type === "appointment"
                    ? "bg-blue-300"
                    : notification.type === "follow-up"
                    ? "bg-purple-300"
                    : "bg-green-300"
                } flex items-center justify-center mr-4`}
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
                {notification.type === "appointment" ||
                notification.type === "follow-up" ? (
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(notification.date)} at {notification.time}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.daysLeft} days supply left •{" "}
                    {notification.refillStatus}
                  </p>
                )}
              </div>

              <ChevronRightIcon size={18} className="text-gray-600 ml-4" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientHighPriorityNotification;
