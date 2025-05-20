const draggable = document.getElementById('drag');
const verydirty= document.getElementById('veryDirty');
const dirty= document.getElementById('dirty');
const wow= document.getElementById('washed');
let offsetX = 0;
let offsetY = 0;
let isDragging = false;

function moveAt(pageX, pageY) {
  draggable.style.left = (pageX - offsetX) + 'px';
  draggable.style.top = (pageY - offsetY) + 'px';
}

let cleaningStarted = false;

draggable.addEventListener('mousedown', function (e) {
  isDragging = true;

  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  draggable.style.position = 'absolute';
  draggable.style.cursor = 'grabbing';

  if (!cleaningStarted) {
    cleaningStarted = true;

    setTimeout(() => {
      verydirty.style.opacity = '0';
    }, 5000);

    setTimeout(() => {
      dirty.style.opacity = '0';
      wow.style.transition = 'transform 0.5s ease-in-out';
      wow.style.transform = 'scale(1.05)';
    }, 10000);
  }

  moveAt(e.pageX, e.pageY);
});


document.addEventListener('mousemove', function (e) {
  if (!isDragging) return;
  moveAt(e.pageX, e.pageY);
});

document.addEventListener('mouseup', function () {
  isDragging = false;
  draggable.style.cursor = 'grab';
});

