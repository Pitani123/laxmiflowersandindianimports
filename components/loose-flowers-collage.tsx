import Image from "next/image"

// Loose Flowers products with uploaded images:
// - Marigold String with Mango Leaves - 1ft
// - Marigold String - 1ft
// - Marigold Loose - Orange
// - Arali
// - Chamanthi - White
// - Chamanthi - Yellow

export function LooseFlowersCollage() {
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">
      {/* Marigold Loose - Orange - Large left panel */}
      <div className="relative row-span-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marigold%20Loose%20-%20Orange-IgCeGBdV32NmCsjjDQi4z9xYIEGyRg.jpeg"
          alt="Marigold Loose - Orange"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Marigold String with Mango Leaves - Top middle */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Marigold%20String%20with%20Mango%20Leaves-D8v8TbSp6eKRUiqkTxLHt8vsh9cv7a.jpeg"
          alt="Marigold String with Mango Leaves"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Chamanthi - Yellow - Top right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamanthi%20-%20Yellow-0EVckmwMtA0ccXmHITmfIEYKmPVOGs.jpeg"
          alt="Chamanthi - Yellow"
          fill
          className="object-cover"
        />
      </div>
      {/* Arali - Bottom middle */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arali-3PqnZqfqn12cnzt7BdDsEfI8y8Bjya.jpeg"
          alt="Arali"
          fill
          className="object-cover"
        />
      </div>
      {/* Chamanthi - White - Bottom right */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chamanthi%20-%20White-s7h9jArOz1xdoE407EaHbhd8J0D1Ph.jpeg"
          alt="Chamanthi - White"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
