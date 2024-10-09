import React from 'react';
import Image from 'next/image'; // Not currently used, but included for future use
import styles from './login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input type="email" id="email" name="email" className={styles.input} required />

                <label htmlFor="password" className={styles.label}>Password:</label>
                <input type="password" id="password" name="password" className={styles.input} required />

                <button type="submit" className={styles.button}>Login</button>
            </form>
            <p>Don&apos;t have an account? <a href="/signup">Sign up</a></p> {/* Escape the apostrophe here */}
        </div>
    );
};

export default LoginPage;
