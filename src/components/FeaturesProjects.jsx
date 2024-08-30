import ProjectsCard from "./ProjectsCard.jsx";

const FeaturesProjects = async () => {

  const getProjects = async () => {
    const res = await fetch("http://localhost:3000/services/api/allprojects");
    const projects = await res.json();
    return projects;
  };

  const projects = await getProjects();

  return (
    <div id="projects" className="w-full bg-zinc-900 p-5 md:p-0">
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold mb-10 mt-10">
          Featured Projects
        </h1>
        <div className="grid md:grid-cols-3 gap-5 py-5 pb-10">
          {projects.map((project) => (
            <ProjectsCard key={project._id} project={project}></ProjectsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesProjects;
