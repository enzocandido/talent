import styles from './loginForm.module.scss'
import Input from '../input/Input'

export default function Form() {
    return (
        <div className={styles.form}>
            <form>
                <Input
                    label='Usuário'
                    type='text'
                    name='user'
                    placeholder='Digite seu usuário'
                />
                <Input
                    label='Senha'
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                />
            </form>
        </div>
    )
}