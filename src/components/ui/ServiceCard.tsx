import { motion } from "framer-motion";

export function ServiceCard({
    title,
    description,
    tags,
  }) {
    return (
      <motion.div 
      whileHover={{
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 200
      }}
      className="relative w-full rounded-3xl border border-(--border) bg-(--card) p-5 overflow-hidden">
  
        
  
        {/* Content */}
        <div className="flex flex-col gap-3 ml-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-(--text-primary) tracking-tight">
              {title}
            </h3>
  
            <p className="mt-2 text-xl text-(--text-secundary)">
              {description}
            </p>
          </div>
          <hr className="text-(--text-tertiary)"/>
  
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

export default ServiceCard;