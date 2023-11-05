import styles from './uploadForm.module.scss'
import Input from '../input/Input'

export default function Form() {
    return (
        <div className={styles.form}>
            <form>
                <Input
                    label='Título'
                    type='text'
                    name='name'
                />
                <Input
                    label='Descrição'
                    type='text'
                    name='user'
                />
                <Input
                    label='URL do YouTube'
                    type='text'
                    name='video_url'
                />
                <Input
                    label='Tags'
                    type='text'
                    name='tags'
                />
                <Input
                    label='Categoria'
                    type='text'
                    name='category'
                />
            </form>
        </div>
    )

}