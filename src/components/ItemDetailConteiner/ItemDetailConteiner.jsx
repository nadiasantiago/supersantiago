import { doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from "../ItemDetail/ItemDetail";

const ItemDetailConteiner = ()=>{
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect (()=>{
        const itemRef = doc(db, 'item', id);
        getDoc(itemRef).then((res) =>{
            setItem ({id:res.id, ...res.data()})
        })
    }, [id])
    return(
    <ItemDetail producto={item}/>
)}

export default ItemDetailConteiner;