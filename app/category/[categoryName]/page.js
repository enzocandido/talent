'use client'

import { usePathname } from 'next/navigation'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './page.module.scss'

export default function UserProfile() {
    const category = usePathname().split("/")[2];

    return (
        <section>
            <Header />
            <div className={styles.category}>
                <h1>{category}</h1>
            </div>
            <Footer />
        </section>
    )
}