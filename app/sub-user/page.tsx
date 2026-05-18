import Detail_card from "./_componen/detail"
import Badge from "./_componen/badge"
export default function subuser(){
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
                        <h2 className="/text-[18px]">Cornelius Greenfelder</h2>
                        <Badge img = "/award.svg" status = "Verified"/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 h-27 w-88 rounded-xl p-3 px-5">
                <h2 className="text-black font-bold mb-2">Projects</h2>
                <div className="flex gap-25">
                    <Detail_card img ="/hourglass-empty.svg" tittle ="Ongoing" qty={2} price = {(4.8)}/>
                    <Detail_card img="/mail.svg" tittle ="Completed" qty={3} price={(5.3)}/>
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