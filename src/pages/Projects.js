import React, { Suspense } from 'react'
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <motion.div 
            initial={ {opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}>
                <ProjectsPage />
            
            </motion.div>
        </Suspense>
    );
  };
    
  export default Projects;