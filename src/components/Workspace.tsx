import axios from "axios";
import FormContainer from "./FormContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setForms } from "../utils/formSlice";

const Workspace = () => {
  const dispatch = useDispatch();
  const getForms = async () => {
    try {
      const res = await axios.get("http://localhost:7777/api/form/getforms", {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(setForms(res.data.forms));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForms();
  }, []);
  return (
    <div className="border border-black w-full my-2">
      <div className="border border-black h-14 bg-gradient-to-r from-blue-200 text-blue-700 pl-5 font-bold flex justify-between">
        <div>
          <h1>Monsoon sale ALert</h1>
          <span>Coupon Code:MONSOON25</span>
        </div>

        <div className="flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div>
            <input
              className="my-2 h-8 p-2 mr-1"
              type="text"
              placeholder="Seach"
            />
          </div>
        </div>
      </div>
      <div>
        <FormContainer />
      </div>
    </div>
  );
};

export default Workspace;
