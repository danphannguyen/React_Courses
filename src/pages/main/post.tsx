import { addDoc, deleteDoc, getDocs, collection, query, where, doc } from "firebase/firestore";
import { Post as IPost } from "./main"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface PostProps {
    post: IPost
}

interface Like {
    likeId: string;
    userId: string;
}

export const Post = (props: PostProps) => {
    const { post } = props;
    const [user] = useAuthState(auth);

    const [likes, setLikes] = useState<Like[] | null>(null)

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id})));
    }

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id,
            })
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user.uid, likeId: newDoc.id}] : [{ userId: user.uid, likeId: newDoc.id }])
            }
        } catch (error) {
            console.log(error);
        }

    }
    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));

            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db, "likes", likeId);
            await deleteDoc(likeToDelete);
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

    useEffect(() => {
        getLikes();
    }, []);

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Posted by: @{post.username}</p>
            <button onClick={hasUserLiked ? removeLike : addLike}>  {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}  </button>
            {likes && <p>Likes : {likes?.length}</p>}
        </div>
    );
}