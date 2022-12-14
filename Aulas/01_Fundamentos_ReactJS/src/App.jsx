import { useState } from 'react'
import reactLogo from './assets/react.svg'

// css do App
import "./global.css"
import styles from "./App.module.css";

// importação components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post';

// ******** APLICAÇÃO *******************

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/leometzker.png",
      name: "Leonardo Metzker",
      role: "Student"
    },
    content: [
      { type:  "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 jane.design/doctorcare"}           
    ],
    publishedAt: new Date("2022-09-30 17:00:01")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "CTO @Rocketseat"
    },
    content: [
      { type:  "paragraph", content: "Nao pode ser o mesmo"},
      { type: "paragraph", content: "Aprendendo como importar um dado para o app"},
      { type: "link", content: "👉 mayk.design/doctorcare"}           
    ],
    publishedAt: new Date("2022-09-28 17:00:01")
  }  
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          {posts.map(post => {
            return (              
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}              
        </main>
      </div>
      
    </div>
  )
}


