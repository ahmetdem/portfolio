import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-600">About Us</p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            A campus-born collective focused on learning-by-building.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            HyperForge started as a hallway conversation between classmates who wanted to understand every layer of the game
            pipeline. We now meet twice a week to prototype mechanics, share references, and trade feedback on art, code, and
            storytelling.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Instead of chasing shipped titles, we document what we discover: shader tricks, playtesting rituals, and workflows
            that help us grow into thoughtful developers.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 dark:border-white/10 dark:bg-white/5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">What drives us</p>
            <ul className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Building expressive prototypes that teach us new tech every sprint.</li>
              <li>• Hosting critique circles so design, art, and audio stay in sync.</li>
              <li>• Sharing resources with other students through workshops and jams.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">How we work</p>
            <ul className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Pair-building sessions that rotate roles to keep everyone cross-disciplined.</li>
              <li>• Milestones focused on feelings and player stories rather than features alone.</li>
              <li>• Open documentation so classmates can re-create our process or join future jams.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
