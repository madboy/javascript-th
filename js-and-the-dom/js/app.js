const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const listUl = listDiv.querySelector('ul');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'pink';
lastListItem.style.backgroundColor = 'lightblue';

const attachListItemButtons = li => {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
    
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';  
  li.appendChild(remove);
}

for (const child of lis) {
  attachListItemButtons(child);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON' && event.target.className === 'remove') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
                        
  if (event.target.tagName == 'BUTTON' && event.target.className === 'up') {
    let li = event.target.parentNode;
    let prev_li = li.previousElementSibling;
    let ul = li.parentNode;
    
    if (prev_li) {
     ul.insertBefore(li, prev_li);
    }
  }

  if (event.target.tagName == 'BUTTON' && event.target.className === 'down') {
    let li = event.target.parentNode;
    let next_li = li.nextElementSibling;
    let ul = li.parentNode;
    
    if (next_li) {
      ul.insertBefore(next_li, li);
    }
  }
 });
                        
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
  
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});  
  
  
  
  
  
  
  