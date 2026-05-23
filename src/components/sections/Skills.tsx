import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Tags from "../ui/Tags";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.main 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4 max-w-180 items-start" id="skills">
      <h2 className="flex items-center">
        <FiChevronLeft className="text-(--accent)" />
        Habilidades
        <FiChevronRight className="text-(--accent)" />
      </h2>
      <div className="flex flex-col gap-4 max-w-180 items-center sm:items-start">
        <div className="flex flex-col gap-4 bg-none rounded-lg p-4 w-fit sm:bg-(--group-background)">
          Habilidades Essenciais
          <div className="flex flex-wrap gap-2">
            <Tags link="https://www.figma.com/pt-br/resource-library/diferenca-entre-ui-e-ux/">UI/UX layout</Tags>
            <Tags link="https://www.figma.com/resource-library/responsive-website-design/">Responsive Design</Tags>
          </div>
        </div>
          <div className="flex flex-col gap-4 bg-none rounded-lg p-4 sm:bg-(--group-background)">
            Técnologias Frontend
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Tags link="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</Tags>
              <Tags link="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</Tags>
              <Tags link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">Javascript</Tags>
              <Tags link="https://www.typescriptlang.org/pt/">Typescript</Tags>
              <Tags link="https://react.dev">React.js</Tags>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-none rounded-lg p-4 sm:bg-(--group-background)">
            Habilidades de React.js
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Tags link="https://nextjs.org/">Next.js</Tags>
              <Tags link="https://jsonapi.org/">JSON</Tags>
              <Tags link="https://nodejs.org/learn">Node.js</Tags>
              <Tags link="https://tailwindcss.com">Tailwind.css</Tags>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-none rounded-lg p-4 sm:bg-(--group-background)">
            Ferramentas & Interação
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 ">
            <Tags link="https://git-scm.com">Git</Tags>
            <Tags link="https://github.com/about">GitHub</Tags>
            <Tags link="figma.com">Figma</Tags>
            <Tags link="https://motion.dev/docs/react">Motion</Tags>
            <Tags link="https://threejs.org/">Three.js</Tags>
            <Tags link="https://vercel.com">Vercel</Tags>
            <Tags link="https://netlify.com">Netlify</Tags>
            </div>
          </div>
      </div>
    </motion.main>
  );
}

export default Skills;
