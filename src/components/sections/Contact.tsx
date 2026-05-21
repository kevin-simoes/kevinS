import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import EmailButton from "../ui/EmailButton";

function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 w-full max-w-3xl items-start"
    >
      <h2 className="flex">
        <FiChevronLeft className="text-(--accent)" />
        Contato
        <FiChevronRight className="text-(--accent)" />
      </h2>
      <h3>Faça um contato através das minhas redes:</h3>
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
        <EmailButton></EmailButton>
      </span>
    </motion.main>
  );
}

export default Contact;
