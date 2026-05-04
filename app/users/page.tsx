export default function users(){
    return(
        <section className="bg-white h-104 w-97 p-5 rounded-xl flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <div className=" flex text-black font-bold">
                        <h2 className="text-[20px]">Client details</h2>
                        <p className="ml-auto">X</p>
                </div>
                <hr className="border-t-2 border-black" />
                <div className="flex gap-2 items-center">
                    <img className="h-15" src="person.png" alt="person" />
                    <div className="text-black font-semibold">
                        <h2 className="text-[18px]">Cornelius Greenfelder</h2>
                        <div className="bg-green-200 h-6 w-21 flex gap-1 items-center justify-center rounded-2xl">
                            <img className="h-5" src="award.svg" alt="award" />
                            <p className="text-[13px]">Verified</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 h-27 w-88 rounded-xl p-3 px-5">
                <h2 className="text-black font-bold mb-2">Projects</h2>
                <div className="flex gap-25">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <img className="h-4" src="hourglass-empty.svg" alt="glass" />
                            <p className="text-gray-600 text-[14px] font-bold">Ongoing</p>
                        </div>
                        <div className="flex gap-2 text-black font-bold">
                            <h2 className="text-[20px]">2</h2>
                            <h2 className="text-gray-700 text-[20px]">($3.8k)</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex gap-1 items-center">
                            <img className="h-4" src="square-check.svg" alt="check" />
                            <p className="text-gray-600 text-[14px] font-semibold">Completed</p>
                        </div>
                        <div className="flex gap-2 text-black font-semibold">
                            <h2 className="text-[20px]">25</h2>
                            <h2 className="text-gray-700 text-[20px]">($54k)</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black font-semibold flex flex-col gap-2">
                <div className="flex">
                    <h2>Location</h2>
                    <h2 className="ml-auto text-gray-600">United States, New York</h2>
                </div>
                <div className="flex">
                    <h2>With Us</h2>
                    <h2 className="ml-auto text-gray-600">6 Jan 2024</h2>
                </div>
            </div>
            <div className="flex text-black font bold items-center gap-2">
                <div className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center">
                    <img className="h-6" src="dots-vertical.svg" alt="dot" />
                </div>
                <div className="bg-blue-700 h-10 w-85 flex items-center justify-center rounded-4xl gap-2">
                    <img className="h-5" src="mail.svg" alt="mail" />
                    <h2 className="text-white font-semibold">Message</h2>
                </div>
            </div>
        </section>
    )
}