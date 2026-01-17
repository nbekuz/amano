import DeveloperHeader from './DeveloperHeader';
import DeveloperStats from './DeveloperStats';
import SocialLinks from './SocialLinks';

const PropertyDeveloper = ({ name, website, foundationYear, completedProjects, logo, socialLinks }) => {
  return (
    <div className="dashboard-card p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Property Developer</h2>
      <DeveloperHeader name={name} website={website} logo={logo} />
      <DeveloperStats foundationYear={foundationYear} completedProjects={completedProjects} />
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
};

export default PropertyDeveloper;

