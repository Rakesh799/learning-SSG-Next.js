import Image from 'next/image'
import Link from 'next/link'

function ProductBox({ product }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-2xl mt-4 m-2'>
      <Link href={'/product-details/' + product.id}>
        <Image
          src={product.image}
          width={300}
          height={150}
          alt={product.title}
          className='w-full sm:h-52 min-h-52 h-fit object-cover rounded-md'
          priority
        />
      </Link>

      <div className="mt-4">
        <h3 className="text-sm h-10 font-semibold text-gray-800 overflow-clip">{product.title}</h3>

        <p className="text-gray-900 font-semibold mt-2">₹ {product.price}</p>
        <button className='mt-4 bg-[#810446] text-white px-4 py-2 runded hover:bg-[#642f4b] transition duration-300 rounded-lg'>Buy Now</button>
      </div>

    </div>
  )
}

export default ProductBox
