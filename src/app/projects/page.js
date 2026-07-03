import React from 'react';
import ProjectsGallery from '../components/ProjectsGallery';
import Breadcrumb from '../components/Breadcrumb';
import { projectCategories } from '../constants/projectsData';

export default function Projects() {
  return (
    <div>
      <Breadcrumb name={'Our Projects'} />

      {projectCategories.map((category) => (
        <ProjectsGallery key={category.name} name={category.name} images={category.images} />
      ))}
    </div>
  );
}
