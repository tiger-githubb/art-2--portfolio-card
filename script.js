const gallery = document.getElementById("gallery");


window.onmouseover = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;

    const panX = gallery.offsetWidth * xDecimal * -1,        
          panY = gallery.offsetHeight * yDecimal * -1;

    gallery.style.transform = `translate(${panX}px, ${panY}px)`
}