import { useSelector } from "react-redux";
import FormCard from "./FormCard";
import { Link } from "react-router-dom";

const FormContainer = () => {
  const forms = useSelector((store) => store.form.form);
  console.log(forms);
  if (!forms || !Array.isArray(forms)) {
    return <div className="p-4 text-gray-500">Loading forms...</div>;
  }
  return (
    <div className="border border-black h-screen p-2 m-2 ">
      {forms &&
        forms.map((f) => (
          <Link to={"/build/" + f._id}>
            {" "}
            <FormCard key={f._id} title={f.title} />
          </Link>
        ))}
    </div>
  );
};

export default FormContainer;
