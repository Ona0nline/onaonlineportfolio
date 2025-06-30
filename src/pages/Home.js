import React from "react";
import "../css/Home.css";
import Typewriter from 'typewriter-effect';
// import ControlledCarosuel from "../util/ControlledCarosuel";

const Home = () => {
    return (
        <div>

        <div className={"scroll-container"}>

            <div className={"snap-section section1"}>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a id="work" className="nav-link active" href="#projects">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about" target="_blank">About me</a>
                    </li>
                </ul>
                <div className={"typewriter"} id={"name"}>
                    <Typewriter
                        options={{
                            strings: ['Onalerona Zwane', 'OnaOnline', 'Junior Fullstack Dev'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>

            <div className={"snap-section section2"}>

                <section id={"projects"} className="projects-gallery">
                    <div className="projects-container">
                        <div>
                            <h2>Springboot Todo Web App</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Spring todo" className="mb-10 responsive-iframe1" src="https://springboottodowebapp-a48e57bb0bc7.herokuapp.com" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>

                        </div>


                        <div>
                            <h2>Personal</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Persomal site" className="mb-10 responsive-iframe1" src="https://onaonline.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>
                        </div>

                        <div>
                            <h2>Case management system</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Case management system" className="mb-10 responsive-iframe1" src="https://casemanagementsystemlaw.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>
                        </div>

                        <div>
                            <h2>Doodletodo</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Doodletodo" className="mb-10 responsive-iframe1" src="https://doodletodo.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>
                        </div>

                        <div>
                            <h2>Dictionary app</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Dictionary app" className="mb-10 responsive-iframe1" src="https://onareactdictionary.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>
                        </div>

                        <div>
                            <h2>AI Recipe generator</h2>
                            <div className="project-card project-card1">
                                <iframe  title="AI recipe generator" className="mb-10 responsive-iframe1" src="https://airecipegen.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p>Caption</p>
                        </div>


                    </div>
                </section>

                {/*<ControlledCarosuel/>*/}

            </div>

        </div>


            <span className="border border-bottom-5"></span>
            {/*<h1 id="name">Onalerona Zwane</h1>*/}

            <div className="container-fluid" id="htmlBar">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Web Development (Html, Css and Javascript)</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3>React</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3>Python</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "70%" }}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3>Sqlite</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "80%" }}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3>Springboot</h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "40%" }}></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="spinner-border"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-10" id="projects">
                <div className="row">
                    <div className="col-md-12">
                        eslint-disable-next-line
                        <iframe  title="Description of this iframe content" className="mb-10 responsive-iframe" src="https://onaonline.netlify.app/" width="100%" height="600px" frameBorder="0"></iframe>
                        <p id="onaonline" className="mb-10">
                            More
                            <i id="right-arrow" className="bx bx-right-arrow-alt" data-bs-toggle="collapse" data-bs-target="#moreME"></i>
                        </p>
                        <p id="moreME" className="collapse">
                            Onas' Oyster is my personal passion project, born from a deep need to create a tangible space for my most cherished
                            corners of the internet. I’ve packed this content in creative and engaging ways to showcase why these corners are
                            special to me. Onas' Oyster also serves as a playground for my self-teaching endeavors, making it a dynamic and
                            ever-evolving site. I encourage you to explore the "brainchemalt" page, where you'll find uniquely presented content
                            that captures the essence of what I love about these digital treasures.
                        </p>
                    </div>

                    <div className="col-md-12">
                        eslint-disable-next-line
                        <iframe  title="Description of this iframe content" className="responsive-iframe" src="https://suadeclothing.netlify.app/" width="100%" height="600px" frameBorder="0"></iframe>
                        <p id="onaonline" className="mb-10">
                            More
                            <i id="right-arrow" className="bx bx-right-arrow-alt" data-bs-toggle="collapse" data-bs-target="#suade"></i>
                        </p>
                        <p id="suade" className="collapse">
                            Suade is an e-commerce website in development for a nano-business
                            that will soon launch. At this stage, the site features an integrated payment gateway
                            (PayFast), and users can currently log in as guests only. The site is sleek and responsive
                            on mobile phones, offering a smooth user experience across devices. Feel free to explore and
                            interact with the current functionality as we continue to enhance and expand the site’s
                            features.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        eslint-disable-next-line
                        <iframe  title="Description of this iframe content" className="responsive-iframe" src="https://ona0nlineweatherapp.netlify.app/" width="100%" height="600px" frameBorder="0"></iframe>
                        <p id="onaonline" className="mb-10">
                            More
                            <i id="right-arrow" className="bx bx-right-arrow-alt" data-bs-toggle="collapse" data-bs-target="#weather"></i>
                        </p>
                        <p id="weather" className="collapse">
                            This weather app, built with the guidance of a free coding bootcamp (SheCodes), might seem simple at first glance, being
                            "just a weather app." However, it showcases a complex array of skills used in its creation. This project highlights my
                            proficiency in backend JavaScript and working with APIs, demonstrating the depth of my technical knowledge.
                        </p>
                    </div>
                </div>

                <footer>
                    <div className="container-fluid">
                        <p>
                            All of my projects reflect the skills I’ve mentioned, including backend JavaScript, API integration, Git, GitHub, and
                            hosting. They not only showcase my technical abilities but also demonstrate my proficiency in version control and
                            deployment.<br/>
                            <span className="blink" id="contactInfo">
                                Find me here
                                <i className="bx bxs-down-arrow"></i>
                            </span><br/>
                            <i className="bx bxl-github"></i> GitHub: <a href="https://github.com/Ona0nline">ona0nline</a><br/>
                            <i className="bx bxl-instagram"></i> Instagram: <a href="https://www.instagram.com/ona.0nlin4/?hl=en">@ona.0nlin4</a><br/>
                            <i className="bx bx-envelope"></i> Email: onasihle123@gmail.com<br/>
                            <i className="bx bx-phone"></i> Phone: 072 939 6233
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
