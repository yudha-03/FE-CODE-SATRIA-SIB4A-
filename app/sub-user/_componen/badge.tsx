export default function badge({img, status}:{img : string; status:string}) {
  return (
    <div className="bg-green-200 h-6 w-21 flex gap-1 items-center justify-center rounded-2xl">
      <img className="h-5" src={img} alt="award" />
      <p className="text-[13px]">{status}</p>
    </div>
  );
}
