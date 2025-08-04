
export const showSuccessToast = (message: string) => {
  (window as any).showToast?.('success', message);
};

export const showErrorToast = (message: string) => {
  (window as any).showToast?.('error', message);
};
