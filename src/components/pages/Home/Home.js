import { FaPlus } from 'react-icons/fa6';
import styles from './Home.module.css';
import notebook from '../../../img/notebook.png';
import Button from '../../layout/Button/Button';
import Content from '../../layout/Content/Content';

function Home() {
    return (
        <section className={styles.homeContainer}>
            <Content
            title="Bem vindo ao "
            span="My Notes"
            txt1="✨ Crie sua primeira anotação."
            btnTxt="Criar nota"
            btn="novanota/"
            />
            <Content
            title="Explore suas "
            span=" ideias"
            txt1="🗃️ Explore nossas opções de organização."
            btnTxt="Explore"
            btn="notas/"

            />
            
        </section>
    )
}

export default Home;