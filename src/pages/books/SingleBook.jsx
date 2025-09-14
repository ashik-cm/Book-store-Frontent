import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { useFetchBookByIdQuery } from '../../redux/features/books/booksAPI'
import { getImgUrl } from '../../utils/getImgUrl'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const SingleBook = () => {
    const { id } = useParams()
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id)
    console.log("Route id:", id);
    console.log("Book data:", book);
    if (isLoading) return <div>Loading....</div>
    if (isError) return <div>Failed to load book information...!</div>

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
            <div>
                <img src={getImgUrl(book.coverImage)} alt={book.title} className="mb-8" />
            </div>
            <div className="mb-5">
                <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}
                    {/* {isAdmin && <span className="text-sm text-gray-500 ml-2">(Admin)</span>} */}
                </p>
                <p className="text-gray-700 mb-4"><strong>Published:</strong> {new Date(book.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4 capitalize"><strong>Category:</strong> {book.category}</p>
                <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
            </div>
            <div>
                <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1">
                    <FiShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default SingleBook


