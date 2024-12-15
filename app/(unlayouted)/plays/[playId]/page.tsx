const Page = async (props: Promise<{ params: { playId: string } }>) => {
  const { playId } = (await props).params;
  return <div>{`App->(Unlayouted)->Plays->PlayID:${playId}->Page`}</div>;
};

export default Page;
