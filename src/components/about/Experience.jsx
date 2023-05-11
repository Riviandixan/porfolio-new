import React from "react";

const experienceContent = [
  {
    year: "2022 Jul - 2022 Dec",
    position: "Backend Developer",
    compnayName: "Bank Mega Tbk",
    details: `Developed back-end components to connect applications with web software systems to help
    Users do their jobs easier.Wrote server-side and client-side code for new Application projects using PHP, HTML, CSS and
    JavaScript, specifically with Laravel framework.Maintained existing applications and designed and delivered new applications.
    Build an application to send files via FTP between servers.
    `,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
