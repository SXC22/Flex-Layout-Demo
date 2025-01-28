
const StyleComponent = ({ styles }) => {
    return (
        <div className="h-[300px] border p-10">
            { Object.keys(styles).map((style, index) => <div key={index}>
                {style}: {styles[style]};
            </div>) }
        </div>
    )
}

export default StyleComponent