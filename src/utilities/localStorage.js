const getStoredCart = ()=>{
    const storedValue = localStorage.getItem('cart')
    if(storedValue){
        return JSON.parse(storedValue)
    }
    return [];
}

const setStoredCart = (cart)=>{
    const setStoredValue =  JSON.stringify(cart);
    localStorage.setItem('cart', setStoredValue);
}

const addToLS =  id =>{
    const cart = getStoredCart();
    cart.push(id);
    setStoredCart(cart);
}

export {addToLS, setStoredCart ,getStoredCart}