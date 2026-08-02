import { store } from '../state/store';

export const renderToastNotification = (): string => {
  const { activeToast } = store;
  if (!activeToast) return '';

  return `
    <div class="toast-container">
      <div class="toast animate-fade-in">
        <span>${activeToast.message}</span>
      </div>
    </div>
  `;
};
