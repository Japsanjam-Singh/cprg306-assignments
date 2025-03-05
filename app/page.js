import Link from "next/link";

export default function Page() {
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="space-y-3">
          <p className="text-lg text-gray-300">
            Link to Week-2: <Link href="week-2" className="text-blue-400 hover:text-blue-500 transition">Week-2</Link>
          </p>
          <p className="text-lg text-gray-300">
            Link to Week-3: <Link href="week-3" className="text-blue-400 hover:text-blue-500 transition">Week-3</Link>
          </p>
          <p className="text-lg text-gray-300">
            Link to Week-4: <Link href="week-4" className="text-blue-400 hover:text-blue-500 transition">Week-4</Link>
          </p>
          <p className="text-lg text-gray-300">
            Link to Week-5: <Link href="week-5" className="text-blue-400 hover:text-blue-500 transition">Week-5</Link>
          </p>
          <p className="text-lg text-gray-300">
            Link to Week-6: <Link href="week-6" className="text-blue-400 hover:text-blue-500 transition">Week-6</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
