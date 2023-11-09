import classNames from "classnames";
import type { NextPage } from "next";
import { Clients } from "../components/sections/Clients";
import { Container } from "../components/Container";
import { StarsIllustration } from "../components/Icons/stars";
import Layout from "../components/Layout";
import { UnlIkeAnyTool } from "../components/sections/UnlIkeAnyTool";
import { HomepageHero } from "../components/sections/Homepage-Hero";
import { EnjoyIssueTracking } from "../components/sections/EnjoyIssueTracking";
import { BuildMomentum } from "../components/sections/BuildMomentum";
import { SetDirection } from "../components/sections/setDirections";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Clients />
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-[52.5%] after:h-[200%] after:w-[200%] after:rounded-[100%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <UnlIkeAnyTool />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </Layout>
  );
};

export default Home;
