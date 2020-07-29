import Profile from './components/Profile'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Modals from './components/Modal'
import Particles from 'react-particles-js'
import React, { useState } from 'react'

function App() {
    return (
        <div className="">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 7000,
                            },
                        },
                        size: {
                            value: 5,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                    },
                }}
                style={{
                    width: '100%',
                    zIndex: '-1',
                    position: 'fixed',
                }}
            />
            <div className="main">
                <Profile
                    name="Akshay Patel"
                    pic={require('./images/headshot.jpg')}
                    bio="I'm currently a sophomore in UC Berkeley's Management, Entrepreneurship, and Technology (M.E.T.) program, pursuing a dual degree in Electrical Engineering & Computer Science and Business Administration. Currently, I am exploring my interests in machine learning, computer vision, and augmented reality.My goal is to explore the varied fields of technology and entrepreneurship.Please feel free to reach out at _akshaypatel_ @berkeley.edu "
                    tag="Resume"
                    title="University of California, Berkeley M.E.T 23'"
                />
            </div>
            {/** This is my experience section*/}
            <div className="content">
                <div className="test"><h2> My Experiences </h2></div>
                <div class="grid-container">
                    <Modals
                        name="1910 Genetics"
                        pic={require('./images/1910.png')}
                        description="1910 Genetics is a startup focused on AI-driven small molecule and protein design."
                        timeline="June, 2020 - August,2020"
                        title="Machine Learning Infrastructure Engineering Intern "
                        bullets={
                            ["hello"]
                        }
                    />
                    <Modals
                        name="Los Angeles County Department of Public Health"
                        pic={require('./images/LA.gif')}
                        description="LA County Department of Public Health is currently performing research regarding the proximity of cell towers to schools and hospitals."
                        timeline=" April. 2020 – May 2020"
                        title="Data Analyst"
                        bullets={[
                            'Documented procedures and processed raw data to create an interactive tableau dashboard for a research paper',
                            'Performed statistical analyses in RStudio to determine the density of cell towers in proximity to schools & hospitals.',
                            'Utilized sqldf, readxl, and lubricate packages, and generated SQL queries for statistical analysis.',
                        ]}
                    />
                    <Modals
                        name="Blendoor"
                        pic={require('./images/blendoor.PNG')}
                        description="Company: Blendoor evaluates companies based on factors such as equity metrics, diversity, recruiting practices, leadership, among others to generate a 'BlendScore' for each company."
                        timeline="Jan. 2020 - May 2020"
                        title="Software Developer"
                        bullets={[
                            "BlendScore Automation Project: In a team of 5 engineers on the M.E.T Bulletin Board (Technical Consulting Organization), our goal was to automate the BlendScore calculation through a web interface where admin users can edit certain qualitative and quantitative variables related to a company in order to produce an updated BlendScore. After updating Blendoor's score calculation algorithms, we built a RESTful API with python and Flask to run backend python scripts that would execute SQL queries to communicate with Blendoor's internal database and used AngularJS, TypeScript, and HTML/CSS to build the frontend UI",
                        ]}
                    />
                    <Modals
                        name="Ginger Analytics, LoopChat/LoopPay"
                        pic={require('./images/Loop.png')}
                        description="LoopChat is a Berkeley based fintech focused on convenience, inclusion and efficiency in the financial system."
                        timeline="Aug. 2019 - Feb. 2020"
                        title="Product Management Intern"
                        bullets={[
                            'Assisted creation of the architecture for various mini-apps available on LoopChat such as club and class database.',
                            'Streamlined business strategies focused on increasing user downloads and retention through gamifying the platform.',
                            'Implemented procedures that increased downloads by 32% and marketed to various departments at UC Berkeley.',
                            'Proposed simplification plan of UI/UX of the app and presented to internal and external stakeholders.',
                        ]}
                    />
                    <Modals
                        name="Trashbots"
                        pic={require('./images/trashbots.png')}
                        description="Trashbots is a technology start up develops low-cost science and engineering kits with a structured curriculum that enables students to develop problem-solving skills and enhance their creativity by building robots that utilize materials from the world around them"
                        timeline="June 2018 - Feb. 2020"
                        title="Curriculum Designer"
                        bullets={[
                            'Led a team focused on building future curriculums which are accessible on the website and available for children in other countries',
                            'Devised a 3D-printing CAD curriculum that enables students to design and print 3D-printed objects using Fusion 360.',
                            'Generated ideas and future applications for computer aided design curriculum kit.',
                            'Determine unique activities and combined the engineering process and programming skills for a teaching curriculum.',
                            'Analyzed competitor’s data set and conducted market research to study competing products such as Lego Mindset and Wonder Workshop Dash & Dot Robots.',
                            'Filmed videos to visualize the engineering activities to determine use cases for the Trashbots educational kit.',
                            'Assembled documents that detailed Objectives of the lesson, Activities that helped learn the lesson, associated vocabulary, and a closing discussion question.',
                            'Designed and created various new pieces for the Trashbots kit; Created large gears and hexagon blocks which fit into the Phoenix Side plate.',
                        ]}
                    />
                    <Modals
                        name="Our Lunch Lady"
                        pic={require('./images/oll.PNG')}
                        description="Our Lunch Lady allows students to purchase food from nearby restaurants and boosts the local economy while providing better food options to students in schools"
                        timeline="Aug, 2017 - Aug, 2018"
                        title="Co-Founder"
                        bullets={[
                            'Scheduled meetings at Capitol factory to develop a web-app and pitched to investors and mentors.',
                            'Developed financial models based different market penetration predictions and COGS and developed a marketing plan.',
                            'Executed a proof of concept trial for a 2-week period at Westlake High School that generated $800 in profit.',
                            'Analyzed the feedback from consumers about the service and quality to make future improvements',
                        ]}
                    />
                    <Modals
                        name="Pensa"
                        pic={require('./images/pensa.png')}
                        description="Pensa operates as data subscription service using an autonomous perception system to obtain and record inventory. "
                        timeline="June, 2019 - Aug, 2019"
                        title="Project Intern"
                        bullets={[
                            'Obtained data from H.E.B on various brands of products to help grow database for AI processing',
                        ]}
                    />
                </div>
            </div>




            {/** This is my experience section*/}
            <div className="content">
                <div className="test"><h2>   My Organizations and Activities </h2></div>
                <div class="grid-container">
                    <Modals name="Berkeley Venture Capital"
                        pic={require("./images/bvc.png")}
                        description="BVS is an undergraduate community empowered to learn and work with leading venture capitalists and entrepreneurs. "
                        timeline="Jan. 2020 - Current"
                        title="Venture Capital Intern"
                        bullets={
                            ["Underwent six-week venture capital curriculum with an emphasis on due diligence, and investment summary.",
                                "Collaborating with local venture capital firms/industry leaders to organize events/speaker series throughout campus"
                            ]
                        }
                    /> <Modals name="UT SAE Longhorn Racing Club"
                        pic={require("./images/ut.jpg")}
                        description="UT SAE Longhorn Racing Club is an inter-collegiate racing club that designs and builds race-cars."
                        timeline="Aug. 2018 - May. 2019"
                        title="Member of the frame subteam"
                        bullets={
                            ["Worked with current UT students and Professor Mathews to develop the frame for the race-car.",
                                "Focused on improving the chassis and the body of the race car via design simulations and SolidWorks models.",
                                "Modified the chassis of the car by fixing a loose steering column and creating the brake box.",
                                "Designed a new plate pattern for the foot pedals that allows for installation in different configurations to suit the driver’s preferences."
                            ]
                        }
                    />

                    <Modals name="NASA High School Aerospace Scholars"
                        pic={require("./images/nasa.jpg")}
                        description="High School Aerospace Scholars (HAS) is a unique NASA experience that begins with a 16-week online interactive course on NASA activities related to space exploration, Earth science, technology, mathematics and aeronautics."
                        timeline="Dec. 2017 - Mar. 2018"
                        title="Scholar"
                        bullets={
                            ["Selected and nominated to represent Westlake High School by Texas legislator during the fall.",
                                "Participated in an interactive course and NASA activities related to space exploration, earth science, technology and aeronautics.",
                                "Completed design challenges such as 3D drawing, video creation, and interactive poster design all pertaining the life in space.",
                                "Participated in virtual chats with NASA engineers and scientists to learn about different factors that contributed to pursuing a career in engineering.",
                                "Selected to participate on the onsite engineering program and conference in Houston, Texas."
                            ]
                        }
                    />
                </div>
            </div>
            {/* <Contact /> */}
        </div>
    )
}

export default App
