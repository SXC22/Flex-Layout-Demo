'use client';

import { useEffect, useState } from "react";
import SettingComponent from "./settingComponent";

const PreviewDivComponent = ({ index, defaultAlign }) => {
    const [initialChange, setInitialChange] = useState(false);
    const [flex, setFlex] = useState('none');
    const [alignSelf, setAlignSelf] = useState('stretch');

    useEffect(() => {
        if (!initialChange)
            setAlignSelf(defaultAlign);
    }, [defaultAlign]);

    return (
        <div 
            style={{ flex: flex, alignSelf: initialChange ? alignSelf : '' }} 
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
                onInput={(e) => {
                    if (initialChange) setAlignSelf(e.target.value);
                    else {
                        setAlignSelf(e.target.value);
                        setInitialChange(true);
                    }
                }}
                className="border border-[--card-background] w-[200px] text-center py-1 px-2 rounded-xl outline-none"
                value={alignSelf}
            >
                <option>stretch</option>
                <option>flex-start</option>
                <option>flex-end</option>
                <option>center</option>
                {/* <option>baseline</option> */}
            </select>
        </div>
    )
}

export default PreviewDivComponent