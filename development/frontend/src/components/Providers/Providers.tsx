import React from "react";
import { HeroUIProvider } from "@heroui/react";

export type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
export default Providers;
