const PaidTables = () => {
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
          </tr>
        </thead>
        <tbody>
          {/* row 1*/}
          <tr className="hover">
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td>1000TK</td>
          </tr>
          {/* row 1*/}
          <tr className="hover">
            <td className="min-w-40">Pulser 150cc</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td className="min-w-40">Date: 10-10-2024 Time: 10:00Am</td>
            <td>1000TK</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PaidTables;
