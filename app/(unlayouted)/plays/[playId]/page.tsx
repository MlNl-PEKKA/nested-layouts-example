import { PropsWithChildren } from "react";

const Page = async (
  props: PropsWithChildren<{ params: Promise<{ playId: string }> }>
) => {
  const { playId } = await props.params;
  return (
    <div>
      <div>{`App->(Unlayouted)->Plays->PlayID:${playId}->Page`}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Page;
