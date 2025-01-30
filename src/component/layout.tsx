import { PropsWithChildren } from "react";

const Layout = ({children} : PropsWithChildren) => {
  return (
    <div className="bg-mobile md:bg-tablet lg:bg-desktop bg-cover bg-top lg:bg-center relative h-screen overflow-y-scroll">
      <main className="relative pt-3 z-10">{children}</main>
      <div className="absolute top-0 z-0 right-0 bg-pattern-lines bg-cover bg-no-repeat h-[500px] w-full"></div>
      <div className="absolute top-4 right-0 bg-pattern-top bg-contain bg-no-repeat h-[100px] w-[100px] lg:w-[300px] lg:h-[300px]"></div>
      <div className="fixed bottom-0 bg-pattern-mobile lg:bg-pattern-desktop bg-contain bg-no-repeat md:bg-pattern-desktop h-[80px] lg:h-[500px] w-full"></div>
    </div>
  );
};

export default Layout;
