'use client'
// import FeaturedProducts from '@/components/FeaturedProducts'
import ProductBox from '@/components/ProductBox'
import products from "@/data/products"
import Container from '@/components/Container'
import { useSearch } from '@/context/SearchContext'

function Store() {

  //Filtering Logic
  const { searchQuery } = useSearch()

  const filteredProducts = searchQuery.trim()
    ? products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) : products

  return (
    <div>
      <Container>
        <div className='p-3'>
          <h1 className='text-center font-bold text-3xl'>Our Products</h1>

          {
            filteredProducts.length > 0 ? (
              <div className="my-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
                {filteredProducts.map((product) => {
                  return <ProductBox key={product.id} product={product} />
                })}
              </div>
            ) : (
              <h1 className="text-center min-h-[42vh] text-3xl font-semibold text-[#810446] mt-10">
                😭Oops! No Products Found!😭
                <p className='text-lg py-2'>
                  Probably the intern unplugged the product server again 🙃
                </p>
              </h1>
            )
          }

        </div>
      </Container>
    </div>
  )
}

export default Store
