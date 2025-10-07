import React, { useState } from "react";
import {
  ArrowLeftIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  PillIcon,
  ChevronRightIcon,
  XIcon,
  AlertTriangleIcon,
  ChevronDownIcon,
  FilterIcon,
  ChevronLeftIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PatientHighPriorityNotification from "../../components/patient/PatientHighPriorityNotification";
import PatientGeneralNotification from "../../components/patient/PatientGeneralNotification";

// Mock data for notifications
const notificationsData = [
  {
    id: "notif-1",
    type: "appointment",
    title: "Upcoming Appointment",
    description: "Dr. Sarah Johnson - Cardiology",
    date: "2023-05-28",
    time: "10:30 AM",
    location: "Saveetha Medical College, Cardiology Department, Room 305",
    isRead: false,
    priority: "high",
  },
  {
    id: "notif-2",
    type: "follow-up",
    title: "Regular Follow-up Reminder",
    description: "Blood Pressure Check",
    date: "2023-06-15",
    time: "09:00 AM",
    doctorName: "Dr. Robert Miller",
    department: "Internal Medicine",
    notes: "Please bring your blood pressure log for the past month",
    isRead: false,
    priority: "medium",
  },
  {
    id: "notif-3",
    type: "medication",
    title: "Medication Reminder",
    description: "Lisinopril 10mg",
    instructions: "Take 1 tablet daily in the morning",
    daysLeft: 5,
    refillStatus: "Refill needed soon",
    isRead: false,
    priority: "high",
  },
  {
    id: "notif-4",
    type: "medication",
    title: "Medication Reminder",
    description: "Atorvastatin 20mg",
    instructions: "Take 1 tablet daily at bedtime",
    daysLeft: 12,
    refillStatus: "Sufficient supply",
    isRead: true,
    priority: "medium",
  },
  {
    id: "notif-5",
    type: "follow-up",
    title: "Regular Follow-up Reminder",
    description: "Annual Physical Examination",
    date: "2023-07-10",
    time: "11:00 AM",
    doctorName: "Dr. Emily Rodriguez",
    department: "Family Medicine",
    notes: "Fasting required for blood work (8 hours before appointment)",
    isRead: true,
    priority: "medium",
  },
  {
    id: "notif-6",
    type: "appointment",
    title: "Appointment Confirmation",
    description: "Dr. James Carter - Orthopedics",
    date: "2023-06-05",
    time: "02:15 PM",
    location: "Saveetha Medical College, Orthopedics Department, Room 210",
    isRead: true,
    priority: "medium",
  },
  {
    id: "notif-7",
    type: "medication",
    title: "Medication Reminder",
    description: "Metformin 500mg",
    instructions: "Take 1 tablet twice daily with meals",
    daysLeft: 3,
    refillStatus: "Refill needed soon",
    isRead: false,
    priority: "high",
  },
];

export function NotificationsScreen({ onNavigate }) {
  const [notifications, setNotifications] = useState(notificationsData);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filterOptions = [
    { id: "all", label: "All Notifications", icon: null },
    { id: "unread", label: "Unread", icon: null },
    {
      id: "appointment",
      label: "Appointments",
      icon: <CalendarIcon size={14} className="mr-1" />,
    },
    {
      id: "follow-up",
      label: "Follow-ups",
      icon: <ClockIcon size={14} className="mr-1" />,
    },
    {
      id: "medication",
      label: "Medications",
      icon: <PillIcon size={14} className="mr-1" />,
    },
  ];

  const getCurrentFilterLabel = () =>
    filterOptions.find((option) => option.id === activeFilter)?.label ||
    "All Notifications";

  const filteredNotifications = notifications.filter((notification) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !notification.isRead;
    return notification.type === activeFilter;
  });

  const groupedNotifications = {
    high: filteredNotifications.filter((n) => n.priority === "high"),
    medium: filteredNotifications.filter((n) => n.priority === "medium"),
    low: filteredNotifications.filter((n) => n.priority === "low"),
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleViewDetails = (notification) => {
    markAsRead(notification.id);
    setSelectedNotification(notification);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedNotification(null);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId);
    setDropdownOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button
            className={`mr-2 w-8 h-8 flex items-center justify-center rounded-full       `}
            onClick={() => navigate(-1)}
            style={{
              background: "linear-gradient(to bottom, #f0f4fa, #d5dde8)",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            <ChevronLeftIcon size={18} className="text-blue-700" />
          </button>
          <h2 className="text-xl text-blue-900 font-medium">Notifications</h2>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm overflow-visible mb-5">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-medium text-gray-700">Notifications</h2>
            <button
              onClick={markAllAsRead}
              className="text-sm text-blue-600 font-medium hover:text-blue-800"
            >
              Mark all as read
            </button>
          </div>

          <div className="p-3 bg-gray-50 relative">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <FilterIcon size={14} className="mr-2 text-gray-500" />
                  <span>{getCurrentFilterLabel()}</span>
                </div>
                <ChevronDownIcon
                  size={16}
                  className={`text-gray-500 transition-transform ${
                    dropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center ${
                        activeFilter === option.id
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleFilterSelect(option.id)}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col gap-y-5">
          <PatientHighPriorityNotification
            data={groupedNotifications.high}
            formatDate={formatDate}
            getNotificationIcon={getNotificationIcon}
          ></PatientHighPriorityNotification>

          <PatientGeneralNotification
            data={groupedNotifications.medium}
            formatDate={formatDate}
            getNotificationIcon={getNotificationIcon}
          ></PatientGeneralNotification>
        </div>
      </div>

      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default NotificationsScreen;
