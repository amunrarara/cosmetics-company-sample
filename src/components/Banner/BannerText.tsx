import styles from '@/styles/Banner.module.css'

type BannerTextProps = {
    color: 'white' | 'black',
    text: string
  }

const BannerText = ({ color, text }: BannerTextProps) => {
    if (color === 'white') return (
        <h1 className={`${styles.scrollText} bg-gradient-to-r from-white to-white/20 text-transparent bg-clip-text`}>
            {text}
        </h1>
    )
    else return (
        <h1 className={`${styles.scrollText} bg-gradient-to-r from-black to-black/20 text-transparent bg-clip-text`}>
            {text}
        </h1>
    )
}

export default BannerText;
