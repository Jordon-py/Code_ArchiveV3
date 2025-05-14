import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar.jsx' // Updated import path
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './App.css'


function App() {
  return (
    <>
      <Sidebar
        logo={reactLogo}
        links={[
          { label: 'Vite', href: 'https://vite.dev' },
          { label: 'React', href: 'https://react.dev' },
        ]}
      />
    </>
  )
}

export default App
