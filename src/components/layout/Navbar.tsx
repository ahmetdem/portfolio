import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../../hooks/useDarkMode';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#events', label: 'Jam & Conf' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useDarkMode();

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-white lg:px-6">
        <a href="#hero" className="flex items-center gap-2 font-display text-lg tracking-wide">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-bold shadow-lg shadow-brand-600/40">
            HF
          </span>
          HyperForge
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="relative font-medium text-slate-200 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <DarkModeToggle mode={mode} toggle={toggle} />
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-6 bg-white transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="space-y-4 bg-slate-900/90 px-6 py-4 text-white">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <DarkModeToggle mode={mode} toggle={toggle} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
