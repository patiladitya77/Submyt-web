import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Landing from "./components/Landing";
import WorkSpaceContainer from "./components/WorkSpaceContainer";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route element={<Body />}>
            <Route path="/workspace" element={<WorkSpaceContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
