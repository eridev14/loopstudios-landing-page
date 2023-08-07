import { Header } from './components/Header/Header';
import imgLogo from '../public/assets/images/logo.svg';
import burger from '../public/assets/images/icon-hamburger.svg';
import { MainSection } from './components/SectionMain/SectionMain';
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <>
      <Header imgLogo={imgLogo} burger={burger}/>
      <MainSection />
      <Footer imgLogo={imgLogo} />
    </>
  )
}

export default App
