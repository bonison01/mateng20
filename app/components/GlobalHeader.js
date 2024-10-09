import Link from 'next/link';
import { FaUser } from 'react-icons/fa'; 
import Image from 'next/image';
import styles from './GlobalHeader.module.css';


const GlobalHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navButton}>
          Home
        </Link>
        <Link href="/delivery-rates" className={styles.navButton}>
          Delivery Rates
        </Link>
        <Link href="/pricing" className={styles.navButton}>
          Services
        </Link>
        <Link href="https://mtg-task-app.vercel.app/form/create-new-task" className={styles.createTaskButton}>
          Create Task
        </Link>
        <Link href="/login">
          <FaUser className={styles.icon} aria-label="Login" />
        </Link>
      </nav>
    </header>
  );
};

export default GlobalHeader;
