window.addEventListener('mousemove', handleMouseMove);
      
      function handleMouseMove(event) {
        var cursor_top = event.pageY - (cursor.clientHeight / 2);
        var cursor_left = event.pageX - (cursor.clientWidth / 2);
        var circle_top = event.pageY - (circle.clientHeight / 2);
        var circle_left = event.pageX - (circle.clientWidth / 2);
        cursor.style.top = cursor_top + 2 + 'px';
        cursor.style.left = cursor_left + 2 + 'px';
        circle.style.top = circle_top + 'px';
        circle.style.left = circle_left + 'px';
      }
      
      function handleMouseEnter() {
        cursor.classList.add('hovered');
        circle.classList.add('hovered');
      }
      
      function handleMouseLeave() {
        cursor.classList.remove('hovered');
        circle.classList.remove('hovered');
      }