const notification = document.getElementById('notification')
const closeBtn = document.getElementById('close-btn')

setTimeout(function () {
  notification.classList.add('hidden')
}, 3000)

closeBtn.addEventListener('click', function () {
  notification.classList.add('hidden')
})
