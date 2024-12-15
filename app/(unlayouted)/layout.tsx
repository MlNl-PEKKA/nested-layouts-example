import { PropsWithChildren } from "react";

const Layout = async (props: PropsWithChildren) => {
  return (
    <div>
      <div>{`No side-bar here`}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
