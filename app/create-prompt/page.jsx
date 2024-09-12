'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@/components/form'
import form from '@/components/form'

function createPrompt() {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  })
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          pormpt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        })
      })
      if(response.ok) Router.push('/');
    } catch (error) {
      console.log(error);
    }
    finally{
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default createPrompt
