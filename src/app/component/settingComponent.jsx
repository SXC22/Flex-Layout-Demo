'use client';

import { useEffect } from "react";

const SettingComponent = ({ fieldValue, options, callBack, value='', type='select' }) => {
    useEffect(() => {
        if (type==='select')
            callBack(fieldValue, options[0]);
        
    }, []);

    return (
        <div className="flex justify-between">
            <div className="flex-1">{ fieldValue }</div>
            <div className="flex-1">
                {
                    type==='select' ?
                        <select 
                            className="border border-[--card-background] w-full p-1"
                            onInput={(e) => callBack(fieldValue, e.target.value)}
                        >
                            { options.map((option, index) => <option 
                                key={index} 
                                value={option}
                            >{option}</option>)}
                        </select>

                    : type==='number' ? 
                        <input 
                            className="border border-[--card-background] w-full p-1 text-right"
                            defaultValue={value} 
                            type="number" 
                            onInput={ (e) => callBack(fieldValue, e.target.value) }
                        />

                    : <></>
                }
            </div>
        </div>
    )
}

export default SettingComponent