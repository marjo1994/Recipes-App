import { ListRecipes } from './components/ListRecipes'
import './App.css'

const App = () => {
  return (
    <div>
       <h1 className="text-3xl font-bold">
        Recipes App
      </h1>
      <ListRecipes></ListRecipes>
    </div>
  )
}

export default App;

