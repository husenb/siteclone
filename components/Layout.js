import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>  
    <Nav/>
      <div  className={styles.container}>
        {children}
      </div>
      <Footer/>
   </>

  )
}

export default Layout