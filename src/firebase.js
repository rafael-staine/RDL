import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
    getAuth,
    googleProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjbFvUxQLS0Arxljc10hKsxkCeuuRUxXg",
    authDomain: "rdl-fbc4d.firebaseapp.com",
    projectId: "rdl-fbc4d",
    storageBucket: "rdl-fbc4d.firebasestorage.app",
    messagingSenderId: "184827827907",
    appId: "1:184827827907:web:ac9895033038b75a6f3476",
    measurementId: "G-Y6JJERNE5T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== 'undefined') {
    isSupported().then((yes) => {
        if (yes) analytics = getAnalytics(app);
    });
}

// criar autenticação com o google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
    try {
        const res = await signInWithGooglePopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error('Erro no login:', error);
        throw error;
    }
}

// encerrar o login
export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Erro ao sair:', error);
        throw error;
    }
}

export { auth, googleProvider, app, analytics };