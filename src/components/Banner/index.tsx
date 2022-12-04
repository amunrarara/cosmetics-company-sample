import React, { useEffect, useState } from 'react'
import BannerText from './BannerText';

const startArray = [
    BannerText({color: 'white'}),
    BannerText({color: 'black'}),
    BannerText({color: 'white'}),
    BannerText({color: 'black'}),
    BannerText({color: 'white'}),
    BannerText({color: 'black'}),
    BannerText({color: 'white'}),
    BannerText({color: 'black'})
]

export default function Banner () {
    const [seconds, setSeconds] = useState(0);
    const [words, setWords] = useState(startArray)

    useEffect(() => {
    let interval: NodeJS.Timer | null = null;
        interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        setWords([...words.slice(2), BannerText({color: 'white'}), BannerText({color: 'black'})])
        }, 10000);
    return () => clearInterval(interval!);
    }, [seconds]);

    return (
    <span>
        <div className='flex justify-center overflow-clip'>
            {words.map((word, index) => {
                return (
                    <span key={index}>
                        {word}
                    </span>
                )
            })}
        </div>
    </span>
    )
}
