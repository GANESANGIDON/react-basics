import React from 'react'

function MouseCursor() {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('#mouseBg')
    let mouseLeftPosition = e.pageX - 11,
     mouseTopPosition = e.pageY -11;
    cursor.style.left = mouseLeftPosition + 'px'
    cursor.style.top = mouseTopPosition + 'px'
  })

  return <div id="mouseBg"></div>
}

export default MouseCursor
