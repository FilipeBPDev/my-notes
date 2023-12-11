import styles from './Content.module.css';
import Button from '../../layout/Button/Button';
import axios from 'axios';

function Content({ id, title, span, txt1, showDelBtn, onDel, btnTxt, btn }) {
    const btnTo = id ? `${btn}${id}` : btn
    const caracterLimit = 182;

    const limitDescription = txt1 && txt1.length > caracterLimit ? txt1.slice(0, caracterLimit) + "..." : txt1;

    


    return (
        <div className={styles.projectCard}>
            <div className={styles.header}>
                <h1>
                    {title}<span>{span}</span>
                </h1>
            </div>
            <div className={styles.content}>
                {limitDescription && <p>{limitDescription}</p>}

            </div>
            <div className={styles.buttons}>
                {btnTxt &&
                    <Button to={`/${btnTo}`}
                        text={btnTxt}>
                    </Button>}
                {showDelBtn && (
                    <Button
                        text="Excluir" />
                )}
            </div>

        </div>
    )
}

export default Content;