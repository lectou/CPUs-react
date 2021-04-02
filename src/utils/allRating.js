export const allRating = (items) => {
  if (items.length > 0) {
    let count = items.reduce((acc, item) => acc += item);
    let result = count / items.length
    return result
  } else {
    return 4
  }
}