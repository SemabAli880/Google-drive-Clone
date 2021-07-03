import './App.css'
import { useState } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import FileView from './components/FileView/FileView'
import SideIcons from './components/SideIcon/SideIcon'
import GdLogo from './media/google-drive-logo.png'
import { auth, provider } from './firebase'

function App () {
  const [user, setUser] = useState()
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }
  return (
    <div className='App'>
      {
          user ? (
            <>
              <Header />
              <div className='app_main'>
                <Sidebar />
                <FileView />
                <SideIcons />

              </div>
            </>
          ) : (
            <div className='app__login'>
              <img src={GdLogo} alt='Google Drive' />
              <button onClick={handleLogin}>Login to Google Drive</button>
            </div>
          )
        }

    </div>
  )
}

export default App
