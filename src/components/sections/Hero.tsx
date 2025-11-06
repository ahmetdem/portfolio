import { motion } from 'framer-motion';
import jamVideo from '../../assets/jam-conference/jam/jam-video.mp4';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white scroll-mt-24"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=2000&q=80"
          alt="Futuristic game art"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[110rem] px-4 py-16 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">
              Student Game Collective
            </p>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              HyperForge builds expressive worlds while learning the craft of game development together.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 lg:mx-0">
              We're a student-led group of programmers, artists, and storytellers experimenting with mechanics, sound, and
              narrative through collaborative prototypes and game jams.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:min-h-[26rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <video
              className="h-full w-full object-cover"
              src={jamVideo}
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=2000&q=80"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
