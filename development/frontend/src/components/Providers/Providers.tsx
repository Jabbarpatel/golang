import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { CustomProvider } from "rsuite";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/redux/store";

export type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <HeroUIProvider>
      <CustomProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
          </RouterProvider>
        </QueryClientProvider>
      </CustomProvider>
    </HeroUIProvider>
  );
};
export default Providers;
