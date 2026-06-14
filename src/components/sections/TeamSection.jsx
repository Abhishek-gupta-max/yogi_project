import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const TEAM_MEMBERS = [
  {
    name: 'Vikram Sengupta',
    role: 'Chief Executive Officer',
    credentials: 'CISSP | ex-Azure Architect',
    bio: 'Over 15 years directing enterprise system architecture and zero-trust cloud network deployment projects.',
    avatar: '/avatar_ceo.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Connor',
    role: 'Director of SOC Operations',
    credentials: 'CEH | CISM | threat-hunter',
    bio: 'Commanding real-time event response squads. Expert in malware analysis and behavioral security modeling.',
    avatar: '/avatar_soc.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Vance',
    role: 'Lead Penetration Tester',
    credentials: 'OSCP | OSWP | bug-bounty',
    bio: 'Dedicated offensive engineer focused on security analysis, exploit research, and perimeter auditing.',
    avatar: '/avatar_tester.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 relative overflow-hidden" style={{ background: '#0B1120' }}>
      <div className="gradient-divider absolute top-0 inset-x-0" />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      {/* Left Glow */}
      <div
        className="absolute -left-48 top-1/4 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Our Security Command
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-5 font-display"
          >
            Meet Our <span className="gradient-text">Elite Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base leading-relaxed font-light"
          >
            Our certified operators and threat analysts carry decadal experiences safeguarding corporate frameworks from modern vulnerability risks.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, idx) => {
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <div
                  className="glass-card-premium rounded-3xl p-8 flex flex-col items-center text-center h-full relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan/40"
                >
                  {/* Circular generated profile image */}
                  <div className="w-32 h-32 rounded-full mb-6 p-1 bg-neon-cyan/5 border border-white/5 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/10 transition-all duration-300 flex-shrink-0 relative overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-1 font-display group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="text-neon-cyan text-xs font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </div>
                  
                  <div className="text-text-muted text-xs font-semibold mb-4 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {member.credentials}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed font-light mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 w-full justify-center">
                    <a
                      href={member.linkedin}
                      className="text-text-muted hover:text-neon-cyan transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-neon-cyan/30"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="text-text-muted hover:text-neon-cyan transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-neon-cyan/30"
                      aria-label={`${member.name} GitHub Profile`}
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-text-muted hover:text-neon-cyan transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-neon-cyan/30"
                      aria-label={`${member.name} Twitter Profile`}
                    >
                      <FiTwitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
