'use client';

import { useState } from "react";

const PreviewDivComponent = ({ index }) => {
    const [flex, setFlex] = useState('none');

    return (
        <div 
            style={{ flex: flex }} 
            className="w-[200px] h-[300px] py-10 px-5 border"
        >
            <div>Div{index}</div>
            <div>Flex</div>
            <div>
                <input 
                    className="w-full"
                    value={flex} 
                    onInput={(e) => setFlex(e.target.value)}
                />
            </div>
        </div>
    )
}

export default PreviewDivComponent