import { ReactNode } from "react";

// Layout for all the pages which have navigation bar

const layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
