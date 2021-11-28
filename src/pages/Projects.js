import React from 'react'
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div 
        initial={ {scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        exit={{ scaleX: 0 }}>
            <ProjectsPage />
        </motion.div>
    );
  };
    
  export default Projects;