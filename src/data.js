import fire from './fireBase';
import React, { useEffect } from 'react'

    const fetchData = async () => {
    
        const res = await fire.collection('posts').get() //[]
        const posts =  res.docs.map(post => post.data() )
        console.log(posts)
        //setText(posts)
        return posts
    }
    


export default fetchData;