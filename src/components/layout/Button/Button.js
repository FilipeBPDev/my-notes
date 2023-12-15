    import { Link } from "react-router-dom";
    import styles from './Button.module.css'

    function Button({ to, text, handleSubmit }) {
        return (
            <div className={styles.containerDiv}>
                <Link className={styles.btn}
                    onClick={handleSubmit}
                    to={to}>
                    {text}
                </Link>
            </div>

        )
    }

    export default Button;