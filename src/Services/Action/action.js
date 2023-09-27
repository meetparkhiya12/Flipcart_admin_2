


export const addcart = (id,data,index) => {

 
  return{
      type : 'ADD_CART',
      payload : {id,index,data}
  }
  
}

export const productremove = (id) => {
  return{
      type : 'REMOVE_CART',
      payload : id
  }
}

export const increment = (id) => {
  return{
      type : 'INC',
      payload : id
  }
}

export const decrement = (id) => {
  return{
      type : 'DEC',
      payload : id
  }
}










 




