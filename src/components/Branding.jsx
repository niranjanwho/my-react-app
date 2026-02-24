import styles from './Branding.module.css'

export default function Branding() {
    return (
        <div className={styles.branding}>
            <img src="/vite.svg" alt="Logo" width="40" />
            <h1>MyViteApp</h1>
        </div>
    );
}