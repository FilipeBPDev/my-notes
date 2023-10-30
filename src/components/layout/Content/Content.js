import styles from './Content.module.css';
import Button from '../../layout/Button/Button';

function Content({ title, span, txt1, txt2, txt3, btnTxt }) {
    return (
        <div className={styles.containerDiv}>
            <div className={styles.header}>
                <h1>
                    {title}<span>{span}</span>
                </h1>
            </div>
            <div className={styles.content}>
                {txt1 && <p>{txt1}</p>}
                {txt2 && <p>{txt2}</p>}
                {txt3 && <p>{txt3}</p>}

            </div>
            <Button to="/novanota"
                text={btnTxt}>
            </Button>
        </div>
    )
}

export default Content;