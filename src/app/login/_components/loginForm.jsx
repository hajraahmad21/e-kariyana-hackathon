"use client"
import React from 'react';
import styles from './LoginForm.module.css'; 
import { useRouter } from 'next/navigation';
const LoginForm = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Enter your email below to login to your account</p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button} onClick={() => router.push("/")}>Login</button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerText}>OR</span>
        </div>

        {/* <button className={styles.googleButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className={styles.googleLogo}
          />
          Login with Google
        </button> */}

        <p className={styles.footerText}>
          Don't have an account? <a href="/register" className={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;