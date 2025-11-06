import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarousel } from '../../hooks/useCarousel';
import type { Project, ProjectMedia } from '../../data/projects';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { index, direction, next, prev, goTo, setAutoAdvanceEnabled } = useCarousel(project.media.length, 10000);
  const currentMedia = project.media[index];
  const isPortrait = project.mediaAspect === 'portrait';
  const mediaAspectClass = isPortrait ? 'aspect-[9/16]' : 'aspect-video';
  const shouldAutoAdvance = currentMedia.type !== 'video';

  useEffect(() => {
    setAutoAdvanceEnabled(shouldAutoAdvance);
  }, [setAutoAdvanceEnabled, shouldAutoAdvance]);
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
      whileHover={{ y: -4 }}
    >
      <div className={`relative ${mediaAspectClass} overflow-hidden`}>
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
                alt={currentMedia.alt ?? `${project.title} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                src={currentMedia.src}
                aria-label={currentMedia.alt ?? `${project.title} gameplay`}
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
        <div className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
          {project.status}
        </div>
        {project.media.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-900 shadow hover:bg-white"
              onClick={prev}
              aria-label="Previous project screenshot"
            >
              {'<'}
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-slate-900 shadow hover:bg-white"
              onClick={next}
              aria-label="Next project screenshot"
            >
              {'>'}
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
              {project.media.map((mediaItem: ProjectMedia, dotIndex) => (
                <button
                  key={`${project.id}-${mediaItem.type}-${dotIndex}`}
                  className={`h-1.5 w-1.5 rounded-full ${index === dotIndex ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                  onClick={() => goTo(dotIndex)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-display text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>
        <p className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
          {project.stage === 'shipped' ? 'What we shared' : 'What we are building'}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
