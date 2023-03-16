import Info from "../pages/Info";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {Layout} from "../layouts/Layout";
import {NotFound} from "../pages/NotFound";
import Assistance from "../pages/Assistance";
import Photos from "../pages/Photos";
import Sleep from "../pages/Sleep";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="info" element={<Info />} />
                    <Route path="sleep" element={<Sleep />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="assistance" element={<Assistance />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
