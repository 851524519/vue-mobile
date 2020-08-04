let loadingCount = 0

const startLoading = () => {
  const loading = document.getElementById('loading')
  if (loading !== null && loading !== undefined) {
    loading.style.display = 'flex'
  }
}

const endLoading = () => {
  const loading = document.getElementById('loading')
  if (loading !== null && loading !== undefined) {
    loading.style.display = 'none'
  }
}

export const showLoading = () => {
  console.log('showloading' + loadingCount)
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount += 1
}

export const hideLoading = () => {
  console.log('hideloading' + loadingCount)

  if (loadingCount <= 0) {
    return
  }
  loadingCount -= 1
  if (loadingCount === 0) {
    endLoading()
  }
}
