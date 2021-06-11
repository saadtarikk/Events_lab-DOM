document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleSubmitForm)
})

const handleSubmitForm = function(event){
  event.preventDefault()
  // const title = document.querySelector('#reading-list')
  // title.textContent = event.target.title.value 

  // const author = document.querySelector('#reading-list')
  // author.textContent = event.target.author.value

  // const category = document.querySelector('#reading-list')
  // category.textContent = event.target.value
  // console.log(event.target.title.value)
  // console.log(event.target.author.value)
  // console.log(event.target.category.value)
  


  const bookTitle = document.createElement('h4')
  bookTitle.textContent = event.target.title.value


  const bookAuthor = document.createElement('h5')
  bookAuthor.textContent = event.target.author.value


  const bookCategory = document.createElement('p')
  bookCategory.textContent = event.target.category.value
  
  const resetForm = document.getElementById('new-item-form')
  resetForm.reset()

  const newListItem = document.createElement('li')
  newListItem.appendChild(bookTitle)
  newListItem.appendChild(bookAuthor)
  newListItem.appendChild(bookCategory)
  
  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(newListItem)
  
  

  // newListItem.classList = 'title'
}






