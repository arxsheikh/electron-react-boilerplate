import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About This Boilerplate</h1>
        <p>
          This Electron React boilerplate provides a solid foundation for developing modern desktop applications. 
          With Electron's cross-platform capabilities and React's component-based architecture, you can build powerful, maintainable, and user-friendly desktop apps.
        </p>
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">Fast and responsive UI</div>
          <div className="feature-item">Easy to customize and extend</div>
          <div className="feature-item">Cross-platform support (Windows, macOS, Linux)</div>
          <div className="feature-item">Integrated with Webpack for efficient bundling</div>
          <div className="feature-item">Support for hot-reloading in development mode</div>
          <div className="feature-item">Built-in support for Electron's security best practices</div>
          <div className="feature-item">Optimized for production builds</div>
          <div className="feature-item">Uses modern JavaScript syntax with Babel</div>
          <div className="feature-item">Preconfigured with ESLint for code quality</div>
          <div className="feature-item">Includes React Router for SPA development</div>
        </div>
        <p>
          Start building your next desktop app with this boilerplate today!
        </p>
        <div className="sponsorship">
          <h2>Support This Project</h2>
          <p>
            If you find this project useful, please consider supporting its development.
            Your sponsorship helps me dedicate more time to improving and maintaining this boilerplate.
          </p>
          <div className="sponsor-options">
            <a
              href="https://opencollective.com/your-project-name"
              className="sponsor-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support on Open Collective
            </a>
            <p>or</p>
            <p>Contact us via email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
