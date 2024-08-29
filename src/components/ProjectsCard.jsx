/* eslint-disable react/prop-types */

import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ project }) => {
  return (
    <div>
      <div className="w-full overflow-hidden bg-zinc-800 border border-zinc-600 rounded-lg shadow-lg">
        <Image
          className="object-cover object-center w-full h-56"
          src={project.image}
          alt="projectThumbnil"
          width={500}
          height={224}
        />
        <div className="px-6 py-4">
          <h1 className="font-bold text-2xl text-white">
            {project.project_name}
          </h1>
          <p className="py-2 text-zinc-400 dark:text-gray-400">
            {project.description.slice(0, 100)}...
          </p>
          <Link href={`/projects/${project.id}`}>
            <button className="btn w-full bg-highlight-btn hover:bg-zinc-700 border-none text-white">
              View full details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
