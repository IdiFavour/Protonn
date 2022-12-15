import Navbar from './Navbar'
import Header from './Header';
import Quote from './Quote';
import styles from '../styles/Layout.module.css'

const Layout = ({children}: any) => {
    return ( 
        <>
            <Navbar/>
            <div className="con">
                <Header/>
                <Quote/>
            </div>
            {children} 
        </>
        
    );
}
 
export default Layout;