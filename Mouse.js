const highlight = document.querySelectorAll('.Menu');
highlight.forEach((highlight) => {
  highlight.addEventListener('mouseover', function(event) {
    if (!highlight.contains(event.relatedTarget)) {
      highlight.classList.add('hovered');
    }
  });

  highlight.addEventListener('mouseout', function(event) {
    if (!highlight.contains(event.relatedTarget)) {
      highlight.classList.remove('hovered');
    }
  });
});