import axios from 'axios';

export const productsAPI = {
  getProducts(category, sortBy) {
    return axios.get(`/CPUs?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(({ data }) => data)
      .catch(() => alert("Failed to get productions"))
  }
}

export const productAPI = {
  product(id) {
    return axios.get(`/CPUs/${id}?_embed=comments`)
      .then(({ data }) => data)
      .catch(() => alert("Failed to get production data"))
  }
}

export const commentAPI = {
  setRating(id, rating) {
    return axios.post(`/CPUs/${id}/rating`, rating)
      .catch(() => alert("Failed to set rating"))
  },
  setComment(comment) {
    return axios.post(`/comments`, comment)
      .catch(() => alert("Failed to set comment"))
  }

}
