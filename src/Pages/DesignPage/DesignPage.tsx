import React from "react";
import Table from "../../Component/Table/Table";
import RatioList from "../../Component/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { formatLargeNonMonetaryNumber } from "../../Component/Helper/NumberFormatting";
import { testIncomeStatementData } from "../../Component/Table/TestData";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        this is FinShark's design page. This is where we will house variuos
        design aspects of the app
      </h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};

export default DesignPage;
