import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var Certifications = data.Certifications.map(function (Certifications) {
      return (
        <div key={Certifications.company}>
          <h3>{Certifications.company}</h3>
          <p className="info">
            {Certifications.title}
            <span>&bull;</span> <em className="date">{Certifications.years}</em>
          </p>
          <p>{Certifications.description}</p>
        </div>
      );
    });
    var Hobbies = data.Hobbies.map(function (Hobbies) {
      return (
        <div key={Hobbies.company}>
          <h3>{Hobbies.company}</h3>
          <p className="info">
            {Hobbies.title}
            <span></span> <em className="date">{Hobbies.years}</em>
          </p>
          <p>{Hobbies.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row Certifications">
        <div className="three columns header-col">
          <h1>
            <span>Certifications</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{Certifications}</div>
          </div>
        </div>
      </div>

      <div className="row hobbies">
        <div className="three columns header-col">
          <h1>
            <span>Hobbies</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{Hobbies}</div>
          </div>
        </div>
      </div>

      <div className="row skills">
        <div className="three columns header-col">
          <h1>
            <span>Technical Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
