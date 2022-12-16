import Navbar from './Navbar'
import Header from './Header';
import Quote from './Quote';
import Bullet from './Bullet';
import styles from '../styles/Layout.module.css'

const Layout = ({children}: any) => {
    return ( 
        <>
            <Navbar/>
            <Header/>
            <Quote/>
            <Bullet/>
            {children} 
        </>
        
    );
}
 
export default Layout;