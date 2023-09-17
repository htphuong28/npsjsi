import React from 'react'
import { useState, useEffect } from 'react';
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
import CardGesture from '../card-gesture/CardGesture';


const Gestures = () => {

    const [gesture, setGestures] = useState([])
    const [isLoading, setLoading] = useState(false)

    //b1: tajo 1 bieens ddeer collect data
    const gestureRefs = collection(db, "gestures")

    // watch_later ref

    

    //b2: tajo 1 function de get data
    const getGestureData = async () => {
        setLoading(true);
        const gesturesDocument = await getDocs(gestureRefs);
        const gesturesData = gesturesDocument.docs.map((doc) => doc.data());
        const collectionId = gesturesDocument.docs.map((doc) => doc.id);
        const gesturesDataWithId = gesturesData.map((item, index) => {
            return {
                ...item,
                id: collectionId[index],
            };
        });
        if (gesturesDataWithId) {
            setGestures(gesturesDataWithId);
            setLoading(false);
        } else {
            setGestures([]);
            setLoading(false);
        }
    };

    

    useEffect(() => {
        getGestureData()

    }, [])

    if (isLoading) return (
        <div>Loading...</div>
    )


    console.log(gesture)

    
    return (
        <div className='flex flex-row gap-[12px]'>
            {/* <CardGesture videoUrl={gesture[0].videoUrl} name={gesture[0].name}/> */}
            {
               gesture.length >0 && gesture.map((item, index)=> {
                    return (
                        <div key={index}>
                            <CardGesture 
                                videoUrl={item.videoUrl}
                                name={item.name}
                                description={item.description}
                                id={item.id}
                                reference = {gestureRefs}
                                setData = {setGestures}
                                data = {gesture}
                            />
                            </div>
                    )
                })
            }
   
        </div>
    )
}

export default Gestures