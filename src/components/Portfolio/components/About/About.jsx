function About({ user }) {
  return (
    <div className="section">
      <p className="section-title">Hi and Welcome To My Page</p>
      <div className="about">
        <div className="avatar">
          <img src={user.avatar_url} alt="avatar" className="avatar-img" />
        </div>
        <div className="bio">
          <p>
            Hello, my name is Alexandru Naumov. I'm a Full Stack Web Developer
            and recently received my certification following years of passion
            for technology and being involved in software development on
            different levels.
          </p>
          <p>
            I'm looking forward to this new step in my life and follow a
            longtime passion in technology. With experience in front end, UX,
            databases and software and hardware testing I can add value to any
            team of developers. New acquired skills in JavaScript, NodeJS, React
            and many others I learned and continue to add to my skill set I feel
            ready for the upcoming challenges in the new career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
