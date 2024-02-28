import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

export interface Post {
    id: string;
    title: string;
    description: string;
    username: string;
    userId: string;
}

export const Main = () => {

    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "post");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {postsList?.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
}