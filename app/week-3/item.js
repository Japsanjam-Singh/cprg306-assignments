export default function Item({ name, quantity, category }) {
    return (
      <ul className="bg-gray-200 p-2 m-2 rounded-md">
        <li>
        <p className="font-bold">{name}</p>
        <p className="text-sm">Category: {category}</p>
        <p className="text-sm">Qty: {quantity}</p>
        </li>
      </ul>
    )
  }
  