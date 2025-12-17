import { useRef } from "react"

function Example1() {
    const click = useRef(0)
    function handleClick(){
        click.current++
        console.log("Click:",click.current)
    }
  return (
    <div>
        <h1>Use Ref Example</h1>
        <p>Clicks:{click.current}</p>
     <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Example1
