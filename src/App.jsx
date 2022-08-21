import './App.scss'
import Navbar from './components/navbar/navbar.component'

import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Search from './routes/search/search.component'
import Random from './routes/random/random.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='search' element={<Search />}/>
        <Route path='random' element={<Random />}/>

      </Route>
    </Routes>
  )
}

export default App