import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
import logo from "../../../img/logo.png";

import Container from "../Container/Container";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to='/' className={styles.logoContainer}>
                    <div>
                        <img className={styles.logo} src={logo} alt="logo"></img>
                    </div>

                </Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/anotações'>Anotações</Link></li>
                    <li><Link to='/novanota'>Criar Nota</Link></li>
                    <li><Link to='/tasklist'>Task List</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;
