import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./NoteProject.module.css";
import Button from "../../layout/Button/Button";

function NoteProject() {
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [editTitle, setEditTitle] = useState(false)
    const [editDescription, setEditDescription] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:7007/notes/${id}`)
            .then(res => {
                const { title, description } = res.data;
                setTitle(title)
                setDescription(description)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <div className={styles.container}>

            <div className={styles.title} onClick={() => setEditTitle(true)}>
                {editTitle ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={() => setEditTitle(false)}
                        autoFocus
                    />
                ) : (
                    <h1>{title}</h1>
                )}
            </div>

            <div className={styles.description} onClick={() => setEditDescription(true)}>
                {editDescription ? (
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={() => setEditDescription(false)}
                        autoFocus
                    />

                ) : (
                    <p>{description}</p>
                )}
                {(editTitle || editDescription) && (
                    <div className={styles.divButton}>
                        <Button
                            text="Salvar"
                        />
                    </div>

                )}


            </div>



        </div>
    )
}

export default NoteProject;

