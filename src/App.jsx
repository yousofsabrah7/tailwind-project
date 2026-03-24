
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/main/main'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Section1 classname="min-h-screen"/>
    <Section2/>
    <Section3/>
    <Footer/>
    </>
  )
}

export default App
