export type SkillItemProps = {
  skillName: string, skillLevel: number
}

export const SkillItem = ({ props }: { props: SkillItemProps }) => {
  return <li className="skills-item">
    <div className="title-wrapper">
      <h5 className="h5">{props.skillName}</h5>
      <data value={props.skillLevel.toString()}>{`${props.skillLevel.toString()}%`}</data>
    </div>
    <div className="skill-progress-bg">
      <div className="skill-progress-fill" style={{ width: props.skillLevel.toString() + "%" }}></div>
    </div>
  </li>

}