const log = {
    bind: function (el, binding, vnode, oldVnode) {
        console.log('bind el:', el)
        console.log('bind binding:', binding)
        console.log('bind vnode:', vnode)
        console.log('bind oldVnode:', oldVnode)
    },
    inserted: function(el, binding, vnode, oldVnode){
        console.log('inserted')
    },
    update: function(el, binding, vnode, oldVnode){
        console.log('update')
    },
    componentUpdated: function(el, binding, vnode, oldVnode){
        console.log('componentUpdated')
    },
    unbind: function(el, binding, vnode, oldVnode){
        console.log('unbind')
    },
}
let loadingEl = document.createElement('div')
loadingEl.className = 'loading'



const loading = {
    bind: function(el, binding) {
        if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') el.classList.add('relative', 'loading-wrap')
        console.log('el', el, binding.value)
        if (binding.value) el.appendChild(loadingEl)
        loadingEl.innerText = binding.arg ||  'loading...'
        // else el.removeChild(loadingEl)
    },
    inserted: function(el, binding) {
        
    },
    update: function(el, binding, vnode, oldVnode){
        console.log('update')
        if (!binding.value) {
            el.classList.remove('releavtive', 'loading-wrap')
            el.removeChild(loadingEl)
        }
    },
    componentUpdated: function(el, binding, vnode, oldVnode){
        console.log('componentUpdated')
    },
    unbind: function(el, binding, vnode, oldVnode){
        console.log('unbind')
        // if (!binding.value) {
            el.classList.remove('releavtive', 'loading-wrap')
            el.removeChild(loadingEl)
        // }
    },
}

export {
    log,
    loading
}