import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ProjectManagerHero } from './ProjectManagerHero';
import { ProjectPlanning } from './ProjectPlanning';
import { ProjectExecution } from './ProjectExecution';

const ProjectManager = () => {
  useEffect(() => {
    document.title = "Project Manager | RM Construction & Design Studio Inc.";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <ProjectManagerHero />
      <ProjectPlanning />
      <ProjectExecution />
      <Footer />
    </div>
  );
};

export default ProjectManager;