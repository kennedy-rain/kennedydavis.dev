const imageSelector = '.cbFormData img';

document.addEventListener('DataPageReady', _=>{

const image = document.querySelector(imageSelector)

const zoomImageTemplate = (HTMLimgElement)=> {

  return `<div class="appendedContainer">
  <input type="checkbox" id="zoomCheckbox">
  <label for="zoomCheckbox">
    ${HTMLimgElement.parentElement.innerHTML}
  </label>
  </div>`
}

image.parentElement.innerHTML = zoomImageTemplate(image)
})