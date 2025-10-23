import React, { useState } from "react";
import {
  ArrowLeftIcon,
  BellIcon,
  ChevronRightIcon,
  XIcon,
  AlertTriangleIcon,
  UserIcon,
  ClipboardListIcon,
  GraduationCapIcon,
  FlaskConicalIcon,
  StethoscopeIcon,
  AlertCircleIcon,
  FilterIcon,
  ChevronDownIcon,
} from "lucide-react";
import { StudentNotificationPopup } from "../../components/students/StudentNotificationPopup";
import { StudentFilterDropdown } from "../../components/students/StudentFilterDropdown";
import { aquaButtonStyle, aquaGlossEffect } from "../../utils/constants";

// ========================
// Individual Notification Item Component
// ========================
const StudentNotificationItem = ({
  notification,
  handleViewDetails,
  aquaButtonStyle,
  aquaGlossEffect,
  getNotificationIcon,
}) => (
  <li
    key={notification.id}
    className="p-4 transition-colors duration-150 cursor-pointer"
    onClick={() => handleViewDetails(notification)}
    style={{
      background: notification.isRead
        ? "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(250,250,250,0.7))"
        : "linear-gradient(to bottom, rgba(240,246,255,0.8), rgba(230,240,255,0.8))",
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
              : notification.type === "medcall"
              ? "linear-gradient(to bottom, #ff9999, #ff6666)"
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
          {notification.date} at {notification.time}
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

// ========================
// Main Notifications Screen
// ========================
export function StudentNotificationsScreen({ onNavigate }) {
  // ========================
  // Notifications Data inside component state
  // ========================
  const [notifications, setNotifications] = useState([
    {
      id: "notif-1",
      type: "medcall",
      title: "MedCall Help Needed",
      description: "Emergency in Ward 3B - Room 305",
      date: "2023-05-28",
      time: "10:30 AM",
      isRead: false,
      priority: "critical",
    },
    {
      id: "notif-2",
      type: "rounds",
      title: "Rounds Starting",
      description: "General Medicine Department",
      date: "2023-05-28",
      time: "08:00 AM",
      isRead: false,
      priority: "critical",
    },
    {
      id: "notif-3",
      type: "patient",
      title: "Patient Assigned",
      description: "New Patient: John Doe",
      date: "2023-05-27",
      time: "14:15 PM",
      isRead: false,
      priority: "high",
    },
    {
      id: "notif-4",
      type: "patient",
      title: "Patient Update",
      description: "Vital Signs Updated",
      date: "2023-05-27",
      time: "11:30 AM",
      isRead: true,
      priority: "medium",
    },
    {
      id: "notif-5",
      type: "lab",
      title: "Lab Results Available",
      description: "Blood Work Results",
      date: "2023-05-26",
      time: "16:45 PM",
      isRead: false,
      priority: "high",
    },
    {
      id: "notif-6",
      type: "rounds",
      title: "Case Presentation Scheduled",
      description: "Present Patient: Maria Garcia",
      date: "2023-05-29",
      time: "09:30 AM",
      isRead: true,
      priority: "high",
    },
    {
      id: "notif-7",
      type: "academic",
      title: "Clinical Skills Assessment",
      description: "Upcoming Evaluation",
      date: "2023-06-02",
      time: "13:00 PM",
      isRead: true,
      priority: "medium",
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filterOptions = [
    { id: "all", label: "All Notifications", icon: <BellIcon size={16} /> },
    { id: "medcall", label: "MedCall", icon: <StethoscopeIcon size={16} /> },
    { id: "patient", label: "Patient", icon: <UserIcon size={16} /> },
    { id: "lab", label: "Lab", icon: <FlaskConicalIcon size={16} /> },
    {
      id: "academic",
      label: "Academic",
      icon: <GraduationCapIcon size={16} />,
    },
    { id: "rounds", label: "Rounds", icon: <ClipboardListIcon size={16} /> },
  ];

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId);
    setDropdownOpen(false);
  };

  const groupedNotifications = {
    critical: notifications.filter((n) => n.priority === "critical"),
    high: notifications.filter((n) => n.priority === "high"),
    medium: notifications.filter((n) => n.priority === "medium"),
    low: notifications.filter((n) => n.priority === "low"),
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "medcall":
        return <StethoscopeIcon size={16} className="text-red-600" />;
      case "rounds":
        return <ClipboardListIcon size={16} className="text-purple-600" />;
      case "patient":
        return <UserIcon size={16} className="text-blue-600" />;
      case "lab":
        return <FlaskConicalIcon size={16} className="text-green-600" />;
      case "academic":
        return <GraduationCapIcon size={16} className="text-yellow-600" />;
      default:
        return <BellIcon size={16} className="text-gray-600" />;
    }
  };

  const handleViewDetails = (notification) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, isRead: true } : n))
    );
    setSelectedNotification(notification);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => setDetailsModalOpen(false);

  // Helper function or variable
  const getPriorityBg = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800"; // Tailwind class for light red
      case "high":
        return "bg-yellow-100 text-yellow-800"; // Tailwind class for light yellow
      default:
        return "bg-gray-100"; // Light gray for medium/low
    }
  };

  // ========================
  // Render JSX
  // ========================
  return (
    <div className="px-4 py-5 max-w-6xl mx-auto w-full">
      <h1 className="text-xl font-semibold mb-4">Student Notifications</h1>

      <StudentFilterDropdown
        filterOptions={filterOptions}
        activeFilter={activeFilter}
        toggleDropdown={() => setDropdownOpen((prev) => !prev)}
        dropdownOpen={dropdownOpen}
        handleFilterSelect={handleFilterSelect}
        aquaButtonStyle={aquaButtonStyle}
        aquaGlossEffect={aquaGlossEffect}
      />

      {/* Notification Groups */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-white rounded-2xl"
          style={{ height: "17.5rem" }}
        >
          {["critical"].map((priority) => {
            const notifications = groupedNotifications?.[priority] || [];
            return (
              notifications.length > 0 && (
                <div
                  key={priority}
                  className="mb-6 rounded-xl overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  <h2
                    className={`text-sm text-gray-800 font-medium py-2 px-4 ${getPriorityBg(
                      priority
                    )}`}
                  >
                    {priority === "critical"
                      ? "Critical Alerts"
                      : priority === "high"
                      ? "High Priority"
                      : "Other Notifications"}
                  </h2>
                  <ul className="divide-y divide-gray-100">
                    {notifications.map((notification) => (
                      <StudentNotificationItem
                        key={notification.id}
                        notification={notification}
                        handleViewDetails={handleViewDetails}
                        aquaButtonStyle={aquaButtonStyle}
                        aquaGlossEffect={aquaGlossEffect}
                        getNotificationIcon={getNotificationIcon}
                      />
                    ))}
                  </ul>
                </div>
              )
            );
          })}
        </div>

        <div
          className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar"
          style={{ height: "17.5rem" }}
        >
          {["high"].map(
            (priority) =>
              groupedNotifications[priority].length > 0 && (
                <div
                  key={priority}
                  className="mb-6 rounded-xl overflow-hidden  "
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  <h2
                    className={`text-sm text-gray-800 font-medium py-2 px-4 ${getPriorityBg(
                      priority
                    )}`}
                  >
                    {priority === "critical"
                      ? "Critical Alerts"
                      : priority === "high"
                      ? "High Priority"
                      : "Other Notifications"}
                  </h2>
                  <ul className="divide-y divide-gray-100">
                    {groupedNotifications[priority].map((notification) => (
                      <StudentNotificationItem
                        key={notification.id}
                        notification={notification}
                        handleViewDetails={handleViewDetails}
                        aquaButtonStyle={aquaButtonStyle}
                        aquaGlossEffect={aquaGlossEffect}
                        getNotificationIcon={getNotificationIcon}
                      />
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>

      <div
        className="w-[calc(100%-7px)] sm:w-[calc(50%-7px)] flex-1 overflow-y-auto overflow-x-hidden pr-1 custom-scrollbar rounded-2xl"
        style={{ height: "17.5rem" }}
      >
        {["medium"].map(
          (priority) =>
            groupedNotifications[priority].length > 0 && (
              <div
                key={priority}
                className="mb-3 rounded-xl overflow-hidden "
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                <h2
                  className={`text-sm text-gray-800 font-medium py-2 px-4 ${getPriorityBg(
                    priority
                  )}`}
                >
                  {priority === "critical"
                    ? "Critical Alerts"
                    : priority === "high"
                    ? "High Priority"
                    : "Other Notifications"}
                </h2>
                <ul className="divide-y divide-gray-100">
                  {groupedNotifications[priority].map((notification) => (
                    <StudentNotificationItem
                      key={notification.id}
                      notification={notification}
                      handleViewDetails={handleViewDetails}
                      aquaButtonStyle={aquaButtonStyle}
                      aquaGlossEffect={aquaGlossEffect}
                      getNotificationIcon={getNotificationIcon}
                    />
                  ))}
                </ul>
              </div>
            )
        )}
      </div>

      {detailsModalOpen && selectedNotification && (
        <StudentNotificationPopup
          notification={selectedNotification}
          onClose={closeDetailsModal}
        />
      )}
    </div>
  );
}
