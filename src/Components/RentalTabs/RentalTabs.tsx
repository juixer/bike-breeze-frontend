import PaidTables from "../RentalTables/PaidTables";
import UnpaidTables from "../RentalTables/UnpaidTables";

const RentalTabs = () => {
  return (
    <div className="">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl ml-10"
          aria-label="Unpaid"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="border w-full rounded-md">
            <UnpaidTables />
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab font-bold text-xl"
          aria-label="Paid"
        />
        <div role="tabpanel" className="tab-content p-10">
          <div className="border w-full rounded-md">
            <PaidTables />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalTabs;
