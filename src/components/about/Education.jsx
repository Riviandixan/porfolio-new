import React from "react";

const educationContent = [
  {
    year: "2020-2023",
    degree: "Software Engineer",
    institute: "SMK Wikrama",
    details: `Entered at 2020 then finished on 2023`
  },
  // {
  //   year: "2012",
  //   degree: "MASTER DEGREE",
  //   institute: "KIEV UNIVERSITY",
  //   details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
  //       elit, tempor incididunt`,
  // },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];
const UrlGen = ({url}) => {
  return url ? 
  (
      <a className="btn btn-sm mt-1" href={url}><i class="fa fa-book"></i><b> Redirect</b></a>
  ) : (
      ""
  )
}

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <UrlGen url={val.url}></UrlGen>
        </li>
      ))}
    </ul>
  );
};

export default Education;
