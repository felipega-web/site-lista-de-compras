const form = document.querySelector('form');
const item = document.querySelector('#item');
const list = document.querySelector('#list');
const empty = document.querySelector('.empty');
const close = document.querySelector('.close');

const imgDefault = 'assets/icons/checkbox-default.svg';
const imgHover = 'assets/icons/checkbox-hover.svg';
const imgSelected = 'assets/icons/checkbox-selected.svg';

document.querySelectorAll('.checkbox-image').forEach(img => {
    const li = img.parentElement;
    const imgDelete = li.querySelector('.apagar');

    img.addEventListener('click', () => {
      img.src = img.src.includes(imgDefault) ? imgSelected : imgDefault;
    });

    imgDelete.addEventListener('click', () => {
        list.removeChild(li);

        empty.style.display = 'flex';
    });

});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const imgDelete = document.createElement('img');

    let isClicked = false;

    img.src = imgDefault;
    span.textContent = item.value;
    imgDelete.src = 'assets/icons/trash.svg';

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(imgDelete);
    list.appendChild(li);

    item.value = '';

    img.addEventListener('mouseover', () => {    
        if (!isClicked) img.src = imgHover;
    });

    img.addEventListener('mouseout', function() {
        if (!isClicked) img.src = imgDefault;
    });

    img.addEventListener('click', () => {    
        isClicked = !isClicked;
        img.src = isClicked ? imgSelected : imgDefault;
    });

    imgDelete.addEventListener('click', () => {
        list.removeChild(li);

        empty.style.display = 'flex';
    });
});

close.addEventListener('click', () => {
    empty.style.display = 'none';
});

