import React, { useState } from 'react';
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
  ChevronDownIcon
} from 'lucide-react';

// ========================
// Individual Notification Item Component
// ========================
const StudentNotificationItem = ({
  notification,
  handleViewDetails,
  aquaButtonStyle,
  aquaGlossEffect,
  getNotificationIcon
}) => (
  <li
    key={notification.id}
    className="p-4 transition-colors duration-150 cursor-pointer"
    onClick={() => handleViewDetails(notification)}
    style={{
      background: notification.isRead
        ? 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(250,250,250,0.7))'
        : 'linear-gradient(to bottom, rgba(240,246,255,0.8), rgba(230,240,255,0.8))',
      boxShadow: !notification.isRead ? 'inset 0 0 0 1px rgba(0,0,0,0.05)' : 'none'
    }}
  >
    <div className="flex items-center">
      <div
        className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${aquaButtonStyle} ${aquaGlossEffect}`}
        style={{
          background:
            notification.type === 'patient'
              ? 'linear-gradient(to bottom, #99c2ff, #66a3ff)'
              : notification.type === 'lab'
              ? 'linear-gradient(to bottom, #99e6b3, #66cc80)'
              : notification.type === 'academic'
              ? 'linear-gradient(to bottom, #ffdb99, #ffcc66)'
              : notification.type === 'medcall'
              ? 'linear-gradient(to bottom, #ff9999, #ff6666)'
              : 'linear-gradient(to bottom, #d6b9ff, #b388ff)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        {getNotificationIcon(notification.type)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <p className="text-sm font-medium text-gray-900 truncate">{notification.title}</p>
          {!notification.isRead && <span className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></span>}
        </div>
        <p className="text-sm text-gray-500 truncate">{notification.description}</p>
        <p className="text-xs text-gray-500 mt-1">{notification.date} at {notification.time}</p>
      </div>

      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
        style={{
          background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
          border: '1px solid rgba(0,0,0,0.1)'
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
      id: 'notif-1',
      type: 'medcall',
      title: 'MedCall Help Needed',
      description: 'Emergency in Ward 3B - Room 305',
      date: '2023-05-28',
      time: '10:30 AM',
      isRead: false,
      priority: 'critical'
    },
    {
      id: 'notif-2',
      type: 'rounds',
      title: 'Rounds Starting',
      description: 'General Medicine Department',
      date: '2023-05-28',
      time: '08:00 AM',
      isRead: false,
      priority: 'critical'
    },
    {
      id: 'notif-3',
      type: 'patient',
      title: 'Patient Assigned',
      description: 'New Patient: John Doe',
      date: '2023-05-27',
      time: '14:15 PM',
      isRead: false,
      priority: 'high'
    },
    {
      id: 'notif-4',
      type: 'patient',
      title: 'Patient Update',
      description: 'Vital Signs Updated',
      date: '2023-05-27',
      time: '11:30 AM',
      isRead: true,
      priority: 'medium'
    },
    {
      id: 'notif-5',
      type: 'lab',
      title: 'Lab Results Available',
      description: 'Blood Work Results',
      date: '2023-05-26',
      time: '16:45 PM',
      isRead: false,
      priority: 'high'
    },
    {
      id: 'notif-6',
      type: 'rounds',
      title: 'Case Presentation Scheduled',
      description: 'Present Patient: Maria Garcia',
      date: '2023-05-29',
      time: '09:30 AM',
      isRead: true,
      priority: 'high'
    },
    {
      id: 'notif-7',
      type: 'academic',
      title: 'Clinical Skills Assessment',
      description: 'Upcoming Evaluation',
      date: '2023-06-02',
      time: '13:00 PM',
      isRead: true,
      priority: 'medium'
    }
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const aquaButtonStyle = 'relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner';
  const aquaGlossEffect = 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/80 before:via-transparent before:to-transparent before:opacity-60';

  const groupedNotifications = {
    critical: notifications.filter(n => n.priority === 'critical'),
    high: notifications.filter(n => n.priority === 'high'),
    medium: notifications.filter(n => n.priority === 'medium'),
    low: notifications.filter(n => n.priority === 'low')
  };

  const getNotificationIcon = type => {
    switch (type) {
      case 'medcall': return <StethoscopeIcon size={16} className="text-red-600" />;
      case 'rounds': return <ClipboardListIcon size={16} className="text-purple-600" />;
      case 'patient': return <UserIcon size={16} className="text-blue-600" />;
      case 'lab': return <FlaskConicalIcon size={16} className="text-green-600" />;
      case 'academic': return <GraduationCapIcon size={16} className="text-yellow-600" />;
      default: return <BellIcon size={16} className="text-gray-600" />;
    }
  };

  const handleViewDetails = notification => {
    setNotifications(prev =>
      prev.map(n => n.id === notification.id ? { ...n, isRead: true } : n)
    );
    setSelectedNotification(notification);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => setDetailsModalOpen(false);

  // ========================
  // Render JSX
  // ========================
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Student Notifications</h1>

      {/* Notification Groups */}
      {['critical', 'high', 'medium', 'low'].map(priority => (
        groupedNotifications[priority].length > 0 && (
          <div key={priority} className="mb-6 rounded-xl overflow-hidden  " style={{ background: 'rgba(255,255,255,0.7)' }}>
            <h2 className="text-base text-gray-600 font-medium py-2 px-4">{priority === "critical" ? "Critical Alerts" : priority === "high" ? "High Priority"  : "Other Notifications" }</h2>
            <ul className="divide-y divide-gray-100">
              {groupedNotifications[priority].map(notification => (
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
      ))}

      {/* Notification Details Modal */}
      {detailsModalOpen && selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{selectedNotification.title}</h3>
              <button onClick={closeDetailsModal}><XIcon size={20} /></button>
            </div>
            <p>{selectedNotification.description}</p>
            <p className="mt-2 text-sm text-gray-500">{selectedNotification.date} at {selectedNotification.time}</p>
          </div>
        </div>
      )}
    </div>
  );
}
