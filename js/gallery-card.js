import { template } from "./template.js";

class PhotoGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    console.log(template.content);
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
