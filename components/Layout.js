import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>  
    <Nav/>
      <div  className={styles.container}>
        {children}
      </div>
   </>

  )
}

export default Layout