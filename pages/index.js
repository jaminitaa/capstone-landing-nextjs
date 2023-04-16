import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Lexend } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { ImGithub } from "react-icons/im"
import { ImLinkedin } from "react-icons/im"
import { ImSphere } from "react-icons/im"
import React, { useState } from 'react';
import YoutubeVideo from "./video.js"
import Layout from "./layout.js";

const lexend = Lexend({ subsets: ['latin'] })

const MyLink = React.forwardRef(
  (
    { as, children, href, replace, scroll, shallow, passHref, ...rest }, // extract all next/link props and pass the rest to the anchor tag
    ref,
  ) => (
    <Link as={as} href={href} passHref={passHref} replace={replace}>
      {/* <a {...rest} ref={ref}> */}
        {children}
      {/* </a> */}
    </Link>
  ),
);

const Profile1 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/danika.png" className={styles.image}  width={306} height={306} layout="responsive" alt="danika" />
        ) : (
          <Image src="/headshots/danika.png" className={styles.image} width={306} height={306} layout="responsive" alt="danika" />
        )}
      </MyLink>
    </div>
  );
};

const Profile2 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/elmer.png" className={styles.image} width={306} height={306} layout="responsive" alt="elmer" />
        ) : (
          <Image src="/headshots/elmer.png" className={styles.image} width={306} height={306} layout="responsive" alt="elmer" />
        )}
      </MyLink>
    </div>
  );
};

const Profile3 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/iris.png" className={styles.image} width={306} height={306} layout="responsive" alt="iris" />
        ) : (
          <Image src="/headshots/iris.png" className={styles.image} width={306} height={306} layout="responsive" alt="iris" />
        )}
      </MyLink>
    </div>
  );
};

const Profile4 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/keiko.png" className={styles.image} width={306} height={306} layout="responsive" alt="keiko" />
        ) : (
          <Image src="/headshots/keiko.png" className={styles.image} width={306} height={306} layout="responsive" alt="keiko" />
        )}
      </MyLink>
    </div>
  );
};

const Profile5 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/giancarlo.png" className={styles.image} width={306} height={306} layout="responsive" alt="giancarlo" />
        ) : (
          <Image src="/headshots/giancarlo.png" className={styles.image} width={306} height={306} layout="responsive" alt="giancarlo" />
        )}
      </MyLink>
    </div>
  );
};

const Profile6 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/herlan.png" className={styles.image} width={306} height={306} layout="responsive" alt="herlan" />
        ) : (
          <Image src="/headshots/herlan.png" className={styles.image} width={306} height={306} layout="responsive" alt="herlan" />
        )}
      </MyLink>
    </div>
  );
};

const Profile7 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/jane.png" className={styles.image} width={306} height={306} layout="responsive" alt="jane" />
        ) : (
          <Image src="/headshots/jane.png" className={styles.image} width={306} height={306} layout="responsive" alt="jane" />
        )}
      </MyLink>
    </div>
  );
};


const Profile8 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/joanne.png" className={styles.image} width={306} height={306} layout="responsive" alt="joanne" />
        ) : (
          <Image src="/headshots/joanne.png" className={styles.image} width={306} height={306} layout="responsive" alt="joanne" />
        )}
      </MyLink>
    </div>
  );
};

