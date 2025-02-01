"use client"
import styles from "./Shops.module.css";
import AppLayout from "../../../AppLayout";
import { useRouter } from "next/navigation";

const shops = [
  {
    id: 1,
    name: "Domino's Pizza",
    items: ["Pepperoni Pizza", "Cheese Burst", "Garlic Bread"],
  },
  {
    id: 2,
    name: "Maan G Ka Dastarkhwan",
    items: ["Karahi", "Biryani", "Naan"],
  },
  { id: 3, name: "Jalal Sons", items: ["Burger", "Fried Chicken", "Pizza"] },
  {
    id: 4,
    name: "Johnny & Jugnu",
    items: ["Wraps", "Loaded Fries", "Burgers"],
  },
  {
    id: 5,
    name: "Domino's Pizza",
    items: ["Pepperoni Pizza", "Cheese Burst", "Garlic Bread"],
  },
  {
    id: 6,
    name: "Maan G Ka Dastarkhwan",
    items: ["Karahi", "Biryani", "Naan"],
  },
  { id: 7, name: "Jalal Sons", items: ["Burger", "Fried Chicken", "Pizza"] },
  {
    id: 8,
    name: "Johnny & Jugnu",
    items: ["Wraps", "Loaded Fries", "Burgers"],
  },
  {
    id: 9,
    name: "Domino's Pizza",
    items: ["Pepperoni Pizza", "Cheese Burst", "Garlic Bread"],
  },
  {
    id: 10,
    name: "Maan G Ka Dastarkhwan",
    items: ["Karahi", "Biryani", "Naan"],
  },
  { id: 11, name: "Jalal Sons", items: ["Burger", "Fried Chicken", "Pizza"] },
  {
    id: 12,
    name: "Johnny & Jugnu",
    items: ["Wraps", "Loaded Fries", "Burgers"],
  },
];

const categories = [
  "grossary",
  "snacks",
  "sanitary items",
  "bed sheets",
  "meat",
  "Dessert",
];

export default function ShopsPage() {
  const firstFourShops = shops.slice(0, 4);
    const remainingShops = shops.slice(4);
    const router = useRouter();

  return (
    <>
      <AppLayout>
        <div className={styles.shopsContainer}>
          {/* First 4 Shops */}
          <div className={styles.shopGrid}>
            {firstFourShops.map((shop) => (
              <div key={shop.id} className={styles.shopCard} onClick={() => router.push(`/shop/${shop.id}`)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDLBjElpd9bpfdlkGHrXXxnDEPn6dBcXFvg&s"
                  alt={shop.name}
                  className={styles.shopImage}
                />
                <div className={styles.shopInfo}>
                  <h3>{shop.name}</h3>
                </div>
                <div className={styles.expandedContent}>
                  <p>Popular Items:</p>
                  <ul>
                    {shop.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <section className={styles.categories}>
            <h2 className={styles.sectionTitle}>Explore by Category</h2>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
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

          {/* Remaining Shops */}
          <div className={styles.shopGrid}>
            {remainingShops.map((shop) => (
                <div key={shop.id} className={styles.shopCard} onClick={() => router.push(`/shop/${shop.id}`)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDLBjElpd9bpfdlkGHrXXxnDEPn6dBcXFvg&s"
                  alt={shop.name}
                  className={styles.shopImage}
                />
                <div className={styles.shopInfo}>
                  <h3>{shop.name}</h3>
                </div>
                <div className={styles.expandedContent}>
                  <p>Popular Items:</p>
                  <ul>
                    {shop.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </>
  );
}
