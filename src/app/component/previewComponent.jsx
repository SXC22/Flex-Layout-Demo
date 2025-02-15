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


    return (
        <div className="bg-[--preview-background] border border-[--card-background] w-[80%] h-[80%] min-w-[200px] min-h-[200px] max-w-full max-h-full overflow-auto shadow rounded-lg resize">
            <div className="transition-all h-full" style={styles}>
                { elementIndexes.map((element, index) => 
                    <PreviewDivComponent key={index} index={index} defaultAlign={styles.alignItems} />
                )}
            </div>
        </div>
    )
}

export default PreviewComponent