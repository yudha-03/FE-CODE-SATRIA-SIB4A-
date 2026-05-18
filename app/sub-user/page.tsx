import Detail_card from "./_componen/detail";
import Badge from "./_componen/badge";
import IdentityInfo from "./_componen/addressdate";
import FirstButton from "./_componen/button-1";
import SecondButton from "./_componen/button-2";
import Name from "./_componen/name";
export default function Subuser() {
  return (
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
            <Name name="Cornelius Greenfield" />
            <Badge img="/award.svg" status="Verified" />
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-27 w-88 rounded-xl p-3 px-5">
        <h2 className="text-black font-bold mb-2">Projects</h2>
        <div className="flex gap-25">
          <Detail_card
            img="/hourglass-empty.svg"
            tittle="Ongoing"
            qty={2}
            price={4.8}
          />
          <Detail_card img="/mail.svg" tittle="Completed" qty={3} price={5.3} />
        </div>
      </div>
      <IdentityInfo location="United States, New York" date="6 Jan 2024 " />
      <div className="flex text-black font bold items-center gap-2">
        <FirstButton img="/dots-vertical.svg" />
        <SecondButton img="/mail.svg" text="Message" />
      </div>
    </section>
  );
}
