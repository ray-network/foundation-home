import React from "react"
import { Helmet } from "react-helmet"
import Cookies from "@/components/Cookies"
import Footer from "@/components/Footer"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Helmet
        titleTemplate="%s"
        title="Ray Foundation"
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/satoshi.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/resources/font/ray-icons.css"
        />
        <meta property="og:url" content="https://ray.foundation" />
        <meta
          name="description"
          content="We are a non-profit foundation that is responsible for contracting protocol maintainers, funding ecosystem development, and shepherding core governance of the Ray Network."
        />
      </Helmet>
      <div>{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
      <Cookies />
    </div>
  )
}

export default MainLayout
