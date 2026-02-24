import Branding from './Branding';
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.siteFooter}>
            <Branding />
            <div className={styles.copyrights}>
                <p>&copy; {new Date().getFullYear()} MyViteApp. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Powered by React JS</a>
                </div>
            </div>
        </footer>
    );
}