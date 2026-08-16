import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.subtitle}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </main>
  );
}
