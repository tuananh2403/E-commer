import React from "react";

const SelectAddress = ({ label, options, value, setValue, type, reset }) => {
  return (
    <div>
      <select
        value={reset ? "" : value}
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">{`--- Chọn ${label} ---`}</option>
        {options?.map((item) => {
          return (
            <option
              key={
                type === "province"
                  ? item.province_id
                  : type === "district"
                  ? item.district_id
                  : item.ward_id
              }
              value={
                type === "province"
                  ? item.province_id
                  : type === "district"
                  ? item.district_id
                  : item.ward_id
              }
            >
              {type === "province"
                ? item.province_name
                : type === "district"
                ? item.district_name
                : item.ward_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectAddress;
