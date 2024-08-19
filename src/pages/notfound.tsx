import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function NotFound() {
  return (
    <DefaultLayout>
      <div className="cont">
        <p className={title()} style={{fontSize:'150px'}}>404</p>
        <p style={{fontSize:'20px' , fontWeight:'800'}}>Not Found</p>
      </div>
    </DefaultLayout>
    )
}