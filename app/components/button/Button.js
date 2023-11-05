import Link from 'next/link'
import styles from './button.module.scss'

export default function Button(props) {
    return (
        <div>
            <Link href={`/${props.link}`}>
                <button className={styles.button}>
                    {props.name}
                </button>
            </Link>
        </div>
    )
}