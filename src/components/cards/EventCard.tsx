import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarousel } from '../../hooks/useCarousel';
import type { Event, EventMedia } from '../../data/events';

const EventCard = ({ event }: { event: Event }) => {
  const { index, direction, next, prev, goTo, setAutoAdvanceEnabled } = useCarousel(event.media.length, 10000);
  const currentMedia = event.media[index];
  const shouldAutoAdvance = currentMedia.type !== 'video';

  useEffect(() => {
    setAutoAdvanceEnabled(shouldAutoAdvance);
  }, [setAutoAdvanceEnabled, shouldAutoAdvance]);

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`${currentMedia.type}-${currentMedia.src}`}
            className="absolute inset-0"
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt ?? `${event.title} photo ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                src={currentMedia.src}
                aria-label={currentMedia.alt ?? `${event.title} video`}
                poster={currentMedia.poster}
                autoPlay
                muted
                controls
                playsInline
                preload="metadata"
                onEnded={() => next()}
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
          {event.date}
        </div>
        {event.media.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow hover:bg-white"
              onClick={prev}
              aria-label="Previous photo"
            >
              {'<'}
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-900 shadow hover:bg-white"
              onClick={next}
              aria-label="Next photo"
            >
              {'>'}
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
              {event.media.map((mediaItem: EventMedia, dotIndex) => (
                <button
                  key={`${event.id}-${mediaItem.type}-${dotIndex}`}
                  className={`h-2 w-2 rounded-full ${index === dotIndex ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                  onClick={() => goTo(dotIndex)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Hosted by HyperForge</p>
        <h3 className="font-display text-2xl">{event.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{event.description}</p>
        <p className="text-sm font-semibold text-slate-500">{event.location}</p>
      </div>
    </motion.article>
  );
};

export default EventCard;
