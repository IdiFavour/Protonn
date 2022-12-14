import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg">
            <div className="container p-3 ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Image className="navbar-brand" src="/Protonn.png" width={130} height={80} alt={'Brand Logo'}/>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Use Cases</a>
                    </li>
                    
                </ul>
                <div className="d-flex">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item me-4">
                            <a className="nav-link " href="/">Pricing</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/">Resources</a>
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