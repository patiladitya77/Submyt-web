const FormCard = () => {
  return (
    <div className="border border-black h-14 mb-2 hover:bg-violet-50 rounded-lg">
      <div className="form-control">
        <label className="cursor-pointer label pl-10">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info  mx-4 my-3"
          />
          <div className="flex">
            <img
              className="px-4"
              src="https://cdn.jotfor.ms/assets/img/jfHeader/v2/templates/form.svg"
            />
            <div className=" px-6">
              <p className="font-bold text-lg text-black">form</p>
              <p>0 submissions</p>
            </div>
            <div className="py-3 flex justify-end pl-96">
              <span className="pl-60">edit form</span>
              <span className="pl-36">more</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FormCard;
