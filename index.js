const form = document.getElementById('form');
const inputImage = document.querySelector('#image');
const inputTitle = document.querySelector('#title');
const inputDescription = document.querySelector('#description');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const imageValue = inputImage.value.trim();
  const titleValue = inputTitle.value.trim();
  const descriptionValue = inputDescription.value.trim();

  if (!titleValue || !descriptionValue || !imageValue) {
    alert('Please fill in all fields.');
    return;
  }


  const postDiv = document.createElement('div');
  postDiv.classList.add('blog-post');

  
  postDiv.innerHTML = `
    <img src="${imageValue}" alt="${titleValue}" class="post-image" />
    <h3 class="post-title">${titleValue}</h3>
    <p class="post-description">${descriptionValue}</p>
    <button type="button" class="post-edit">Edit</button>
    <button type="button" class="post-delete">Delete</button>
  `;

  
  output.appendChild(postDiv);

  
  form.reset();

  
  const editBtn = postDiv.querySelector('.post-edit');
  const deleteBtn = postDiv.querySelector('.post-delete');

  let isEditing = false;

  editBtn.addEventListener('click', () => {
    if (!isEditing) {
      
      const titleEl = postDiv.querySelector('.post-title');
      const descEl = postDiv.querySelector('.post-description');

     
      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.value = titleEl.textContent;
      titleInput.classList.add('edit-title-input');

      const descInput = document.createElement('textarea');
      descInput.value = descEl.textContent;
      descInput.classList.add('edit-description-input');

      
      postDiv.replaceChild(titleInput, titleEl);
      postDiv.replaceChild(descInput, descEl);

      editBtn.textContent = 'Save';
      isEditing = true;
    } else {
      
      const titleInput = postDiv.querySelector('.edit-title-input');
      const descInput = postDiv.querySelector('.edit-description-input');

      if (titleInput.value.trim() === '' || descInput.value.trim() === '') {
        alert('Title and description cannot be empty.');
        return;
      }

      const newTitle = document.createElement('h3');
      newTitle.classList.add('post-title');
      newTitle.textContent = titleInput.value.trim();

      const newDesc = document.createElement('p');
      newDesc.classList.add('post-description');
      newDesc.textContent = descInput.value.trim();

      postDiv.replaceChild(newTitle, titleInput);
      postDiv.replaceChild(newDesc, descInput);

      editBtn.textContent = 'Edit';
      isEditing = false;
    }
  });

  deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this post?')) {
      postDiv.remove();
    }
  });
});
