import { ref } from "@vue/reactivity";

export default () => {
    const pages = ref([
        'start',
        'services',
        'team',
        'portfolio',
        'contact'
    ])

    const page = ref("start")

    const getActualPageIndex = () => {
        const index = pages.value.findIndex(p => p === page.value)
        if (index === -1){
            console.warn("ERR: PAGINA NO ENCONTRADA")
        }

        return index
    }

    const navigateTo = (_page) => {
        page.value = _page
    }

    const navigateNext = () => {

        const index = getActualPageIndex()
        if(index === -1) return;

        const nextPageIndex = index + 1
        
        if(nextPageIndex > pages.value.length){
            console.warn("ERR: LAST PAGE")
            return
        }
        page.value = pages.value[nextPageIndex]
        
    }

    const navigatePrev = () => {
        const index = pages.value.findIndex(p => p === page.value)
        if(index === -1)
        {
            console.warn("ERR: PAGINA NO ENCONTRADA")
            return
        }

        const prevPageIndex = index - 1
        
        if(prevPageIndex < 0){
            console.warn("ERR: FIRTS PAGE")
            return
        }

        page.value = pages.value[prevPageIndex]
    }

    const checkIfbeInPage = (_page) => {
        return _page === page.value
    }

    return {
        page,
        navigateTo,
        navigateNext,
        navigatePrev,
        checkIfbeInPage
    }
}