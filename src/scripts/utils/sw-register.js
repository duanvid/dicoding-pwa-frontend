import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('This Browser Suck, Service Worker not supported');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service Worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
