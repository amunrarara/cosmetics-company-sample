import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
    children: React.ReactNode
}

export default function MainLayout({children}: Props) {
  return (
    <div>
        <Head>
            <title>Cosmetics Company Template</title>
            <meta name="description" content="Built by Acea Spades - https://github.com/amunrarara/cosmetics-company-sample.git" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {children}
        </main>
        <footer className='footer'>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className='logo'>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    </div>
  )
}
