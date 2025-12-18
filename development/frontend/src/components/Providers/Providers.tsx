import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { CustomProvider } from "rsuite";

export type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <HeroUIProvider>
      <CustomProvider>{children}</CustomProvider>
    </HeroUIProvider>
  );
};
export default Providers;
