import { LuGithub, LuLinkedin, LuMail, LuMouse } from "react-icons/lu";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import { motion } from "framer-motion";
import Profile from "../ui/Profile";

function Introduction() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4 w-180"
    >
      <h1 className="">
        🦥 Kevin Simões<span className="text-(--accent)">.</span>
      </h1>
      <Profile></Profile>
      <h3 className="">
      Front End Developer focado em transformar ideias em experiências digitais modernas, funcionais e responsivas.  
      ⏣ Formado no Técnólogo de Informática pelo ENIAC e atualmente cursando Engenharia de Software na FIAP, com paixão por programação, UI/UX e desenvolvimento web.
      </h3>
      <span className="flex gap-4">
        <a href="#projects">
        <ButtonPrimary>Ver Projetos</ButtonPrimary>
        </a>
        <a href="/src/assets/pdf/Kevin_s_CV.pdf" target="_blank">
          <ButtonSecondary>Ver Currículo</ButtonSecondary>
        </a>
      </span>
      <span className="flex gap-5">
        <a href="https://github.com/kevin-simoes" target="_blank">
          <div className="social-icon">
            <LuGithub className="w-5 h-5"></LuGithub>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-sim%C3%B5es-362750350/"
          target="_blank"
        >
          <div className="social-icon">
            <LuLinkedin className="w-5 h-5"></LuLinkedin>
          </div>
        </a>
        <a href="https://mail.google.com" target="_blank">
          <div className="social-icon">
            <LuMail className="w-5 h-5"></LuMail>
          </div>
        </a>
      </span>
      <div className="flex items-center gap-2 justify-center p-3">
        <LuMouse></LuMouse>
        Role a tela
      </div>
    </motion.main>
  );
}

export default Introduction;
