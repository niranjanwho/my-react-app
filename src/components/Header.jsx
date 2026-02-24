import Branding from './Branding';
import Navigation from './Navigation';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <Branding />
            <Navigation />
        </header>
    );
}