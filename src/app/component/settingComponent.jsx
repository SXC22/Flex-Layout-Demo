const SettingComponent = ({ fieldValue, options, callBack }) => {

    return (
        <div className="flex">
            <div>{ fieldValue }</div>
            <div>
                <select onInput={(e) => callBack(fieldValue, e.target.value)}>
                    { options.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
            </div>
        </div>
    )
}

export default SettingComponent