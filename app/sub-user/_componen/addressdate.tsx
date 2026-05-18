export default function identityInfo({
  location,
  date,
}: {
  location: string;
  date: string;
}) {
  return (
    <div className="text-black font-semibold flex flex-col gap-2">
      <div className="flex">
        <h2>Location</h2>
        <h2 className="ml-auto text-gray-600">{location}</h2>
      </div>
      <div className="flex">
        <h2>With Us</h2>
        <h2 className="ml-auto text-gray-600">{date}</h2>
      </div>
    </div>
  );
}
