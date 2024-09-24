import { Card , CardFooter , Image , Button , Skeleton } from "@nextui-org/react";
import { useState } from "react";

function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function ProductCard({Price , Img , Tag , BUTT = {} , shadow}:any) {
    const [Load , SetLoad] = useState(false)
    async function example() {
        await delay(2000);
        SetLoad(true)
    }
    example()
    return(
        <>
            <Card
                shadow={shadow}
                isFooterBlurred
                radius="md"
                className="border-none relative S-temp">
                    <Skeleton isLoaded={Load}>
                        <h1 className="absolute z-20 font-bold text-center w-full mt-2 " style={{color: '#25252595'}}>{Tag}</h1>
                    <Image
                        alt="Woman listing to music"
                        className="object-cover "
                        height={200}
                        src={Img}
                        width={200}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_16px)] shadow-small ml-1 z-10 m-2">
                        <p className="text-bold text-black/80">
                            {Price} $
                        </p>
                        <Button className="text-tiny text-black bg-black/20 shadow-md" variant="flat" color="default" radius="lg" size="sm" onPress={() => BUTT()}>
                        More
                        </Button>
                    </CardFooter>
                    </Skeleton>
            </Card>
        </>
    )
}