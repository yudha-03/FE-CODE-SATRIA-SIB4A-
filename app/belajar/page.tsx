import Sub from "./componen_belajar/sub"
import Sub2 from "./componen_belajar/sub2"
export default function belajar(){
  return(
    <section className="flex gap-3">
        <div className="bg-white h-180 w-70 rounded-xl p-4 flex flex-col text-black font-semibold gap-6">
            <div>
                <img className="h-9" src="moon.svg" alt="moon" />
            </div>
            <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-2">
                    <p>Account</p>
                    <Sub img="4dot.png" text="Overview"/>
                    <Sub img="mood-empty.svg" text="Hire Freelancer"/>
                    <Sub img="credit-card.svg" text="Payment"/>
                    <Sub img="briefcase.svg" text="My Order"/>
                    <Sub img="building-store.svg" text="Admin Setting"/>
                </div>
                <hr className="border-t-2 border-black" />
                <div className="flex flex-col gap-2">
                    <p>Product</p>
                    <Sub img="plus.svg" text="Add Organisation"/>
                    <Sub img="briefcase.svg" text="My Products"/>
                    <Sub img="stack-3.svg" text="Stocks"/>
                </div>
                <hr className="border-t-2 border-black" />
                <div className="flex flex-col gap-2">
                    <p>Admin</p>
                    <Sub img="settings.svg" text="Account Setup"/>
                    <Sub img="person.png" text="Manage User"/>
                    <Sub img="bolt.svg" text="Logout"/>
                </div>
            </div>
        </div>
        <div className="bg-white h-180 w-18 rounded-xl flex flex-col p-4 gap-6 items-center">
            <div>
                <div className="flex justify-center p-1 bg-red-600 rounded ">
                  <img className="h-8" src="moon.svg" alt="gambar" />
                </div>
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                    <Sub2 img="4dot.png" />
                    <Sub2 img="mood-empty.svg" />
                    <Sub2 img="credit-card.svg" />
                    <Sub2 img="briefcase.svg" />
                    <Sub2 img="building-store.svg" />
                </div>
                <hr className="border-t-2 border-black" />
                <div className="flex flex-col gap-3">
                    <Sub2 img="plus.svg" />
                    <Sub2 img="briefcase.svg" />
                    <Sub2 img="stack-3.svg" />
                </div>
                <hr className="border-t-2 border-black" />
                <div className="flex flex-col gap-3">
                    <Sub2 img="settings.svg" />
                    <Sub2 img="person.png" />
                    <Sub2 img="bolt.svg" />
                </div>
            </div>
        </div>
        <div className="bg-white p-3 h-75 w-80 rounded-xl flex flex-col gap-4 text-black font-semibold">
            <div className="bg-sky-100 p-8 rounded-xl flex flex-col gap-3">
                <div>
                    <p>Web Design</p>
                </div>
                <div>   
                    <p>Crafts engaging, user-friendly websites</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="bg-gray-300 w-30 rounded-3xl p-1 flex justify-center items-center">
                          <p>Landing Page</p>
                        </div>
                        <div className="bg-gray-300 w-23 rounded-3xl p-1 flex justify-center items-center">
                          <p>Website</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 w-30 rounded-3xl p-1 flex justify-center items-center">
                      <p>One Page</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <p>Explore</p>
                <div className="bg-gray-300 p-1 rounded ml-auto">
                  <img className="h-4" src="dots-vertical.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}