import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About This Project</h1>

      <p>
        This shopping cart project is built with React and TypeScript.  
        It demonstrates API integration, state management, cart logic,
        and scalable component design.
      </p>

      <h2>Technologies Used</h2>
      <ul className="tech-list">
        <li>React</li>
        <li>TypeScript</li>
        <li>React Router</li>
        <li>React Query</li>
        <li>Context API + Reducer</li>
      </ul>

      <p className="footer">Designed & developed by Zohre Sotoudeh</p>
    </div>
  );
}
