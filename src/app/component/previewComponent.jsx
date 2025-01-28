'use client'

import { useEffect, useState } from "react"
import PreviewDivComponent from "./previewDivComponent";

const PreviewComponent = ({ styles, n=1 }) => {
    const [elementIndexes, setElementIndexes] = useState([]);

    useEffect(() => {
        const elementIndexes = [];
        // create empty elements
        for (let i=0; i<n; i++) {
            elementIndexes.push(0);
        }
        setElementIndexes(elementIndexes);

    }, [n]);

    useEffect(() => {
        console.log(styles);
    }, [styles])


    return (
        <div className="border resize w-[400px] h-[500px] overflow-auto">
            <div className="flex" style={styles}>
                { elementIndexes.map((element, index) => 
                    <PreviewDivComponent key={index} index={index} />
                )}
            </div>
        </div>
    )
}

export default PreviewComponent