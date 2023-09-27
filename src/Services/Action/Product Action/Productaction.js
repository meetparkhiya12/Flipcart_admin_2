
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../MyFireBase/myfirebase";


export const addProduct = (data) => {

    // console.log(data,"add");

    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const singleproduct = (data) => {
    return {
        type: 'SINGLE_PRODUCT',
        payload: data
    }
}


export const getData = (data) => {

    return {
        type: 'ALL_PRODUCT',
        payload: data
    }
}

export const productremove = (id) => {
    return {
        type: 'REMOVE_CART',
        payload: id
    }
}

export const addProductasync = (data) => {

    // console.log(data,"Add Product Data");
    return async dispatch => {
        await addDoc(collection(db, "products"), data)
        // console.log(data,"sdsfsa");
        dispatch(addProduct(data));
    }
}

export const getAllAsyncData = () => {
    return async dispatch => {

        let alldata = [];

        let firestoredata = await getDocs(collection(db, "products"));
        firestoredata.forEach((doc) => {
            let d = { ...doc.data(), id: doc.id }
            alldata = [...alldata, d]
        })

        dispatch(getData(alldata));


    }
}

export const EditProductasync = (id) => {

    return async dispatch => {
        let alldata = [];
   

        const docref = doc(db, "products", `${id}`);
        const docsnap = await getDoc(docref);
        // const d = { ...docsnap.data(), id: id }

        // alldata = [...alldata, d]
        console.log(docsnap.data(), "Edit");
        dispatch(singleproduct(docsnap.data()));

    }


}

export const updateProductasync = (data,id) => {

    return async dispatch => {
       
   await updateDoc(doc(db,"products",`${id}`),data);

   
        dispatch(getAllAsyncData());

    }


}

export const removeProductasync = (id) => {

    // console.log(data,"Add Product Data");
    return async dispatch => {

        await deleteDoc(doc(db, "products", `${id}`));
        dispatch(getAllAsyncData());
    }
}