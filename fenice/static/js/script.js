window.onload = function() {
  document.body.classList.remove('preload')
}

a = document.getElementsByTagName('a');

a_array = [...a]
console.log(a_array)

a_array.forEach(tag => 
  tag.classList.add('fromRight'))
