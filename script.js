var header = document.getElementsByClassName('header-dark')
if (header.length) {
  header[0].className = header[0].className.replace(new RegExp('(?:^|\\s)'+ 'header-dark' + '(?:\\s|$)'), ' header-light ')
}
