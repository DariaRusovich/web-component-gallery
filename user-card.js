const template = document.createElement('template');
template.innerHTML = `
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
button {
    font: inherit;
    color: inherit;
    background: none;
    border: 0;
    cursor: pointer;
}
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.photo-gallery {
    font-family: 'Segoe UI', sans-serif;
    color: hsl(230, 23%, 26%);
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    font-size: 26px;
}
.image-slider {
    position: relative;
    width: 800px;
    min-height: 600px;
    margin-top: 20px;
    overflow: hidden;
    display: flex;
}
::slotted(.active){
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
}
.btn-wrapper {
    margin-top: 25px;
}
.btn-wrapper .btn:not(:first-child) {
    margin-left: 10px;
}
.btn {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: hsl(230, 23%, 26%);
    color: #fff;
}
.btn:hover{
    background-color: hsl(230, 23%, 36%);
    transition: 0.3s;
}
</style>

<div class='container'>
<div class='photo-gallery'>
<h1 class='title'></h1>
<div class='image-slider'>
<slot name='image'></slot>
</div>
<div class='btn-wrapper'>
<button class='btn btn-prev' id='btn-prev'>&#8672;</button>
<button class='btn btn-next' id='btn-next'>&#8674;</button>
</div>
</div>
</div>
`;

class PhotoGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
    this.slides = Array.from(document.querySelector('photo-gallery').children);
    this.numberOfSlides = this.slides.length;
    this.slideNumber = 0;
    this.btnNext = this.shadowRoot.querySelector('#btn-next');
    this.btnPrev = this.shadowRoot.querySelector('#btn-prev');
    this.btnNext.addEventListener('click', () => {
        this.slides.forEach((slide) => {
            slide.classList.remove('active')
        })
        this.next()
    });
    this.btnPrev.addEventListener('click', () => {
        this.slides.forEach((slide) => {
            slide.classList.remove('active')
        })
        this.prev()
    });
  }

  next() {
    this.slideNumber++;
    if (this.slideNumber > this.numberOfSlides - 1) {
      this.slideNumber = 0;
    }
    this.slides[this.slideNumber].classList.add('active')
  }

  prev() {
    this.slideNumber--;
    if (this.slideNumber < 0) {
      this.slideNumber = this.numberOfSlides - 1;
    }
    this.slides[this.slideNumber].classList.add('active')
  }

//   connectedCallback() {
//     this.shadowRoot.getElementById('btn-prev').addEventListener('click', () => {
//       this.prev();
//     });
//   }
}

window.customElements.define('photo-gallery', PhotoGallery);
