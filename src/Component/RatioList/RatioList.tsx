import React from 'react';

type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedRows = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-baseline space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center text-sm sm:text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 sm:mx-6 sm:my-6 p-4 sm:p-6 h-full max-w-md sm:max-w-full mx-auto sm:mx-0">
      <ul className="divide-y divide-gray-200">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;
