import Link from "next/link";
import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Highlight } from "./Button";
import { Container } from "./Container";
import { HamburgerIcon } from "./Hamburger";
import { Logo } from "./Icons/Logo";
import { NavigationContext } from "../utils/NavigationContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const navLink = [
  {
    id: "issues",
    name: "Track your work",
    highlight: "Issues",
    href: "/#issues",
  },
  {
    id: "cycles",
    name: "Focus your team",
    highlight: "Cycles",
    href: "/#cycles",
  },
  {
    id: "roadmap",
    name: "Plan your product",
    highlight: "Roadmaps",
    href: "/#roadmap",
  },
  // {
  //   id: "workflows",
  //   name: "Integrate your tools",
  //   highlight: "Workflows",
  //   href: "/#workflows",
  // },
];

interface navLinkProps {
  id: string;
  name: string;
  highlight: string;
  href: string;
  defaultValue: boolean;
}
[];

type index = number;

export default function Header() {
  const router = useRouter();
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const { navigator } = useContext(NavigationContext);
  let navBarRef = useRef<any>();
  let [activeIndex, setActiveIndex] = useState<number | null>(0);
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

  // Stop page scrolling when navbar is open
  useEffect(() => {
    let html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  // Stop page scrolling when navbar is open
  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  useEffect(() => {
    function updateActiveIndex(): void {
      let newActiveIndex = 0;
      let elements: any = navLink.map<HTMLElement | null>(({ id }) =>
        document.getElementById(id)
      );
      let bodyRect = document.body.getBoundingClientRect();
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1;

      if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
        setActiveIndex(navLink.length - 1);
        return;
      }

      for (let index: number = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index;
        } else {
          break;
        }
      }

      setActiveIndex(newActiveIndex);
    }

    updateActiveIndex();

    window.addEventListener("resize", updateActiveIndex);
    window.addEventListener("scroll", updateActiveIndex);

    return () => {
      window.removeEventListener("resize", updateActiveIndex);
      window.removeEventListener("scroll", updateActiveIndex, true);
    };
  }, []);

  return (
    <>
      <header className="fixed z-[1000] top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
        <Container className="flex h-navigation-height font-medium ">
          <Link className="flex items-center text-md" href="/">
            <Logo className="w-[1.7rem] h-[1.7rem] mr-1 sm:mr-2" />
            <span>Linear</span>
          </Link>

          <div
            className={classNames(
              "transition-[visibility] md:visible",
              hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
            )}
          >
            <nav
              className={classNames(
                "overflow-auto h-[calc(100vh_-_var(--navigation-height))] md:h-auto md:w-auto md:block",
                "fixed md:relative top-navigation-height md:top-0 left-0 w-full bg-background md:bg-transparent",
                "transition-opacity md:transition-none duration-500 md:opacity-100 md:translate-x-0",
                hamburgerMenuIsOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-100vw]"
              )}
            >
              <ul
                className={classNames(
                  "flex flex-col md:flex-row md:items-center h-full pt-0 sm:pt-[0.1rem]",
                  "[&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:text-lg md:[&_a]:text-sm",
                  "[&_a]:translate-y-0 [&_a]:transition-[colors,transform] [&_a]:md:transition-[colors] [&_a:hover]:text-grey",
                  "ease-in [&_a]:duration-300 [&_li]:mx-6 md:[&_li]:mr-0 [&_li]:border-b md:[&_li]:border-none [&_li]:border-grey-dark",
                  hamburgerMenuIsOpen && "[&_a]:translate-y-0"
                )}
              >
                <li>
                  <Link href="/">Features</Link>
                </li>
                <li>
                  <Link href="/">Method</Link>
                </li>
                <li className="md:hidden lg:block">
                  <Link href="/">Customers</Link>
                </li>
                <li className="md:hidden lg:block">
                  <Link href="/">ChangeLog</Link>
                </li>
                <li className="md:hidden lg:block">
                  <Link href="/">Integrations</Link>
                </li>
                <li>
                  <Link href="/">Pricings</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto h-full flex items-center">
            <Link href="/" className="text-sm mr-3 sm:mr-6">
              Login
            </Link>
            <Button href="/">Sign Up</Button>
          </div>

          <button
            className="ml-4 sm:ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle Menu</span>
            <HamburgerIcon />
          </button>
        </Container>
      </header>

      <header
        ref={navBarRef}
        className={classNames(
          "transition-[transform,opacity] block fixed z-[1000] top-navigation-height w-full border-b border-transparent-white backdrop-blur-[12px]",
          navigator
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-[-4rem]"
        )}
      >
        <Container className="flex h-navigation-height font-medium ">
          <nav>
            <ul
              className={classNames(
                "hidden md:flex md:items-center h-full pt-0 gap-1",
                "[&_a]:transition-[transform,opacity] [&_a]:hover:opacity-100  [&_a]:py-4",
                "[&_div]:w-0 [&_div]:invisible [&_a]:bg-transparent [&_a]:border-0",
                "[&_span]:bg-white [&_span]:bg-opacity-10 [&_span]:px-4 [&_span]:py-[0.4rem]",
                "[&_.active]:border-[1px] [&_.active_span]:mr-3 [&_.active_span]:py-0 [&_.active_span]:px-3 [&_.active_span]:bg-opacity-30 [&_.active_span]:bg-white [&_.active_div]:visible [&_.active_div]:w-auto [&_.active]:transition-all [&_.active]:animate-slide-in [&_.active]:opacity-0 [&_.active]:translate-x-[-1rem]"
              )}
            >
              {navLink.map(({ name, highlight, href }, index) => (
                <Button
                  key={href}
                  href={href}
                  variant="secondary"
                  size="xtrasmall"
                  className={classNames(
                    index === activeIndex ? "active" : "",
                    "relative"
                  )}
                >
                  {index === activeIndex && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-white/20"
                    />
                  )}
                  <Highlight className="">{highlight}</Highlight>
                  <div>{name}</div>
                </Button>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
}
