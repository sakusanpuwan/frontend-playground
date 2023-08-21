import { QRCode } from "antd";
import { useEffect, useState } from "react";
import './Component.css'

const Component = () => {

    const [URL,setURL] = useState(null);
    const [counter,setCounter] = useState(0);
    const [tick,setTick] = useState("unticked");
    const [date,setDate] = useState();
    const [image,setImage] = useState(null);
    const [password,setPassword] = useState();
    const [range,setRange] = useState(50);

    const handleButton = () =>{
        setCounter(counter + 1);
    }

    const handleCheck = () => {
        setTick(() => tick === "unticked" ? "ticked" : "unticked"); // In-line callback function
        // setTick(() => {
        //     return tick === "unticked" ? "ticked" : "unticked"
        // })
    }

    const handleDate = (event) => {
        setDate(event.target.value);
    }

    const handleImage = (event) => {
        const uploadedImage = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        }

        reader.readAsDataURL(uploadedImage)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRange = (event) => {
        setRange(event.target.value)
    }

    useEffect(() => {
        setURL(window.location.href);
    },[])

    return(
        <div className="component-container">
            <h1>Component</h1>
            <button onClick={handleButton}>Click me</button>
            <h4>{counter}</h4>
            <input type="checkbox" onChange={handleCheck}></input>
            <h4>{tick}</h4>
            <input type="color"></input>
            <input type="date" onChange={handleDate} value={date}></input>
            <h4>{date}</h4>
            <input type="datetime-local"></input>
            <input type="email"></input>
            <input type="file" onChange={handleImage}></input>
            {image && <img src={image} alt="uploaded" height='100px'></img>}
            <input type="hidden"></input>
            <input type="number"></input>
            <input type="password" onChange={handlePassword} value={password}></input>
            <h4>{`Password: ${password}`}</h4>
            <form>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">CSS</label>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label for="javascript">JavaScript</label>
            </form>
            <input type="range" min="0" max="100" onChange={handleRange} value={range}></input>
            <h4>{range}</h4>
            <input type="reset"></input>
            <input type="search"></input>
            <input type="submit"></input>
            <input type="time"></input>
            <QRCode value={URL || '-'}/>
        </div>
    )
}

export default Component;