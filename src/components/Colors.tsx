export default function Colors({count}:any) {
    const Colors = ['white' , 'black' , '#77130e', '#f5a524'];
    const Labels = []

    for (let index = 0; index < count; index++) {
        Labels.push(
            <label>
                <input type="radio" name="color" id="S-radio" hidden/>
                <div className="S-Color-slot flex item-center justify-center" style={{
                    background: `${Colors[index]}`
                }}></div>
            </label>
        )
        
    }
    return(  
        <div className="flex gap-2 items-center">
            {Labels}
        </div>
    )
}