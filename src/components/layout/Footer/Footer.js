import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li><FaLinkedin/></li>
                <li><FaGithub/></li>
            </ul>
            <p className={styles.copyRight}>
                <span>My Notes</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;