import React from "react";
import styles from "./shop.module.css";
import AppLayout from "../../../../AppLayout";

const Shop = () => {
  return (
    <AppLayout>
      <div className={styles.container}>
        {/* Restaurant Info */}
        <div className={styles.restaurantInfo}>
          <h2>Rizwan Pocket Shawarma - Model Town</h2>
          <p>Sandwiches, Burgers, Fast Food, Middle Eastern, Shawarma</p>
          <div className={styles.deliveryInfo}>
            <span>Rs.129 delivery or free with Rs.399 spend</span>
            <span>Min order Rs.249</span>
          </div>
          <button className={styles.favoriteButton}>Add to favourites</button>
        </div>

        {/* Deals Section */}
        <div className={styles.dealsSection}>
          <h3>Available Deals</h3>
          <ul>
            <li>C2B Free delivery</li>
            <li>C2B 15% off</li>
            <li>Rs.200 cashback (EPOE/ITAL)</li>
          </ul>
        </div>

        {/* Menu Section */}
        <div className={styles.menuSection}>
          <h3>Menu</h3>
          <div className={styles.menuCategories}>
            <button className={`${styles.categoryButton} ${styles.active}`}>
              Popular (6)
            </button>
            <button className={styles.categoryButton}>Panda Combo (2)</button>
            <button className={styles.categoryButton}>Shawarma (13)</button>
            <button className={styles.categoryButton}>Fried Burgers (6)</button>
            <button className={styles.categoryButton}>
              Grilled Burgers (10)
            </button>
            <button className={styles.categoryButton}>
              Grilled Beef Burgers (3)
            </button>
          </div>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <h4>Cheese Pocket Shawarma</h4>
              <p>Rs.399 - Rs.479</p>
              <p>Serves 1</p>
            </div>
            <div className={styles.menuItem}>
              <h4>Panda Combo 1</h4>
              <p>Rs.750</p>
              <p>Serves 1</p>
            </div>
          </div>
        </div>

        {/* Footer (if needed) */}
        {/* <footer className={styles.footer}>
        <p>Delivery</p>
        <p>Pick-up</p>
      </footer> */}
      </div>
    </AppLayout>
  );
};

export default Shop;
