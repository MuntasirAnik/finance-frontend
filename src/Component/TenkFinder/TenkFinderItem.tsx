import React from "react";
import { CompanyTenK } from "../../company";
import { Link } from "react-router-dom";

type Props = {
  tenk: CompanyTenK;
};

const TenkFinderItem = ({ tenk }: Props) => {
  const fillingData = new Date(tenk.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={tenk.finalLink}
      type="button"
      className="inline-flex items-center mx-1 px-4 py-2 text-sm font-medium text-white bg-lightGreen
      border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
       focus:ring-blue-700 focus:text-blue-700 dark:bg-slate-900 dark:border-gray-600 dark:text-white
        dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      {" "}
      10k - {tenk.symbol} - {fillingData}
    </Link>
  );
};

export default TenkFinderItem;
