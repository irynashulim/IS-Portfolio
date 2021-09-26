function About({ user }) {
  return (
    <div className="section">
      <p className="section-title">Hello, I'm Iryna</p>
      <div className="about">
        <div className="avatar">
          <img src={user.avatar_url} alt="avatar" className="avatar-img" />
        </div>
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat
            doloremque rem laborum! Eaque facilis cumque aperiam impedit
            assumenda vitae eum modi repellendus sequi dolore, voluptatem dolor
            minus voluptates sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint
            est dignissimos ut! Quae dolore, consectetur ex aut quos amet quod
            eos beatae ut explicabo incidunt rerum facere, quaerat officia!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
