export const filterList = (list, text) => {
  if (!text) {
    return []
  }
  const name = text.toLocaleLowerCase();
  const filterList = list.filter(el => {
    return el.name.toLocaleLowerCase().indexOf(name) !== -1
  })
  return filterList;
}