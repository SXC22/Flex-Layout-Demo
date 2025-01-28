
const StyleComponent = ({ styles }) => {
    return (
        <div className="h-[300px] border border-[--card-background] p-10 rounded font-[lucida_console]">
            { Object.keys(styles).map((style, index) => <div key={index}>
                {style}: {styles[style]};
            </div>) }
        </div>
    )
}

export default StyleComponent