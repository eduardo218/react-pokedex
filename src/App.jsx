import './App.scss'
import Navbar from './components/navbar/navbar.component'

import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Search from './routes/search/search.component'
import Random from './routes/random/random.component'
import PokemonDetails from './routes/pokemon-details/pokemon-details.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='search' element={<Search />}/>
        <Route path='random' element={<Random />}/>
        <Route  path='details/:name' element={<PokemonDetails />} />
      </Route>
    </Routes>
  )
}

export default App