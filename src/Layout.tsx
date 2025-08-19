import { Outlet } from "react-router-dom"
import { SearchBar } from "./components/SearchBar"

export const Layout = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1 className="layout-title">
            HealthyFood <sup className="layout-sup">everyday</sup>
        </h1>
        <SearchBar />
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
