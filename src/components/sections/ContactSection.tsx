import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-brand-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="mt-3 font-display text-3xl sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Want to jam with us or chat about our conference?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Email{' '}
          <a className="font-semibold text-brand-600 underline-offset-4 hover:underline" href="mailto:yonetim@aybuasec.com">
            yonetim@aybuasec.com
          </a>
        </motion.p>
        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-slate-400">No social links—just humans learning together.</p>
      </div>
    </section>
  );
};

export default ContactSection;
