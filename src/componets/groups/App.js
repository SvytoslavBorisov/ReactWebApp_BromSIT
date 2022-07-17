import React, {useState} from "react";
import Counter from "../tags/Counter";
import ClassCounter from "../tags/ClassCounter";
import fon from './fon.png';

function App() {
    const [value, setValue] = useState('')

    return (
        <div className="App">
            <div id="fon">
                <img src={fon} alt="" />
            </div>
        </div>
    );
}

export default App;
