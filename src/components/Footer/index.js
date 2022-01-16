import React from "react"
import { useSelector } from "react-redux"
import { SVGRay, SVGCardano } from "@/svg"
import * as style from "./style.module.scss"

const Footer = () => {
  const networkState = useSelector((state) => state.settings.networkState)

  return (
    <div className={style.outer}>
      <div className="ray__block mb-0">
        <div className="pb-5 pt-5">
          <div>
            <div className="mb-2">
              <a
                className={style.footerRay}
                href="https://raynetwork.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SVGRay />
                <span>
                  <strong>Ray Network</strong>
                </span>
              </a>
            </div>
            <p className="mb-2 text-muted">
              {new Date().getFullYear()} &copy; Ray Foundation DAO | Advanced
              Ecosystem for Cardano Blockchain Platform.{" "}
              <span>
                <span>Powered with</span>{" "}
                <a
                  href="https://cardano.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={style.footerCardano}>
                    <SVGCardano />
                  </span>
                  <strong>Cardano</strong>
                </a>
              </span>
            </p>
            <p className="mb-2 text-muted">
              <span className="me-2 text-capitalize">
                <span className={style.status} />
                Cardano Mainnet: Epoch {networkState?.currentEpoch?.number || 0}
                , Block {networkState?.tip?.number || 0}, Slot{" "}
                {networkState?.tip?.slotNo || 0}
              </span>
            </p>
            <p className="mb-0 text-muted"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
