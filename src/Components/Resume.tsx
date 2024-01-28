import { ResumeSkills, ResumeSkillsProps } from "./Resume/ResumeSkills"
import { ResumeTimeline, ResumeTimelineProps } from "./Resume/ResumeTimeline"

export const Resume = () => {

  const education: ResumeTimelineProps = {
    title: "Education",
    timelineItemProps: [
      {
        title: "Engineering Studies | National Advanced School of Engineering Yaounde",
        period: "09 2021 - Present",
        description: "Learning more about Mathematics, logic, algebra,numerical analysis, computer science, algorithm, and problem solving methodologies"
      },
      {
        title: "Secondary Studies | Classical and Modern High School Garoua",
        period: "09 2017 – 07 2020",
        description: `Learning about Mathemathics, Physics, Computer Science, I was engaged in the ICT Club of my School. Here I was learning about
        basics of programming with HTML, CSS, JavaScript and basics of PHP and SQL I wrotte My first Web project in 2018 about a Social Network in PHP that allows Sending and receiving files, messages and invitations. I also Launched my Youtube Channel to
        share some tips and code about Scratch, HTML and C# development from 2017 to 2019.`
      }
    ],
  }

  const experience: ResumeTimelineProps = {
    title: "Experience",
    timelineItemProps: [
      {
        title: "Freelance | TOGETTECH-LLC",
        period: "02 2023 – 05 2023",
        description: [
          `• Implementation Team Leader`,
          `• Lead developer for interns for Flutter, PHP and MERN stack`,
          `• Design and Implementation of a marketplace application`
        ]
      },
      {
        title: "Freelance | TOGETTECH-LLC",
        period: "06 2022 – 09 2022",
        description: [
          `• Intern’s Lead Developer for MERN stack, PHP and Flutter`,
          `• Maintenance of existing system`,
          `• Implementation of E-learning Application`]
      }
    ],
  }

  const skills: ResumeSkillsProps = [
    { skillName: "Web Design", skillLevel: 80 },
    { skillName: "Graphic Design", skillLevel: 70 },
    { skillName: "Branding", skillLevel: 90 },
    { skillName: "WordPress", skillLevel: 50 }
  ]

  return <article className="resume active" data-page="resume">

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <ResumeTimeline props={education} />
    <ResumeTimeline props={experience} />
    <ResumeSkills props={skills} />

  </article>
}