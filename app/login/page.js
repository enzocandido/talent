import styles from './page.module.scss'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LoginForm from '../components/loginForm/LoginForm'
import Button from '../components/button/Button'

export default function Page() {
  return (
    <section>
      <Header login />
      <div className={styles.login}>
        <LoginForm />
        <Button name="Login" />
      </div>
      <Footer />
    </section>
  )
}