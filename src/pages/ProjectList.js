import React, { Suspense } from 'react'
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';
import { motion } from 'framer-motion';

const Projects = () => {



  return (
    <Suspense fallback={<div>Loading... </div>}>
      <motion.div
        key="projects"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectsPage />
      </motion.div>
    </Suspense>
  );
};

export default Projects;

