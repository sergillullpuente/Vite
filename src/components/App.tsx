import Info from "../pages/Info";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import {Layout} from "../layouts/Layout";
import {NotFound} from "../pages/NotFound";
import Assistance from "../pages/Assistance";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="info" element={<Info />} />
                    <Route path="sleep" element={<h1>sleep</h1>} />
                    <Route path="photos" element={<p>Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem el link per si voleu compartir les vostres fotografies. </p>} />
                    <Route path="assistance" element={<Assistance />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
