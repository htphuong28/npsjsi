import React from 'react'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    deleteField,
    updateDoc,
    onSnapshot,
} from "firebase/firestore";

import { db } from '../../firebase/firebase.config';

const CardGesture = (props) => {
    const {videoUrl, name, description, reference, id, setData, data} = props

    const watchLaterRefs = collection(db,"watch_later")

    const handleAddtoWatchLater = async (e) => {
       
        try {
            const result = await addDoc(watchLaterRefs,{
                name,
                videoUrl, 
                description
            })

            if (result) {
                alert("Them thanh cong vao danh sach xem sau")
            }
        }
        catch (error) {alert(error.message)}
    }

    const handleDelete = async (e) => {
        try{
            await deleteDoc(doc(db,"gestures",id))
            setData(data.filter((item)=> item.id !== id))
        } 
        catch(error) {}
    }

  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl relative h-[400px]">
            <figure><video src={videoUrl} alt="Shoes" /></figure>
            <button onClick={handleDelete} className='absolute top-0 right-0 bg-red-700 px-4 py-3 justify-center items-center text-white'>X</button>

            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <button className="btn btn-primary" onClick={(e)=> handleAddtoWatchLater(e)}>Xem sau</button>
                <p>{description}</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardGesture