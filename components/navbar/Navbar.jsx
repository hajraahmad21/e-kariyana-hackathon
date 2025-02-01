"use client"
import React from 'react';
import styles from './Navbar.module.css'; // Import CSS Module
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push("/")}>E-Kiryana</div>
      <div className={styles.search}>
      </div>
      <div className={styles.profile}>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className={styles.profileImage}
        />
        <span className={styles.profileName}>John Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;