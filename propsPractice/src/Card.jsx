import "./index.css";
function Card(props) {
  return (
    <>
      <div className="flex flex-col items-center p-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg w-[20vw] h-[45vh]">
        <img src={props.img} className="rounded-[50%]  w-40 h-40 object-cover" />
        <h2 className="text-2xl font-semibold text-white">{props.name}</h2>
        <p className="text-white">{props.phn}</p>
        <p className="text-white font-semibold">{props.email}</p>
      </div>
    </>
  );
}
export default Card;
