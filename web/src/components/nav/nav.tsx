import { Avatar, Group, Image } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import styles from './nav.module.css';

const navItems = [
  { label: 'Standings', path: '/standings' },
  { label: 'Prospects', path: '/prospects' },
  { label: 'Lineup Builder', path: '/lineup-builder' },
];

export function Nav() {
  return (
    <nav className={styles.root}>
      <Link className={styles.logo} to={'/'}>
        <Image src={'/logo.png'} height={60} fit="contain" />
      </Link>
      <Group>
        {navItems.map((item) => {
          return (
            <Link key={item.path} className={styles.navItem} activeProps={{ className: styles.active }} to={item.path}>
              {item.label}
            </Link>
          );
        })}
      </Group>
      <Group>
        <Avatar color="orange">TB</Avatar>
      </Group>
    </nav>
  );
}
