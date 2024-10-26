import React from "react";
import { Card } from "antd";
import { CompanySearch } from "../../company";

const { Meta } = Card;
interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Cards: React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => (
  <div className="">
    <Card
      className="m-4 py-4 px-12 h-80"
      hoverable
      style={{ width: 250 }}
      cover={<img className="h-40" alt="image" />}
    >
      <Meta className="text-center" title={searchResult.symbol} />
      <p className="text-center	mt-2">{searchResult.name}</p>
      <p className="text-center	mt-2">{searchResult.currency}</p>
      <p className="text-center	mt-2">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
    </Card>
  </div>
);

export default Cards;
