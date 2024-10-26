import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const App: React.FC = () => (
  <div className="p-4">
    <Card
      className="m-4 py-4 px-12"
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
        />
      }
    >
      <Meta className="text-center" title="AAPL" />
      <p className="text-center	mt-2">www.apple.com</p>
      <p className="text-center	mt-2">$110</p>
    </Card>
  </div>
);

export default App;
