import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Loader from "./Loader";
import HamburgerMenu from "./HamburgerMenu";

const Projects = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    //call github api
    githubInfo();
  }, []);

  const githubInfo = async () => {
    const data = await fetch("https://api.github.com/users/AbhinaV678/repos");
    //html_url,homepage

    const jsonData = await data.json();

    //console.log(jsonData);

    setRepoData(jsonData);
  };

  if (repoData.length == 0) {
    return <Loader />;
  }

  return (
    <div className="h-screen bg-black">
      <div className="bg-black">
        <HamburgerMenu />
        <ProjectCard repoData={repoData} />
      </div>
    </div>
  );
};

export default Projects;
