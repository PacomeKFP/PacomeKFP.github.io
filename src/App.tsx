
import { useContext } from 'react'
import { About } from './Components/About'
import { NavBar } from './Components/NavBar'
import { Portfolio } from './Components/Portfolio'
import { Resume } from './Components/Resume'
import { Sidebar, SidebarProps } from './Components/Sidebar'
import './style/style.css'
import { NavigationContext } from './Contexts/NavigationContext'


function App() {

  const sidebarProps: SidebarProps = {
    fullname: "Pacome Kengali F.",
    email: "pacomekengafe@gmail.com",
    birthDay: new Date(2004, 6, 29),
    location: "TKC, Yaounde Cameroon",
    phone: 692397042,
    role: "Web Developper"
  }

  const { activePage } = useContext(NavigationContext)

  const PageContent = [
    <About />,
    <Resume />,
    <Portfolio />
  ];

  return (
    <main>
      <Sidebar props={sidebarProps} />

      <div className="main-content">
        <NavBar />

        {PageContent[activePage]}

      </div>

    </main>
  )


}


export default App
