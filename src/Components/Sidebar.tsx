import { Utils } from "../Utils"
import { SidebarContactItem } from "./SideNavBar/SidebarContactItem";
import { SocialMediaItem } from "./SideNavBar/SocialMediaItem";



export const Sidebar = ({ props }: { props: SidebarProps }) => {

  const [phone, formatedPhone] = Utils.stringifyPhoneNumber(props.phone);

  return <aside className="sidebar" data-sidebar>

    <div className="sidebar-info">

      <figure className="avatar-box">
        <img src="/images/my-avatar.png" alt={props.fullname} width="80" />
      </figure>

      <div className="info-content">
        <h1 className="name" title={props.fullname} >{props.fullname} </h1>

        <p className="title">{props.role} </p>
      </div>

      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>

    </div>

    <div className="sidebar-info_more">

      <div className="separator"></div>

      <ul className="contacts-list">

        <SidebarContactItem props={{
          name: "Email",
          value: props.email
        }} />

        <SidebarContactItem props={{
          name: "Phone",
          value: phone,
          presentValue: formatedPhone
        }} />

        <SidebarContactItem props={{
          name: "Birthday",
          value: props.birthDay.toLocaleDateString("fr"),
          presentValue: props.birthDay.toLocaleDateString(Utils.locale, {
            day: "numeric", month: "long", year: "numeric"
          })
        }} />

        <SidebarContactItem props={{
          name: "Location",
          value: props.location,
          isAdress: true
        }} />

      </ul>

      <div className="separator"></div>

      <ul className="social-list">

        <SocialMediaItem socialMedia="facebook" link="#" />
        <SocialMediaItem socialMedia="twitter" link="#" />
        <SocialMediaItem socialMedia="instagram" link="#" />
        <SocialMediaItem socialMedia="linkedin" link="#" />

      </ul>

    </div>

  </aside >
}

export type SidebarProps = {
  fullname: string,
  role: string,
  email: string,
  phone: number,
  birthDay: Date,
  location: string
}