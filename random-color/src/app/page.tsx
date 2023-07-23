
import color from './color.json';
export default function Home() {
  return (
    <main className='container mx-auto p-4 flex h-screen w-full'>
      <div className="text-center  h-full w-full">
        <h2 className="text-2xl font-bold mb-4">Color of the Week</h2>
        <div
          style={{ backgroundColor: color.hex }}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600">{color.name}</p>
      </div>
    </main>
  )
}
