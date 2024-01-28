import { AboutServices } from "./About/Services";
import { TestimonialModal } from "./About/TestimonialModal";
import { AboutTestimonials } from "./About/Testimonials";


export const About = () => {

  return <article className={`about active`} data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I'm A passionate and creative JavaScript and Flutter developer, I am constantly looking for new ways to improve user
        experience and solve technical challenges with innovative solutions. I also like to share my passion for IT through
        training to allow others to get started with application development.
      </p>

      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. 
      </p>
    </section>

    {/* - service */}
    <AboutServices />

    {/* - testimonials */}
    <AboutTestimonials />

    {/* testimonials modal */}
    <TestimonialModal />

    {/* clients */} 
    {/* <AboutClients /> */}

  </article>;
}