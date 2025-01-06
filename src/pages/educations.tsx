import React from "react";
//import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"; // Import the Layout component
//import Link from "@docusaurus/Link"; // Docusaurus Link for navigation
//import "bootstrap/scss/bootstrap.scss"; // Include the full Bootstrap SCSS (optional)
//import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS

// Custom styles
//import styles from "./../components/HomepageFeatures/styles.module.css";
//Typescript projects section
interface Education {
  id: string;
  title: string;
  date: string;
  category: string[];
  taken_courses: string[];
  extracurricular_activities: string[];
}

const educations: Education[] = [
  {
    id: "University of Anadolu",
    category: ["all", "bachelor"],
    date: "2022-2025",
    title: "Pursuing Undergraduate Degree in Management Information Systems",
    taken_courses: [
      "Advanced Programming",
      "Database Programming",
      "Internet And Web Programming",
      "New Trends in Programming",
      "Database Systems",
      "Social Network Analysis",
      "Data Mining",
      "Project Management",
      "User Experience Design",
      "Enterprise Resource Planning Systems",
      "System Analysis and Design",
      "Process Table Programming",
      "Production Management",
      "Digital Transformation",
      "Brand and Management",
      "Organizational Behavior",
      "Network Management and Information Security",
      "Entrepreneurship and Starting a Business",
      "Innovation Management",
      "Operations Research",
      "Decision Models",
      "Financial Statements Analysis",
      "Customer Relations Management",
      "Decision Support Systems",
    ],
    extracurricular_activities: [
      "Enhanced my English proficiency from intermediate to fluent.",
      "Completed CS50's Introduction to Programming with Python course.",
      "Developed scripts in Python and Bash to enhance skills in automation and problem-solving.",
      "Expanded my knowledge of networking.",
      "Engaged in Cybermentor’s ‘Zero to Hero’ course to acquire knowledge in network penetration testing and fundamental cybersecurity principles.",
      "Having used Linux as my main operating system for almost four years, I have successfully resolved numerous Linux-related issues and explored various Linux distributions.",
      "Acquired knowledge in Gentoo, Arch, Debian, and Fedora to expand my Linux expertise, with substantial progress in Fedora and Arch. Currently exploring new distros like Nixos to enhance my skills for my sysadmin role.",
    ],
  },
  {
    id: "University of Namik Kemal",
    category: ["all", "associate"],
    date: "2019-2021",
    title: "Associate Degree in Computer Programming",
    taken_courses: [
      "Computer Hardware",
      "Object Oriented Programming",
      "Data Structures and Programming",
      "Database",
      "Artificial Neural Networks",
      "System Programming",
      "Internet Programming",
      "System Analysis and Design",
      "Visual Programming",
      "Professional Foreign Language (English)",
      "Math",
      "Principles of Atatürk and History of Turkish Revolution",
      "Turkish Language",
    ],
    extracurricular_activities: [
      "Acquired fundamental knowledge of SQL and practiced it through homework assignments.",
      "Learned the fundamentals of virtualizing Linux on VMware and Virtualbox.",
      "Learned web development fundamentals; HTML, CSS, and PHP. Also gained proficiency in using Joomla and WordPress.",
      "Learned how programming languages function and the underlying processes in computer programming.",
      "Learned desktop and laptop maintenance, including cleaning and applying thermal paste. ",
    ],
  },
];

function EducationPage() {
  const [activeFilter, setActiveFilter] = React.useState<string>("all");
  const filteredEducation = educations.filter((education) =>
    activeFilter === "all" ? true : education.category.includes(activeFilter),
  );

  return (
    <Layout title="Education" description="My Education">
      {/* Header Section */}
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
              Education
            </span>
            <meta itemProp="position" content="1" />
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container education-section">
        <section>
          <div className="education-tabs-container" id="education">
            <ul role="tablist" aria-orientation="horizontal" itemScope={true}>
              {["all", "associate", "bachelor"].map((filter) => (
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
            <div className="container-md themed-container text-center">
              <div className="education-container container margin-top--lg ">
                {filteredEducation.map((education, index) => (
                  <div key={index} className="education-item margin-bottom--lg">
                    <h2 className="education-title">{education.title}</h2>
                    <div className="education-details">
                      <p className="education-degree">{education.id}</p>
                      <p className="education-date">{education.date}</p>
                    </div>
                    <div className="education-courses">
                      <h3 className="education-courses-title">
                        Taken Courses:
                      </h3>
                      <ul>
                        {education.taken_courses
                          //.split(",")
                          .map((course, courseIndex) => (
                            <li key={courseIndex} className="education-course">
                              {course.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="education-activities">
                      <h3 className="education-activities-title">
                        Extracurricular Activities:
                      </h3>
                      <ul>
                        {education.extracurricular_activities
                          //.split(",") // used only for string not for string[]
                          .map((activity, activityIndex) => (
                            <li
                              key={activityIndex}
                              className="education-activity"
                            >
                              {activity.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
                {filteredEducation.length === 0 && (
                  <div className="col-12 text-center">
                    No education found for this filter.
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

export default EducationPage;
