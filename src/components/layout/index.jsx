import Header from "../header/index.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {

    return (
        <>
            <div className='flex flex-col bg-black h-[100vh]'>
                <div className='h-auto'>
                    {/*render Header component*/}
                    <Header/>
                </div>
                <div className='flex flex-row w-[100%] overflow-hidden' style={{minHeight: "calc(100vh - 50px)"}}>
                    <div className='flex-1 overflow-auto'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}