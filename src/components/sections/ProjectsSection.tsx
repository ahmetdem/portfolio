import { motion } from 'framer-motion';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../data/projects';

const shipped = projects.filter((project) => project.stage === 'shipped');
const inProgress = projects.filter((project) => project.stage === 'in-progress');

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-slate-950 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl">Projects</h2>
        </motion.div>

        <div className="mt-12 space-y-12">
          <div>
            <h3 className="font-display text-2xl text-slate-900 dark:text-white">What we have done</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Playable builds we have already shown at campus events.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {shipped.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-slate-900 dark:text-white">What we are developing</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Current experiments heading toward our next showcase.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {inProgress.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
