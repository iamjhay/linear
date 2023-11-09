import { Button, Highlight } from "../Button";
import { Hero, HeroSubTitle, HeroTitle } from "../Hero";
import { HeroImage } from "../HeroImage";
import { ChevronIcon } from "../Icons/chevron";

export const HomepageHero = () => {
  return (
    <Hero>
      <Button
        className="animate-fade-in opacity-0 translate-y-[-1rem]"
        href="/"
        variant="secondary"
        size="small"
      >
        Last Year You Said Next Year{" "}
        <Highlight className="px-2 ml-3">→</Highlight>
      </Button>
      <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
        Linear is a better way <br className="hidden md:block" /> to build
        products
      </HeroTitle>
      <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps."
      </HeroSubTitle>
      <Button
        className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
        href="/"
        variant="primary"
        size="large"
      >
        Get Started
        <Highlight>
          <ChevronIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
};
