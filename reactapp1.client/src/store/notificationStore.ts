import { create } from 'zustand';

export type NotificationType = 'success' | 'error';

interface NotificationState {
    message: string;
    type: NotificationType;
    show: boolean;
    showNotification: (message: string, type: NotificationType) => void;
    hideNotification: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
    message: '',
    type: 'success',
    show: false,
    showNotification: (message, type = 'success') => {
        set({ show: true, message, type });
        setTimeout(() => set({ show: false }), 3000);
    },
    hideNotification: () => set({ show: false }),
}));
