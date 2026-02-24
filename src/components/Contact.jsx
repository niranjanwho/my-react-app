import styles from './Page.module.css'

export default function Contact() {
    return (
        <main className={styles.pageContent}>
            <section className={`${styles.page} ${styles.flexCenter}`}>
                <h2>Contact Us</h2>
                <p>Some text here</p>
            </section>
        </main>
    );
}