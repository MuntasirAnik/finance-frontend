import React from "react";
import { testIncomeStatementData } from "./TestData";
import { render } from "@testing-library/react";

const data = testIncomeStatementData;

interface Props {}

type Company = (typeof data)[0];

const configs = [
  {
    label: "year",
    render: (compnay: Company) => compnay.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (compnay: Company) => compnay.costOfRevenue,
  },
];

const Table = (props: Props) => {
  const renderedRows = data.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderedHeaders = configs.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table className="min-w-full divide-y divide=gray-200 m-">
        <thead className="bg-gray-50">{renderedHeaders}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;