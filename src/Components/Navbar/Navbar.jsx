import React, { createRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./NavBar.css";
import logo from "../About/first look logo.png";
import { Link } from "react-router-dom";

/*--------------------
Items
--------------------*/
const items = [
  {
    name: "Home",
    color: "#ffac09",
    href: "/",
    type: "text",
  },
  {
    name: "Events",
    color: "#ffac09",
    href: "/events",
    type: "text",
  },
  {
    name: logo,
    color: "#ffac09",
    href: "/home",
    type: "image",
  },
  {
    name: "Contact Us",
    color: "#ffac09",
    href: "/contact",
    type: "text",
  },
  {
    name: "About Us",
    color: "#ffac09",
    href: "/aboutUs",
    type: "text",
  },
];

/*--------------------
Menu
--------------------*/
const Menu = ({ items }) => {
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(() => createRef()));
  const [active, setActive] = useState(0);

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: "elastic.out(.7, .7)",
      duration: 0.8,
    };

    gsap.to($indicator1.current, {
      ...settings,
    });

    gsap.to($indicator2.current, {
      ...settings,
      duration: 1,
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("resize", animate);

    return () => {
      window.removeEventListener("resize", animate);
    };
  }, [active]);

  return (
    <div ref={$root} className="menu fixed-top">
      {items.map((item, index) =>
        item.type == "text" ? (
          <Link
            key={item.name}
            ref={$items.current[index]}
            className={`item ${active === index ? "active" : ""} `}
            onMouseEnter={() => {
              setActive(index);
            }}
            to={item.href}
          >
            {item.name}
          </Link>
        ) : (
          <Link to="/">
            <img src={logo} className="logo_main" />
          </Link>
        )
      )}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
};

export const NavBar = () => {
  return <Menu items={items} />;
};
