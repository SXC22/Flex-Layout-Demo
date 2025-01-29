'use client';

import { useState } from "react";
import SettingComponent from "./settingComponent";

const PreviewDivComponent = ({ index }) => {
    const [flex, setFlex] = useState('none');
    const [alignSelf, setAlignSelf] = useState('flex-start');

    return (
        <div 
            style={{ flex: flex, alignSelf: alignSelf }} 
            className="flex flex-col items-center justify-center w-[250px] min-h-[250px] py-10 px-5 bg-[--card-background] rounded-[50px] shadow transition-all"
        >
            <h1 className="text-5xl pb-4 font-bold">Div<span>{index}</span></h1>
            <div>flex:</div>
            <div>
                <input 
                    className="w-[200px] text-center py-1 px-2 rounded-xl outline-none"
                    value={flex} 
                    onInput={(e) => setFlex(e.target.value)}
                />
            </div>
            <div>align-self:</div>
            <select
                onInput={(e) => setAlignSelf(e.target.value)}
                className="border border-[--card-background] w-[200px] text-center py-1 px-2 rounded-xl outline-none"
                value={alignSelf}
            >
                <option>stretch</option>
                <option>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                <option>baseline</option>
            </select>
        </div>
    )
}

export default PreviewDivComponent