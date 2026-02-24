import { Link } from "react-router-dom";
import styles from './Page.module.css';

export default function NotFound() {
    return (
        <main className={styles.pageContent}>
            <section className={`${styles.page} ${styles.flexCenter}`}>
                <h2>404 - Page Not Found</h2>
                <p>Page does not exists or moved</p>
                <Link to='/'>Go back Home</Link>
            </section>
        </main>
    );
}