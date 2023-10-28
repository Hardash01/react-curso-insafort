import { Carousel } from "./components/Carousel"
import { Nabvar } from "./components/Nabvar"
import { Footer } from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Nabvar />
      <Carousel />
      <Header title="pruebas de props"/>
      <Header title="Bosque en la noche" name="Noche en el bosque" category="imagenes de noche"/>
      <Header title="Ciudad en la noche" name="Noche en la ciudad" category="imagenes de noche"/>
      <Footer />
    </>
  )
}

export default App
