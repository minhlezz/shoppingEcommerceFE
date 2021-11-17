const image1 = "https://images.unsplash.com/photo-1507227920021-ca08794ab5cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
const image2 = "https://images.unsplash.com/photo-1517705708367-762e7e2eee6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
const image3 = "https://images.unsplash.com/photo-1500338900354-9860a96df6ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80"

const brewGuides = [
    {
        image: image1,
        title: "How To Brew: Espresso At Home"
    },
    {
        image: image2,
        title: "How To Brew: Aeropress"
    },
    {
        image: image3,
        title: "How To Brew: Plunger"
    },
]

const getAll = () => brewGuides;

const brewData = {
    getAll,
}

export default brewData