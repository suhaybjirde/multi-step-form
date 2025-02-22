import { useEffect, useRef } from "react";

const usePrev = (index: number)=> {
    const prev = useRef(index)

    useEffect(()=> {
        prev.current = index
    }, [index])
    return prev.current
}

export default usePrev