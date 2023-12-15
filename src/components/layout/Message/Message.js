import { useState, useEffect } from 'react';
import styles from './Message.module.css';
import Button from '../Button/Button';

function Message({ type, msg, onConfirm, onCancel, title }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
    }, [msg, onCancel, type])

    return (
        <div className={styles.overlay}>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg} <span>{title}</span> 
                    {type === "confirmation" && (
                        <div className={styles.divBtn}>
                            <Button
                                text="Sim, excluir"
                                handleSubmit={onConfirm}
                            />
                            <Button
                                text="Cancelar"
                                handleSubmit={onCancel}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Message;