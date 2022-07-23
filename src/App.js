import "./App.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Character from "./pages/character/Character";
import Episode from "./pages/episodes/Episode";
import Location from "./pages/locations/Location";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="Character" element={<Character />} />
        <Route path="Episode" element={<Episode />} />
        <Route path="Location" element={<Location />} />
        {/* <Route path="/" element={<Layout />}>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// class App extends React.Component {
//   // //////////////////////////////////////////////////////////////////////////////////////////////Constructor

//   // ----------------------------------------------------------------------------------------------------------
//   render() {
//     return (
//       <div>
//         <h1> main page</h1>
//       </div>
//     );
//   }
// }

// export default App;
