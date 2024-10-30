import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Component/Sidebar/Sidebar";
import CompanyDashboard from "../../Component/CompanyDashboard/CompanyDashboard";
import Tile from "../../Component/Tile/Tile";
import Spinner from "../../Component/Spinner/Spinner";
import TenkFinder from "../../Component/TenkFinder/TenkFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$ " + company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile
              title="DCF"
              subTitle={"$ " + company.dcf.toFixed(3).toString()}
            />
            {/* <Tile
              title="Market Cap"
              subTitle={company.mktCap.toFixed(3).toString()}
            /> */}

            <TenkFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
