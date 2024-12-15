import { PropsWithChildren } from "react";

const Layout = async (props: PropsWithChildren) => {
  return (
    <div>
      <div>{`App->(Unlayouted)->Layout`}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
