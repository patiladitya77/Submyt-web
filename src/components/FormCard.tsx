import { FORM_LOGO } from "../utils/constants";

interface IFormCradProps {
  title: string;
}

const FormCard = ({ title }: IFormCradProps) => {
  return (
    <div className="border border-black h-14 mb-2 hover:bg-violet-50 rounded-lg">
      <div className="form-control">
        <label className="cursor-pointer label px-4 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left side: Icon + Title */}
            <div className="flex items-center">
              <img className="h-8 w-8" src={FORM_LOGO} alt="Form Icon" />
              <div className="ml-4">
                <p className="font-bold text-lg text-black truncate max-w-[200px]">
                  {title}
                </p>
                <p className="text-sm text-gray-600">0 submissions</p>
              </div>
            </div>

            {/* Right side: Buttons aligned to the end */}
            <div className="flex items-center space-x-6 text-blue-600 text-sm font-medium">
              <span className="cursor-pointer">Edit Form</span>
              <span className="cursor-pointer">More</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FormCard;
