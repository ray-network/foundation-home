import React, { useState } from "react"
import Menu from "@/components/menu"
import { Input, message } from "antd"
import * as style from "./style.module.scss"

const Waiting = () => {
  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const subscribe = async () => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )

    if (validEmail) {
      let formData = new FormData()
      formData.append("EMAIL", email)
      setLoading(true)
      await fetch(
        "https://raynetwork.us20.list-manage.com/subscribe/post?u=630230660ec54c50b0c34762c&id=844a6bbde0",
        {
          method: "post",
          mode: "no-cors",
          body: formData,
        }
      )
      setLoading(false)
      setEmail()
      message.success("You have successfully subscribed!")
    } else {
      message.error("Please enter a valid email address.")
    }
  }


  return (
    <div className={style.container}>
      <Menu />
      <div className={style.containerInner}>
        <div
          className={style.containerInnerBg}
          style={{ backgroundImage: "url(/resources/banners/shift.jpg)" }}
        />
        <div className={style.containerInnerFade} />
        <div className="ray__block mb-0">
          <div className={style.promo}>
            <div className={style.promoInner}>
              <h1>
                Ray Foundation
              </h1>
              <p className="mb-3">We exist to enable community-driven innovation to benefit people around the world.</p>
              <p className="mb-3">
                We are a non-profit foundation that is responsible for contracting protocol maintainers, funding ecosystem development, and shepherding core governance of the Ray Network.
              </p>
              <p>
                Contact us: <a href="mailto:hello@raynetwork.io" className="me-3">hello@raynetwork.io</a>
                Homepage: <a href="https://raynetwork.io/" className="me-3">raynetwork.io</a>
              </p>
              <div className="max-width-400 mb-5">
                <Input.Search
                  placeholder="Enter your email"
                  allowClear
                  enterButton="Subscribe"
                  size="large"
                  value={email}
                  type="email"
                  onSearch={() => subscribe()}
                  onChange={(e) => setEmail(e.target.value)}
                  loading={loading}
                />
              </div>
              {/* <div>
                <a
                  href="https://raynetwork.io"
                  className="ray__btn ray__btn--round me-3 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="me-2">Ray Network</span>
                  <i className="ri ri-ext ri-arrow_up" />
                </a>
                <a
                  href="https://raywallet.io"
                  className="ray__btn ray__btn--round me-3 mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="me-2">RayWallet</span>
                  <i className="ri ri-ext ri-arrow_up" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Waiting
