/**
 * iframeを更新
 */

const sketchId = 'sketch'
const className = 'js-active'
const elFrame = document.getElementById('frame')

function setFrame (src) {
  var iframe = document.getElementById(sketchId)
  if (iframe.getAttribute('src') != src) {
    elFrame.classList.add(className)
    anime({
      targets: elFrame,
      opacity: 0,
      duration: 500,
      complete: function () {
        iframe.setAttribute('src', src);
        iframe.onload = function () {
          anime({
            targets: elFrame,
            opacity: 1,
            duration: 500,
            delay: 500
          })
        }
      }
    })
  }
}

window.addEventListener('load', function () {
  var links = document.querySelectorAll('.nav-list__item a');

  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', sketchId);
  elFrame.appendChild(iframe);
  iframe.setAttribute('src', links[0].getAttribute('href'));

  links.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      var src = el.getAttribute('href');
      setFrame(src)
      return false;
    })
  })
});