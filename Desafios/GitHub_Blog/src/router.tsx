import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Layout } from './Pages/Layout'
import { Post } from './Pages/Post'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
