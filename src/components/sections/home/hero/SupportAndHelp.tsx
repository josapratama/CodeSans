import CardSupportAndHelp from "./CardSupportAndHelp";

const SupportAndHelp = () => {
  return (
    <div className="absolute -bottom-24">
      <div className="container p-[70px] rounded-2xl max-w-7xl bg-third">
        <div className="grid grid-cols-4 gap-[100px]">
          <CardSupportAndHelp />
        </div>
      </div>
    </div>
  );
};

export default SupportAndHelp;
