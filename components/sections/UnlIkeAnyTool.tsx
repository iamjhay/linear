import React from "react";
import { Button } from "../Button";
import { CommandMenu } from "../CommandMenu";
import { Container } from "../Container";
import { ChevronIcon } from "../Icons/chevron";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../KeyboardShortCut";

export const UnlIkeAnyTool = () => {
  return (
    <div className="text-white">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            Unlike any tool
            <br className="hidden md:inline-block" /> you've used before
          </h2>
          <p className="mx-auto mb-7 md:mb-12 max-w-[68rem] text-lg text-primary-textx md:text-xl">
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>
        <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
          <div className="snap-x snap-mandatory pb-12 flex overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-6 gap-[2.4rem]">
            <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden text-center col-span-2 lg:col-span-4 rounded-[4.8rem] p-10 bg-glass-gradient border border-transparent-white lg:p-8">
              <KeyboardShortcuts />
              <p className="mb-4 text-2xl lg:text-3xl">
                Built for your keyboard
              </p>
              <p className="max-w-[42rem]  text-md text-primary-text">
                Fly through your tasks with rapid-fire keyboard shortcuts for
                everything. Literally everything.
              </p>
            </div>
            <div className="relative flex min-h-[48rem] w-full shrink-0  snap-center flex-col items-center justify-end overflow-hidden text-center col-span-2 rounded-[4.8rem] p-10 bg-glass-gradient border border-transparent-white lg:p-8">
              <div className="mask-linear-faded absolute top-[-9.2rem] scale-110">
                <ZapIllustration />
              </div>
              <p className="mb-4 text-2xl lg:text-3xl">Breathtakingly fast</p>
              <p className="max-w-[42rem]  text-md text-primary-text">
                Built for speed with 50ms interactions and real-time sync.
              </p>
            </div>
            <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden text-center col-span-2 rounded-[4.8rem] p-10 bg-glass-gradient border border-transparent-white lg:p-8">
              <div className="pointer-events-none absolute top-[-8rem] md:w-[130%]">
                <LogoLightIllustration />
              </div>
              <p className="mb-4 text-2xl lg:text-3xl">
                Designed for modern software teams
              </p>
              <p className="max-w-[42rem]  text-md text-primary-text">
                Comes with built-in workflows that create focus and routine.
              </p>
              <Button
                href="/"
                variant="secondary"
                size="small"
                className="transition-[transform,opacity] opacity-100 lg:group-hover:opacity-100 group-hover:transform-none absolute top-[2rem] lg:top-auto z-10 lg:bottom-[22rem] lg:opacity-0 translate-y-[30%] scale-[0.8]"
              >
                <span className="bg-white bg-opacity-10 h-[2rem] px-[0.8rem] mr-2 rounded-full flex items-center">
                  Linear Method
                </span>
                Product Principles
                <ChevronIcon className="text-primary-text ml-2" />
              </Button>
            </div>
            <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden text-center col-span-2 lg:col-span-4 rounded-[4.8rem] p-10 bg-glass-gradient border border-transparent-white lg:p-8">
              <CommandMenu />
              <div className="md:[.opened+&]:opacity-0 transition-opacity">
                <p className="mb-4 text-2xl lg:text-3xl">
                  Meet your command line
                </p>
                <p className="max-w-[42rem]  text-md text-primary-text">
                  Complete any action in seconds with the global command menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
