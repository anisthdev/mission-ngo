import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { thematicAreas } from '../data/programsData';
import { projectsList } from '../data/projectsList';
import { ProgramCard } from '../components/Cards';
import { useState } from 'react';
import { FaSearch, FaFilter, FaProjectDiagram } from 'react-icons/fa';

const OurWork = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProjects = projectsList.filter(project => {
    const matchesSearch = project.activity.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.agency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/assets/fpo-5.jpeg" 
            alt="Our Work" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Our <span className="text-accent">Impact</span> Areas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/80 leading-relaxed"
          >
            Empowering rural communities through integrated interventions in livelihood, skill development, and institutional strengthening.
          </motion.p>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Core Domains</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">Thematic Focus</h2>
            <div className="h-1 w-24 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {thematicAreas.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProgramCard
                  title={program.title}
                  image={program.image}
                  description={program.description}
                  approach={program.approach}
                  outcome={program.outcome}
                  slug={program.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project History Table Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 text-accent">
                <FaProjectDiagram size={24} />
                <h3 className="text-3xl font-heading font-bold text-primary">Project Portfolio</h3>
              </div>
              <p className="text-gray-600">A comprehensive history of our activities and supporting agencies since 2006.</p>
            </div>

            {/* Filters */}
            <div className="w-full lg:w-auto flex flex-col md:flex-row gap-4">
              <div className="relative group">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search projects or agencies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-3 bg-warm-sand rounded-xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full md:w-80 transition-all font-medium text-sm"
                />
              </div>
              <div className="relative group">
                <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-12 pr-10 py-3 bg-warm-sand rounded-xl border border-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full md:w-48 appearance-none transition-all font-bold text-xs uppercase tracking-widest text-primary"
                >
                  <option value="All">All Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-[2rem] border border-primary/5 shadow-2xl shadow-primary/5">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em]">Year</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em]">Activity Undertaken</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em]">Supporting Agency</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-[0.2em]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6 font-heading font-bold text-primary group-hover:text-accent transition-colors">{project.year}</td>
                      <td className="px-8 py-6 text-gray-700 font-medium">{project.activity}</td>
                      <td className="px-8 py-6 text-gray-500 text-sm">{project.agency}</td>
                      <td className="px-8 py-6">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          project.status === 'Completed' ? 'bg-accent/10 text-accent' : 'bg-secondary-light/10 text-secondary-dark'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-20 text-center text-gray-400 italic">
                      No projects found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;