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
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-06-25 08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-05-25 08:00'),
  }, 
 {
  id: 3,
    author: {
      avatarUrl: 'https://github.com/williamjayjay.png',
      name: 'William Gomes',
      role: 'Mobile Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-06-10 10:00'),
 },
 {
  id: 4,
    author: {
      avatarUrl: 'https://github.com/vidarafael.png',
      name: 'Rafael Freitas',
      role: 'FullStack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2024-06-20 19:00'),
 },
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

