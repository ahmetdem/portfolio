import { motion } from 'framer-motion';

interface Props {
  mode: 'light' | 'dark';
  toggle: () => void;
}

const DarkModeToggle = ({ mode, toggle }: Props) => {
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="relative inline-flex h-10 w-20 items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
    >
      <motion.div
        className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg"
        layout
        initial={false}
        animate={{ x: mode === 'dark' ? 44 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: mode === 'dark' ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {mode === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-700"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-500"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
