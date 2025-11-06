import { motion } from 'framer-motion';
import TeamMemberCard from '../cards/TeamMemberCard';
import { teamMembers } from '../../data/team';

const TeamSection = () => {
  return (
    <section id="team" className="bg-slate-50 py-16 dark:bg-slate-900 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Team</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Meet the collective</h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
