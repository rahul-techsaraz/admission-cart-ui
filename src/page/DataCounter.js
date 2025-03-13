
const DataCounter = () => {
    return(
        <>
        <section className="stats-counter pb-50 wow fadeInRight" id="counter-stats" data-wow-duration="1.4s">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 stats text-center">
                    <p className="counter mb-0"><span className="counting" dataCount="500000">0</span>+</p>
                    <h5>Applications filled</h5>
                </div>
    
                <div className="col-md-6 col-lg-4 stats text-center">
                    <p className="counter mb-0"><span className="counting" dataCount="100000">0</span>+</p>
                    <h5>Admissions done</h5>
                </div>
    
                <div className="col-md-6 col-lg-4 stats text-center">
                    <p className="counter mb-0"><span className="counting" dataCount="1500">0</span>+</p>
                    <h5>Expert Counsellors</h5>
                </div>

            </div>
        </div>
    
    </section>
        </>
    )
}
export default DataCounter