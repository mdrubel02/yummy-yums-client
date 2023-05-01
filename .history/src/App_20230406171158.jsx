import React from 'react'

function App() {
  return (
    <div>
      <h1>hello</h1>
      <button className="btn">Button</button>
      <h1 className="text-6xl font-bold underline">
        Hello world!
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      <div className="form-control">
  <div className="input-group">
    <select className="select select-bordered">
      <option disabled selected>Pick category</option>
      <option>T-shirts</option>
      <option>Mugs</option>
    </select>
    <button className="btn">Go</button>
  </div>
</div>
    </div>
  )
}

export default App
