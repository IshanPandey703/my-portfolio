import { useState} from "react";

export default function TypeWriter(){
    
    const TypeText = ["Developer","Programmer","Learner"];
    const [text,setText] = useState("|");
    const [iterator, setIterator] = useState(0)
    
    
    return (
        <>
        {text}
        </>
    );
}