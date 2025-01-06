import React from "react";
//import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"; // Import the Layout component
//TEST:
import MDXContent from "@theme/MDXContent";

//import Link from "@docusaurus/Link"; // Docusaurus Link for navigation
//import "bootstrap/scss/bootstrap.scss"; // Include the full Bootstrap SCSS (optional)
//import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

// Custom styles
//import styles from "./../components/HomepageFeatures/styles.module.css";

//Typescript skills section
interface Skill {
  id: string;
  title: string;
  description: string;
  category: string[];
}

const skills: Skill[] = [
  {
    id: "linux",
    title: "Linux",
    description:
      "He knows the most commonly used terminal commands and can troubleshoot common issues. He is passionate about Linux and eager to enhance his knowledge of it. He has several years of experience using Linux as his main operating system.",
    category: ["all", "sysadmin"],
  },
  {
    id: "python",
    title: "🚀 Python",
    description:
      "Proficient in writing scripts, continuously enhancing my skills. Enthusiastic about utilizing Python to solve problems and automate repetitive tasks.",
    category: ["all", "sysadmin"],
  },
  {
    id: "bash",
    title: "🦄 Bash",
    description:
      "Fundamental knowledge of coding with the ability to utilize internet resources and AI assistance for problem-solving and code implementation.",
    category: ["all", "sysadmin"],
  },
  {
    id: "git",
    title: "🚧 Git",
    description:
      "I have experience with git-based development, primarily using GitHub. I learned Git when I needed to create Python scripts to solve problems. While I am still learning, I have a solid understanding of fundamental Git CLI usage.",
    category: ["all", "sysadmin"],
  },
  // Add more skill objects as necessary...
  {
    id: "web-development",
    title: "🛸 Web Development",
    description:
      "Familiar with HTML and CSS, with introductory exposure to PHP; constructed a simple website using these technologies. I also developed websites using WordPress, Joomla, Hugo, Jeckly and Docusaurus.",
    category: ["all", "sysadmin"],
  },
  {
    id: "sql",
    title: "🌟 SQL",
    description: "Mastered fundamentals with school curriculum.",
    category: ["all", "sysadmin"],
  },
  {
    id: "cpp",
    title: "🌟 C++",
    description: "Acquired fundamental knowledge through school curriculum.",
    category: ["all", "sysadmin"],
  },
  {
    id: "cloud",
    title: "🌟 Cloud Computing",
    description:
      "I set up Fedora Server on my old laptop. I set up Nextcloud on a Fedora Server manually by configuring PHP, MySQL, and essential components.",
    category: ["all", "sysadmin"],
  },
];

function SkillPage() {
  //const { siteConfig } = useDocusaurusContext();
  const [activeFilter, setActiveFilter] = React.useState<string>("all");

  const filteredSkills = skills.filter((skill) =>
    activeFilter === "all" ? true : skill.category.includes(activeFilter),
  );

  return (
    <Layout title="Skills" description="My skills">
      {/* Header Section */}
      {/*
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title} - Skills</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      */}
      <nav
        className="theme-doc-breadcrumbs breadcrumbsContainer_Z_bl"
        aria-label="Breadcrumbs"
      >
        <ul
          className="breadcrumbs padding--lg"
          itemScope={true}
          itemType="https://schema.org/BreadcrumbList"
        >
          <li className="breadcrumbs__item">
            <a aria-label="Home page" className="breadcrumbs__link" href="/">
              <svg viewBox="0 0 24 24" className="breadcrumbHomeIcon_YNFT">
                <path
                  d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
          <li
            itemScope={true}
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="breadcrumbs__item breadcrumbs__item--active"
          >
            <span className="breadcrumbs__link" itemProp="name">
              Skills
            </span>
            <meta itemProp="position" content="1" />
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container">
        <section>
          <div className="tabs-container " id="skills">
            <ul role="tablist" aria-orientation="horizontal" itemScope={true}>
              {["all", "sysadmin", "developer"].map((filter) => (
                <li
                  key={filter}
                  role="tab"
                  tabIndex={activeFilter === filter ? 0 : -1}
                  aria-selected={activeFilter === filter}
                  className={`tabs__item tabItem_1uMI ${
                    activeFilter === filter ? "tabs__item--active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </li>
              ))}
            </ul>

            <div className="container filtr-skills margin-top--lg">
              <div className="row list_eTzJ" id="skill-card-holder">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="col col--6 margin-bottom--lg filtr-item"
                    data-category={skill.category}
                  >
                    <div className="d-flex">
                      <h3
                        className="text--truncate cardTitle_dwRT"
                        title="Pages"
                      >
                        {skill.title}
                      </h3>
                    </div>

                    <div className="sub-title">
                      <p>{skill.description}</p>
                    </div>
                  </div>
                ))}
                {filteredSkills.length === 0 && (
                  <div className="col-12 text-center">
                    No skills found for this filter.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default SkillPage;
