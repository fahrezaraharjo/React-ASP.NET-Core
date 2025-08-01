import { useNotificationStore } from '../store/notificationStore';

export const showErrorToast = (error: unknown) => {
  const message =
    typeof error === 'string'
      ? error
      : error instanceof Error
      ? error.message
      : 'Terjadi kesalahan tidak dikenal.';
  useNotificationStore.getState().showNotification(message, 'error');
};

export const showSuccessToast = (message: string) => {
  useNotificationStore.getState().showNotification(message, 'success');
};
