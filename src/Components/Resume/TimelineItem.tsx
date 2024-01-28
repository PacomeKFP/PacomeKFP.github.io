export type TimelineItemProps = {
  title: string,
  period: string,
  description: string | Array<string>
}

export const TimelineItem = ({ title, period, description }: TimelineItemProps) => {
  return <li className="timeline-item">

    <h4 className="h4 timeline-item-title">{title}</h4>

    <span>{period}</span>

    <p className="timeline-text">
      {
        typeof description == "string" ?
          description
          :
          <ul>
            {description.map(line => <li>{line}</li>)}
          </ul>
      }
    </p>

  </li>;
}