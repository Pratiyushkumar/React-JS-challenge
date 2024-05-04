import { useTheme } from './hooks/useTheme';
import styles from './index.module.css';

const App = () => {
  const [theme, handleThemeToggle] = useTheme();

  return (
    <main
      className={`${styles.main} ${
        theme === 'dark-theme' ? styles.lighttheme : styles.darktheme
      }`}
    >
      <h1>Try to toggle the theme and see the change !!!</h1>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
    </main>
  );
};

export default App;
