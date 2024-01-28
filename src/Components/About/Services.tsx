export const AboutServices = () => {

  const services: ServiceItemProps[] = [
    {
      image: "/images/icon-app.svg",
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android."
    },
    {
      image: "/images/icon-dev.svg",
      title: "Web development",
      description: "High-quality development of sites at the professional level."
    },
    {
      image: "/images/icon-design.svg",
      title: "Desktop Apps",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      image: "/images/icon-photo.svg",
      title: "Project Management",
      description: "I'm learning how to lead and manage a computer science project."
    }
  ]

  return <section className="service">

    <h3 className="h3 service-title">What i'm doing</h3>

    <ul className="service-list">

      {services.map((service) => <ServiceItem {...service} />)}

    </ul>

  </section>
}

type ServiceItemProps = { image: string, title: string, description: string }

const ServiceItem = ({ image, title, description }: ServiceItemProps) => {

  return <li className="service-item">

    <div className="service-icon-box">
      <img src={image} alt="mobile app icon" width="40" />
    </div>

    <div className="service-content-box">
      <h4 className="h4 service-item-title">{title} </h4>

      <p className="service-item-text">
        {description}
      </p>
    </div>

  </li>
}