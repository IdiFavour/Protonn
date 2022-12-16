const Header = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 ">
                    <div className="header my-5">
                        <h1>Everything you need to grow <br/>your business</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 my-4 text-black-50">
                                    
                                    <p>Protonn does everything you need to start and grow your business. 
                                        Attract clients through engaging video content and simplify your business operations.
                                    </p> 
                                </div>
                            </div>
                            
                        <button className="btn btn-main btn-lg my-2" >Get Started With Protonn Today</button>
                        <div className="my-4 justify-content-center d-grid gap-2 d-md-flex">
                            <div className="mt-2 d-flex justify-content-center">
                                <button className="btn btn-icon">
                                    <i className="bi bi-credit-card-2-front-fill"></i>
                                </button>
                                <p className="mb-0 mt-2 px-3 ">No Credit Card needed</p>
                            </div>
                            <div className="mt-2 d-flex justify-content-center">
                                <button className="btn btn-icon">
                                    <i className="bi bi-rocket-takeoff-fill"></i>
                                </button>
                                <p className="mb-0 mt-2 px-3">Free 3-month trial</p>
                            </div>
                            
                        </div>
                                
                    </div>
                </div>
            </div>
        </div>
        
        
     );
}
 
export default Header;