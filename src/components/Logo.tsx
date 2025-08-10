import React from "react"
import classNames from "classnames"
import {Link} from "react-router"
import {logo} from "../assets"

type LogoProps = {
  imageSrc?: string
  text?: string
  hideText?: boolean
  layout?: "row" | "column"
  imageAlt?: string
  className?: string
  imageClassName?: string
  textClassName?: string
}

export const Logo: React.FC<LogoProps> = ({
  imageSrc = logo,
  text = "PACOA GmbH",
  hideText = false,
  layout = "row",
  imageAlt = "Logo",
  className = "",
  imageClassName = "h-10 w-auto", // default image size
  textClassName = "text-lg font-bold text-red-600", // default text style
}) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-center gap-2 font-corporatus",
        layout === "column" && "flex-col",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={classNames("object-contain", imageClassName)}
      />
      {!hideText && (
        <span className={classNames("tracking-wide", textClassName)}>
          {text}
        </span>
      )}
    </Link>
  )
}

export default Logo
