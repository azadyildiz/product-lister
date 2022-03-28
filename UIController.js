import { swiper } from "./sliderController.js"
// When window loaded, fetch the data and push in html.
window.addEventListener("load", async () => {
    await getCategories()
    appendCategoriesToHTML()
    appendProductsToHTML()
})
// Control categories click event
document.querySelector(".product-categories").addEventListener("click", (e) => {
    if (e.target.className === "category") {
        changeActiveCategory(e.target)
        updateProducts(categoryList[e.target.id])
    }
})
// Push categories elements in html.
function appendCategoriesToHTML() {
    categoryList.forEach(category => {
        document.querySelector(".product-categories").appendChild(setCategoryNode(category))
    })
}
// Get category from categoryList and return html elements.
function setCategoryNode(category) {
    var categoryNode = document.createElement("li")
    categoryNode.className = "category"
    if (category.id === 0)
        categoryNode.classList.add("category-active")
    categoryNode.innerHTML = category.text
    categoryNode.setAttribute("id", category.id)
    return categoryNode
}
// Enable selected category
function changeActiveCategory(activeCategory) {
    Array.from(activeCategory.parentElement.children).forEach(categoryNodes => {
        categoryNodes.className = "category"
    })
    activeCategory.classList.add("category-active")
}
// When page rendering first time we choose "active" first element in array
function appendProductsToHTML() {
    updateProducts(categoryList[0])
}
// Get chosen category, clear products container, create new node and append those nodes on swiper
function updateProducts(category) {
    clearProductsContainer()
    category.products.forEach(product => {
        swiper.appendSlide(setProductNode(product))
        // Move slider position to first element
        swiper.slideTo(0)
        // load image when slides change
        setTimeout(() => {
            swiper.lazy.load()
        }, 100);
    })
}
// Create product node
function setProductNode(product) {
    var productNode = document.createElement("div")
    productNode.className = "swiper-slide product"
    productNode.innerHTML = `
        <div class="product-image">
            <img data-src="${product.image}" class="swiper-lazy" alt = "${product.name}">
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">
            ${isHasOldPrice(product)}
        </div>
        <button class="product-button" onclick="getPopup()">Sepete Ekle</button>
        ${isShippingFree(product)}`;
    return productNode
}
// Clear products
function clearProductsContainer() {
    document.querySelector(".swiper-wrapper").innerHTML = ""
}
// Check it is discounted
function isHasOldPrice(product) {
    if (product.oldPriceText == "")
        return `<div class="new-price">${product.priceText}</div>`
    else {
        return `<div class="old-price">${product.oldPriceText}</div><div class="new-price">${product.priceText}</div>`
    }
}
// Check shipping is free
function isShippingFree(product) {
    if (product.params.shippingFee == "FREE") {
        return `<div class="product-shipping"><i class="fas fa-truck"></i> Ücretsiz Kargo</div>`
    }
    else {
        return ""
    }
}