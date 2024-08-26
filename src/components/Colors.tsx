import { ReactNode } from "react";

export default function Colors({count}) {
    const Colors = ['white' , 'black' , '#77130e', '#f5a524'];
    const Labels = []

    for (let index = 0; index < count; index++) {
        Labels.push(
            <label>
                <input type="radio" name="color" id="S-radio" hidden/>
                <div className="S-Color-slot" style={{
                    background: `${Colors[index]}`
                }}></div>
            </label>
        )
        
    }
    return(  
        <div className="flex gap-2 ">
            {Labels}
        </div>
    )
}