import ItemList from "./item-list"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping List</h1>
      <div className="w-full max-w-2xl">
        <ItemList />
      </div>
    </main>
  )
}
