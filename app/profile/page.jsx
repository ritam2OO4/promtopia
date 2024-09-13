'use client'
import Profile from '@/components/profile'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
function myProfile() {
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async ()=>{
         const response = await fetch(`api/users/${session?.user.id}/posts`)
            const data = await response.json();
            setMyPosts(data)
        }
      if(session?.user.id){
        fetchPosts();
      }
      
    }, [session?.user.id]);

    const handleEdit = async (e) => {

    }
    const handleDelete = async (e) => {

    }
    return (
        <div>
            <Profile
                name={'my'}
                desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
                data={myPosts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default myProfile
