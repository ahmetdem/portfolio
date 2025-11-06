import { motion } from 'framer-motion';
import EventCard from '../cards/EventCard';
import events from '../../data/events';

const EventsSection = () => {
  return (
    <section id="events" className="bg-slate-50 py-16 dark:bg-slate-900 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Jam & Conference</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Moments we brought the community together</h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Our biggest sources of learning come from events we run ourselves: an honest conference about the realities of
            student-made games, and a jam where mechanics are born in one weekend.
          </p>
        </motion.div>
        <div className="mt-12 space-y-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {events.some((event) => event.linkedin) && (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">LinkedIn Recap</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Read reflections, photo dumps, and resources we shared after bringing both gatherings together.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {events
                .filter((event) => event.linkedin)
                .map((event) => (
                  <a
                    key={event.id}
                    href={event.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/30 dark:text-slate-100"
                  >
                    View recap ↗
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
