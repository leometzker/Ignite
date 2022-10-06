// css do App
import "./global.css"
import styles from "./App.module.css";

// importação components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post';

// ******** APLICAÇÃO *******************
interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/leometzker.png",
      name: "Leonardo Metzker",
      role: "Student"
    },
    contentPost: [
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
    contentPost: [
      { type:  "paragraph", content: "Nao pode ser o mesmo"},
      { type: "paragraph", content: "Aprendendo como importar um dado para o app"},
      { type: "link", content: "👉 mayk.design/doctorcare"}           
    ],
    publishedAt: new Date("2022-09-28 17:00:01")
  } ,
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/joana.png",
      name: "Joana",
      role: "Não sei"
    },
    contentPost: [
      { type:  "paragraph", content: "Fala doug"},
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
                contentPost={post.contentPost}
                publishedAt={post.publishedAt}
              />
            ) 
          })}              
        </main>
      </div>
      
    </div>
  )
}


