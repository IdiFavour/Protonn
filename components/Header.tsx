const Header = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-lg-8 ">
                <div className="header text-center my-5">
                    <h1 className="text-center">Everything you need to grow <br/>your business</h1>
                    <p className="text-wrap mt-4">Protonn does everything you need to start and grow your business. 
                        Attract clients through engaging video content and simplify your business operations.</p>
                    <button className="btn btn-main btn-lg my-2" >Get Started With Protonn Today</button>
                    <div className="my-4 d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-icon">
                                <i className="bi bi-credit-card-2-front-fill text-main fs-5"></i>
                            </button>
                            <p className="mb-0 mt-2 px-3 text-center">No Credit Card needed</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-icon">
                                <i className="bi bi-rocket-takeoff-fill text-main fs-5"></i>
                            </button>
                            <p className="mb-0 mt-2 px-3 text-center">Free 3-month trial</p>
                        </div>
                        
                    </div>
                            
                </div>
            </div>
        </div>
        
     );
}
 
export default Header;