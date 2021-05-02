export interface ConfigInterface {
    modules: {
        header: boolean,
        footer: boolean,
        productList: {
            status: boolean,
            category: string,
        },
        productListEntry: {
            status: boolean,
            id: number
        },
        productDetail: {
            status: boolean,
            category: string,
            id: number,
        },
        shop: {
            status: boolean
        }
        shopIndex: {
            status: boolean,
        },
        shoppingCart: {
            status: boolean,
        },
        shoppingCartEntry: {
            status: boolean,
        },
        shoppingCartHeader: {
            status: boolean,
        }
    },
    styles: {
        background: string,
        color: string,
    }
}

interface Component {
    name: string,
    config: {
        category: number
    }
}



const index = {
    release: 1,
    pages: {
        start: [
            
        ]
    }
}