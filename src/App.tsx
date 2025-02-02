import Aside from "./components/Aside"
function App() {
  return (
    <main className="rounded-lg p-3 bg-white w-full max-w-[800px] h-full">
      <section className="flex min-h-[500px]">
        <Aside />
      </section>
    </main>
  )
}

export default App