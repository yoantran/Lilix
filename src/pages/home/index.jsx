import Header from "../../components/header/index.jsx";

export default function Home() {
    return (
        <>
            <div className='flex flex-col bg-black h-[100vh]'>
                <div className='h-auto'>
                    {/*render Header component*/}
                    <Header/>
                </div>
                <div className='flex flex-row w-[100%] overflow-hidden' style={{minHeight: "calc(100vh - 50px)"}}>
                    <div className='flex-1 overflow-auto'>
                        home
                    </div>
                </div>
            </div>
        </>
    );
}