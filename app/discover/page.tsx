"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './page.module.css';


type Shop = {
  name: string;
  photo: string;
  location: string;
  mobile: string;
};

const shops = {
  "Flower Shop": [
    {
      name: "Blooming Flowers",
      photo: "/images/1.jpg",
      location: "456 Avenue, City",
      mobile: "098-765-4321",
    },
    {
      name: "Rose Petals",
      photo: "/images/2.jpg",
      location: "789 Road, City",
      mobile: "321-654-9870",
    },
    {
      name: "Lily's Florist",
      photo: "/images/3.jpg",
      location: "123 Blossom St, City",
      mobile: "654-321-9876",
    },
  ],
  "Gift Shop": [
    {
      name: "Lovely Gifts",
      photo: "/images/4.jpg",
      location: "123 Street, City",
      mobile: "123-456-7890",
    },
  ],
  // Add more categories and shops here
} as const;

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);

  // Animate the counting up of numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setParcels(prev => (prev < 30000 ? prev + 500 : 30000));
      setMerchants(prev => (prev < 150 ? prev + 5 : 150));
      setBusinesses(prev => (prev < 70 ? prev + 2 : 70));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const filteredShops = Object.entries(shops).reduce(
    (acc, [category, shopList]) => {
      const filteredList = shopList.filter(
        (shop) =>
          shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shop.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredList.length > 0) {
        acc.push({ category, shops: filteredList });
      }
      return acc;
    },
    [] as { category: string; shops: Shop[] }[]
  );

  return (
    <div className={styles.discover}>
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for shops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchBar}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>

      {/* Video Section */}
      <div className={styles.videoContainer}>
        <div className={styles.videoColumn}>
          <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src="/videos/discover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.videoColumn}>
          <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src="/videos/discover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.videoColumn}>
          <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
            <source src="/videos/discover.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className={styles.categories}>
        {filteredShops.map(({ category, shops }) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            <div className={styles.shopList}>
              {shops.map((shop) => (
                <div key={shop.name} className={styles.shopCard}>
                  <Image src={shop.photo} alt={shop.name} className={styles.shopPhoto} />
                  <h3>{shop.name}</h3>
                  <p>{shop.location}</p>
                  <p>{shop.mobile}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.stat}>
          <p className={styles.statValue}>Delivered <span className={styles.highlight}>{parcels}+</span> parcels</p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>Merchants <span className={styles.highlight}>{merchants}+</span></p>
        </div>
        <div className={styles.separator} />
        <div className={styles.stat}>
          <p className={styles.statValue}>Discovered <span className={styles.highlight}>{businesses}+</span> businesses</p>
        </div>
      </div>
    </div>
  );
}
