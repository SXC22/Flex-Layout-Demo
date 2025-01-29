
const StyleComponent = ({ styles }) => {
    const caseConversion = (title) => {
        var out = "";
        for (var chr of title) {
            if (chr === chr.toUpperCase()) out += '-'+chr.toLowerCase();
            else out += chr;
        }
        return out;
    }

    return (
        <div className="h-[300px] border border-[--card-background] p-10 rounded font-[lucida_console]">{".container {"}<br></br>
            { Object.keys(styles).map((style, index) => <div key={index}>
                &emsp;{caseConversion(style)}: {styles[style]};
            </div>) }
            {"}"}
        </div>
    )
}

export default StyleComponent