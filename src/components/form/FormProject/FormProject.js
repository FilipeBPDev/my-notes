import { useState } from "react";
import axios from 'axios';
import Button from "../../layout/Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

import styles from "./FormProject.module.css";
import Message from "../../layout/Message/Message";

function FormProject({ btnText }) {
    const [title, setTitle] = useState("")
    const [descrip, setDescrip] = useState("")
    const [message, setMessage] = useState(false)
    const [typeMessage, setTypeMessage] = useState("")
    const [textMsg, setTextMsg] = useState("")

    const submit = async (e) => {
        e.preventDefault();

        if (!title || !descrip) {
            setMessage(true)
            setTypeMessage("error")
            setTextMsg("Erro ao adicionar nota")
        }

        try {
            await axios.post('http://localhost:7007/notes', {
                title: title,
                description: descrip,
            })
            setMessage(true)
            setTypeMessage("sucess")
            setTextMsg("Nota inserida com sucesso")
            setTitle('')
            setDescrip('')
        } catch (error) {
            console.error('Erro ao adicionar nota', error.message)
        } finally {
            setTimeout(() => {
                setMessage(false)
                setTypeMessage("")
                setTextMsg("")
            }, 1500)
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
                clss="btnNewNote"
                handleSubmit={submit}
                text={btnText}
            />
            {message && (
                <Message
                    type={typeMessage}
                    msg={textMsg}
                />
            )}
        </form>
    )
}

export default FormProject;