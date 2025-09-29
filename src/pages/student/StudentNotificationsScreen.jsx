import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  BellIcon,
  ClockIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  XIcon,
  AlertTriangleIcon,
  UserIcon,
  FileTextIcon,
  ChevronDownIcon,
  FilterIcon,
  HospitalIcon,
  HeartPulseIcon,
  ClipboardListIcon,
  GraduationCapIcon,
  ActivityIcon,
  FlaskConicalIcon,
  StethoscopeIcon,
  AlertCircleIcon
} from 'lucide-react';

// Mock data for student notifications
const studentNotificationsData = [
  {
    id: 'notif-1',
    type: 'medcall',
    title: 'MedCall Help Needed',
    description: 'Emergency in Ward 3B - Room 305',
    date: '2023-05-28',
    time: '10:30 AM',
    location: 'Saveetha Medical College, Ward 3B, Room 305',
    isRead: false,
    priority: 'critical',
    department: 'Emergency Medicine',
    requestedBy: 'Dr. Sarah Johnson'
  },
  {
    id: 'notif-2',
    type: 'rounds',
    title: 'Rounds Starting',
    description: 'General Medicine Department',
    date: '2023-05-28',
    time: '08:00 AM',
    location: 'General Medicine Department, 2nd Floor',
    isRead: false,
    priority: 'critical',
    attendingDoctor: 'Dr. Robert Miller',
    notes: 'Please bring your case notes for assigned patients'
  },
  {
    id: 'notif-3',
    type: 'patient',
    title: 'Patient Assigned',
    description: 'New Patient: John Doe',
    patientId: 'SMC-2023-0042',
    date: '2023-05-27',
    time: '14:15 PM',
    isRead: false,
    priority: 'high',
    diagnosis: 'Suspected Hypertension',
    assignedBy: 'Dr. Emily Rodriguez'
  },
  {
    id: 'notif-4',
    type: 'patient',
    title: 'Patient Update',
    description: 'Vital Signs Updated',
    patientId: 'SMC-2023-0039',
    patientName: 'Maria Garcia',
    date: '2023-05-27',
    time: '11:30 AM',
    isRead: true,
    priority: 'medium',
    details: 'BP: 140/90, HR: 82, Temp: 37.2°C'
  },
  {
    id: 'notif-5',
    type: 'lab',
    title: 'Lab Results Available',
    description: 'Blood Work Results',
    patientId: 'SMC-2023-0042',
    patientName: 'John Doe',
    date: '2023-05-26',
    time: '16:45 PM',
    isRead: false,
    priority: 'high',
    testType: 'Complete Blood Count'
  },
  {
    id: 'notif-6',
    type: 'rounds',
    title: 'Case Presentation Scheduled',
    description: 'Present Patient: Maria Garcia',
    date: '2023-05-29',
    time: '09:30 AM',
    location: 'Conference Room 2A',
    isRead: true,
    priority: 'high',
    attendingDoctor: 'Dr. James Carter',
    notes: 'Prepare a 10-minute presentation on the case'
  },
  {
    id: 'notif-7',
    type: 'academic',
    title: 'Clinical Skills Assessment',
    description: 'Upcoming Evaluation',
    date: '2023-06-02',
    time: '13:00 PM',
    location: 'Skills Lab, Medical Education Building',
    isRead: true,
    priority: 'medium',
    evaluator: 'Dr. Patricia Wong',
    skills: ['Patient History', 'Physical Examination', 'Clinical Reasoning']
  }
];

