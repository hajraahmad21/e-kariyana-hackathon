"use client";
import React from "react";
import styles from "./Dashboard.module.css"; // Import CSS Module
import RestaurantSection from "./_components/restaurantSection/restaurantSection";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className={styles.dashboard}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Want to get things at your door step?
          </h1>
          <p className={styles.heroSubtitle}>
            Order from your favorite shops and get it delivered fast.
          </p>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Enter your delivery address"
              className={styles.searchInput}
            />
            <button
              className={styles.searchButton}
              onClick={() => router.push("/shops")}
            >
              Find Shops
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?semt=ais_hybrid"
            alt="Food Delivery"
            className={styles.image}
          />
        </div>
      </div>
      <RestaurantSection />

      {/* Featured Restaurants */}
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Shops</h2>
        <div className={styles.restaurantGrid}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.restaurantCard}>
              <img
                src="https://media.istockphoto.com/id/1314210006/photo/grocery-store-shop-in-vintage-style-with-fruit-and-vegetables-crates-on-the-street.jpg?s=612x612&w=0&k=20&c=UFL3bRQkWH7dt6EMLswvM4u8-1sPQU9T5IFHXuBbClU="
                alt="Restaurant"
                className={styles.restaurantImage}
              />
              <h3 className={styles.restaurantName}>Shop Name</h3>
              <p className={styles.restaurantCuisine}>Shop Type</p>
              <p className={styles.restaurantRating}>⭐ 4.5 (500+ ratings)</p>
            </div>
          ))}
        </div>
      </section>

      {/* Food Categories */}
      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Explore by Category</h2>
        <div className={styles.categoryGrid}>
          {[
            "grocery",  
            "snacks",
            "sanitary items",
            "bed sheets",
            "meat",
            "Dessert",
          ].map((category) => (
            <div key={category} className={styles.categoryCard}>
              <img
                src="https://media.istockphoto.com/id/487125438/photo/hand-tools.jpg?s=612x612&w=0&k=20&c=29BDKlnOJWx6O1WhW3vArbH_TU0-fj7XIc73y0MdKm0="
                alt={category}
                className={styles.categoryImage}
              />
              <p className={styles.categoryName}>{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className={styles.promotions}>
        <h2 className={styles.sectionTitle}>Special Offers</h2>
        <div className={styles.promotionGrid}>
          {[1, 2].map((item) => (
            <div key={item} className={styles.promotionCard}>
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5650026.jpg&fm=jpg"
                alt="Promotion"
                className={styles.promotionImage}
              />
              <div className={styles.promotionContent}>
                <h3 className={styles.promotionTitle}>
                  50% Off on First Order
                </h3>
                <p className={styles.promotionDescription}>
                  Use code <strong>FOODIE50</strong> to get 50% off on your
                  first order.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
