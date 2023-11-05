import styles from './signupForm.module.scss'
import Input from '../input/Input'

export default function Form() {
    return (
        <div className={styles.form}>
            <form>
                <Input
                    label='Nome'
                    type='text'
                    name='name'
                    placeholder='Digite seu nome'
                />
                <Input
                    label='Usuário'
                    type='text'
                    name='user'
                    placeholder='Digite um nome de usuário'
                />
                <Input
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Digite seu email'
                />
                <Input
                    label='Data de Nascimento'
                    type='date'
                    name='birth_date'
                />
                <Input
                    label='Senha'
                    type='password'
                    name='password'
                    placeholder='Digite uma senha'
                />
                <Input
                    label='Confirmação Senha'
                    type='password'
                    name='password_confirmation'
                    placeholder='Digite novamente a senha'
                />
            </form>
        </div>
    )

}