const Profile9 = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="profile-image-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <MyLink href="/">
        {isHovering ? (
          <Image src="/headshots-sport/yuenki.png"  className={styles.image} width={306} height={306} layout="responsive" object-fit= "contain"
         alt="yuenki"/>
        ) : (
          <Image src="/headshots/yuenki.png" className={styles.image} width={306} height={306} layout="responsive" alt="yuenki" />
        )}
      </MyLink>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Coala</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <header className={styles.description}>    
                <div className={styles.logo}>
                  <Image
                        src="/Logo.svg"
                        alt="Logo"
                        width={70}
                        height={70}
                        priority
                      />  
                  <h1 className={lexend.className}>      
                    Coala
                  </h1>
                </div>
                  <div className={styles.navwrapper}>
                    <nav className={lexend.className}>
                    <a href="#features">Features</a> 
                    <a href="#team">Team</a> 
                    <a href="#prototype">Prototype</a> 
                    <a href="#contact">Contact</a>
                    </nav>
                    <button className={`${styles.button} ${lexend.className} ${styles.proposalButton}`} >View Proposal</button>
                  </div>
          </header>
           </div>
   
          <main className={styles.main}>
          
          
            <div className={styles.center}>
              <div className={styles.introduction}>
                <h3 className={lexend.className}>Helping Coaches to save time</h3>
                <p className={lexend.className}>Spend more time helping students reach their full potential by focusing on providing quality coaching sessions with powerful and easy to use features!</p>
                <button className={`${styles.button} ${lexend.className} ${styles.ctaButton}`}>Try Coala</button>
              </div>
              <Image
                className={styles.collage}
                src="/collage.svg"
                alt="collage"
                width={700}
                height={700}
                layout="responsive"
                />
            </div>

            <div className={styles.video}>
            <YoutubeVideo />
            {/* <video autoPlay loop muted controls = ''>
            <source src="/Coala_1280x720px.mp4" />
            </video> */}
            </div>

            <div className={styles.features} id="features">
              <h2 className={lexend.className} >The Features</h2>
              <h5 className={lexend.className}>Introducing our personalized coaching solution! </h5>
              <div className={styles.tab}>
                <div>
                <h4 className={`${styles.featureTitle} ${lexend.className} `}>Smart Curriculum</h4>
                <p className={lexend.className}>A personalized solution tailored for every coach to easily access the details and sample videos about each skill exercise required on a program.</p>
                </div>
                <Image
                className={styles.curriculum}
                src="/Curriculum.svg"
                alt="Curriculum"
                width={500}
                height={500}
                />
                
              </div> 
            </div>


            <div className={styles.team} id="team">
              <h2 className={lexend.className}>The Team</h2>
              <h5 className={lexend.className}>Our amazing team that can make anything possible! </h5>
              <div className={styles.grid}>
                <div     className={styles.card}>
                {/* <Image
                className={styles.profile}
                src="/headshots/danika.png"
                alt="danika"
                width={306}
                height={254}
                /> */}
                <Profile1 />
                 <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Danika Enad 
                  </h4>
                  <p className={lexend.className}>
                  Full Stack Developer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/danikaenad"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  
                  <a
                    href="https://github.com/denad00"
                  >
                    <ImGithub />
                  </a>
                  </div>
                </div>

                <div    className={styles.card}>
                {/* <Image
                className={styles.profile}
                src="/headshots/elmer.png"
                alt="elmer"
                width={306}
                height={254}
                /> */}
                <Profile2 />
                 <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Elmer Balbin 
                  </h4>
                  <p className={lexend.className}>
                  Full Stack Developer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/elmzarnsi"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://github.com/elmerdotdev"
                  >
                    <ImGithub />
                  </a>
                  </div>
                </div>

                <div  className={styles.card}>
                <Profile3 />
                 <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Iris Chen 
                  </h4>
                  <p className={lexend.className}>
                  Full Stack Developer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/iris-jiamin-chen"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://github.com/jaminitaa"
                  >
                    <ImGithub />
                  </a>
                  </div>
                </div>

                <div className={styles.card}>
                <Profile4 />
                 <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Keiko Shimizu 
                  </h4>
                  <p className={lexend.className}>
                  Full Stack Developer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/keikoshimizu"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://github.com/keikoshimizu"
                  >
                    <ImGithub />
                  </a>
                  </div>
                </div>

                <div  className={styles.card}>
                <Profile5 />
                  <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Giancarlo Cochella
                  </h4>
                  <p className={lexend.className}>
                  UI/UX Designer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/giancarlocochella"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://www.giancochella.com"
                  >
                    <ImSphere />
                  </a>
                  </div>
                </div>

                <div  className={styles.card}>
                <Profile6 />
                  <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Herlan Wijaya
                  </h4>
                  <p className={lexend.className}>
                  Product Designer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/herlanwijaya"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://www.herlanwijaya.com"
                  >
                    <ImSphere />
                  </a>
                  </div>
                </div>

                <div  className={styles.card}>
                <Profile7 />
                  <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Jane (Jeongeun) Choi
                  </h4>
                  <p className={lexend.className}>
                  UI/UX Designer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/janechoi92"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://www.janefolio.com"
                   
                  >
                    <ImSphere />
                  </a>
                  </div>
                </div>

                <div className={styles.card}>
                <Profile8 />
                  <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Joanne (Kyungeun) Cho
                  </h4>
                  <p className={lexend.className}>
                  UI/UX Designer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/joanne-k-cho"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://www.joannekcho.com"
               
                  >
                    <ImSphere />
                  </a>
                  </div>
                </div>

                <div  className={styles.card}>
                <Profile9 />
                <div className={styles.profileText}>
                  <h4 className={lexend.className}>
                  Yuen Ki Hung
                  </h4>
                  <p className={lexend.className}>
                  UI/UX Designer
                  </p>
                  <a
                  href="https://www.linkedin.com/in/yuenki-hung"
                  className={styles.linkedin}
                  >
                    <ImLinkedin />
                  </a>
                  <a
                    href="https://www.yk-hung.com"
           
                  >
                    <ImSphere />
                  </a>
                  </div>
                </div>

                
              </div>
            </div>

            <div className={styles.cta} id="prototpe" >
              <h2 className={lexend.className}>Give Coala a Try!</h2>
              <div className={lexend.className}>
              {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwuxZxWDMT5G4R6dyflfBAr%2FDopamine-Figma%3Fpage-id%3D1726%253A138577%26node-id%3D1726-141368%26viewport%3D1417%252C683%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D1726%253A139111%26show-proto-sidebar%3D1" allowfullscreen></iframe> */}
              </div>
            </div>
          </main>
          <footer className={styles.contact} id="contact">
            <div className={styles.contactForm}>
              <h2 className={lexend.className}>Get In Touch!</h2>
              <div className={styles.form}>
                <form className={lexend.className}>
                <input className={lexend.className} type="text" id="name" name="name" value="Name"></input>
                <input className={lexend.className} type="text" id="telephone" name="lname" value="Telephone"></input>
                <input className={lexend.className} type="text" id="email" name="email" value="Email"></input>
                <input className={lexend.className} type="text" id="comment" name="comment" value="Comment"></input>
                <input className={`${styles.button} ${lexend.className} ${styles.submitButton}`} type="submit" value="Submit"></input>
                </form>
              </div>
            </div>
              <div className={styles.slogan}>
                <Image
                    src="/Logo.svg"
                    alt="Logo"
                    className={styles.vercelLogo}
                    width={50}
                    height={50}
                    priority
                  />
                <p className={lexend.className}>Boost your coaching efficiency</p>
                <p className={lexend.className}>anywhere, anytime!</p>
                <div  className={styles.footerMsg}>
                <p className={lexend.className}>COMING SOON TO</p>
                <Image  className={styles.stores}
                        src="/AppleStore.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        priority
                      />  
                 <Image  className={styles.stores}
                        src="/GooglePlay.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        priority
                      />  
                </div>
              </div>
              <p className={`${styles.footerText} ${lexend.className} `}>© 2023 Team Dopamine. All Rights Reserved.</p>
            </footer>
        </div>
    </Layout>
  )
}
