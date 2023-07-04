import { Header } from './componentes/Header/Header'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
      <div>
        <Header />
        <ItemListContainer saludo={"Bienvenidos"}/>
      </div>
  )
}
export default App
