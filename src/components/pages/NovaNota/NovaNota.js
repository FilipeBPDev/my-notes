import styles from "./NovaNota.module.css";
import FormProject from "../../form/FormProject/FormProject";

function NovaNota() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <h1>Crie sua nota!</h1>
                </div>
                <FormProject
                    btnText="Concluir"                   
                />
            </div>
        </div>
    )
}

export default NovaNota;