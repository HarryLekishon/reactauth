import React from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


function Home() {
    return (

        <div>

            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={process.env.PUBLIC_URL + '/images/hospital.jpg'}
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={process.env.PUBLIC_URL + '/images/mh5.png'}
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={process.env.PUBLIC_URL + '/images/children.jpg'}
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>

            <section className="info">
                <div className="container text-center">
                    <h3 className="info-headin text-center mt-5 lg">
                        Welcome to Golden Life International
                    </h3>
                    <p className="mb-5" style={{ color: "black" }}>
                        Golden Life International foundation is an intrernational foundation that focuses on community programs that foster 
                        mental well being and growth. Golden life foundation also offers exceptional rehabilitation services through our treatment center located in Naivasha. Our individualized care is clinically advanced so we can help an individual 
                        overcome alcohol addiction and develop lifelong tools for recovery. Our Community programs include school based therapy, corprate or workplace therapy, adolscent and youth therapy and 
                        baby therapy
                    </p>

                    <div className="grid grid-3">
                        <div className="card1">
                            <i className="fa-solid fa-ribbon fa-3x" style={{ color: 'green', marginBottom: '15px' }}></i>
                            <h3 style={{ color: "blue" }}>Rehabilitation</h3>
                            <p style={{ color: "black" }}> Golden Life helps clients with inability to stop using alcohol and substance or engaging in behaviour that
                            causes phyisiological or physical harm through counselling, detoxification and rehabilitation in a state of the art environment.</p>

                            <input style={{ backgroundColor: "gold" }} type="submit" value="Learn more" className="btn" />
                        </div>

                        <div className="card1">
                            <i className="bi-solid bi-globe fa-3x" style={{ color: "blue" }}></i>
                            <h3 style={{ color: "blue" }}>Global Practices</h3>
                            <p style={{ color: "black" }}>Golden life privides the highest quality rehab service through following globally accepted standards of rehabilitation treatment.
                            the major steps iclude detoxification, recovery and mental health repair</p>

                            <input style={{ backgroundColor: "gold" }} type="submit" value="Learn more" className="btn" />
                        </div>

                        <div className="card1">
                            <i className="bi bi-people-fill fa-3x"></i>
                            <h3 style={{ color: "blue" }}>Community Outreach</h3>
                            <p style={{ color: "black" }}>Golden Life foundation offers a number of programs that are tailored around community mental health care and support.
                             These include school based therapy, corporate therapy, religious therapy and youth or adolscent therapy</p>

                            <input style={{ backgroundColor: "gold" }} type="submit" value="Learn more" className="btn" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="about">
                <div className="card2 container grid">
                    <div className="about-content">
                        <h1 className="logo" style={{ color: "rgb(193, 196, 66)" }}>Why the GoldenLife Foundation</h1>
                        <p style={{ color: "black", fontSize: "16px"}}>The goldenlife international foundation Kenya works with major insurance carriers and want to provide you with effective
                        addiction treatment regardles your financial situation. Our treatment specialist take your information and craft a persolized treatment developed just for you</p>

                        <input style={{ backgroundColor: "gold" }} type="submit" value="Learn more" className="btn" />
                    </div>

                    <img src={process.env.PUBLIC_URL + '/images/doctor.jpg'} alt="" />
                    

                </div>
            </section>

            <section className="partners text-center">
                <h2>Our Partners</h2>

                <div className="container flex">
                    <div className="card">
                        <h4>Kleo</h4>
                        <img src={process.env.PUBLIC_URL + '/images/node.png'} alt="" />
                    </div>
                    <div className="card">
                        <h4>Focus</h4>
                        <img src={process.env.PUBLIC_URL + './images/python.png'} alt="" />
                    </div>
                    <div className="card">
                        <h4>Uhai</h4>
                        <img src={process.env.PUBLIC_URL + './images/csharp.png'} alt="" />
                    </div>
                    <div className="card">
                        <h4>Seven Hills</h4>
                        <img src={process.env.PUBLIC_URL + '/images/ruby.png'} alt="" />
                    </div>
                </div>

            </section>

        </div>

    )
}

export default Home
