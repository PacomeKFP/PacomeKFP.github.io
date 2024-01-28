import { SkillItem, SkillItemProps } from "./SkillItem"

export type ResumeSkillsProps = Array<SkillItemProps>

export const ResumeSkills = ({ props }: { props: ResumeSkillsProps }) => {
  return <section className="skill">

    <h3 className="h3 skills-title">My skills</h3>

    <ul className="skills-list content-card">
      {
        props.map((SkillItemProps => <SkillItem props={SkillItemProps} />))
      }
    </ul>

  </section>
}