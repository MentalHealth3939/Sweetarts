const topTrending = document.querySelector(".top-trending")
const topTrendingBottom = document.querySelector(".top-trending-bottom")
const topElements = document.querySelectorAll(".trending-item")
const featureBlocks = document.querySelectorAll(".feature-block")

topTrending.addEventListener("mouseover", () => {
    topElements.forEach(item => {
        item.classList.toggle('hover')
    })
    topTrendingBottom.classList.toggle('hover')
})

topTrending.addEventListener("mouseout", () => {
    topElements.forEach(item => {
        item.classList.toggle('hover')
    })
    topTrendingBottom.classList.toggle('hover')
})

featureBlocks.forEach(item => {

    item.addEventListener("mouseover", () => {
        item.classList.toggle('hover')

        let textChildren = item.children[0].children

        for (let item of textChildren) {
            item.classList.toggle('hover')
        }
    })

    item.addEventListener("mouseout", () => {
        item.classList.toggle('hover')

        let textChildren = item.children[0].children

        for (let item of textChildren) {
            item.classList.toggle('hover')
        }
    })

})

