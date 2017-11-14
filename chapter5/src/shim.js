const shim = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0)
})

export default shim
