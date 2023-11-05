import Link from 'next/link'
import UserCard from '../components/userCard/UserCard'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import styles from './page.module.scss'

export default function Page() {
  return (
    <section>
      <Header />

      <div className={styles.profile}>
        <UserCard
          user="atualuser"
          description="ATUAL Lorem Ipsum is simply dummy text 
                of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap 
                into electronic typesetting, remaining essentially unchanged."
          birthday="01/01"
          joinDate="01/2004"
        />
      </div>

      <Footer />
    </section>
  )
}