export default function belajar(){
    return(
        <section className="bg-white h-104 w-70 p-2 rounded-3xl"> {/*Main container */}
            <div className="bg-gray-200 rounded-3xl p-3 flex justify-center"> {/*Sub Container 1*/}
                <img className="h-50" src="person.png" alt="person" />
            </div>
            <div className="p-3 flex flex-col gap-2"> {/*Sub Container 2 */}
            <div className="flex flex-col">
                <h2 className="font-bold text-black text-[30px]">San Francisco</h2>
                <p className="text-gray-500 font-semibold">Premium Economy</p>
            </div>
            <div className="flex gap-3">
                <div className="flex gap-1">
                    <img src="terminal-2.svg" alt="terminal" />
                    <p className="text-black font-semibold">from $240</p>
                </div>
                <div className="flex gap-1">
                    <img src="star.svg" alt="star" />
                    <p className="text-black font-semibold">SFO</p>
                </div>
            </div>
            <div className="flex gap-1">
                <div className="bg-black rounded-4xl h-10 w-50 flex justify-center items-center">
                    <h2 className="text-white font-bold">Search Flight</h2>
                </div>
                <div>
                    <img className="h-10" src="palette.svg" alt="palette" />
                </div>
            </div>
            </div>
        </section>
    )
}