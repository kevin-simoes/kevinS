import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";

export function ProjectCard({
    title,
    date,
    description,
    tags,
    link,
  }) {
    return (
      <motion.div 
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 200
      }}
      className="relative w-full rounded-3xl border border-(--border) bg-(--card) p-5 overflow-hidden">
        
        {/* Accent line */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-(--accent) rounded-l-3xl" />
  
        {/* External link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 text-(--text-secundary) hover:text-white transition"
        >
          <MdOpenInNew className="size-6"/>
        </a>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-22 right-6 text-(--text-secundary) hover:text-white transition"
        >
          <IoMdEye className="size-6"/>
        </a>
  
        {/* Content */}
        <div className="flex flex-col gap-3 ml-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-(--text-primary) tracking-tight">
              {title} • {date}
            </h3>
  
            <p className="mt-2 text-xl text-(--text-secundary)">
              {description}
            </p>
          </div>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-(--border) text-(--text-secondary) px-2 py-0.5"
              >
                <a href="#skills">                  
                <p>
                {tag}
              </p>
                </a>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

export default ProjectCard;