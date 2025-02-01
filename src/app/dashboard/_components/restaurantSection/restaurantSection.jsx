import React from "react";
import styles from "./restaurantSection.module.css";

const RestaurantSection = () => {
  return (
      <div className={styles.restaurantContainer}>
          <div className={styles.headingContainer}>
        <h2 className={styles.heading}>
          You order the item, we handle the rest
        </h2>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://www.shutterstock.com/image-photo/laughing-loader-carries-large-boxes-260nw-2360002703.jpg"
          alt="Chef Cooking"
          className={styles.restaurantImage}
        />
        <div className={styles.card}>
          <h3>List your restaurant or shop on e-kirana</h3>
          <p>
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
          </p>
          <p>
            It's simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas – in
            a heartbeat!
          </p>
          <p>Interested? Let's start our partnership today!</p>
          <button className={styles.button}>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;
