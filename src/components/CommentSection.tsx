'use client'
import React, {useState} from 'react';
import { Card, CardContent} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from './ui/button';


interface Comment {
  id: string;
  author: string;
  text: string;
}


interface CommentSectionProps {
  postId: string;
}


export default function CommentSection({ postId } : CommentSectionProps ){
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null> (null);


  const handleAddcomment = () => {
    if (newComment.trim() && authorName.trim()){
      const newCommentObj : Comment = {
        id : new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentID:string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit){
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };


  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
      comments.id === editingCommentId
      ? { ...comments, text: newComment, authore: authorName}
      : comments
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };


  return (
    
    <main className='mt-8'>
      <h2 className='text-2xl font-semibold'> Comments </h2>
         <div className='mt-4 space-y-4'>
              {comments.length > 0 ? (
           comments.map((comment) => (
            
            <Card key={comment.id} >
              <CardContent className='p-4'>
                <div className='font-semibold'> {comment.author} </div>
                <p>{comment.text}</p>
                <Button
                onClick={() => handleEditComment(comment.id)}
                className='mt-2 text-blue-500'
                >
                  Eidt
                </Button>
              </CardContent>
            
            </Card>
        ))
        ) : (
          <p className='text-slate-400'> No comment yet</p>
        )}  
       </div>  
       
      

      <div className='mt-6'>
         <Input
         type='text'
         value={authorName}
         onChange={(e) => setAuthorName(e.target.value)}
         placeholder='Your Name'
         className='w-full mb-2'
         />
       
       <Input
         type='text'
         value={newComment}
         onChange={(e) => setNewComment(e.target.value)}
         placeholder='Add a comment'
         className='w-full mb-2'
         />
       
       <Button 
       onClick={editingCommentId ? handleSaveEditedComment : handleAddcomment}
       className='mt-4 hover:bg-orange-600' 
       >
         {editingCommentId ? 'Save' : 'Submit'}
       
       </Button> 
      </div>
    </main>

  );
}
