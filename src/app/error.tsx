'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.subtitle}>
        An unexpected error occurred. You can try again, or head back home.
      </p>
      <Button variant="primary" onClick={reset}>
        Try Again
      </Button>
    </main>
  );
}
