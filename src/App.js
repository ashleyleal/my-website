import "./App.scss";
import Navbar from "./components/Navbar.js";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
          value: 1.5, // size of stars
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

          <div className="home-card">
            <div className="image-column">
              <img
                src="/assets/me.png"
                alt="Ashley Leal"
                layout="responsive"
              />
            </div>
            <div className="text-column">
              <h2>WELCOME! MY NAME IS</h2>
              <h1>ASHLEY LEAL</h1>
              <p>
                I'm an engineering student based in Toronto, Ontario, and am 
                currently seeking opportunities for summer 2024 SWE internships.
              </p>
            </div>
          </div>

          <div className="projects-section">
            <h1>PROJECTS</h1>
            <h2>WHAT I'VE CREATED SO FAR...</h2>
            <div className="projects-frame">
              <div className="project-card">
                <h3>MUSIC GENRE CLASSIFIER</h3>
                <p>PyTorch</p>
                <div className="image-row">
                  <img
                    src="/assets/MusicClassificationModel.png"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="project-card">
                <h3>PORTFOLIO WEBSITE</h3>
                <p>React</p>
                <div className="image-row">
                  <img
                    src="/assets/PlaceHolderProject.png"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>

              <div className="project-card">
                <h3>DOUBLE TROUBLE</h3>
                <p>Lua</p>
                <div className="image-row">
                  <img
                    src="/assets/DoubleTrouble.png"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>

            <div className="projects-frame">
              <div className="project-card">
                <h3>GARBAGE</h3>
                <p>Arduino</p>
                <div className="image-row">
                  <img
                    src="/assets/Garbage.gif"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="project-card">
                <h3>JOURNA</h3>
                <p>React Native</p>
                <div className="image-row">
                  <img
                    src="/assets/PlaceHolderProject.png"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>

              <div className="project-card">
                <h3>COOKING PAPA</h3>
                <p>PyGame</p>
                <div className="image-row">
                  <img
                    src="/assets/CookingPapa.gif"
                    alt="Ashley Leal"
                    layout="responsive"
                  />
                </div>
              </div>
              </div>
          </div>

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
                Bachelor of Applied Science in Computer Engineering + PEY Co-op
                <br></br>
                Anticipated Minor in Artificial Intelligence Engineering
              </p>
            </div>
          </div>

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
            <div className="achievement-card">
                <h3>PROGRAMMING COMPETITION
                  <br></br>
                  2ND PLACE WINNER</h3>
                <h4>UOFT ENGINEERING KOMPETITIONS</h4>
                <p>Nov 2023</p>
              </div>
              <div className="achievement-card">
                <h3>JUNIOR DESIGN COMPETITION
                  <br></br>
                  3RD PLACE WINNER</h3>
                <h4>UOFT ENGINEERING KOMPETITIONS</h4>
                <p>Jan 2023</p>
              </div>
              <div className="achievement-card">
                <h3>DEAN'S MERIT AWARD
                  <br></br>
                  ADMISSION SCHOLARSHIP</h3>
                <h4>UOFT FACULTY OF APPLIED SCIENCE AND ENGINEERING</h4>
                <p>Mar 2022</p>
              </div>
            </div>
            <div className="achievements-frame">
            <div className="achievement-card">
                <h3>EDWARD S ROGERS SR.
                  <br></br>
                  ADMISSION SCHOLARSHIP</h3>
                <h4>EDWARD S. ROGERS SR. DEPARTMENT OF ECE</h4>
                <p>Mar 2022</p>
              </div>
              <div className="achievement-card">
                <h3>PRINCIPAL’S LIST
                  <br></br>
                  GRADUATION AWARD</h3>
                <h4>ST. MAXIMILIAN KOLBE CHS</h4>
                <p>Jun 2022</p>
              </div>
              <div className="achievement-card">
                <h3>HONOUR ROLL 
                  <br></br>
                  GRADUATION AWARD</h3>
                <h4>ST. MAXIMILIAN KOLBE CHS</h4>
                <p>Jun 2022</p>
              </div>
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
                <p>May 2021 - Present</p>
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
      </>
    );
  }

  return <></>;
};

export default App;
