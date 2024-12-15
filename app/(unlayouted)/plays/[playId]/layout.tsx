import { PropsWithChildren } from "react";

const Layout = async (
  props: PropsWithChildren<{ params: Promise<{ playId: string }> }>
) => {
  const { playId } = await props.params;
  return (
    <div>
      <div>{`App->(Unlayouted)->Plays->PlayID:${playId}->Layout`}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
