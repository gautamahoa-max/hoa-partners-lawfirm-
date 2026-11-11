import { initializeApp } from 'firebase/app';
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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore(app);

// Danh sách email luật sư / quản trị viên được phép truy cập trang quản trị
export const AUTHORIZED_EMAILS = [
  'gautamahoa@gmail.com',
  'vovanhoa.bank@gmail.com',
];

export function isAuthorizedAdmin(user) {
  if (!user || !user.email) return false;
  return AUTHORIZED_EMAILS.includes(user.email.toLowerCase().trim());
}
