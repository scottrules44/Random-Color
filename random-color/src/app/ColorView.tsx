import { useEffect, useState } from "react"

export function ColorView() {
    const [color, setColor] = useState({ name: 'Loading...', hex: '#000000' });
    useEffect(() => {
        fetch('/color.json')
        .then((res) => res.json())
        .then((data) => setColor(data))
    }, []);
    return(
        <div className="text-center  h-full w-full">
            <h2 className="text-2xl font-bold mb-4">Color of the Week</h2>
            <div
            style={{ backgroundColor: color.hex }}
            className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600">{color.name} - {color.hex}</p>
        </div>
    )
}
