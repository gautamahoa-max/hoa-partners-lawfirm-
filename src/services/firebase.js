import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Cấu hình Firebase Web App cho dự án hoa-partners
const firebaseConfig = {
  projectId: 'hoa-partners',
  appId: '1:1017268024729:web:6158e79e04cbd6af5dcf08',
  storageBucket: 'hoa-partners.firebasestorage.app',
  apiKey: 'AIzaSyBPxdSViictc-bAmhYnzZUVMha2yzCE5Fk',
  authDomain: 'hoa-partners.firebaseapp.com',
  messagingSenderId: '1017268024729',
  measurementId: 'G-2YLP29S2JJ',
};

const app = initializeApp(firebaseConfig);

// Opt-in Firebase App Check when reCAPTCHA v3 site key is provisioned at build time
const appCheckSiteKey =
  typeof import.meta !== 'undefined' && import.meta.env
    ? String(import.meta.env.VITE_FIREBASE_APPCHECK_SITE_KEY || '').trim()
    : '';
if (typeof window !== 'undefined' && appCheckSiteKey) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(appCheckSiteKey),
    isTokenAutoRefreshEnabled: true,
  });
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore(app);
