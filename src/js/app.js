const fileEl = document.querySelector('[data-id=file]');
const overlapEl = document.querySelector('[data-id=overlap]');
const previewEl = document.querySelector('[data-id=preview]');
const collectionPng = document.querySelector('.collection-png');

overlapEl.addEventListener('click', (evt) => {
fileEl.dispatchEvent(new MouseEvent('click'));
});


overlapEl.addEventListener('click', (e) => {
  e.preventDefault();
  fileEl.dispatchEvent(new MouseEvent, ('mouseup'))
})


fileEl.addEventListener('change', (evt) => {
  const files = Array.from(evt.currentTarget.files);


    const file = files[files.length - 1];
    console.log(file.name);
    const previewBlock = document.createElement('figure')
    const preview = document.createElement('img');
    const previewName = document.createElement('figcaption');
    const deleteImg = document.createElement('div');

    previewName.innerText = file.name;
    deleteImg.innerText = "X";
    previewBlock.classList.add('preview-block');
    preview.classList.add('img-preview-block')
    deleteImg.classList.add('delete-img');

    collectionPng.appendChild(previewBlock);
    previewBlock.appendChild(preview)
    previewBlock.appendChild(deleteImg);
    previewBlock.appendChild(previewName)
    
    preview.src = URL.createObjectURL(file);
    preview.addEventListener('load', () => {
      URL.revokeObjectURL(preview.src)
    })
  });


  collectionPng.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('delete-img') === false) return;
    const imgBlock = target.closest('.preview-block');
    imgBlock.remove();
  })