import React from "react";

import {
  AboutSolution,
  Header,
  KnowCompany,
  Person,
  TeamMember,
} from "./../../Components";
const About = () => {
  return (
    <div>
      <Header type="about-us" />
      <KnowCompany />
      <TeamMember />
      <AboutSolution />
      <Person />
    </div>
  );
};

export default About;
