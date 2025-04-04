import { CSSProperties, useEffect, useMemo, useState } from "react"
import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import styles from "./index.module.css"
import { throttle } from "@/utils"
import { SECTION_TYPE } from "./constants"
import LightSVG from "@/assets/icon/light.svg"
import DarkSVG from "@/assets/icon/dark.svg"
import { useTheme } from "@/context/theme"

const tabs = [
  SECTION_TYPE.HOME,
  SECTION_TYPE.ABOUT,
  SECTION_TYPE.PROJECTS,
  SECTION_TYPE.STACK
]

const Tabs = () => {
  const { theme, setTheme } = useTheme()

  const [active, setActive] = useState(SECTION_TYPE.HOME)
  const activeIndex = useMemo(() => {
    return tabs.findIndex((item) => item === active) ?? 0
  }, [active])

  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const hashWithoutHashSign = hash.substring(1)
      if (tabs.includes(hashWithoutHashSign)) {
        document.getElementById(hashWithoutHashSign)?.scrollIntoView()
        setActive(hashWithoutHashSign)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY
      let currentActive = active

      tabs.forEach((section) => {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition + 100) {
          currentActive = section
        }
      })

      if (currentActive !== active) {
        setActive(currentActive)
        history.pushState({}, "", `#${currentActive}`)
      }
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [active])

  const clickTab = (item: string) => {
    setActive(item)
  }

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 w-fit flex items-center justify-center px-1 py-1 rounded-3xl bg-white z-50"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 20px 0px",
        "--active-index": activeIndex
      } as CSSProperties}
    >
      {
        tabs.map((item, index) => (
          <a
            key={index}
            className={classNames(
              `leading-8 w-20 flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ${active === item ? "text-white" : "text-black"} hover:-translate-y-0.5`,
              styles["tab-item"],
              BreeSerifFont.className
            )}
            href={`#${item}`}
            onClick={() => clickTab(item)}
          >
            {item}
          </a>
        ))
      }
      <div
        className={classNames("absolute top-1 h-8 w-20 bg-[#000000] transition-all duration-300 rounded-3xl z-0", styles["tab-item-active"])}
      >
      </div>

      <div
        className={`absolute h-8 w-8 -right-12 top-1 flex items-center justify-center rounded-full cursor-pointer ${theme === "light" ? styles["theme-light"] : styles["theme-dark"]}`}
        onClick={() => setTheme(theme === "dark" ? "light" :  "dark")}
      >
        <LightSVG
          className={`w-8 h-8 transition-all duration-500 absolute top-0 left-0 ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}
        />
        <DarkSVG
          className={`w-4 h-4 transition-all duration-500 absolute top-2 left-2 ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-45"}`}
        />
      </div>
    </div>
  )
}

export default Tabs
