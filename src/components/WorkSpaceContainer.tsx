import SideBar from "./SideBar";
import Workspace from "./Workspace";

const WorkSpaceContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <Workspace />
    </div>
  );
};

export default WorkSpaceContainer;
