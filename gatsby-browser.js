import "antd/es/style/index.css"
import "antd/es/tooltip/style/index.css"
import "antd/es/button/style/index.css"
import "antd/es/input/style/index.css"
import "antd/es/message/style/index.css"
import "antd/es/collapse/style/index.css"
import "antd/es/modal/style/index.css"

import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "@/styles/style.scss"

import AOS from "aos"
import store from "@/redux/provider"
AOS.init({ duration: 1000, once: true })
export const wrapRootElement = store
