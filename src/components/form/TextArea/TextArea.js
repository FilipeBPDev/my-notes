import styles from './TextArea.module.css';

function TextArea({ type, placeholder, value, handleChange }) {
    return (
        <div className={styles.textContainer}>
            <label htmlFor={type}>{type}</label>
            <textarea
                rows="10"
                cols="10"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}>
            </textarea>
        </div>
    )
}

export default TextArea;