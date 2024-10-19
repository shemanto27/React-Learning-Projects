
function App() {
  

  return (
    <>
      <center>
      <div class="card w-96 shadow-xl bg-blue-500 mt-14">
        <div class="card-body text-white">

          <p className="text-sm">May 11, 2024</p>
          <h1 className="text-5xl font-bold">Nepal</h1>
          <figure>
            <img src="src\assets\thunder.webp" alt="" className="w-3/4 "/>
          </figure>

          <p className="text-3xl font-semibold">25.6 °C</p>

          <p className="text-2xl">Clouds</p>

          <form className="flex gap-1">
          <input type="text" placeholder="Enter city name" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-warning">Go</button>

          </form>


        </div>
      </div>
      </center>
    </>
  )
}

export default App
