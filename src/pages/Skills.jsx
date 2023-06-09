import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
                <h1 className="title-1">Skills</h1>
              <h2 className="title-2">Frontend</h2>
              <p className="text"> 
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p className="text-2">NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
