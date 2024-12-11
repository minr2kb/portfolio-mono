import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent as firebaseLogEvent } from 'firebase/analytics';
import { logger } from './logger';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const logEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    firebaseLogEvent(analytics, eventName, params);
    logger.debug(`[Analytics] event logged: ${eventName}`, params);
  } catch (error) {
    logger.error(`[Analytics] Failed to log event: ${eventName}`, error as Error, {
      eventName,
      params,
    });
  }
};