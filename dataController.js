const categoryList = []
// Get usable data
async function getCategories() {
    var data = await fetch("./product-list.json")
        .then(res => res.json())
        .then(data => data.responses[0][0].params.recommendedProducts)
        .catch(err => { console.log("error: " + err); })
    createCategoryObject(data)
}
// Create category object and push to array
function createCategoryObject(data) {
    var id = 0
    Object.keys(data).forEach(key => {
        var text = createCategoryText(key)
        if (!text.includes("RECOMMENDATION")) {
            var category = {
                "id": id,
                "text": text,
                "products": data[key]
            }
            id++
            categoryList.push(category)
        }
    })
}
// Get usable category text
function createCategoryText(category) {
    if (category.includes(">"))
        var text = category.split(">")[0]
    else
        var text = category
    return text
}