const Headline = ({ text }: { text: string }) => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold uppercase "> {text} </h1>
      <h1 style={{
        userSelect: "none"
      }} className="text-center text-4xl font-semibold uppercase opacity-10 -mt-9 mr-3"> {text} </h1>
    </div>
  );
};
export default Headline;
