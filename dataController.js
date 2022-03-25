const categoryList = []
async function setCategoriesToCategoryList() {
    var data = await fetch("./product-list.json")
        .then(res => res.json())
        .then(data => data.responses[0][0].params.recommendedProducts)
        .catch(err => { console.log("error: " + err); })
    createCategoryObject(data)
}
function createCategoryObject(data) {
    var isActive = true
    var id = 0
    Object.keys(data).forEach(element => {
        var text = createCategoryText(element)
        if (!text.includes("RECOMMENDATION")) {
            var category = {
                "id": id,
                "text": text,
                "isActive": isActive,
                "products": data[element]
            }
            isActive = false
            id++
            categoryList.push(category)
        }
    })
}
function createCategoryText(category) {
    if (category.includes(">"))
        var text = category.split(">")[0]
    else
        var text = category
    return text
}