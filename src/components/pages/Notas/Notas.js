import { useEffect, useState } from 'react';
import Content from '../../layout/Content/Content';
import Message from '../../layout/Message/Message';
import styles from '../Home/Home.module.css';
import axios from 'axios';


function Notas() {
    const [projects, setProjects] = useState([])
    const [confirmation, setConfirmation] = useState(null)
    const [confTitle, setConfTilte] = useState('')

    useEffect(() => {
        axios.get('http://localhost:7007/notes')
            .then(res => {
                setProjects(res.data.reverse());
            })
            .catch(err => console.log(err))
    }, []);

    const handleDelete = async (id, title) => {
        try {
            setConfirmation(id)
            setConfTilte(title)
        } catch (error) {
            console.error('Erro ao excluir nota', error.message)
        }
    }

    const handleConfirmDelete = async () => {
        try {
            const resp = await axios.delete(`http://localhost:7007/notes/${confirmation}`)
            if (resp.status === 200) {
                setProjects(prevProjects => prevProjects.filter(project => project.id !== confirmation))
            }
        }
        catch (error) {
            console.error('Erro ao excluir nota', error.message)
        } finally {
            setConfirmation(null)
            setConfTilte('')
        }
    }

    const handleCancelDelete = () => {
        setConfirmation(null)
        setConfTilte('')
    }

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
                        onDel={() => handleDelete(project.id, project.title)}
                        btn="notas/"
                        btnTxt="Abrir"
                        showDelBtn="Excluir"
                    />
                ))}
            </div>

            {confirmation && (
                <Message
                    type="confirmation"
                    msg={"Tem certeza que deseja excluir esta nota? "}
                    title={`${confTitle}`}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    )
}

export default Notas;