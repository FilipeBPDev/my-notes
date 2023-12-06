import styles from './Content.module.css';
import Button from '../../layout/Button/Button';

function Content({ id, title, span, txt1, clss, btnTxt, btn }) {
    const btnTo = id ? `${btn}${id}` : btn
    const caracterLimit = 182;

    const truncatedDescription = txt1 && txt1.length > caracterLimit ? txt1.slice(0, caracterLimit) + "..." : txt1;

    return (
        <div className={styles.projectCard}>
            <div className={styles.header}>
                <h1>
                    {title}<span>{span}</span>
                </h1>
            </div>
            <div className={styles.content}>
            {truncatedDescription && <p>{truncatedDescription}</p>}

            </div>
            {btnTxt &&
                <Button to={`/${btnTo}`}
                    text={btnTxt}>
                </Button>}
        </div>
    )
}

export default Content;