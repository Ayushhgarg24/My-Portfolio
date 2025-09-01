import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { PERSONAL_INFO, PROJECTS, SKILLS, CERTIFICATES, ACHIEVEMENTS, HOBBIES, EDUCATION, CAREER_HIGHLIGHTS } from '../constants';
import { 
    MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, BlobShapeIcon, CertificateIcon, LeetcodeIcon, CodolioIcon
} from '../components/icons';


const ContactItem: React.FC<{ icon: React.ReactNode, label: string, value: string, href?: string }> = ({ icon, label, value, href }) => (
  <div className="group flex items-center space-x-4 bg-surface p-4 rounded-lg shadow-md h-full border-2 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="text-primary group-hover:animate-jiggle">{icon}</div>
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-text-primary hover:underline break-all">{value}</a>
      ) : (
        <p className="font-semibold text-text-primary">{value}</p>
      )}
    </div>
  </div>
);

const HomePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [activeProjectFilter, setActiveProjectFilter] = useState('All');
    const [activeSkillTab, setActiveSkillTab] = useState<'skills' | 'tools'>('skills');
    const observer = useRef<IntersectionObserver | null>(null);
    
    const contactItems = [
        { icon: <MailIcon />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
        { icon: <PhoneIcon />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
        { icon: <MapPinIcon />, label: "Location", value: PERSONAL_INFO.location },
        { icon: <LinkedinIcon />, label: "LinkedIn", value: "ayushh-garg", href: PERSONAL_INFO.socials.linkedin },
        { icon: <GithubIcon />, label: "GitHub", value: "Ayushhgarg24", href: PERSONAL_INFO.socials.github },
        { icon: <LeetcodeIcon />, label: "LeetCode", value: "ayushh_garg2412", href: PERSONAL_INFO.socials.leetcode },
        { icon: <CodolioIcon />, label: "Codolio", value: "Ayush Garg", href: PERSONAL_INFO.socials.codolio },
    ];

    const projectTags = ['All', ...new Set(PROJECTS.flatMap(p => p.tags))];
    const filteredProjects = activeProjectFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(activeProjectFilter));
    
    const displayedSkills = SKILLS.filter(s => s.category === (activeSkillTab === 'skills' ? 'skill' : 'tool'));

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                const sectionName = visibleSection.getAttribute('data-section-name');
                 if (sectionName === 'about') {
                    setActiveSection('home');
                } else if (sectionName) {
                    setActiveSection(sectionName);
                }
            }
        }, { threshold: 0.5 }); // 50% of the section must be visible

        const sections = document.querySelectorAll('[data-section-name]');
        sections.forEach((section) => {
            observer.current?.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current?.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <main>
                <Section id="about" title="">
                    <div className="relative w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 min-h-[calc(100vh-4rem)]">
                            {/* Left side: Image with blob */}
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 scroll-animate animate-zoom-in">
                                <BlobShapeIcon className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] text-secondary opacity-60 filter blur-2xl" />
                                <div className="absolute inset-0 bg-primary rounded-full filter blur-3xl opacity-50 animate-pulse-glow"></div>
                                <img
                                    src={PERSONAL_INFO.profilePictureUrl}
                                    alt={PERSONAL_INFO.name}
                                    className="relative w-full h-full rounded-full object-cover shadow-2xl z-10"
                                />
                            </div>

                            {/* Right side: Text content */}
                            <div className="text-center lg:text-left z-10">
                                <p className="text-lg text-primary mb-2 scroll-animate animate-fade-in-up" style={{transitionDelay: '100ms'}}>Hello, I'm</p>
                                <h1 className="text-4xl md:text-6xl font-bold text-text-primary scroll-animate animate-fade-in-up" style={{transitionDelay: '200ms'}}>{PERSONAL_INFO.name}</h1>
                                <h2 className="text-2xl md:text-3xl font-bold text-text-secondary mt-2 scroll-animate animate-fade-in-up" style={{transitionDelay: '300ms'}}>
                                    And I'm a <span className="text-primary typing-effect">{PERSONAL_INFO.title}</span>
                                </h2>
                                <p className="mt-6 text-text-secondary max-w-md mx-auto lg:mx-0 scroll-animate animate-fade-in-up" style={{transitionDelay: '400ms'}}>
                                    {PERSONAL_INFO.about}
                                </p>
                                <div className="flex justify-center lg:justify-start items-center gap-4 mt-6 scroll-animate animate-fade-in-up" style={{transitionDelay: '500ms'}}>
                                    <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors"><LinkedinIcon className="h-6 w-6"/></a>
                                    <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors"><GithubIcon className="h-6 w-6"/></a>
                                    <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors"><LeetcodeIcon className="h-6 w-6"/></a>
                                    <a href={PERSONAL_INFO.socials.codolio} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors"><CodolioIcon className="h-6 w-6"/></a>
                                </div>
                                <div className="flex justify-center lg:justify-start items-center gap-4 mt-8 scroll-animate animate-fade-in-up" style={{transitionDelay: '600ms'}}>
                                    <a href="#contact" className="px-6 py-3 bg-primary text-background font-semibold rounded-full hover:bg-opacity-90 transition-all">Hire Me</a>
                                    <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-background transition-all">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <section id="projects" className="min-h-screen flex flex-col justify-center py-20 is-visible" data-section-name="projects">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-secondary/10 dark:bg-secondary/5 rounded-t-xl p-8 text-center scroll-animate animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">Projects</h2>
                            <p className="mt-2 text-text-secondary max-w-2xl mx-auto">In-depth Case Studies to show you what I can offer and how I work</p>
                        </div>
                        <div className="bg-surface shadow-lg rounded-b-xl p-8">
                            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 scroll-animate animate-fade-in-up" style={{transitionDelay: '100ms'}}>
                                {projectTags.map(tag => (
                                    <button 
                                        key={tag} 
                                        onClick={() => setActiveProjectFilter(tag)}
                                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                                            activeProjectFilter === tag 
                                            ? 'bg-primary text-white shadow-md' 
                                            : 'bg-background text-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project, index) => (
                                    <div key={project.title} className="scroll-animate animate-zoom-in" style={{ transitionDelay: `${100 + index * 100}ms` }}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Section id="skills" title="">
                    <div className="flex flex-col lg:flex-row items-start gap-16 xl:gap-24">
                        {/* Left Column */}
                        <div className="lg:w-1/3 flex-shrink-0 flex gap-4 scroll-animate animate-fade-in-left">
                           <div className="relative h-full">
                             <p className="vertical-text text-text-secondary/50 font-semibold tracking-widest uppercase">All Skills</p>
                             <div className="absolute top-1/2 left-0 -translate-y-1/2 h-16 w-px bg-primary"></div>
                           </div>
                           <div>
                             <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                               Explore My <br/> Expertise & Tech Stack
                             </h2>
                             <p className="text-text-secondary mb-6">
                                These are the tools and technologies that I use daily to develop web applications. With a strong foundation in frontend, I focus on delivering clean, maintainable code and intuitive user experiences.
                             </p>
                             <div className="flex gap-4">
                                <button
                                    onClick={() => setActiveSkillTab('skills')}
                                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeSkillTab === 'skills' ? 'bg-primary text-white' : 'bg-surface text-text-primary'}`}
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => setActiveSkillTab('tools')}
                                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeSkillTab === 'tools' ? 'bg-primary text-white' : 'bg-surface text-text-primary'}`}
                                >
                                    Tools
                                </button>
                             </div>
                           </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex-grow w-full">
                           <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {displayedSkills.map((skill, index) => (
                                <div 
                                    key={skill.name}
                                    className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-surface rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-animate animate-zoom-in"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <skill.icon className="h-10 w-10 md:h-12 md:h-12 text-primary" />
                                    <p className="text-sm font-medium text-text-secondary">{skill.name}</p>
                                </div>
                            ))}
                           </div>
                        </div>
                    </div>
                </Section>
                
                <Section id="credentials" title="Accomplishments">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {CAREER_HIGHLIGHTS.map((highlight, index) => (
                                <div key={index} className="bg-surface p-6 rounded-lg shadow-md flex items-start space-x-4 scroll-animate animate-fade-in-up" style={{transitionDelay: `${index * 100}ms`}}>
                                    <div className="flex-shrink-0 text-primary">
                                        <highlight.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-primary">{highlight.title}</h3>
                                        <p className="text-sm text-text-secondary">{highlight.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center lg:text-left scroll-animate animate-fade-in-right">Key Achievements</h3>
                            <div className="space-y-6">
                                {ACHIEVEMENTS.map((ach, index) => (
                                    <div key={index} className="relative pl-8 scroll-animate animate-fade-in-right" style={{ transitionDelay: `${index * 100}ms` }}>
                                        <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
                                        <div className="absolute left-[7px] top-5 h-full w-0.5 bg-primary/20"></div>
                                        <p className="font-bold text-accent">{ach.year}</p>
                                        <h4 className="font-semibold text-lg text-text-primary mt-1">{ach.title}</h4>
                                        <p className="text-text-secondary text-sm">{ach.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="education" title="My Academic Journey">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {EDUCATION.map((edu, index) => (
                            <div 
                                key={index} 
                                className="relative h-96 rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 scroll-animate animate-zoom-in"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <img src={edu.imageUrl} alt={edu.institution} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                                    <p className="text-md font-medium text-gray-200">{edu.institution}</p>
                                    <p className="text-sm text-gray-400 mt-2">{edu.period}</p>
                                    <div className="mt-4 pt-4 border-t border-primary/30">
                                        <p className="text-sm font-semibold text-primary">{edu.highlight}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="hobbies" title="Hobbies & Interests">
                    <div className="space-y-16 max-w-7xl mx-auto">
                        {HOBBIES.map((hobby, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} scroll-animate animate-fade-in-up`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <img 
                                        src={hobby.imageUrl} 
                                        alt={hobby.name} 
                                        className="w-full h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                
                                {/* Text Section */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h3 className="font-bold text-3xl text-primary mb-4">{hobby.name}</h3>
                                    <p className="text-text-secondary text-base leading-relaxed">{hobby.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                 <section id="contact" className="bg-background is-visible" data-section-name="contact">
                    <div 
                        className="relative min-h-[60vh] w-full flex items-center justify-center text-center bg-cover bg-center" 
                        style={{ backgroundImage: 'url("/background.jpg")' }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 text-white p-4 scroll-animate animate-fade-in-up">
                            <h4 className="text-3xl md:text-4xl font-bold leading-tight">Hello, Let's work together - on your next project</h4>
                        </div>
                    </div>
                    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                        <p className="text-text-secondary mb-8 text-center max-w-2xl mx-auto scroll-animate animate-fade-in-up" style={{ transitionDelay: '100ms' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {contactItems.map((item, index) => (
                                <div key={index} className="scroll-animate animate-zoom-in" style={{ transitionDelay: `${200 + index * 75}ms` }}>
                                    <ContactItem {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;