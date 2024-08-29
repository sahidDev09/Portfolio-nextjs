import { projects } from "../lib/projects.js";
import ProjectsCard from "./ProjectsCard.jsx";

const FeaturesProjects = () => {
  return (
    <div id="projects" className="w-full bg-zinc-900 p-5 md:p-0">
      <div className=" container mx-auto">
        <h1 className=" md:text-4xl text-2xl font-bold mb-10 mt-10">
          Features Projects
        </h1>
        <div className=" grid md:grid-cols-3 gap-5 py-5 pb-10 ">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project}></ProjectsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesProjects;
