import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    // <div className="w-96 ml-4">
    //   <Input
    //     className="w-60"
    //     placeholder="Search here"
    //     value={search}
    //     onChange={(e) => handleChange(e)}
    //   />
    //   <Button
    //     className="mx-2"
    //     type="primary"
    //     onClick={(e) => onClick(e)}
    //     icon={<SearchOutlined />}
    //   ></Button>
    // </div>
    <>
      <form onSubmit={onSearchSubmit}>
        <div>
          <Input
            className="w-60"
            placeholder="Search here"
            value={search}
            onChange={(e) => handleSearchChange(e)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
