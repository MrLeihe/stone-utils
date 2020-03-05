
function debounce(fn, wait) {
    let timer = null
    let context = this
    return function () {
        let args = arguments

        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}

module.exports = {
    debounce
}