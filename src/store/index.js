import { createStore } from 'vuex'
//设置存储
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
//获取存储,数据持久化
const getLocalCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  if (localStorage?.cartList) {
    return JSON.parse(localStorage?.cartList)
  }
}
export default createStore({
  state: {
    // { shopId: {shopName:'', productList:{ productId: {} }}}
    cartList: getLocalCartList() || {}
    // {
    // 第一层级是商铺的id
    // shopId: {
    //    shopName:'',
    //   productList:{
    // productId: {
    //     _id: '1',
    //     name: '番茄250g/份',
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //     sales: 10,
    //     price: 33.6,
    //     oldPrice: 39.6,
    //     count: 2
    //   },
    // }
    // },
    // }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }// 商店的全部信息
      // if (!shopInfo) { shopInfo = {} } // 第一次添加
      let product = shopInfo.productList[productId] //商店的某个产品
      if (!product) {
        productInfo.count = 0 //0件
        product = productInfo // 商品的详情
      }
      product.count = product.count + payload.num;//+ -
      // if (payload.num > 0) { product.check = true}
      (payload.num > 0) && (product.check = true); //选中
      (product.count < 0) && (product.count = 0)
      shopInfo.productList[productId] = product//把信息赋值给这个商品
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 给名字
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    //改变选中状态
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (let key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
