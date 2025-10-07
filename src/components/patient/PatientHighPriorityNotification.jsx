import {
  AlertTriangleIcon,
  BellIcon,
  CalendarIcon,
  ChevronRightIcon,
  ClockIcon,
  PillIcon,
} from "lucide-react";
import React from "react";

const PatientHighPriorityNotification = ({ data: groupedNotifications }) => {
  const getNotificationBgColor = (notification) =>
    !notification.isRead ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-50";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "appointment":
        return <CalendarIcon size={16} className="text-blue-600" />;
      case "follow-up":
        return <ClockIcon size={16} className="text-purple-600" />;
      case "medication":
        return <PillIcon size={16} className="text-green-600" />;
      default:
        return <BellIcon size={16} className="text-gray-600" />;
    }
  };

  return (
    <div>
      <div className="px-4 py-2 bg-red-50 border-b border-red-100">
        <p className="text-sm font-medium text-red-800 flex items-center">
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

export default PatientHighPriorityNotification;
