import equipmentData from '@/data/equipment.json'
import Image from 'next/image'

export default function EquipmentPage() {
  return (
    <div className="w-full flex justify-center py-20 text-black">
      <div className="w-2/3">
        <h1 className="text-4xl font-bold mb-8">Available Equipment</h1>
        <div className="bg-white shadow p-6 grid grid-cols-3 gap-6">
          {equipmentData.map((item, index) => (
            <div 
              key={index} 
              className="p-6 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-48 mb-4 bg-gray-100 rounded-sm overflow-hidden">
                <Image
                  src={`/image-placeholder.png`}
                  alt={item.modell}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{item.modell}</h2>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Type:</span> {item.type}</p>
                <p><span className="font-semibold">Kategori:</span> {item.kategori}</p>            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
