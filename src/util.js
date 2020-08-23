export const Throttle = (func, delay) => {
    let flag;
    return function () {
        const context = this
        const args = arguments
        if (!flag) {
            func.apply(context, args)
            flag = true
            setTimeout(() => {
                flag = false
            }, delay)
        }
    }
}
