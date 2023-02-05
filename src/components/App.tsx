import React from "react";
import Info from "../pages/Info";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {Layout} from "../layouts/Layout";
import {NotFound} from "../pages/NotFound";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="info" element={<Info />} />
                    <Route path="sleep" element={<h1>sleep</h1>} />
                    <Route path="photos" element={<h1>photos</h1>} />
                    <Route path="assistance" element={<h1>assistance</h1>} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
