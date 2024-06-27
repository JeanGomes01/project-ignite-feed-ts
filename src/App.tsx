import styles from './App.module.css';

import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';


const posts: PostType [] = [
{
    id: 1,
    author: {
    avatarUrl: 'https://github.com/JeanGomes01.png',
    name: 'Jean Gomes',
    role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      {type: 'link', content: '👉 project-ignite-feed-ts'},      
    ],
    publishedAt: new Date('2024-06-25 08:00'),
  },
 {
  id: 2,
    author: {
      avatarUrl: 'https://github.com/williamjayjay.png',
      name: 'William Gomes',
      role: 'Mobile Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal 👋'},
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
      {type: 'link', content: '👉 devonlane.design'},      
    ],
    publishedAt: new Date('2024-06-10 10:00'),
 }
];


export function App() {

  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <aside>
      <Sidebar/>
    </aside>

    <main>
     {posts.map(post => {
      return (<Post
      key={post.id}
      post={post}
      />
    )
     })}
    </main>
    </div>
    </div>
  )
}

