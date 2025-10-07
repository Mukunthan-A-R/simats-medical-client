import {
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  PillIcon,
} from "lucide-react";
import React from "react";

const PatientGeneralNotification = ({
  data: groupedNotifications,
  formatDate,
  getNotificationIcon,
}) => {
  const getNotificationBgColor = (notification) =>
    !notification.isRead ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-50";

  return (
    <div>
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-700">Other Notifications</p>
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
                    ? "bg-blue-100"
                    : notification.type === "follow-up"
                    ? "bg-purple-100"
                    : "bg-green-100"
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
              <ChevronRightIcon size={18} className="text-gray-400 ml-4" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientGeneralNotification;
