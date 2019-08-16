/**
 * iframeを更新
 */

window.addEventListener('load', function () {
  var links = document.querySelectorAll('.nav-list__item a');

  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'sketch');
  document.body.appendChild(iframe);
  iframe.src = links[0].getAttribute('href');

  links.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      var url = el.getAttribute('href');
      var className = 'js-active';
      if (iframe.src !== url) {
        iframe.classList.add(className)
        iframe.addEventListener('transitionend', () => {
          iframe.src = url;
          iframe.addEventListener('load', () => {
            setTimeout(function () {
              iframe.classList.remove(className);
            }, 300)
          })
        })
      }
      return false;
    })
  })
});