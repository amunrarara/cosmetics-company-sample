import styles from '@/styles/Banner.module.css'

type BannerTextProps = {
    color: 'white' | 'black'
  }

const BannerText = ({ color }: BannerTextProps) => {
    if (color === 'white') return (
        <h1 className={`${styles.scrollText} tracking-[1rem] text-5xl bg-gradient-to-r from-white to-white/20 text-transparent bg-clip-text`}>SEARCH</h1>
    )
    else return (
        <h1 className={`${styles.scrollText} tracking-[1rem] text-5xl bg-gradient-to-r from-black to-black/20 text-transparent bg-clip-text`}>SEARCH</h1>
    )
}

export default BannerText;
