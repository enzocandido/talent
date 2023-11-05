import styles from './page.module.scss'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import UploadForm from '../components/uploadForm/UploadForm'
import Button from '../components/button/Button'

export default function Page() {
  return (
    <section>
      <Header />
      <div className={styles.upload}>
        <UploadForm />
        <Button name="Enviar" />
      </div>
      <Footer />
    </section>
  )
}