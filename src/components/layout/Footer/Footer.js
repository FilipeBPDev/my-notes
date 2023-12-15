import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <a href='https://www.linkedin.com/in/filipe-batista-832332276/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/FilipeBPDev'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            </ul>
            <p className={styles.copyRight}>
                <span>My Notes</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;