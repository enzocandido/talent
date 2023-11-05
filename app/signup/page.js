import styles from './page.module.scss'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SignupForm from '../components/signupForm/SignupForm'
import Button from '../components/button/Button'

export default function Page() {
  return (
    <section>
      <Header />
      <div className={styles.signup}>
        <SignupForm />
        <Button name="Criar Conta" />
      </div>
      <Footer />
    </section>
  )
}