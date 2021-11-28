import React from 'react'
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div initial={ {opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProjectsPage />
        </motion.div>
    );
  };
    
  export default Projects;