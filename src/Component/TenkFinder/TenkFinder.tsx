import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenk } from "../../api";
import TenkFinderItem from "./TenkFinderItem";
import Spinner from "../Spinner/Spinner";

type Props = {
  ticker: string;
};

const TenkFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();

  useEffect(() => {
    const getTenkData = async () => {
      const value = await getTenk(ticker);
      setCompanyData(value?.data);
    };
    getTenkData();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData?.slice(0, 5).map((tenk) => {
          return <TenkFinderItem tenk={tenk} />;
        })
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default TenkFinder;
