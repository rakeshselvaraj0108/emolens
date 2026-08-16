import { SkeletonCard } from '@/components/ui/Skeleton';
import styles from './not-found.module.css';

export default function Loading() {
  return (
    <main className={styles.main} aria-busy="true" aria-live="polite">
      <SkeletonCard />
    </main>
  );
}
