import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"
import { SVGRay } from "@/svg"

const Menu = () => {
  return (
    <div className={style.container}>
      <div className="ray__block mb-0">
        <div className={style.menu}>
          <div className={style.menuLogo}>
            <Link to="/" className={style.logo}>
              <SVGRay />
              <span>Ray Foundation</span>
            </Link>
          </div>
          <div className={style.menuDescr}>
            Community-driven decentralized innovations
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
