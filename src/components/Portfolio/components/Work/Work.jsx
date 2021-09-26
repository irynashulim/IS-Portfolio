import Project from "./components/Project";
function Work({ repos }) {
  return (
    <>
      <p className="section-title">My Projects</p>
      <div className="projects">
        {repos.map((repo, i) => (
          <Project key={i} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default Work;
