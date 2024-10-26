import React from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h1>No Result</h1>
      )}
    </>
  );
  // <div className="flex">

  //   {/* <Card
  //     companyName="Apple"
  //     ticker="AAPL"
  //     price={110}
  //     image={
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
  //     }
  //   />
  //   <Card
  //     companyName="Microsoft"
  //     ticker="MSFT"
  //     price={220}
  //     image="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3a3260847d0d2783a76d_Microsoft-Logo-PNG-Transparent-Image.png"
  //   />
  //   <Card
  //     companyName="Tesla"
  //     ticker="TSLA"
  //     price={340}
  //     image="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
  //   /> */}
  // </div>
};

export default CardList;
