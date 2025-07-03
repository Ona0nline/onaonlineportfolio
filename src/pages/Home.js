import React from "react";
import "../css/Home.css";
import Typewriter from 'typewriter-effect';
import MyPieChart from "../util/MyPieChart";

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
                        <a className="nav-link" href="#aboutMe">About me</a>
                    </li>
                </ul>
                <div className={"typewriter"} id={"name"}>
                    <Typewriter
                        options={{
                            strings: ['Onalerona Zwane', 'Junior Fullstack Dev', 'OnaOnline'],
                            autoStart: true,
                            loop: true,
                            delay: 45,
                        }}
                    />
                </div>
            </div>

            <div className={"snap-section section2"}>

                <section id={"projects"} className="projects-gallery">
                    <div className="projects-container">
                        <div>
                            <h2>Law Case management system</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Case management system" className="mb-10 responsive-iframe1" src="https://casemanagementsystemlaw.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}>
                                <b>My first full-stack project:</b>
                                A simple case management system
                                built with Flask (Python) for the backend and React for the frontend.
                                It was designed to help replicate the basic workflow a law firm secretary
                                might use to record and look up client cases.<br/><br/>
                                <b>Key features:</b> <br/>
                                <b>Add New Case:</b> Form submission sends a POST request to the Flask API to store client details (name, case number, alleged crime) in a CSV file.
                                List Cases by Crime Type: A GET request retrieves and filters cases from the CSV by the "crime" category, enabling basic search functionality.
                                Basic Frontend: Minimal React interface focused on demonstrating connectivity with the API.
                                This project taught me the fundamentals of RESTful API design, handling HTTP requests and responses, and connecting a frontend to a simple persistent storage solution—even without a formal database.</p>
                        </div>

                        <div>
                            <h2>DoodleTodo (React To-do list app)</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Doodletodo" className="mb-10 responsive-iframe1" src="https://doodletodo.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}><b>DoodleTodo</b><br/>
                                A simple React-based to-do list application designed to help users
                                prioritize tasks more thoughtfully. It separates tasks into three
                                intuitive categories to encourage intentional planning, instead of
                                using a single undifferentiated list.<br/><br/>
                                <b>Key features:</b><br/>

                                <i>"I Must":</i> Highest-priority, non-negotiable tasks.<br/>
                                <i>"I Should":</i>Important but less urgent commitments.<br/>
                                <i>"I Could":</i> Optional or nice-to-have tasks.<br/>

                                Clean React Interface: Add, edit, and delete tasks in their respective categories.
                                Intuitive Layout: Encourages clear prioritization and structured planning.
                                Local State Management: Keeps the app lightweight and responsive without needing external storage.
                                This project reflects my focus on both functionality and user-centered design, aiming to make daily planning feel less overwhelming and more organized.

                            </p>
                        </div>

                        <div>
                            <h2>AI Recipe generator</h2>
                            <div className="project-card project-card1">
                                <iframe  title="AI recipe generator" className="mb-10 responsive-iframe1" src="https://airecipegen.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}>
                                <b>AI Recipe generator</b><br/>
                                A Python-based app that generates creative, sensible recipes from any
                                list of ingredients using the SheCodes AI API. Users simply enter as
                                many random ingredients as they like, and the app returns a coherent,
                                tailored recipe suggestion.<br/><br/>
                                <b>Key features and technologies:</b><br/>
                                Python scripting to collect user input and format API requests.<br/>
                                External API integration with SheCodes AI to generate recipe text
                                dynamically.<br/>
                                Prompt engineering to guide the AI toward clear, useful, and readable
                                recipe outputs.<br/>
                                This project demonstrates my ability to work with third-party APIs,
                                design effective prompts for AI-generated content, and create
                                user-friendly, practical tools using Python.</p>
                        </div>

                        <div>
                            <h2>Springboot Todo Web App</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Spring todo" className="mb-10 responsive-iframe1" src="https://springboottodowebapp-a48e57bb0bc7.herokuapp.com" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}>
                                <b>Springboot Todo Web App</b><br/>
                                As part of the in28Minutes Spring Boot course on Udemy, I developed
                                a Java web application to manage personal to-do items with full CRUD
                                functionality.<br/><br/>
                                <b>Key features and technologies:</b><br/>

                                <b>Spring Web MVC:</b> Controllers and JSP views to serve dynamic HTML
                                pages.<br/>
                                <b>Spring Security:</b> Secure login system with authentication and
                                access control.<br/>
                                <b>Spring Data JPA:</b> Persistent storage in a relational database
                                with repository interfaces for easy data access.<br/>

                                This project showcases my ability to build secure, database-driven web applications using the Spring Boot framework and the MVC design pattern.</p>

                        </div>

                        <div>
                            <h2>Dictionary app</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Dictionary app" className="mb-10 responsive-iframe1" src="https://onareactdictionary.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}>
                                <b>Dictionary app</b><br/><br/>
                                A clean, responsive dictionary application built with React, allowing
                                users to look up words in real time using the Dictionary API.<br/>

                                <b>Key features:</b><br/>

                                <b>Live Search:</b> Fetches and displays definitions, phonetics, and
                                usage examples instantly.<br/>
                                <b>Image Results:</b> Displays relevant pictures to help illustrate
                                each word’s meaning.<br/>
                                <b>API Integration:</b> Connects to the Dictionary API for accurate and
                                up-to-date results.<br/>
                                <b>Simple, Intuitive UI:</b> Designed for quick lookups and ease of use.<br/>

                                This project demonstrates my React frontend development skills, API integration, and focus on creating helpful, user-friendly educational tools.</p>
                        </div>


                        <div>
                            <h2>Personal</h2>
                            <div className="project-card project-card1">
                                <iframe  title="Persomal site" className="mb-10 responsive-iframe1" src="https://onaonline.netlify.app/" width="100%" height="700px" frameBorder="0"></iframe>
                            </div>
                            <p className={"captions"}>Caption</p>
                        </div>


                    </div>
                </section>

            </div>

        </div>

            <section id={"aboutMe"}>
                <div className={"aboutMeContainer"}>
                    <MyPieChart/>

                </div>
            </section>



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
