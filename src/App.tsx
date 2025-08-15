import { RecipesList } from './components/RecipesList'
import { SearchBar } from './components/SearchBar'
import './App.css'

export const App = () => {
  return (
    <div>
       <h1 className="text-3xl text-center font-bold mb-3">
        HealthyFood <sup className="text-xl text-emerald-700">everyday</sup>
      </h1>
      <SearchBar />
      <RecipesList />
    </div>
  )
}
