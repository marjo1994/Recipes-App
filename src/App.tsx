import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecipesList } from './components/RecipesList'
import { Layout } from "./Layout";
import './App.css'
import { SingleRecipePage } from "./pages/SingleRecipePage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RecipesList />}/>
          <Route path="/recipe/:id" element={<SingleRecipePage />}/>
        </Route>
      </Routes>
    </Router>
  )
}
