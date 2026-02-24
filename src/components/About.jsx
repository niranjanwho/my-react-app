import styles from './Page.module.css'

export default function About() {
    return (
        <main className={styles.pageContent}>
            <section className={`${styles.page} ${styles.flexCenter}`}>
                <h2>About Us</h2>
                <p>Some text here</p>
            </section>
        </main>
    );
}