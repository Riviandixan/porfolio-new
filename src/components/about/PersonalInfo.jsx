import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Rivi", hasColor: "" },
  { meta: "last name", metaInfo: "Andixan", hasColor: "" },
  { meta: "Age", metaInfo: "18 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Indonesian", hasColor: "" },
  { meta: "Employed/Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "IDN, Sukabumi", hasColor: "" },
  { meta: "phone", metaInfo: "+6281388636575", hasColor: "" },
  { meta: "Email", metaInfo: "rivirevo6@gmail.com", hasColor: "" },
  { meta: "Linkedin", metaInfo: "Rivi Andixan", hasColor: "yellow", hasUrl:"https://www.linkedin.com/in/rivi-andixan-purnadi-580372240/"},
  { meta: "langages", metaInfo: "Indonesian, English", hasColor: "" },
];

const UrlGen = ({hasUrl,MetaInfo}) => {
  return hasUrl ? 
  (
      <a href={hasUrl}>{MetaInfo}</a>
  ) : (
      <a>{MetaInfo}</a>
  )
}

const PersonalInfo = () => {  
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (        
        <li key={i}>
          <span className="title">{val.meta}: </span>          

          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >            
          <UrlGen hasUrl={val.hasUrl} MetaInfo={val.metaInfo}></UrlGen>                        
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
