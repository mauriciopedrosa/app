export const productos = [
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

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});
