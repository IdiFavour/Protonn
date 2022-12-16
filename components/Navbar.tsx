import Image from 'next/image'
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg">
            <div className="container p-3 px-4">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Image className="navbar-brand pt-0 me-4" src="/Protonn.png" width={130} height={77} alt={'Brand Logo'}/>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <Link className="nav-link active"  href='/'>Product</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link "  href='/'>Use Cases</Link>   
                        </li>
                        
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link className="nav-link "  href='/prices'>Pricing</Link>
                            
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link "  href='/'>Resources</Link>
                                
                            </li>
                            <button className="btn btn-main" type="submit">Get Started</button>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;