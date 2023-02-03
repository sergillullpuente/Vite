import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";

export const Layout = () => (
    <>
        <Navigation />
        <Outlet />
        <footer>
            <p>&copy; {new Date().getFullYear()} Our Wedding</p>
        </footer>
    </>
);
