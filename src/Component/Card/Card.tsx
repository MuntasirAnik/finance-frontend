import React, { SyntheticEvent } from "react";
import { Card } from "antd";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

const { Meta } = Card;
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Cards: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => (
  <div className="">
    <Card
      className="m-4 py-4 px-12 "
      hoverable
      style={{ width: 300 }}
      cover={<img className="h-40" alt="image" />}
    >
      <Meta className="text-center" title={searchResult.symbol} />
      <p className="text-center	mt-2">{searchResult.name}</p>
      <p className="text-center	mt-2">{searchResult.currency}</p>
      <p className="text-center	mt-2">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </Card>
  </div>
);

export default Cards;
