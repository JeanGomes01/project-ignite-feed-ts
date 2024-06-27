import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment }: CommentProps) {

  const[likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
      onDeleteComment(content); 
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });

    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JeanGomes01.png" alt="" />
       
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jean Gomes</strong>
              <time title='11 de Maio às 14:57' dateTime='2024-06-24 14:57:10'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content} 👏👏 </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  ) 
}