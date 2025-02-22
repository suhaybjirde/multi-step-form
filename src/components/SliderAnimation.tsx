import { ReactNode } from "react"

const SliderAnimation = ({
    children, 
    prevIndex, 
    currentIndex,
}: 
{
    children: ReactNode
    prevIndex: number,
    currentIndex:number
}) => {
    const Goback = currentIndex < prevIndex
    const goNext = currentIndex > prevIndex
    const animate = Goback ? 'md:animate-leftToRightFade' : goNext ? 'md:animate-rightToLeftFade' : ''
    return (
        <div className={animate}>{children}</div>
    )
}

export default SliderAnimation