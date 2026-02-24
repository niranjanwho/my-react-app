import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={styles.siteNavigation}>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? styles.currentMenu : undefined}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.currentMenu : undefined}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.currentMenu : undefined}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}