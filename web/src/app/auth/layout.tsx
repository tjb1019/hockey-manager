import styles from './layout.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout ({ children }: AuthLayoutProps) {
  return (
    <main className={styles.root}>
      {children}
    </main>
  )
}