import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Chemistry, Physics, TalentWeek } from '../pages';

export function ProjectsRoute({ location }) {
  const getCurrentProject = (projectId) => {
    switch (projectId) {
      case 'chemistry':
        console.log(location);
        return <Chemistry location={location} />;
      case 'physics':
        return <Physics location={location} />;
      case 'talentweek':
        return <TalentWeek location={location} />;
      default:
        return <Redirect to="/projects" />;
    }
  };
  const { projectId } = useParams();
  const currentProject = getCurrentProject(projectId);

  return <React.Fragment>{currentProject}</React.Fragment>;
}
