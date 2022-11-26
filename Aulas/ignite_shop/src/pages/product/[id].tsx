import { useRouter } from 'next/router'

export default function Produto() {
  const { query } = useRouter()
  return (
    <>
      <h1>Produto</h1>
      <h2>{JSON.stringify(query)}</h2>
    </>
  )
}
