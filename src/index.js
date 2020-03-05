
function debounce({ fn, wait = 300, immediate = false, runSync = false }) {
    let timer = null
    const context = this
    const wrapper = function () {
        let args = arguments

        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }

    if (immediate) {
        wrapper()
    } else if (runSync) {
        fn.call(context)
    }

    return wrapper
}

module.exports = {
    debounce
}