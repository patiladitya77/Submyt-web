import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteFormGroup, updateFieldLabel } from "../utils/formSlice"; // ✅ Make sure this includes updateFieldLabel
import { FiX } from "react-icons/fi";
import type { Field } from "../utils/types";
interface IFormGroup {
  layout: "row" | "column";
  fields: Field[];
}

const Canvas = () => {
  const formGroups = useSelector((store) => store.form.formFields);
  const dispatch = useDispatch();
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(
    null
  );

  const handleRemoveGroup = (index: number) => {
    dispatch(deleteFormGroup(index));
    setSelectedGroupIndex(null);
  };

  return (
    <div className="max-w-3xl mx-auto pt-10 px-4">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="border-b border-gray-200 pb-4 mb-4 text-center">
          <div className="text-2xl font-semibold mb-1">Form</div>
        </div>

        {formGroups.length === 0 ? (
          <div className="border border-dashed border-gray-300 rounded-md p-10 text-center text-gray-400 mb-6">
            <p>⬢ Add your first element from the left.</p>
          </div>
        ) : (
          formGroups.map((group: IFormGroup, groupIndex: number) => {
            const isSelected = selectedGroupIndex === groupIndex;

            return (
              <div
                key={groupIndex}
                onClick={() => setSelectedGroupIndex(groupIndex)}
                className={`relative mb-4 p-4 rounded cursor-pointer transition-all duration-200 ${
                  group.layout === "row" ? "flex gap-4" : "flex flex-col gap-4"
                } ${
                  isSelected
                    ? "border-2 border-blue-500"
                    : "border border-gray-300"
                }`}
              >
                {/* Single Remove Button for the Group */}
                {isSelected && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveGroup(groupIndex);
                    }}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <FiX />
                  </button>
                )}

                {/* Render all fields inside the group */}
                {group.fields.map((field: Field, fieldIndex: number) => (
                  <div key={field.id} className="flex-1">
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => {
                        dispatch(
                          updateFieldLabel({
                            groupIndex,
                            fieldIndex,
                            newLabel: e.target.value,
                          })
                        );
                      }}
                      className="block mb-1 font-medium w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    {field.type === "textarea" ? (
                      <textarea
                        className="w-full border px-3 py-2 rounded"
                        required={field.isRequired}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full border px-3 py-2 rounded"
                        required={field.isRequired}
                      />
                    )}
                  </div>
                ))}
              </div>
            );
          })
        )}

        <div className="text-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
