import React, { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../company";
import { formatLargeMonetaryNumber } from "../Helper/NumberFormatting";
import { useOutletContext } from "react-router-dom";
import { getCashFlowStatement } from "../../api";
import Table from "../Table/Table";

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashFlowStatement(ticker!);
      setCashflowData(result!.data);
    };
    fetchCashflow();
  }, []);

  return (
    <>
      {cashflowData ? (
        <Table config={config} data={cashflowData} />
      ) : (
        <h1>No results!</h1>
      )}
    </>
  );
};

export default CashflowStatement;
