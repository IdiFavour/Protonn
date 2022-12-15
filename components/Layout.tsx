import Navbar from './Navbar'
import Header from './Header';
import styles from '../styles/Layout.module.css'

const Layout = ({children}: any) => {
    return ( 
        <>
            <Navbar/>
            <Header/>
            {children} 
        </>
        
    );
}
 
export default Layout;