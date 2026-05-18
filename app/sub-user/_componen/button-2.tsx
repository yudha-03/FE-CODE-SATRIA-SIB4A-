export default function SecondButton({
  img,
  text,
}: {
  img: string;
  text: string;
}) {
  return (
    <div className="bg-blue-700 h-10 w-85 flex items-center justify-center rounded-4xl gap-2">
      <img className="h-5" src={img} alt="mail" />
      <h2 className="text-white font-semibold">{text}</h2>
    </div>
  );
}
