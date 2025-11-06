import { motion } from 'framer-motion';
import type { TeamMember } from '../../data/team';

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <motion.article
      className="flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 text-center shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5"
      whileHover={{ y: -6 }}
    >
      <img
        src={member.avatar}
        alt={member.name}
        className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-brand-500/20"
      />
      <h3 className="mt-4 font-display text-xl">{member.name}</h3>
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{member.role}</p>
      {member.bio && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>}
      <div className="mt-4 flex justify-center gap-4 text-sm text-brand-500">
        {member.socials.github && (
          <a className="hover:underline" href={member.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {member.socials.linkedin && (
          <a className="hover:underline" href={member.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default TeamMemberCard;
