import Container from '@/components/Container'
import products from '@/data/products'

export async function generateStaticParams() {
  //   // const response = await fetch("https://fakestoreapi.in/api/products")
  //   const response = await fetch("https://fakestoreapi.com/products")
  //   const data = await response.json()

  //   return data.map((product) => ({
  //     product_id: product.id.toString(),
  //   }))

  return products.map((product) => ({
    product_id: product.id.toString()
  }))
}

function ProductDetails({ params }) {
  // const res = await fetch(`https://fakestoreapi.com/products/${params.product_id}`)
  // const data = await res.json()
  // const product = data

  const productID = parseInt(params.product_id)

  const product = products.find((product) => product.id == productID)

  return (
    <Container>
      <div className='py-12 px-4'>
        <div className="flex flex-col md:flex-row items-start bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px] h-[500px] md:w-1/2 object-contain p-6"
          />

          <div className="p-6 md:w-1/2">
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-4 max-h-24 overflow-clip'>{product.description}</p>
            <p className='text-lg font-semibold text-gray-900 mb-4'>Price: ₹ {product.price}</p>
            {product.discount && (
              <p className="text-md text-green-500 mb-4">Discount: {product.discount}% off</p>
            )}
            <ul className="text-gray-700 space-y-2 mt-8">
              <li><strong>Rating:</strong> {product.rating.rate}★</li>
              <li><strong>Stocks Available:</strong> {product.rating.count}</li>
              {/* <li><strong>Color:</strong> {product.color}</li> */}
              <li><strong>Category:</strong> {product.category}</li>
            </ul>

            <button className='mt-6 px-6 py-3 bg-[#810446] hover:bg-[#810447ec] text-white font-semibold rounded-lg cursor-pointer'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails
