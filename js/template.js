export const template = document.createElement('template');
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
