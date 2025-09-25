import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>      
    </>
  )
}

export default App;
