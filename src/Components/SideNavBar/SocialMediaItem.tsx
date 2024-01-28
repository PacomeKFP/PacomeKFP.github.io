export const SocialMediaItem = ({ socialMedia, link }: { socialMedia: string, link: string }) => {
  return (
    <li className="social-item">
      <a href={link} className="social-link">
        {/* <ion-icon name='`logo-${socialMedia}`'></ion-icon> */}
        {socialMedia[0].toUpperCase()}
      </a>
    </li >);
}