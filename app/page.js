import Header from './components/header/Header'
import About from './components/about/About'
import Videos from './components/videos/Videos'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <section>
      <Header />
      <About />
      <Videos />
      <Footer />
    </section>
  )
}