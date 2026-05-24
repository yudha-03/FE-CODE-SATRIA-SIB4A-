export default function Detail_card({
  img,
  tittle,
  qty,
  price,
}: {
  img: string;
  tittle: string;
  qty: number;
  price: number;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <img className="h-4" src={img} alt="glass" />
        <p className="text-gray-600 text-[14px] font-bold">{tittle}</p>
      </div>
      <div className="flex gap-2 text-black font-bold">
        <h2 className="text-[20px]">{qty}</h2>
        <h2 className="text-gray-700 text-[20px]">$ {price}k</h2>
      </div>
    </div>
  );
}
