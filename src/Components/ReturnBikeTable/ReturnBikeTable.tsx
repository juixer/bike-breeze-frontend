import ReturnBikeModel from "../ReturnBikeModel/ReturnBikeModel";

const ReturnBikeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Start Time</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          <tr className="hover">
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Bajaj</td>
            <td className="min-w-40">Pulser</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td>
              <ReturnBikeModel />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ReturnBikeTable;
