import { useEffect, useState } from 'react';
import Content from '../../layout/Content/Content';
import styles from '../Home/Home.module.css';
import axios from 'axios';


function Notas() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7007/notes')
            .then(res => {
                setProjects(res.data.reverse());
            })
            .catch(err => console.log(err))
    }, []);
   
    const handleDelete = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:7007/notes/${id}`)
            if (resp.status === 200) {
               setProjects(prevProjects => prevProjects.filter(project => project.id !== id))
            }
        }
        catch (error) {
            console.error('Erro ao excluir nota', error.message)
        }
    };

    return (
        <div>
            <div className={styles.divTitle}>
                <h1>Suas anotações.</h1>
            </div>


            <div className={styles.homeContainer}>
                {projects.map(project => (
                    <Content
                        key={project.id}
                        id={project.id}
                        span={project.title}
                        txt1={project.description}
                        onDel={() => handleDelete(project.id)}
                        btn="notas/"
                        btnTxt="Abrir"
                        showDelBtn="Excluir"


                    />

                ))}
            </div>
        </div>
    )
}

export default Notas;