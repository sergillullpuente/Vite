import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";

export const Layout = () => (
    <>
        <Navigation />
        <Outlet />
        <footer className='pt-10 flex flex-col items-center tracking-widest text-green-900 font-yanone '>
            <p className='underline underline-offset-8'>S&M</p>
            <p>23.09.2023</p>
            <p>&copy;COPYRIGHT Sergi i Marta {new Date().getFullYear()}</p>
        </footer>
    </>
);
