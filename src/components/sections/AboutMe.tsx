import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ServiceCard from "../ui/ServiceCard";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.main 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4 w-180">
      <h2 className="flex">
        <FiChevronLeft className="text-(--accent)" />
        Serviços
        <FiChevronRight className="text-(--accent)" />
      </h2>
      <div className="flex gap-4">
        <ServiceCard
          title="UI/UX de Páginas Web"
          description="Design UI/UX para páginas web modernas, responsivas e focadas em proporcionar uma experiência intuitiva ao usuário."
          tags={["Figma"]}
        ></ServiceCard>
        <ServiceCard
          title="Desenvolvimento Frontend"
          description="Desenvolvimento Frontend com foco em performance, responsividade e interfaces modernas."
          tags={["HTML", "CSS", "Javascript", "React"]}
        ></ServiceCard>
      </div>
      <ServiceCard
        title="Performance & Responsive Design"
        description="Páginas web responsivas desenvolvidas com foco em performance, fluidez visual e experiência do usuário. Utilizando técnicas avançadas de otimização, como lazy loading, minificação de recursos e design adaptativo para garantir que seu site seja rápido e eficiente em qualquer dispositivo."
        tags={["Responsive Design", "Dark Mode"]}
      ></ServiceCard>
    </motion.main>
  );
}

export default AboutMe;
