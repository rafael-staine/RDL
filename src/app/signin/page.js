'use client';

import styles from './signin.module.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from 'react';
import { signInWithGooglePopup } from '../../firebase';

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function handleGoogleSignIn() {
        setLoading(true);
        setError(null);
        try {
            const userObj = await signInWithGooglePopup();
            setUser({
                name: userObj.displayName,
                email: userObj.email,
                photoUrl: userObj.photoURL,
                uid: userObj.uid
            })
            console.log('Usuário logado:', userObj);
        } catch (err) {
            console.error('Erro ao logar com o Google:', err);
            setError(err.message || 'Erro no login');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Entre na sua conta e negocie com segurança!</h2>
                <p>Acesse e aproveite uma experiência segura dentro da RDL</p>

                <div className={styles.socialLogin}>
                    <button
                        className={styles.google}
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        aria-label="Entrar com Google"
                    />

                    <button className={styles.google}>
                        <FcGoogle size={24} />
                    </button>

                    <button className={styles.facebook}>
                        <FaFacebookF size={24} />
                    </button>
                </div>

                <div className={styles.divider}>Ou conecte com</div>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='Digite o seu e-mail' />

                <button className={styles.loginBtn}>Acessar</button>

                <p className={styles.register}>
                    Não tem uma conta? <a href='/signup '>Cadastre-se</a>
                </p>
            </div>

            <p className={styles.terms}>
                Ao continuar, você concorda com os <a href='#'>Termos de Uso</a> e a <a href='#'>Política de Privacidade</a> da RDL e seus parceiros, e em receber comunicações da RDL.
            </p>
        </div>
    )
}
