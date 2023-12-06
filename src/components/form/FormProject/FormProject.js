import { useState } from "react";
import axios from 'axios';
import Button from "../../layout/Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

import styles from "./FormProject.module.css";

function FormProject({ btnText, handleSubmit, projectData }) {
    const [title, setTitle] = useState("")
    const [descrip, setDescrip] = useState("")
    const [project, setProject] = useState(projectData || [])

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7007/notes', {
                title: title,
                description: descrip,
            });
            console.log(response.data)
            setTitle('')
            setDescrip('')
        } catch (error) {
            console.error('Erro ao adicionar nota', error.message)
        }
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescrip = (e) => {
        setDescrip(e.target.value)
    }


    return (
        <form onSubmit={submit} className={styles.containerForm}>

            <Input
                name="title"
                text="Título"
                type="text"
                placeholder="Insira o título da nota."
                handleOnChange={handleTitle}
                value={title}

            />
            <TextArea
                type="Descrição"
                placeholder="Digite sua anotação."
                handleChange={handleDescrip}
                value={descrip}
            />
            <Button
                clss='btnNewNote'
                handleSubmit={submit}
                text={btnText}
            />
        </form>
    )
}



export default FormProject;