export function StudentNotificationsScreen({ onNavigate }) {
  const [notifications, setNotifications] = useState(studentNotificationsData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'All Notifications', icon: null },
    { id: 'critical', label: 'Critical Alerts', icon: <AlertTriangleIcon size={14} className="mr-1 text-red-500" /> },
    { id: 'medcall', label: 'MedCall Help', icon: <StethoscopeIcon size={14} className="mr-1" /> },
    { id: 'rounds', label: 'Rounds', icon: <ClipboardListIcon size={14} className="mr-1" /> },
    { id: 'patient', label: 'Patient Updates', icon: <UserIcon size={14} className="mr-1" /> },
    { id: 'lab', label: 'Lab Results', icon: <FlaskConicalIcon size={14} className="mr-1" /> }
  ];

  const getCurrentFilterLabel = () => {
    return filterOptions.find(option => option.id === activeFilter)?.label || 'All Notifications';
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'critical') return notification.priority === 'critical';
    return notification.type === activeFilter;
  });

  const groupedNotifications = {
    critical: filteredNotifications.filter(n => n.priority === 'critical'),
    high: filteredNotifications.filter(n => n.priority === 'high'),
    medium: filteredNotifications.filter(n => n.priority === 'medium'),
    low: filteredNotifications.filter(n => n.priority === 'low')
  };

  const markAsRead = id => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const handleViewDetails = notification => {
    markAsRead(notification.id);
    setSelectedNotification(notification);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedNotification(null);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  const getNotificationIcon = type => {
    switch (type) {
      case 'medcall':
        return <StethoscopeIcon size={16} className="text-red-600" />;
      case 'rounds':
        return <ClipboardListIcon size={16} className="text-purple-600" />;
      case 'patient':
        return <UserIcon size={16} className="text-blue-600" />;
      case 'lab':
        return <FlaskConicalIcon size={16} className="text-green-600" />;
      case 'academic':
        return <GraduationCapIcon size={16} className="text-yellow-600" />;
      default:
        return <BellIcon size={16} className="text-gray-600" />;
    }
  };

  const getNotificationBgColor = notification => {
    if (notification.priority === 'critical' && !notification.isRead) return 'bg-red-50';
    if (!notification.isRead) return 'bg-blue-50';
    return '';
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleFilterSelect = filterId => {
    setActiveFilter(filterId);
    setDropdownOpen(false);
  };

  const aquaButtonStyle = 'relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner';
  const aquaGlossEffect = 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/80 before:via-transparent before:to-transparent before:opacity-60';

  return (
    <div className="flex flex-col min-h-screen w-full" style={{ background: 'linear-gradient(160deg, #e6f0ff 0%, #f0f6ff 100%)' }}>
{/* Header and Filters */}
<div className="p-4">
  <div className="flex items-center mb-4">
    <button
      onClick={() => onNavigate('student-dashboard')}
      className={`mr-3 p-2 rounded-full ${aquaButtonStyle}`}
      style={{
        background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <ArrowLeftIcon size={20} className="text-blue-700" />
    </button>
    <h1
      className="text-xl font-semibold text-gray-800"
      style={{ textShadow: '0 1px 0 rgba(255,255,255,0.7)' }}
    >
      Student Notifications
    </h1>
  </div>

  {/* Filters */}
  <div
    className="rounded-xl overflow-visible mb-5"
    style={{
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
      border: '1px solid rgba(255,255,255,0.6)'
    }}
  >
    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
      <h2 className="font-medium text-gray-700">Notifications</h2>
      <button
        onClick={markAllAsRead}
        className={`text-sm text-blue-600 font-medium px-3 py-1 rounded-full ${aquaButtonStyle} ${aquaGlossEffect}`}
        style={{
          background: 'linear-gradient(to bottom, #e6f0ff, #d1e3ff)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.7)',
          border: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        Mark all as read
      </button>
    </div>
    <div className="p-3 bg-gray-50 relative z-20" style={{ background: 'rgba(240,246,255,0.6)' }}>
      {/* Filter Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-between text-sm font-medium text-gray-700 ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #f0f6ff)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}
        >
          <div className="flex items-center">
            <FilterIcon size={14} className="mr-2 text-blue-600" />
            <span>{getCurrentFilterLabel()}</span>
          </div>
          <ChevronDownIcon
            size={16}
            className={`text-blue-600 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`}
          />
        </button>

        {dropdownOpen && (
          <div
            className="absolute z-50 mt-1 w-full rounded-lg py-1 animate-dropdownFadeIn"
            style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
              border: '1px solid rgba(255,255,255,0.8)'
            }}
          >
            {filterOptions.map(option => (
              <button
                key={option.id}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center transition-colors ${
                  activeFilter === option.id ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => handleFilterSelect(option.id)}
                style={{
                  background: activeFilter === option.id ? 'linear-gradient(to bottom, #e6f0ff, #d1e3ff)' : 'transparent',
                  boxShadow: activeFilter === option.id ? 'inset 0 1px 3px rgba(0,0,0,0.05)' : 'none'
                }}
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
  <div className="space-y-5">
    {/* Critical, High, Medium, Low Priority Notifications */}

    <div className="space-y-5">
  {/* Critical Priority Notifications */}
  {groupedNotifications.critical.length > 0 && (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.6)',
      }}
    >
      <div
        className="px-4 py-2 border-b"
        style={{
          background: 'linear-gradient(to bottom, #ffebeb, #ffe0e0)',
          borderBottom: '1px solid rgba(220,50,50,0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
        }}
      >
        <p className="text-sm font-medium text-red-800 flex items-center">
          <AlertTriangleIcon size={14} className="mr-2" />
          Critical Alerts
        </p>
      </div>

      <ul className="divide-y divide-gray-100">
        {groupedNotifications.critical.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 transition-colors duration-150 cursor-pointer ${getNotificationBgColor(
              notification
            )}`}
            onClick={() => handleViewDetails(notification)}
            style={{
              background: notification.isRead
                ? 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(250,250,250,0.7))'
                : notification.type === 'medcall'
                ? 'linear-gradient(to bottom, rgba(255,240,240,0.8), rgba(255,230,230,0.8))'
                : 'linear-gradient(to bottom, rgba(240,246,255,0.8), rgba(230,240,255,0.8))',
              boxShadow: !notification.isRead ? 'inset 0 0 0 1px rgba(0,0,0,0.05)' : 'none',
            }}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background:
                    notification.type === 'medcall'
                      ? 'linear-gradient(to bottom, #ff9999, #ff6666)'
                      : 'linear-gradient(to bottom, #d6b9ff, #b388ff)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                  border: '1px solid rgba(0,0,0,0.1)',
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
                    <span className="ml-2 h-2 w-2 bg-red-600 rounded-full animate-pulse"></span>
                  )}
                </div>

                <p className="text-sm text-gray-500 truncate">{notification.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(notification.date)} at {notification.time}
                </p>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <ChevronRightIcon size={16} className="text-blue-600" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* High Priority Notifications */}
  {groupedNotifications.high.length > 0 && (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.6)',
      }}
    >
      <div
        className="px-4 py-2 border-b"
        style={{
          background: 'linear-gradient(to bottom, #fff7e6, #ffeacc)',
          borderBottom: '1px solid rgba(255,165,0,0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
        }}
      >
        <p className="text-sm font-medium text-orange-800 flex items-center">
          <AlertCircleIcon size={14} className="mr-2" />
          High Alerts
        </p>
      </div>

      <ul className="divide-y divide-gray-100">
        {groupedNotifications.high.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 transition-colors duration-150 cursor-pointer ${getNotificationBgColor(
              notification
            )}`}
            onClick={() => handleViewDetails(notification)}
            style={{
              background: notification.isRead
                ? 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(250,250,250,0.7))'
                : 'linear-gradient(to bottom, rgba(255,250,240,0.8), rgba(255,240,230,0.8))',
              boxShadow: !notification.isRead ? 'inset 0 0 0 1px rgba(0,0,0,0.05)' : 'none',
            }}
          >
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: 'linear-gradient(to bottom, #ffd699, #ffb366)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                  border: '1px solid rgba(0,0,0,0.1)',
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
                    <span className="ml-2 h-2 w-2 bg-orange-500 rounded-full animate-pulse"></span>
                  )}
                </div>

                <p className="text-sm text-gray-500 truncate">{notification.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(notification.date)} at {notification.time}
                </p>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${aquaButtonStyle} ${aquaGlossEffect}`}
                style={{
                  background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <ChevronRightIcon size={16} className="text-blue-600" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

    {/* Use groupedNotifications mapping to render each section like in your original JSX */}
    {/* Each notification item: clickable div to handleViewDetails(notification) */}
    {/* Render icon, title, description, date/time, read status badge */}
    {/* ...exact same JSX as in your original component for these lists... */}
  </div>
</div>

{/* Notification Details Modal */}
{detailsModalOpen && selectedNotification && (
  <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
    <div
      className="max-w-md w-full max-h-[90vh] overflow-auto animate-slideUp rounded-xl"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.8)'
      }}
    >
      {/* Modal Header */}
      <div
        className="sticky top-0 border-b border-gray-200 p-4 flex items-center justify-between z-10"
        style={{
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${aquaButtonStyle} ${aquaGlossEffect}`}
            style={{
              background: selectedNotification.type === 'medcall'
                ? 'linear-gradient(to bottom, #ff9999, #ff6666)'
                : selectedNotification.type === 'rounds'
                ? 'linear-gradient(to bottom, #d6b9ff, #b388ff)'
                : selectedNotification.type === 'patient'
                ? 'linear-gradient(to bottom, #99c2ff, #66a3ff)'
                : selectedNotification.type === 'lab'
                ? 'linear-gradient(to bottom, #99e6b3, #66cc80)'
                : 'linear-gradient(to bottom, #ffdb99, #ffcc66)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
              border: '1px solid rgba(0,0,0,0.1)'
            }}
          >
            {getNotificationIcon(selectedNotification.type)}
          </div>
          <span>{selectedNotification.title}</span>
        </h2>
        <button
          onClick={closeDetailsModal}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${aquaButtonStyle} ${aquaGlossEffect}`}
          style={{
            background: 'linear-gradient(to bottom, #f8f9fa, #e2e6ea)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}
        >
          <XIcon size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-6">
        {/* Render details sections based on selectedNotification.type */}
        {/* MedCall, Rounds, Patient, Lab, Academic sections as in your original JSX */}
        {/* Include Close and action buttons */}
      </div>
    </div>
  </div>
)}

      <style jsx global>{`
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
        .animate-dropdownFadeIn { animation: dropdownFadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes dropdownFadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
        .animate-pulse { animation: pulse 1.5s infinite; }
      `}</style>
    </div>
  );
}
