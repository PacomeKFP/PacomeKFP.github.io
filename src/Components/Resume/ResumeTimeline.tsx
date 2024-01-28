import { TimelineItem, TimelineItemProps } from "./TimelineItem"

export type ResumeTimelineProps = {
  title: string,
  timelineItemProps: Array<TimelineItemProps>
}

export const ResumeTimeline = ({ props }: { props: ResumeTimelineProps }) => {
  return (<section className="timeline">

    <div className="title-wrapper">
      <div className="icon-box">
        {/* <ion-icon name="book-outline"></ion-icon> */}
      </div>

      <h3 className="h3">{props.title} </h3>
    </div>

    <ol className="timeline-list">
      {
        props.timelineItemProps.map((timelineItemProps) => <TimelineItem {...timelineItemProps} />)
      }

    </ol>

  </section>);
}