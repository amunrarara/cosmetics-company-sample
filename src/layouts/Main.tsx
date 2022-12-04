import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'

type Props = {
    children: React.ReactNode
}

export default function MainLayout({children}: Props) {
    return (
        <div>
            <Head>
                <title>Cosmetics Company Template</title>
                <meta name="description" content="Built by Acea Spades - https://github.com/amunrarara/cosmetics-company-sample.git" />
                <link rel="icon" href="/lipstick.svg" />
            </Head>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
