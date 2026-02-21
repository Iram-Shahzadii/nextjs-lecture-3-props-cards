// export default function Card(props){
//     return(
//         <div className=
//         "bg-white shadow-lg rounded-xl p-6 w-72 text-center hover:scale-105 transition duration-300">
//             <h2 className="text-xl font-semibold">{props.name}</h2>
//             <p className="text-gray-600 mt-2">{props.role}</p>
//         </div>
//     );
// }
export default function Card(props) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      />

      <h2 className="text-xl font-semibold">{props.name}</h2>

      <p className="text-blue-500 font-medium">{props.role}</p>

      <p className="text-gray-600 mt-3 text-sm">{props.bio}</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        View Profile
      </button>
    </div>
  );
}