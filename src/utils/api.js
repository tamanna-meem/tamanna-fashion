//api.js
import axios from 'axios'

const API_URL = 'https://glore-bd-backend-node-mongo.vercel.app/api/product'

// ✅ fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data.data 
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// ✅ fetch single product by ID
export const fetchSingleProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data.data // 👈 return only the product object
  } catch (error) {
    console.error('Error fetching single product:', error)
    throw error
  }
}
