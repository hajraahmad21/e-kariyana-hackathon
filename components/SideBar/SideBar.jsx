import React from 'react';
import styles from './SideBar.module.css'; // Import CSS Module

const Sidebar= () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Menu</h2>
      </div>
      <ul className={styles.sidebarMenu}>
        <li className={styles.menuItem}>
          <a href="/dashboard" className={styles.menuLink}>
            Dashboard
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/profile" className={styles.menuLink}>
            Profile
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/settings" className={styles.menuLink}>
            Settings
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/logout" className={styles.menuLink}>
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;