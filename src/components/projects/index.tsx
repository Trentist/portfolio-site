import classNames from "classnames"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants"
import Link from "../link"
import Image from "next/image"

const projectList = [
  {
    img: "/projects/koralgo.png",
    title: "Koralgo",
    link: "https://koralgo.com",
    desc: "A travel booking platform where users can search for flights, book accommodations, and manage their itineraries. The system integrates payment processing, user authentication, and itinerary management.",
    author: "Next.js, Firebase, NestJS, Google Map API, Payment Integration, Tailwind CSS"
  },
  {
    img: "/projects/cirrusmed.png",
    title: "CirrusMed",
    link: "https://cirrusmed.com",
    desc: "CirrusMED is a telehealth platform that offers personalized and convenient healthcare services. It connects patients with board-certified doctors for virtual consultations, direct messaging, and ongoing care.",
    author: "React.js, Node.js, Express, MongoDB, MERN Stack, Material UI, WebRTC"
  },
  {
    img: "/projects/valt.png",
    title: "V.A.L.T",
    link: "https://www.ipivs.com",
    desc: "V.A.L.T is a versatile video recording platform designed to streamline and enhance the process of capturing, organizing, and managing video content.",
    author: "React.js, Node.js, Express, MongoDB, Tailwind CSS, WebRTC, React Native"
  },
  {
    img: "/projects/yard-sale.png",
    title: "Yard Sale",
    link: "https://play.google.com/store/apps/details?id=com.lstLearn.yardsale&hl=en_GB",
    desc: "md-editor is a markdown-it based markdown editor, including sync scrolling, multi file record,upload and download, generate toc, menu edit btn, code block theme switch, content state local cache...",
    author: "React Native Expo, WebRTC, Express, Firebase, NativeWind"
  },
  {
    img: "/projects/tunnel.png",
    title: "Tunnel Video",
    link: "https://play.google.com/store/apps/details?id=com.forasoft.videocalls&hl=en_GB",
    desc: "Tunnel is a secure communication platform designed for fast and confidential conversations, eliminating the need for logins and passwords to ensure a seamless user experience.",
    author: "React Native, WebRTC, Express, MongoDB"
  },
  {
    img: "/projects/solana.png",
    title: "Solana Website",
    link: "solana.com",
    desc: "Create a sleek, user-centric website that showcases Solana's blockchain technology, emphasizing speed, scalability, and innovation while offering a seamless experience for developers and users.",
    author: "Next.js, Builder.io, Tailwind CSS, styled-components"
  },
  {
    img: "/projects/servicetitan.png",
    title: "ServiceTitan Website",
    link: "https://www.servicetitan.com",
    desc: "ServiceTitan is a comprehensive software platform designed for home and commercial service businesses. It offers tools to streamline workflows, enhance productivity, and improve customer experiences.",
    author: "React.js, Gatsby, styled-components, Tailwind CSS, Material UI"
  },
  {
    img: "/projects/blip.png",
    title: "Blip",
    link: "https://blipphoto.com/",
    desc: "Blip Delivery is a service that specializes in on-demand shipping using advanced drone technology. It aims to provide fast, reliable delivery for both vendors and consumers, revolutionizing logistics with cutting-edge solutions.",
    author: "Next.js, Intercom chat, Shadcn UI, Express, PostgreSQL"
  },
  {
    img: "/projects/work.svg",
    title: "My Work",
    desc: "The above are open source projects that I develop in my spare time. At work, I am a front-end development engineer mainly responsible for C-end projects, focusing on media and e-commerce industry. My work involves multiple platforms, including PC, mobile, mini program and APP. Brands worked and served include Converse, Coach, UA, and DJCars.",
    maxWidth: "170px"
  }
]

const Projects = () => {
  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames("w-full text-center text-6xl", MonotonFont.className)}
      >
        Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
          }}
        >
          <div className="relative z-[2]">
            {
              projectList.map((project, index) => (
                <div
                  className="flex px-10 gap-x-4 relative py-12"
                  key={index}
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    wordSpacing: "0.2rem"
                  }}
                >
                  <div className={classNames("w-1/2 flex-1", BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <Image
                      src={project.img}
                      className="w-full h-auto rounded-xl my-5 mx-auto hidden max-600:block dark:opacity-100"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                      alt="projectImage"
                      width={200}
                      height={200}
                    /> 

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          <Link href={project.link} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    {
                      project.author && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Tech: </span>
                          <span className="whitespace-pre-line">
                            {project.author}
                          </span>
                        </div>
                      )
                    }
                  </div>

                  <div className="w-3/5 h-auto sticky top-20 justify-center flex max-600:hidden dark:opacity-80">
                    <Image
                      src={project.img}
                      width={500}
                      height={500}
                      quality={100}
                      className="w-full h-fit rounded-xl"
                      alt="projectImg"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
