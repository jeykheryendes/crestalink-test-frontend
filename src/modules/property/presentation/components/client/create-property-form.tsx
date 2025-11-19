"use client";

export const CreatePropertyForm = () => {
  return (
    <form className="flex items-center justify-center gap-4">
      <input
        className="border border-solid border-[#cccccc] rounded-md p-2"
        type="text"
        placeholder="Address"
      />
      <input
        className="border border-solid border-[#cccccc] rounded-md p-2"
        type="text"
        placeholder="City"
      />
      <input
        className="border border-solid border-[#cccccc] rounded-md p-2"
        type="number"
        placeholder="Price"
      />
      <select
        className="border border-solid border-[#cccccc] rounded-md p-2"
        name="status"
        id="status"
      >
        <option value="available">Available</option>
        <option value="reserved">Reserved</option>
        <option
          className="border border-solid border-[#cccccc] rounded-md p-2"
          value="sold"
        >
          Sold
        </option>
      </select>
    </form>
  );
};
