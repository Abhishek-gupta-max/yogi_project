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
    <section id="team" className="section-alt py-16 relative overflow-hidden">
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
            Our Security Command
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-5 font-display"
          >
            Meet Our <span className="gradient-text">Elite Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fg-2 text-base leading-relaxed font-light"
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
                  data-card
                  className="glass-card-premium rounded-3xl p-8 flex flex-col items-center text-center h-full relative overflow-hidden group transition-all duration-300 hover:border-accent/40"
                >
                  {/* Circular generated profile image */}
                  <div className="w-32 h-32 rounded-full mb-6 p-1 bg-accent/5 border border-line group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 flex-shrink-0 relative overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-fg mb-1 font-display group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </div>
                  
                  <div className="text-fg-muted text-xs font-semibold mb-4 px-2 py-0.5 rounded-full bg-surface-2 border border-line">
                    {member.credentials}
                  </div>

                  <p className="text-fg-2 text-sm leading-relaxed font-light mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-line w-full justify-center">
                    <a
                      href={member.linkedin}
                      className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg bg-surface-2 border border-line hover:border-accent/30"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg bg-surface-2 border border-line hover:border-accent/30"
                      aria-label={`${member.name} GitHub Profile`}
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-fg-muted hover:text-accent transition-colors p-2 rounded-lg bg-surface-2 border border-line hover:border-accent/30"
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
