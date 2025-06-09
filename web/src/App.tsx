import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
// fonts
import '@fontsource/tomorrow/300.css';
import '@fontsource/tomorrow/400.css';
import '@fontsource/tomorrow/700.css';
// mantine styles
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
// local styles
import styles from './App.module.css';
import { Outlet } from '@tanstack/react-router';
import { Nav } from './components/nav/nav';
import theme from './styles/theme';

function AppCore() {
  return (
    <>
      <Nav />
      <main className={styles.appContent}>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <AppCore />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
