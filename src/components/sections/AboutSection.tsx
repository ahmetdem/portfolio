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
            HEXACORE.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            We started with a lunch break talk on campus. It began with Ahmet and Can, and now it continues with the whole team.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Instead of attending lectures (for a while), we spent our time planning, brainstorming, and designing our website, as well as filling out our Game Jam application.
            Now, after six hours of coding, documentation, and lots of coffee, here we are.
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
              <li>• Creating with Rollic</li>
              <li>• An unrelenting hunger for victory</li>
              <li>• Awards :)</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">How we work</p>
            <ul className="mt-3 space-y-3 text-slate-600 dark:text-slate-300">
              <li>• Relentlessly and with discipline.</li>
              <li>• We keep the momentum going, treating every minute like it matters.</li>
              <li>• By supporting and protecting each other, no one is left behind; every teammate’s success fuels the whole.</li>
              <li>• Like a machine.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
