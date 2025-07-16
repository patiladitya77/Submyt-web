import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addnewCreatedForm } from "../utils/formSlice";
import { BASE_URL } from "../utils/constants";

const SideBar = () => {
  const dispatch = useDispatch();
  const [createForm, setCreateForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleFillDeatils = async () => {
    setCreateForm(true);
  };
  const handleCreateForm = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/form/createform",
        { title, description },
        { withCredentials: true }
      );
      console.log(res.data.savedForm);
      dispatch(addnewCreatedForm(res.data.savedForm));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-80 h-screen border border-black my-2">
      <div className="border border-black h-14 p-2 ">
        {!createForm && (
          <button
            className="bg-orange-600 p-2 px-28 rounded-md text-white "
            onClick={handleFillDeatils}
          >
            CREATE
          </button>
        )}
      </div>
      {createForm && (
        <div className="border border-black bg-violet-50 h-screen p-2 ">
          <input
            value={title}
            className="h-12 w-full my-2 p-2"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={description}
            className="h-12 w-full p-2 my-2"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="bg-orange-600 p-2 px-28 rounded-md text-white my-2"
            onClick={handleCreateForm}
          >
            CREATE
          </button>
        </div>
      )}

      {!createForm && (
        <div className="border border-black bg-violet-50">
          <div className="text-xl m-2 p-2 pl-5 ">
            <h1>My workspace</h1>
            <span className="flex my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
              </svg>
              All
            </span>
          </div>
          <div className="text-xl m-2 p-2 pl-5">
            <ul className="">
              <li className="my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 mr-3"
                >
                  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                  <path
                    fillRule="evenodd"
                    d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                Archive
              </li>
              <li className="my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
                Favourites
              </li>
              <li className="my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Trash
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
