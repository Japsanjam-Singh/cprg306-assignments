export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border-b border-gray-700 text-gray-300 hover:bg-gray-800 transition rounded-md">
      <span className="font-semibold text-white">{name}</span> —  
      <span className="ml-1">{quantity}</span>  
      <span className="text-sm text-gray-400 ml-2">({category})</span>
    </li>
  );
}
