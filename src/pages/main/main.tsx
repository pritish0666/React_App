import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../../config/firebase"; 
import { title } from "process";
import { Post } from "./post";
import { useAuthState } from "react-firebase-hooks/auth";

export interface Post {
    id: string;
    userId:string;
    title:string;
    description:string;
    username:string;

}

export const Main = () => {

    const [user] = useAuthState(auth);

    const [postslist, setpostslist] = useState <Post[] | null> (null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setpostslist(
            data.docs.map((doc) => ({...doc.data(),id:doc.id})) as Post []
        )
    }

    useEffect(()=>{
        getPosts();
    },[])

    
    return(
        
         <div>{postslist?.map((post)=> (<Post post={post}/>))}</div>  
    
    )
}