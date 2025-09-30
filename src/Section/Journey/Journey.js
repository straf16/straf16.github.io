import "./Journey.scss";
import JobIcon from "../../assets/job-icon.svg";
import SchoolIcon from "../../assets/school-icon.svg";

const Journey = () => {
  return (
    <div id="journey-section" className="section-wrapper">
      <span className="section-title">JOURNEY</span>
      <div className="journey-list">
        <span className="section-subtitle">Work Experience</span>
        <div className="job-list-wrapper">
          <div className="job-list">
            <div className="job-title-wrapper">
              <p className="job-title">Frontend Developer</p>
              <p className="job-period">Mei 2024 - Present</p>
              <div className="icon-container">
                <img alt="job-icon" src={JobIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">Mandala Multifinance</p>
              <div className="divider" />
              <ul className="job-desc">
                <li>Upgraded React Native version from 0.65.3 to 0.74.5 on MPowerMobile, improving performance and stability across iOS and Android.</li>
                <li>Revamped MPower App using Expo SDK 53, updating React & React Native versions and upgrading Google API level to 35.</li>
                <li>Implemented reusable components in MPower Mobile, reducing development time and debugging effort.</li>
                <li>Revamped Absen, Cuti, and Izin modules in MPower Mobile, integrating with the new HR management system (Peoplesoft API) to streamline approval processes.</li>
                <li>Implemented root/jailbreak detector and anti-fake GPS features to address penetration test findings.</li>
              </ul>
            </div>
          </div>
          <div className="job-list">
            <div className="job-title-wrapper">
              <p className="job-title">Frontend Developer</p>
              <p className="job-period">Mar 2022 -  Feb 2024</p>
              <div className="icon-container">
                <img alt="job-icon" src={JobIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">Blue Bird Group</p>
              <div className="divider" />
              <ul className="job-desc">
                <li>Created KitBird Frontend UI Library that provides reusable component for UI Dashboard</li>
                <li>Implemented pre-commit husky to prevent common mistake on code and shorten the review code process</li>
                <li>Implemented micro frontend for reservation website that make development process easier and faster deployment process</li>
                <li>Built Access Control List (ACL) in the GoldenBird Dashboard to manage user access that will group clients by role</li>
                <li>Implemented Verdaccio as a private package library that store micro frontend module</li>
              </ul>
            </div>
          </div>
          <div className="job-list">
            <div className="job-title-wrapper">
              <p className="job-title">Full Stack Engineer</p>
              <p className="job-period">Apr 2020 -  Nov 2021</p>
              <div className="icon-container">
                <img alt="job-icon" src={JobIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">CUMI Marketplace</p>
              <div className="divider" />
              <ul className="job-desc">
                <li>Implemented a new design on the login and registration page that improved user experience</li>
                <li>Migrate the php website/app into responsive single page app using ReactJS that improved responsiveness and multi-platform compatibility</li>
                <li>Built and integrate an item snapshot page into inquiry to show last data on item when user checkout</li>
                <li>Created a help center page that provides popular articles to answer common user questions</li>
                <li>Built a shipping label and integrate with new delivery option AnterAja to provide item package information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="journey-list">
        <span className="section-subtitle">Education</span>
        <div className="job-list-wrapper">
          <div className="job-list">
            <div className="education-title-wrapper">
              <p className="job-title">Undergraduate Student</p>
              <p className="job-period">Nov 2023 -  Present</p>
              <div className="icon-container">
                <img alt="job-icon" src={SchoolIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">Binus University - Jakarta, Indonesia</p>
              <p className="course-title">Information Systems</p>
            </div>
          </div>
          <div className="job-list">
            <div className="education-title-wrapper">
              <p className="job-title">Coding Bootcamp</p>
              <p className="job-period">Jul 2019 -  Dec 2019</p>
              <div className="icon-container">
                <img alt="job-icon" src={SchoolIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">Hacktiv8 Coding Bootcamp - Jakarta, Indonesia</p>
              <p className="course-title">Full Stack Javascript Immersive</p>
            </div>
          </div>
          <div className="job-list">
            <div className="education-title-wrapper no-border">
              <p className="job-title">High School Diploma</p>
              <p className="job-period">Jul 2015 -  May 2018</p>
              <div className="icon-container">
                <img alt="job-icon" src={SchoolIcon} />
              </div>
            </div>
            <div className="job-company">
              <p className="company-title">SMAN 2 Depok - Jakarta, Indonesia</p>
              <p className="course-title">Social Sciences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
