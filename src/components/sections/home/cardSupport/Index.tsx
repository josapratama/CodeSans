import CardSupportAndHelp from "./CardSupportAndHelp";

const SupportAndHelp = () => {
  return (
    <div className="-translate-y-24">
      <div className="container p-10 lg:p-[70px] rounded-2xl max-w-7xl bg-third">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[100px]">
          <CardSupportAndHelp />
        </div>
      </div>
    </div>
  );
};

export default SupportAndHelp;
