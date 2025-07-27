import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="relative py-24">
      <div className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56">
        <h2 className="h2-bold">Projects</h2>
        <p className="regular-paragraph max-w-[835px]">
          From full-stack platforms to hackathons and SaaS tools, we’ve tackled real problems with bold ideas and clean execution. Here’s a look at what we’ve built at Bugeros:
        </p>

      </div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
