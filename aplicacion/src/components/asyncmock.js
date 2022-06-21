const products = [
    {    
    id:'1',
    name:'Cenicero corazón',
    price: 600,
    category:'cenicero',
    img: 'https://github.com/felicitassosajouas/aplicacionSosaJouas/blob/master/aplicacion/public/images/cheart.jpeg?raw=true',
    stock: 10,
    description:'Cenicero artesanal pintado a mano'
    },
    {
    id:'2', name:'Porta sahumerio Ying Yang', price:700, category:'porta sahumerio', img:'https://raw.githubusercontent.com/felicitassosajouas/aplicacionSosaJouas/master/aplicacion/public/images/pyingyang.jpeg', stock:15, description:'porta sahumerio artesanal pintado a mano'
    },
    {
    id:'3', name:'Cenicero Luna', price:600, category:'cenicero', img:'https://github.com/felicitassosajouas/aplicacionSosaJouas/blob/master/aplicacion/public/images/cluna.jpeg?raw=true', stock:15, description:'cenicero artesanal pintado a mano'
    },   
]

export const getProducts = () => {
    return new Promise((resolve,/*reject*/) => {
        setTimeout(() => {
            resolve(products)
        }, 2000) //luego d 2seg resuelve el array d prod
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve,/*reject*/) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000) //luego d 2seg resuelve el array d prod
    })
}

//simular el retardo que puede haber al consultar esos datos:
export const getProductById = (id) => {
    return new Promise ((resolve,/* reject */) => {
        setTimeout (() => {
            //find para que del array encuentre UNO SOLO
            resolve(products.find(prod => prod.id === id))
        }, 2000) //luego d 2seg resuelve el array d prod
    })
}