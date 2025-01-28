'use client';

import { useEffect } from "react";

const SettingComponent = ({ fieldValue, options, callBack }) => {
    useEffect(() => {
        callBack(fieldValue, options[0]);
    }, []);

    return (
        <div className="flex">
            <div>{ fieldValue }</div>
            <div>
                <select 
                    className="border border-[--card-background]"
                    onInput={(e) => callBack(fieldValue, e.target.value)}
                >
                    { options.map((option, index) => <option 
                        key={index} 
                        value={option}
                    >{option}</option>)}
                </select>
            </div>
        </div>
    )
}

export default SettingComponent