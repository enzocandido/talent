import styles from './input.module.scss'

export default function Input(props) {
    return (
        <div className={styles.input}>
            <label className={styles.input_label}>
                {props.label}
            </label>
            <input className={styles.input_box}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
}