import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react"
import { useQuery } from "react-query";

export default function Home() {
    const boxRef = useRef(null);
    useEffect(()=>{
        console.log(boxRef)
        gsap.to(boxRef.current, {
            rotation: "-=12"
          });
    }, [])

    const test = async () => {
        fetch('/api/test').then(d=>d.text().then(d=>{
            console.log(d)
        }))
    }

    const {data, error, isError, isSuccess, refetch} = useQuery('sample', ()=>fetch('/api/test'), {
        onSuccess(data){
            console.log(data)
        },
        onError(err){
            console.log(err)
        },
        enabled: false
    })

    const handleBtn = () => {
        refetch();
    }
   
  return (
    <main>
      <div>Hello Wor22ld</div>
      <div className="" ref={boxRef} onClick={()=>test()}>Hello</div>
      <div className="" ref={boxRef} onClick={()=>handleBtn()}>Hello2</div>
    </main>
  )
}
