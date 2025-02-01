import React from 'react';
import styles from './RegisterationForm.module.css'; // Import CSS Module

const RegistrationForm= () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.subtitle}>Create an account to get started</p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={styles.input}
            />
          </div>

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

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button}>Sign Up</button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerText}>OR</span>
        </div>

        <button className={styles.googleButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className={styles.googleLogo}
          />
          Sign Up with Google
        </button>

        <p className={styles.footerText}>
          Already have an account? <a href="/login" className={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;