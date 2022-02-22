const productos = [
    {   
        id: 1,
        name: 'Aberlour Single Malt 12 Años escocés 700 mL ',
        stock: 10,
        price: 7000,
        img: 'https://res.cloudinary.com/dubafipzy/image/upload/v1644961980/aberlour_malt_12_a%C3%B1os_gndwed.webp',
        category: 'wiskies',
    },
    {
        id: 2,
        name: 'Johnnie Walker Gold Label Reserve Whisky',
        stock: 2,
        price: 200,
        img: 'https://res.cloudinary.com/dubafipzy/image/upload/v1644962125/johnnie_walker_gold_reserve_cy1gfv.webp',
        category: 'wiskies',
    },
    {
        id: 3,
        name: 'Vino Marcelo Gallardo Blend Norton 750ml',
        stock: 7,
        price: 5000,
        img: 'https://res.cloudinary.com/dubafipzy/image/upload/v1644962124/marcelo_gallardo_blend_ut2itj.webp',
        category: 'vinos',
    },
    {
        id: 4,
        name: 'Vino Rutini Cabernet Franc Malbec 750ml Blend Tinto',
        stock: 4,
        price: 1650,
        img: 'https://res.cloudinary.com/dubafipzy/image/upload/v1644962268/rutini_cabernet_franc_vrwe23.webp',
        category: 'vinos',
    },
];


const categorias = [
    {id: 'vinos', descripcion: 'Vinos'},
    {id: 'wiskies', descripcion: 'Wiskies'},
    {id: 'cervezas', descripcion: 'Cervezas'},      
    {id: 'aperitivos', descripcion: 'Aperitivos'}     
]

export const traerProductos = (idCategoria)=> {
    return new Promise((resolve) => {
        const productosFiltrados = idCategoria ? productos.filter(item => item.category === idCategoria) : productos
        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    })
}

export const traerProducto = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = productos.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(productoFiltrado)
        }, 1000)
    })
}

export const traerCategorias = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}