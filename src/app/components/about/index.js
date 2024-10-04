import React, {useEffect, useState} from "react";
import "./style.css";
import '../../css/fonts.css'
import '../../css/base.css'
import '../../css/main.css'
import '../../css/vendor.css'
import {introdata,} from "../../../content_option";
import Typewriter from "typewriter-effect";


export const About = () => {
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu handler
    const handleToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        console.log("isMenuOpen:", isMenuOpen)
    }, [isMenuOpen])

    return (
        <>
            {loading ? (
                    <div id="preloader">
                        <div id="loader"></div>
                    </div>
                ) :
                <div>
                    <section>
                        <header>
                            <div className="row">

                                <div className="top-bar">
                                    <a className={`menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} href="#"
                                       onClick={handleToggle}>
                                        <span>Menu</span>
                                    </a>

                                    <div className="logo">
                                        <div href="#"
                                             style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>MENU
                                        </div>
                                    </div>

                                    <nav id="main-nav-wrap" className={isMenuOpen ? 'open' : 'closed'}>
                                        {isMenuOpen && <ul className="main-navigation">
                                            <li className="current">
                                                <a className="smoothScroll" href="#intro" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#about" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#resume" title=""
                                                   onClick={(e) => {
                                                       e.preventDefault(); // Prevent the default anchor link behavior
                                                       setIsMenuOpen(!isMenuOpen)
                                                   }}
                                                >
                                                    Experience
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#portfolio" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#services" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#contact" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>}
                                    </nav>
                                </div>

                            </div>
                        </header>
                        <section id="intro">

                            <div className="intro-overlay"></div>

                            <div className="intro-content">
                                <div className="row">
                                    <div className="col-twelve">
                                        <h1>I'm Mahima</h1>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    introdata.animated.first,
                                                    introdata.animated.second,
                                                    introdata.animated.third,
                                                    introdata.animated.forth,
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 10,
                                            }}
                                        />
                                        <br/>
                                        <p className="intro-position">
                                            <span>Full Stack Developer</span>
                                        </p>

                                        <a className="button stroke smoothScroll" href="#about" title="">More About
                                            Me</a>

                                    </div>

                                </div>
                            </div>

                            <ul className="intro-social">
                                <li><a href="https://www.linkedin.com/in/mahimasharma16/"
                                       target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li><a href="https://github.com/mahimasharma72"
                                       target={"_blank"} rel="noreferrer"><i className="fa fa-code"></i></a>
                                </li>
                            </ul>

                        </section>


                        <section id="about">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>About</h5>
                                    <h1>Let me introduce myself.</h1>

                                    <div className="intro-info">

                                        <img src="/images/profile-pic.png" alt="Profile Picture"/>

                                        <p className="lead">{introdata.description}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="row about-content">

                                <div className="col-six tab-full">

                                    <h3>Profile</h3>

                                    <ul className="info-list">
                                        <li>
                                            <strong>Full Name:</strong>
                                            <span>Mahima Sharma</span>
                                        </li>
                                        <li>
                                            <strong>Birth Date:</strong>
                                            <span>May 12, 2000</span>
                                        </li>
                                        <li>
                                            <strong>Job:</strong>
                                            <span>Full Stack Developer</span>
                                        </li>
                                        <li>
                                            <strong>Website:</strong>
                                            <span>www.mahimasharma12.com</span>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>
                                            <span><a href="mailto:mahimasharmaynr2000@gmail.com">mahimasharmaynr2000@gmail.com</a> </span>

                                        </li>

                                    </ul>

                                </div>

                                <div className="col-six tab-full">

                                    <h3>Skills</h3>

                                    <ul className="skill-bars">
                                        <li>
                                            <div className="progress percent90"><span>90%</span></div>
                                            <strong>HTML5</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent85"><span>85%</span></div>
                                            <strong>CSS3</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent70"><span>70%</span></div>
                                            <strong>Bootstrap</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>React</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>NextJS</strong>
                                        </li>

                                        <li>
                                            <div className="progress percent75"><span>75%</span></div>
                                            <strong>Typescript</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>React Native</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>NodeJS</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>ExpressJS</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>Prisma ORM</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>Postgres</strong>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="row button-section">
                                <div className="col-twelve">
                                    <a href="#contact" title="Hire Me" className="button stroke smoothScroll">Hire
                                        Me</a>
                                    <a href="/mahima_resume.pdf" download="mahima_resume.pdf" title="Download CV"
                                       className="button button-primary">Download CV</a>
                                </div>
                            </div>

                        </section>
                        <section id="resume" className="grey-section">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Experience</h5>
                                    <h1>More of my credentials.</h1>

                                    <p className="lead">{introdata.shortDescription}</p>

                                </div>
                            </div>

                            <div className="row resume-timeline">

                                <div className="col-twelve resume-header">

                                    <h2>Work Experience</h2>

                                </div>
                                <div className="col-twelve">

                                    <div className="timeline-wrap">

                                        <div className="timeline-block">

                                            <div className="timeline-ico">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>

                                            <div className="timeline-header">
                                                <h3>Full Stack Developer</h3>
                                                <p>July 2022 - Present</p>
                                            </div>

                                            <div className="timeline-content">
                                                <h4>Responsibilities</h4>

                                                <p style={{color: "black"}}
                                                   dangerouslySetInnerHTML={{__html: introdata.experience}}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row resume-timeline">

                                <div className="col-twelve resume-header">

                                    <h2>Education</h2>

                                </div>

                                <div className="col-twelve">

                                    <div className="timeline-wrap">
                                        <div className="timeline-block">

                                            <div className="timeline-ico">
                                                <i className="fa fa-briefcase"></i>
                                            </div>

                                            <div className="timeline-header">
                                                <h3>Masters Degree</h3>
                                                <p>July 2022 - May 2022</p>
                                            </div>

                                            <div className="timeline-content">
                                                <h4>Master of Computer Applications</h4>
                                                <p style={{color: "black"}}>Kurukshetra University, University Institute
                                                    Of
                                                    Engineering and Technology,
                                                    Post Graduated with 79%, acquiring a strong foundation in
                                                    software development, database management, and IT systems.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                        <section id="portfolio">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>PROJECTS</h5>
                                    <h1>Check Out Some of My Works.</h1>

                                    <p className="lead">{introdata.myWork}</p>

                                </div>
                            </div>

                            <div className="row portfolio-content">

                                <div className="col-twelve">

                                    <div id="folio-wrapper" className="block-1-2 block-mob-full stack">


                                        <div className="bgrid folio-item">
                                            <div className="item-wrap">
                                                <img src="/images/portfolio/foodies.jpg" alt="Shutterbug"/>
                                                <a href="https://beta.foodiesonly.in/" className="overlay"
                                                   target={"_blank"} rel="noreferrer">
                                                    <div className="folio-item-table">
                                                        <div className="folio-item-cell">
                                                            <h3 className="folio-title">Foodies Only</h3>
                                                            <span className="folio-types">
		     					       	  Full-Stack Developer
		     					      </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>


                                        <div className="bgrid folio-item">
                                            <div className="item-wrap">
                                                <img src="/images/portfolio/study.jpg" alt="Shutterbug"/>
                                                <a href="https://www.app.viaductlearn.com/" className="overlay"
                                                   target={"_blank"} rel="noreferrer">
                                                    <div className="folio-item-table">
                                                        <div className="folio-item-cell">
                                                            <h3 className="folio-title">Viaduct</h3>
                                                            <span className="folio-types">
		     					       	  Back-End Developer
		     					      </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="bgrid folio-item">
                                            <div className="item-wrap">
                                                <img src="/images/portfolio/tourism.jpg" alt="Clouds"/>
                                                <a href="https://www.itinker.io/" className="overlay" target={"_blank"}
                                                   rel="noreferrer">
                                                    <div className="folio-item-table">
                                                        <div className="folio-item-cell">
                                                            <h3 className="folio-title">iTinker Website</h3>
                                                            <span className="folio-types">
		     					       	  Front-End Developer
		     					      </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="bgrid folio-item">
                                            <div className="item-wrap">
                                                <img src="/images/portfolio/gold.jpg" alt="Liberty"/>
                                                <a href="https://www.mmtcpamp.com/" className="overlay"
                                                   target={"_blank"} rel="noreferrer">
                                                    <div className="folio-item-table">
                                                        <div className="folio-item-cell">
                                                            <h3 className="folio-title">MMTC PAMP</h3>
                                                            <span className="folio-types">
		     					       	  Front-End Developer
		     					       </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>


                                        <div id="modal-0F1" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="/images/portfolio/modals/m-liberty.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Liberty</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Web Development</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>

                                        <div id="modal-02" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="images/portfolio/modals/m-shutterbug.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Shutterbug</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Web Design</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>

                                        <div id="modal-03" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="images/portfolio/modals/m-clouds.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Clouds</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Web Design</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>

                                        <div id="modal-04" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="images/portfolio/modals/m-beetle.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Beetle</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Branding</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>

                                        <div id="modal-05" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="images/portfolio/modals/m-lighthouse.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Lighthouse</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Web Development</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>

                                        <div id="modal-06" className="popup-modal slider mfp-hide">

                                            <div className="media">
                                                <img src="images/portfolio/modals/m-salad.jpg" alt=""/>
                                            </div>

                                            <div className="description-box">
                                                <h4>Salad</h4>
                                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                                    lorem quis bibendum auctor,
                                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                                <div className="categories">Branding</div>
                                            </div>

                                            <div className="link-box">
                                                <a href="http://www.behance.net">Details</a>
                                                <a href="#" className="popup-modal-dismiss">Close</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="services">

                            <div className="overlay"></div>

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Services</h5>
                                    <h1>What Can I Do For You?</h1>

                                    <p className="lead">{introdata.whatCanIDo}</p>

                                </div>
                            </div>

                            <div className="row services-content">

                                <div id="owl-slider" className="owl-carousel services-list">

                                    <div className="service">

                                        <span className="icon"><i className="icon-earth"></i></span>

                                        <div className="service-content">

                                            <h3>Webdesign</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-window"></i></span>

                                        <div className="service-content">

                                            <h3>Web Development</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-paint-brush"></i></span>

                                        <div className="service-content">

                                            <h3>Branding</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-toggles"></i></span>

                                        <div className="service-content">

                                            <h3>UI/UX Design</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-image"></i></span>

                                        <div className="service-content">

                                            <h3>Graphics Design</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-chat"></i></span>

                                        <div className="service-content">

                                            <h3>Consultancy</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="stats" className="count-up">

                            <div className="row">
                                <div className="col-twelve">

                                    <div className="block-1-4 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-pencil-ruler"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                4+
                                            </h3>

                                            <h5 className="stat-title">
                                                Projects Completed
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-badge"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                2+
                                            </h3>

                                            <h5 className="stat-title">
                                                Live Projects
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-pie-chart"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                3
                                            </h3>

                                            <h5 className="stat-title">
                                                Pending/Upcoming Project
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-clock"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                7200+
                                            </h3>

                                            <h5 className="stat-title">
                                                Hours
                                            </h5>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </section>


                        <section id="contact">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Contact</h5>
                                    <h1>I'd Love To Hear From You.</h1>

                                    <p className="lead">
                                        Feel free to reach out at <b>
                                        <a href="mailto:mahimasharmaynr2000@gmail.com">mahimasharmaynr2000@gmail.com</a>
                                    </b>! Whether you have a project in mind, need advice, or just want to connect, I’m
                                        always open to new opportunities
                                        and collaborations. Let’s discuss how I can help bring your ideas to life.
                                    </p>

                                </div>
                            </div>
                            {/*                  <div className="row contact-form">*/}

                            {/*                      <div className="col-twelve">*/}

                            {/*                          <form onSubmit={handleSubmit}>*/}
                            {/*                              <fieldset>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactName"*/}
                            {/*                                          type="text"*/}
                            {/*                                          id="contactName"*/}
                            {/*                                          placeholder="Name"*/}
                            {/*                                          value={formData.contactName}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                          minLength="2"*/}
                            {/*                                          required*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactEmail"*/}
                            {/*                                          type="email"*/}
                            {/*                                          id="contactEmail"*/}
                            {/*                                          placeholder="Email"*/}
                            {/*                                          value={formData.contactEmail}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                          required*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactSubject"*/}
                            {/*                                          type="text"*/}
                            {/*                                          id="contactSubject"*/}
                            {/*                                          placeholder="Subject"*/}
                            {/*                                          value={formData.contactSubject}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*<textarea*/}
                            {/*    name="contactMessage"*/}
                            {/*    id="contactMessage"*/}
                            {/*    placeholder="Message"*/}
                            {/*    rows="10"*/}
                            {/*    cols="50"*/}
                            {/*    value={formData.contactMessage}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    required*/}
                            {/*/>*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <button className="submitform" type="submit" disabled={loading}>*/}
                            {/*                                          {loading ? 'Sending...' : 'Submit'}*/}
                            {/*                                      </button>*/}
                            {/*                                      {sent && <div>Message Sent!</div>}*/}
                            {/*                                      {error && <div>Failed to send. Try again later.</div>}*/}
                            {/*                                  </div>*/}

                            {/*                              </fieldset>*/}
                            {/*                          </form>*/}

                            {/*                          <div id="message-warning">*/}
                            {/*                          </div>*/}
                            {/*                          <div id="message-success">*/}
                            {/*                              <i className="fa fa-check"></i>Your message was sent, thank you!<br/>*/}
                            {/*                          </div>*/}

                            {/*                      </div>*/}

                            {/*                  </div>*/}

                            <div className="row contact-info">

                                <div className="col-four tab-full">

                                    <div className="icon">
                                        <i className="icon-pin"></i>
                                    </div>

                                    <h5>Where to find me</h5>

                                    <p>
                                        CP-67, Sector 67<br/>
                                        Mohali<br/>
                                        160055 INDIA
                                    </p>

                                </div>

                                <div className="col-four tab-full ">

                                    <div className="icon">
                                        <i className="icon-mail"></i>
                                    </div>

                                    <h5>Email Me At</h5>

                                    <p><a href="mailto:mahimasharmaynr2000@gmail.com">mahimasharmaynr2000@gmail.com</a></p>

                                </div>

                                <div className="col-four tab-full">

                                    <div className="icon">
                                        <i className="icon-phone"></i>
                                    </div>

                                    <h5>Call Me At</h5>

                                    <p>Phone: <a href="tel:+919817839540">(+91) 9817839540</a><br/></p>

                                </div>

                            </div>

                        </section>


                        <footer>
                            <div className="row align-center">

                                <div className=" tab-full pull-right social">

                                    <ul className="footer-social pt-5">
                                        <li><a href="https://www.linkedin.com/in/mahimasharma16/"
                                               target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li><a href="https://github.com/mahimasharma72"
                                               target={"_blank"} rel="noreferrer"><i className="fa fa-code"></i></a>
                                        </li>
                                    </ul>

                                </div>

                                <div id="go-top">
                                    <a className="smoothScroll" title="Back to Top" href="#top"><i
                                        className="fa fa-long-arrow-up"></i></a>
                                </div>

                            </div>
                        </footer>

                        <script src="../../js/jquery-2.1.3.min.js"></script>
                        <script src="../../js/plugins.js"></script>
                        <script src="../../js/main.js"></script>

                        {/*</body>*/}
                    </section>
                </div>}
        </>
    );
};
