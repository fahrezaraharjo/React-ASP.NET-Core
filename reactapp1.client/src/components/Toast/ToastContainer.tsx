import React, { useState } from 'react';
import {
  NotificationGroup,
  Notification,
} from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import { checkCircleIcon, exclamationCircleIcon } from '@progress/kendo-svg-icons';
import { Icon } from '@progress/kendo-react-common';

type ToastType = 'success' | 'error';

interface ToastMessage {
  type: ToastType;
  message: string;
  id: number;
}

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = new Date().getTime();
    setToasts((prev) => [...prev, { type, message, id }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  // expose globally
  (window as any).showToast = showToast;

  const getIcon = (type: ToastType) => {
    return type === 'success' ? checkCircleIcon : exclamationCircleIcon;
  };

  const getBackground = (type: ToastType) => {
    return type === 'success' ? '#2e7d32' : '#c62828';
  };

  return (
    <NotificationGroup
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        gap: '10px',
      }}
    >
      <Fade>
        {toasts.map((toast) => (
          <Notification
            key={toast.id}
            style={{
              background: getBackground(toast.type),
              color: 'white',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              borderRadius: 8,
              padding: 12,
              minWidth: 300,
              display: 'flex',
              alignItems: 'center',
            }}
            closable={true}
          >
            <Icon
              icon={getIcon(toast.type)}
              style={{ marginRight: 12, color: 'white' }}
              size="medium"
            />
            <span style={{ flex: 1 }}>{toast.message}</span>
          </Notification>
        ))}
      </Fade>
    </NotificationGroup>
  );
};
