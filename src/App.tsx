import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Landing from "./components/Landing";
import WorkSpaceContainer from "./components/WorkSpaceContainer";
// import FormBuilder from "./components/FormBuilder";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import FormBuilder1 from "./components/FormBuilder1";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/build/:formId" element={<FormBuilder1 />} />

            <Route element={<Body />}>
              <Route path="/workspace" element={<WorkSpaceContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
