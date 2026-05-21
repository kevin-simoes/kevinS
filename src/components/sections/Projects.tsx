import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Organizer Landing Page",
      date: "Maio, 2026",
      description: "Landing Page for the Organizer app.",
      link: "https://github.com/kevin-simoes/organizer-landingpage",
      tags: ["HTML", "CSS", "Javascript", "Responsive"],
    },
    {
      title: "Vinharia Agnello",
      date: "Abril, 2026",
      description: "Website for college project.",
      link: "https://github.com/kevin-simoes/vinheria-agnello-checkpoint02",
      tags: ["HTML", "CSS", "Javascript", "Responsive"],
    },
    {
      title: "Le Bouledogue",
      date: "Fevereiro, 2026",
      description:
        "A fictional e-commerce site that simulates transactions and DOM manipulation.",
      link: "https://github.com/kevin-simoes/Le-Bouledogue",
      tags: ["React", "Next", "TypeScript", "Prisma", "Ecommerce"],
    },
    {
      title: "The Last Of Us Characters",
      date: "2025",
      description: "Visualization of characters from the game The Last Of Us",
      link: "https://github.com/kevin-simoes/Games-characters",
      tags: ["HTML", "CSS", "Javascript", "Responsive"],
    },
  ];

  const initialProjects = projects.slice(0, 2);
  const extraProjects = projects.slice(2);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex w-full max-w-3xl flex-col gap-4"
      id="projects"
    >
      <h2 className="flex items-center">
        <FiChevronLeft className="text-(--accent)" />
        Projects
        <FiChevronRight className="text-(--accent)" />
      </h2>

      <div className="flex w-full flex-col gap-4 overflow-visible">
        {initialProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            date={project.date}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}

        <AnimatePresence>
          {showAll &&
            extraProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="overflow-visible"
              >
                <ProjectCard
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {projects.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center
            px-6 py-2
            rounded-full
            text-(--text-primary)
            font-light
            cursor-pointer
            outline-none
            transition"
        >
          {showAll ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </motion.main>
  );
}

export default Projects;
