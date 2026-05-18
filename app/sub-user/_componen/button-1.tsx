export default function FirstButton({ img }: { img: string }) {
  return (
    <div>
      <div className="bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center">
        <img className="h-6" src={img} alt="dot" />
      </div>
    </div>
  );
}
