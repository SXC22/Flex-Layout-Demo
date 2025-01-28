'use client';

import { useState } from "react";

const PreviewDivComponent = ({ index }) => {
    const [flex, setFlex] = useState('none');

    return (
        <div 
            style={{ flex: flex }} 
            className="flex flex-col items-center justify-center w-[250px] h-[250px] py-10 px-5 bg-[--card-background] rounded-[50px] shadow transition-all"
        >
            <h1 className="text-5xl pb-4 font-bold">Div<span>{index}</span></h1>
            <div>flex:</div>
            <div>
                <input 
                    className="w-[60px] text-center py-1 px-2 rounded-xl outline-none"
                    value={flex} 
                    onInput={(e) => setFlex(e.target.value)}
                />
            </div>
        </div>
    )
}

export default PreviewDivComponent