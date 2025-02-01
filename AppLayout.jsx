import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/SideBar/SideBar';
import styles from './AppLayout.module.css'; // Import CSS Module

const AppLayout= ({ children }) => {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default AppLayout;