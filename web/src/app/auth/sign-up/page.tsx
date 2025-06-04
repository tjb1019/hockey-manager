import { signup } from '@/app/actions/auth';
import styles from './page.module.css';

export default function SignUpPage() {
  
  return (
    <form className={styles.root} action={signup}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}