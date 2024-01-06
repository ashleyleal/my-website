import "./globals.scss";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Tilt from "react-parallax-tilt";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#10073E",
        repeat: "no-repeat",
        size: "40%",
        position: "60% 50%",
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        color: { value: "#DBBFDD" },
        move: {
          direction: "none",
          enable: true,
          outModes: "in",
          random: true,
          speed: 0.3,
        },
        number: {
          density: {
            enable: true,
          },
          value: 600,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5,
          },
          value: { min: 0.15, max: 0.6 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1.75, // size of stars
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Navbar />
        <main className="app">
          <title>Ashley Leal</title>
          <Tilt>
            <Home />
          </Tilt>

          <div className="projects-section">
            <h1>PROJECTS</h1>
            <h2>WHAT I'VE MADE SO FAR...</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>PORTFOLIO WEBSITE</h3>
                <h4>
                  JAVASCRIPT&nbsp;&nbsp;&nbsp;&nbsp;REACT&nbsp;&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;&nbsp;SCSS
                </h4>
                <p>Jan 2024</p>
                <div className="image-row">
                  <img
                    src="/assets/PlaceHolderProject.png"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>
              
              <div className="project-card">
                <h3>MUSIC GENRE CLASSIFIER</h3>
                <h4>
                  PYTHON&nbsp;&nbsp;&nbsp;&nbsp;PYTORCH&nbsp;&nbsp;&nbsp;&nbsp;NUMPY&nbsp;&nbsp;&nbsp;&nbsp;PANDAS
                </h4>
                <p>Aug 2023</p>
                <div className="image-row">
                <a href="https://github.com/ashleyleal/Music-Genre-Classification-Model" target="_blank">
                <div class="project-container">
                  <img
                    src="/assets/MusicClassificationModel.png"
                    alt="Music Classifier"
                    layout="responsive"
                    class="default-image"
                  />
                  <img
                    src="/assets/MusicClassificationModel.gif"
                    alt="Music Classifier Hover"
                    layout="responsive"
                    class="hover-image"
                  />
                </div>
                </a>
                </div>
              </div>

              <div className="project-card">
                <h3>GARBAGE</h3>
                <h4>ARDUINO&nbsp;&nbsp;&nbsp;&nbsp;C++</h4>
                <p>Feb 2023</p>
                <div className="image-row">
                <a href="https://github.com/ashleyleal/Garbage-MakeUofT-2023" target="_blank">
                <div class="project-container">
                  <img
                    src="/assets/Garbage.jpg"
                    alt="Garbage"
                    layout="responsive"
                    class="default-image"
                  />
                  <img
                    src="/assets/Garbage.gif"
                    alt="Garbage Hover"
                    layout="responsive"
                    class="hover-image"
                  />
                </div>
                </a>
                </div>
              </div>

              <div className="project-card">
                <h3>JOURNA</h3>
                <h4>
                  JAVASCRIPT&nbsp;&nbsp;&nbsp;&nbsp;REACT
                  NATIVE&nbsp;&nbsp;&nbsp;&nbsp;
                </h4>
                <p>Jan 2023</p>
                <div className="image-row">
                <a href="https://github.com/ashleyleal/journa-UofTHacks-2023" target="_blank">
                <div class="project-container">
                  <img
                    src="/assets/Journa.png"
                    alt="Journa"
                    layout="responsive"
                    class="default-image"
                  />
                  <img
                    src="/assets/Journa.png"
                    alt="Journa Hover"
                    layout="responsive"
                    class="hover-image"
                  />
                </div>
                </a>
                </div>
              </div>

              <div className="project-card">
                <h3>COOKING PAPA</h3>
                <h4>
                  PYTHON&nbsp;&nbsp;&nbsp;&nbsp;PYGAME&nbsp;&nbsp;&nbsp;&nbsp;JSON
                </h4>
                <p>Jun 2022</p>
                <div className="image-row">
                <a href="https://github.com/ashleyleal/cooking-papa" target="_blank">
                <div class="project-container">
                  <img
                    src="/assets/CookingPapa.png"
                    alt="Cooking Papa"
                    layout="responsive"
                    class="default-image"
                  />
                  <img
                    src="/assets/CookingPapa.gif"
                    alt="Cooking Papa Hover"
                    layout="responsive"
                    class="hover-image"
                  />
                </div>
                </a>
                </div>
              </div>

              <div className="project-card">
                <h3>DOUBLE TROUBLE</h3>
                <h4>LUA&nbsp;&nbsp;&nbsp;&nbsp;JSON&nbsp;&nbsp;&nbsp;&nbsp;BLENDER</h4>
                <p>Jun 2021</p>
                <div className="image-row">
                <a href="https://www.roblox.com/games/6945791771/Double-Trouble-2-Player-Teamwork-Obby" target="_blank">
                <div class="project-container">
                  <img
                    src="/assets/DoubleTrouble.png"
                    alt="Double Trouble"
                    layout="responsive"
                    class="default-image"
                  />
                  <img
                    src="/assets/DoubleTroubleHover.png"
                    alt="Double Trouble Hover"
                    layout="responsive"
                    class="hover-image"
                  />
                </div>
                </a>
                </div>
              </div>
            </div>
          </div>

          <Tilt>
            <div className="education-card">
              <div className="image-column">
                <img
                  src="/assets/UofT.png"
                  alt="Ashley Leal"
                  layout="responsive"
                />
              </div>
              <div className="text-column">
                <h1>EDUCATION</h1>
                <h2>
                  UNIVERSITY OF TORONTO
                  <br />
                  2022 - 2027
                </h2>
                <p>
                  Bachelor of Applied Science in Computer Engineering + PEY
                  Co-op
                  <br></br>
                  Anticipated Minor in Artificial Intelligence Engineering
                </p>
              </div>
            </div>
          </Tilt>

          <div className="skills-section">
            <h1>SKILLS</h1>
            <h2>WHAT I’VE LEARNED SO FAR...</h2>
            <div className="skills-frame">
              <div className="skill-card">
                <h3>LANGUAGES</h3>
                <p>Python, Java, C, C++, JavaScript, HTML, CSS, Lua</p>
              </div>
              <div className="skill-card">
                <h3>FRAMEWORKS</h3>
                <p>React, React Native, PyTorch, PyGame, Arduino</p>
              </div>
              <div className="skill-card">
                <h3>TOOLS</h3>
                <p>Git, GitHub, VSCode, Jupyter Notebook, Google Colab</p>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h1>ACHIEVEMENTS</h1>
            <h2>WHAT I’VE ACCOMPLISHED SO FAR...</h2>
            <div className="achievements-frame">
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    PROGRAMMING COMPETITION
                    <br></br>
                    2ND PLACE WINNER
                  </h3>
                  <h4>UOFT ENGINEERING KOMPETITIONS</h4>
                  <p>Nov 2023</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    JUNIOR DESIGN COMPETITION
                    <br></br>
                    3RD PLACE WINNER
                  </h3>
                  <h4>UOFT ENGINEERING KOMPETITIONS</h4>
                  <p>Jan 2023</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    DEAN'S MERIT AWARD
                    <br></br>
                    ADMISSION SCHOLARSHIP
                  </h3>
                  <h4>UOFT FACULTY OF APPLIED SCIENCE AND ENGINEERING</h4>
                  <p>Mar 2022</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    EDWARD S ROGERS SR.
                    <br></br>
                    ADMISSION SCHOLARSHIP
                  </h3>
                  <h4>EDWARD S. ROGERS SR. DEPARTMENT OF ECE</h4>
                  <p>Mar 2022</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    PRINCIPAL’S LIST
                    <br></br>
                    GRADUATION AWARD
                  </h3>
                  <h4>ST. MAXIMILIAN KOLBE CHS</h4>
                  <p>Jun 2022</p>
                </div>
              </Tilt>
              <Tilt>
                <div className="achievement-card">
                  <h3>
                    HONOUR ROLL
                    <br></br>
                    GRADUATION AWARD
                  </h3>
                  <h4>ST. MAXIMILIAN KOLBE CHS</h4>
                  <p>Jun 2022</p>
                </div>
              </Tilt>
            </div>
          </div>

          <div className="experience-section">
            <h1>EXPERIENCE</h1>
            <h2>WHERE I'VE MADE AN IMPACT SO FAR...</h2>
            <div className="experience-frame">
              <div className="experience-card">
                <h3>TECHINCAL ASSOCIATE</h3>
                <h4>IEEE UNIVERSITY OF TORONTO STUDENT BRANCH</h4>
                <p>Apr 2023 - Present</p>
              </div>
              <div className="experience-card">
                <h3>PROJECT MANAGER</h3>
                <h4>UOFT ENGINEERING STRATEGIES & PRACTICE</h4>
                <p>Sept 2022 - May 2023</p>
              </div>
              <div className="experience-card">
                <h3>SOFTWARE TEAM MEMBER</h3>
                <h4>ROBOTICS FOR SPACE EXPLORATION</h4>
                <p>Sep 2022 - Dec 2022</p>
              </div>
              <div className="experience-card">
                <h3>GAME DEVELOPER</h3>
                <h4>ROBLOX DEVELOPER EXCHANGE PROGRAM</h4>
                <p>Dec 2017 - Present</p>
              </div>
            </div>
          </div>
        </main>

        <Particles
          id="tsparticles"
          className="particles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="footer"></div>
      </>
    );
  }

  return <></>;
};

export default App;
