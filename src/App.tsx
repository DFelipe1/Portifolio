import { About } from './components/About'
import { MyProject } from './components/MyProject'
import { Profile } from './components/Profile'

import styles from './styles/app.module.css'

export function App() {
 
  return ( 
    <div className={styles.container}>
      <Profile />
      <main className={styles.content}>
        <About/>
        <MyProject/>
      </main>
    </div>
  )
}


