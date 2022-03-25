window.addEventListener("load", async () => {
    await setCategoriesToCategoryList()
    setCategoriesInHTML()
    /* setProductsInHTML() */
})
document.querySelector(".product-categories").addEventListener("click", (e) => {
    if (!e.target.className.includes("category-active")) {
        changeActiveCategory(e.target)
        refreshContainer()
    }
})

function setCategoriesInHTML() {
    categoryList.forEach(category => {
        document.querySelector(".product-categories").appendChild(setCategoryNode(category))
    })
}
function setCategoryNode(category) {
    var categoryNode = document.createElement("li")
    if (category.isActive)
        categoryNode.className = "category category-active"
    else
        categoryNode.className = "category"
    categoryNode.innerHTML = category.text
    categoryNode.setAttribute("id", category.id)
    return categoryNode
}

function clearCategoriesInHTML() {
    document.querySelector(".product-categories").innerHTML = ""
}

function changeActiveCategory(activeCategory) {
    categoryList.forEach(category => {
        // HTML converts "&" to "&amp;". That's why we cannot control it equality.
        if (category.text.includes(activeCategory.innerHTML.split(" ")[0]))
            category.isActive = true
        else
            category.isActive = false
    })
}
function refreshContainer() {
    clearCategoriesInHTML()
    setCategoriesInHTML()
}