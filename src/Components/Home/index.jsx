import React from 'react'


const Home = (props) => {
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
    }
    return (
        <>
        <div>
            <h1>Hello{props.name}
            </h1>
        </div>

        <form action="" onClick={HandleSubmit}>
            <button >Submit</button>
        </form>
        </>
    )
}
const HandleClick = () => {
    console.log("Clicked")
}

const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
}

const Home = () => {
  return (
      <>    
      <div>Onclick Event</div>
      <button onClick={HandleClick}>Click</button>
      <form onSubmit={HandleSubmit}>
      <button type="submit">Submit</button>
      </form>
    </>
  )
};



export default Home;
