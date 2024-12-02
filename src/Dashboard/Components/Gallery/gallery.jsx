import ImageGrid  from "./imagegrid"

export default function Gallery() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gallery Management</h1>
      <ImageGrid />
    </div>
  )
}

