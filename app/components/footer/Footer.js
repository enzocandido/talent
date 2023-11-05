import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_content}>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}