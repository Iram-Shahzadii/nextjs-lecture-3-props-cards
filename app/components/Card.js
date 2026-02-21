export default function Card(props) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 mx-auto rounded-full mb-4 object-cover"
      />

      <h2 className="text-lg sm:text-xl md:text-xl font-semibold">{props.name}</h2>

      <p className="text-blue-500 font-medium text-sm sm:text-base">{props.role}</p>

      <p className="text-gray-600 mt-3 text-xs sm:text-sm">{props.bio}</p>

      <button className="mt-4 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
        View Profile
      </button>
    </div>
  );
}