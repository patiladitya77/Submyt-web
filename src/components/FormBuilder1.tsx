// FormBuilder.tsx
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiPhone,
  FiEdit,
  FiFileText,
  FiX,
  FiPlus,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { editForm } from "../utils/formSlice";
import Canvas from "./Canvas";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const formfields = {
  fullName: {
    layout: "row",
    fields: [
      { label: "First Name", type: "text", isRequired: true },
      { label: "Last Name", type: "text", isRequired: true },
    ],
  },
  address: {
    layout: "column",
    fields: [
      { label: "Street Address", type: "text", isRequired: true },
      {
        label: "Street Address Line 2",
        type: "text",
        isRequired: false,
      },
      { label: "City", type: "text", isRequired: true },
      { label: "State / Province", type: "text", isRequired: true },
      { label: "Postal / Zip Code", type: "text", isRequired: true },
    ],
  },
  phone: {
    layout: "column",
    fields: [{ label: "Phone Number", type: "tel", isRequired: true }],
  },
  email: {
    layout: "column",
    fields: [{ label: "Email", type: "email", isRequired: true }],
  },
  heading: {
    layout: "column",
    fields: [{ label: "Form Title", type: "text", isRequired: false }],
  },
  textarea: {
    layout: "column",
    fields: [{ label: "Your Question", type: "textarea", isRequired: false }],
  },
};

const FormBuilder = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const formIdParam = useParams();
  console.log(formIdParam.formId);
  const sections = useSelector((store) => store.form.formFields);
  console.log(sections);

  const handleSaveForm = async () => {
    try {
      await axios.patch(
        BASE_URL + "/form/editform/" + formIdParam.formId,
        { sections: sections },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFieldGroup = (field) => {
    dispatch(editForm(field));
  };

  return (
    <>
      {/* Top Header */}
      <div className="flex justify-between items-center h-16 px-4 bg-white">
        <div className="font-bold text-4xl">SUBMYT</div>
        <div className="font-bold">JOB Application</div>
        <div>
          <img
            className="h-10"
            src="https://avatar.iran.liara.run/public/girl"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="w-screen h-14 bg-gradient-to-r from-orange-500 flex justify-center text-white text-lg">
        <div className="h-full border border-black py-3 px-4 cursor-pointer">
          BUILD
        </div>
        <div
          className="h-full border border-black py-3 px-4 cursor-pointer"
          onClick={handleSaveForm}
        >
          SAVE
        </div>
        <div className="h-full border border-black py-3 px-4 cursor-pointer">
          PUBLISH
        </div>
      </div>

      {/* Scrollable Page Area */}
      <div className="relative min-h-screen bg-[#f5f3ff] overflow-auto pb-10">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-0 top-20 z-50 flex items-center space-x-2 px-4 py-2 bg-[#2f3241] text-white rounded-r-full font-semibold"
        >
          <span>Add Element</span>
          <FiPlus />
        </button>

        {/* Sidebar Drawer */}
        {isSidebarOpen && (
          <div className="fixed left-0 top-0 h-full w-72 bg-[#2f3241] text-white z-50 shadow-xl">
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
              <span className="text-lg font-semibold">Form Elements</span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FiX className="text-xl" />
              </button>
            </div>
            <div className="px-4 py-4 space-y-3 text-sm overflow-y-auto h-full">
              <SidebarItem
                icon={<FiUser />}
                label="Full Name"
                onClick={() => handleAddFieldGroup(formfields.fullName)}
              />
              <SidebarItem
                icon={<FiMapPin />}
                label="Address"
                onClick={() => handleAddFieldGroup(formfields.address)}
              />
              <SidebarItem
                icon={<FiPhone />}
                label="Phone"
                onClick={() => handleAddFieldGroup(formfields.phone)}
              />
              <SidebarItem
                icon={<FiMail />}
                label="Email"
                onClick={() => handleAddFieldGroup(formfields.email)}
              />
              <SidebarItem
                icon={<FiFileText />}
                label="Heading"
                onClick={() => handleAddFieldGroup(formfields.heading)}
              />
              <SidebarItem
                icon={<FiEdit />}
                label="Text Area"
                onClick={() => handleAddFieldGroup(formfields.textarea)}
              />
            </div>
          </div>
        )}

        {/* Form Canvas */}
        <div>
          <Canvas />
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => (
  <div
    className="flex items-center space-x-3 bg-[#3a3d4e] hover:bg-[#4c4f61] px-3 py-2 rounded cursor-pointer"
    onClick={onClick}
  >
    <div className="text-lg">{icon}</div>
    <span>{label}</span>
  </div>
);

export default FormBuilder;
