import { BrowserRouter, Route, Routes } from "react-router";
import Parent from "./React.memo/Parent";
import Child from "./React.memo/Child";

const AppRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Parent />} path="/" />
          <Route element={<Child />} path="/child" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouting;