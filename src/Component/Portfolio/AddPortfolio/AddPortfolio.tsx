import { Button } from "antd";
import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form className="text-center" onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} />
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </form>
  );
};

export default AddPortfolio;
