import { basicBtnClassName } from "../../constants";

const UnpaidTables = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Time</th>
            <th>Return Time</th>
            <th>Total Cost</th>
            <th>Pending Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1*/}
          <tr className="hover">
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td>1000TK</td>
            <td>
              <button className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full lg:w-2/4`}>Pay</button>
            </td>
          </tr>
          {/* row 1*/}
          <tr className="hover">
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td>1000TK</td>
            <td>
              <button className={`${basicBtnClassName} bg-sky-600 hover:bg-sky-700 duration-300 text-white w-full lg:w-2/4`}>Pay</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default UnpaidTables;
