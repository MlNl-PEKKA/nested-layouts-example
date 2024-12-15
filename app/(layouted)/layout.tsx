import { PropsWithChildren } from "react";

const Layout = async (props: PropsWithChildren) => {
  return (
    <div>
      <div>{`Here's my side-bar`}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
