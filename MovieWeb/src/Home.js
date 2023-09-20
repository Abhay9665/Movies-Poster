import Movies from './Movies'
import Search from './Search'
import { useContext } from 'react'
import { AppContext } from './Contax'

const Home = () => {
  const name = useContext(AppContext)
  return (
    <div>
      <Search />
      <Movies />
      
    </div>
  )
}

export default Home