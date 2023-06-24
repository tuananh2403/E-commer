import React from "react";

const InputField = ({
  value,
  setValue,
  nameKey,
  type,
  invalidFields,
  setInvalidFieds,
}) => {
  return (
    <div className="mb-2">
      <input
        type={type || "text"}
        className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#3daa12] focus:ring-[#3daa12] focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder={nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))
        }
        onFocus={() => setInvalidFieds([])}
        required
      />
      {invalidFields?.some((el) => el.name === nameKey) && (
        <small className="text-red-600 ">
          {invalidFields?.find((el) => el.name === nameKey).mes}
        </small>
      )}
    </div>
  );
};
export default InputField;
