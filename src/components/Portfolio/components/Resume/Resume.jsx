function Resume() {
  return (
    <div className="section">
      <p className="section-title">Resume</p>
      <a
        href="https://docs.google.com/document/d/16WC0e2KqADJdDo1EPEcxjUJevBK_849mCoZHAEXXTdQ/edit?usp=sharing"
        className="resume"
        target="blank"
      >
        Click Here to View
      </a>
      <div className="resume-body">
        <ul className="skills">
          <p className="skills-title">Front End</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>API</li>
        </ul>
        <ul className="skills">
          <p className="skills-title">Back-end</p>

          <li>Node</li>
          <li>Express</li>
          <li>MySql</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
