import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./NoteProject.module.css";
import Button from "../../layout/Button/Button";

function NoteProject() {
    const { id } = useParams();
    const containerRef = useRef(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:7007/notes/${id}`)
            .then(res => {
                const { title, description } = res.data;
                setTitle(title);
                setDescription(description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleContainerClick = () => {
        setEditTitle(true);
        setEditDescription(true);
    };

    const handleOutsideClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setEditTitle(false);
            setEditDescription(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const updateNote = () => {
        axios.patch(`http://localhost:7007/notes/${id}`, {
            title,
            description,
        })
            .then(res => {
                console.log("Nota atualizada com sucesso", res.data)
                setEditTitle(false);
                setEditDescription(false);
            })

            .catch(err => {
                console.log("Erro ao atualizar nota.", err)
            })

    }

    return (
        <div className={styles.container} onClick={handleContainerClick} ref={containerRef}>
            <div className={styles.title}>
                {editTitle ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <h1>{title}</h1>
                )}
            </div>
            <div className={styles.description}>
                {editDescription ? (
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <p>{description}</p>
                )}
                {(editTitle || editDescription) && (
                    <div className={styles.divButton}>
                        <Button text="Salvar"
                            handleSubmit={updateNote} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NoteProject;