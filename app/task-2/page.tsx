export default function task_2(){
    return (
        <section className="flex gap-4">
        <div className="bg-sky-100 p-8 h-70 w-108 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-4">
                <img src="palette.svg" alt="palet" />
                <p className="font-bold">Design</p>
            </div>
            <div>
                <h2 className="text-[28px] font-bold">Adobe Photoshop</h2>
                <div className="flex items-center">
                    <p className="font-bold">in 3 days</p>
                    <div className="flex -space-x-4 ml-auto">
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                        <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-green-100 p-8 h-70 w-108 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-4">
                <img src="terminal-2.svg" alt="terminal" />
                <p className="font-bold">AI</p>
                <img className="ml-auto"src="star.svg" alt="star" />
            </div>
            <div>
                <h2 className="text-[28px] font-bold">DALL·E, Midjourney,<br />Stable Diffusion</h2>
               <div className="flex items-center">
                <p className="font-bold">in 5 days</p>
                <div className="flex -space-x-4 ml-auto">
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                    <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person"/>
                </div>
               </div>
            </div>
        </div>
        </section>
    )
}