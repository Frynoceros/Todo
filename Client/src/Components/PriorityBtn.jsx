import React, {Fragment} from 'react';
import Todo from './Todos';

const PriorityBtn = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap">
        <div className="flex items-center mr-4">
          <input
            id="green-radio"
            type="radio"
            value={2}
            name="colored-radio"
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="green-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Low
          </label>
        </div>

        <div className="flex items-center mr-4">
          <input
            id="yellow-radio"
            type="radio"
            value={1}
            name="colored-radio"
            className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="yellow-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Med
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="red-radio"
            type="radio"
            value={3}
            name="colored-radio"
            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="red-radio"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            High
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default PriorityBtn;
