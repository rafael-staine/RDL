import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAKdF5PGRaiOQr7WhRx0JVktC1s_W9D9oA',
    authDomain: 'dsllogin-2a669.firebaseapp.com',
    projectId: 'dsllogin-2a669',
    storageBucket: 'dsllogin-2a669.firebasestorage.app',
    messagingSenderId: '776762146137',
    appId: '1:776762146137:web:e414dd9821376160b36048',
    measurementId: 'G-4ZEC9K9N1V',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window != 'undefined') {
    isSupported().then((yes) => {
        if (yes) analytics = getAnalytics(app);
    });
}

//criar a authenticação com o google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error('Erro no login: ', error);
        throw error;
    }
}

//encerrar o login
export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error ao sair: ', error);
        throw error;
    }
}

export { auth, googleProvider, app, analytics };
