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
        <div className="bg-[--preview-background] border border-[--card-background] w-[80%] h-[80%] min-w-[200px] min-h-[200px] max-h-full overflow-auto shadow rounded-lg resize">
            <div className="flex transition-all" style={styles}>
                { elementIndexes.map((element, index) => 
                    <PreviewDivComponent key={index} index={index} />
                )}
            </div>
        </div>
    )
}

export default PreviewComponent