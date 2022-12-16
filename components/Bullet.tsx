const Bullet = () => {
    return ( 
        <div className="bullet my-5">
            <div className="row pt-5 me-0">
                <div className="col-lg-6 bg-main rounded-end">
                    <h1 className="p-5">Hi</h1>
                </div>
                <div className="col-lg-5 p-5 text-start">
                    <h1>Attract new clients through engaging video</h1>
                    <p className="text-small">Use Protonn's Magic Mode to create your own interactive video in minutes.
                         Edit with ease. Post it on social media in one click to attract new clients.</p>
                    <div className="style-3">
                        <div className="tour-item ">
                            <div className="tour-desc bg-white">
                                <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div className="d-flex justify-content-center pt-2 pb-2">
                                    <img className="tm-people rounded-circle" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" width={50} height={50}/>
                                </div>
                                <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div className="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Bullet;