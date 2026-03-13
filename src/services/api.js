// src/services/api.js

// API bazaviy URL - json server ishlayotgan port
const API_URL = 'http://localhost:5000';

// Barcha mahsulotlarni olish
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Ma\'lumotlarni yuklashda xatolik');
    }
    return await response.json();
  } catch (error) {
    console.error('API xatosi (getProducts):', error);
    return [];
  }
};

// Bitta mahsulotni ID bo'yicha olish
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Mahsulot topilmadi');
    }
    return await response.json();
  } catch (error) {
    console.error('API xatosi (getProductById):', error);
    return null;
  }
};

// Kategoriya bo'yicha mahsulotlarni olish
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/products?category=${category}`);
    if (!response.ok) {
      throw new Error('Ma\'lumotlarni yuklashda xatolik');
    }
    return await response.json();
  } catch (error) {
    console.error('API xatosi (getProductsByCategory):', error);
    return [];
  }
};

// Mahsulot qo'shish
export const addProduct = async (product) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('API xatosi (addProduct):', error);
    return null;
  }
};

// Mahsulotni yangilash
export const updateProduct = async (id, product) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('API xatosi (updateProduct):', error);
    return null;
  }
};

// Mahsulotni o'chirish
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (error) {
    console.error('API xatosi (deleteProduct):', error);
    return false;
  }
};