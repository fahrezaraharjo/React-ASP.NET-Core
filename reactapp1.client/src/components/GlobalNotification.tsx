import React from 'react';
import { useNotificationStore } from '../store/notificationStore';
import { CheckCircle, DangerTriangle } from 'solar-icon-set';
import { AnimatePresence, motion } from 'framer-motion';

const getStyles = (type: 'success' | 'error') => {
  if (type === 'success') {
    return {
      backgroundColor: '#e6f4ea',
      borderColor: '#2e7d32',
      color: '#2e7d32',
      icon: <CheckCircle size={24} color="#2e7d32" />,
    };
  } else {
    return {
      backgroundColor: '#fdecea',
      borderColor: '#d32f2f',
      color: '#d32f2f',
      icon: <DangerTriangle size={24} color="#d32f2f" />,
    };
  }
};

const GlobalNotification: React.FC = () => {
  const { show, message, type, hideNotification } = useNotificationStore();
  const { backgroundColor, borderColor, color, icon } = getStyles(type);

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              backgroundColor,
              borderLeft: `6px solid ${borderColor}`,
              color,
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              minWidth: '300px',
              maxWidth: '400px',
            }}
          >
            <div>{icon}</div>
            <div style={{ flex: 1 }}>{message}</div>
            <button
              onClick={hideNotification}
              style={{
                background: 'transparent',
                border: 'none',
                color,
                fontSize: '18px',
                cursor: 'pointer',
              }}
              aria-label="Close Notification"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalNotification;
