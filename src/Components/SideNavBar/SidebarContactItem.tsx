export type SidebarContactItemProps = {
  name: string,
  value: string
  presentValue?: string
  isAdress?: boolean
}

export const SidebarContactItem = ({ props }: { props: SidebarContactItemProps }) => {
  return (<li className="contact-item">

    <div className="icon-box">
      {/* <ion-icon name="mail-outline"></ion-icon> */}
    </div>

    <div className="contact-info">
      <p className="contact-title">{props.name}</p>

      {
        props.isAdress
          ?
          <address>
            {props.value}
          </address>
          :
          <a href={`mailto:${props.value}`} className="contact-link">
            {props.presentValue ?? props.value}
          </a>
      }
    </div>

  </li>)
}