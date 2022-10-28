import { Routes, Route } from "react-router-dom";

//pages
import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-note" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}