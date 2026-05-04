export default function task_2() {
    return (
        <section className="bg-white h-screen flex flex-col justify-center items-center gap-6 p-4 font-bold">

            <div className="flex gap-4">

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
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-100 p-8 h-70 w-108 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-4">
                        <img src="terminal-2.svg" alt="terminal" />
                        <p className="font-bold">AI</p>
                        <img className="ml-auto" src="star.svg" alt="star" />
                    </div>

                    <div>
                        <h2 className="text-[28px] font-bold">
                            DALL·E, Midjourney,<br />Stable Diffusion
                        </h2>

                        <div className="flex items-center">
                            <p className="font-bold">in 5 days</p>
                            <div className="flex -space-x-4 ml-auto">
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                                <img className="w-10 h-10 rounded-full border-2 border-white" src="person.png" alt="person" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex gap-4">

                <div className="bg-purple-300 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-4">
                        <img src="palette.svg" alt="Design" />
                        <p>Design</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Figma</h2>
                        <p className="font-bold">8 Hours ago</p>
                    </div>
                </div>

                <div className="bg-orange-300 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-4">
                        <img src="palette.svg" alt="Coding" />
                        <p>Coding</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Python</h2>
                        <p className="font-bold">2 days ago</p>
                    </div>
                </div>

                <div className="bg-red-300 p-8 h-72 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
                    <div className="flex gap-4">
                        <img src="palette.svg" alt="Design" />
                        <p>Design</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Sketch</h2>
                        <p className="font-bold">4 days ago</p>
                    </div>
                </div>

            </div>

        </section>
    );
}