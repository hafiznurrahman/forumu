import { useState } from "react"

export default function Toggle() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="w-11 h-auto fixed bottom-20 right-4 bg-gray-900 rounded-full " onClick={handleToggle}>
            <div className="w-5 h-5 bg-white rounded-full transition-all duration-300 m-0.5" style={{ transform: toggle && "translateX(100%)" }}></div>
        </div>
    )
}