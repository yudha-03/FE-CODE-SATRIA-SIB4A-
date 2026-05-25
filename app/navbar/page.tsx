import Sub from "../belajar/componen_belajar/sub"
export default function navbarpage(){
    return(
        <section className="bg-blue-950 h-125 w-45 p-3 rounded text-white flex flex-col gap-3">
            <div className="text-white font-bold flex justify-center">
                <h2 className="text-[20px]">Coding Lab</h2>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Main Menu</p>
                    <div className="flex flex-col gap-3 pl-3">
                        <Sub img="category warna.svg" text="Dashboard" />
                        <Sub img="file-report.svg" text="Overview" />
                        <Sub img="device-analytics.svg" text="Analytics" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold">General</p>
                    <div className="flex flex-col gap-3 pl-3">
                        <div className="bg-white rounded h-8 items-center">
                             <button className="flex gap-2 items-center">
                                <img src="folder.svg" alt="gambar" className="h-7" />
                                <p className="text-black">Projects</p>
                            </button>
                        </div>
                        <Sub img="users.svg" text="Groups" />
                        <Sub img="flag.svg" text="Reports" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">   
                    <p className="font-bold">Accounts</p>
                    <div className="flex flex-col gap-3 pl-3">
                        <Sub img="person.png" text="Profile" />
                        <Sub img="settings.svg" text="Settings" />
                    </div>
                </div>
            </div>
        </section>
    )
}