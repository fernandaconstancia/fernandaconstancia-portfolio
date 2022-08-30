import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" />
      <Route path="/project" />
      <Route path="/resume" />
      <Route path="/contact" />
    </Routes>
  );
};
