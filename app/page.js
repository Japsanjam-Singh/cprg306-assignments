import Link from "next/link"

export default function Page() {
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="space-y-2">
        <p className="text-lg text-gray-700">
          Link to Week-2: <Link href="week-2" className="text-blue-500 hover:underline">Week-2</Link>
        </p>
        <p className="text-lg text-gray-700">
          Link to Week-3: <Link href="week-3" className="text-blue-500 hover:underline">Week-3</Link>
        </p>
      </div>
    </div>
  )
}
