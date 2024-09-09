import "@/styles/globals.css"

export const metadata = {
title:"Promtopia",
description:"Reveal & Pass on AI Promts"
}

const Rootlayout = ({children}) => {
    return (
        <html lang='en' >
            <body>
                <div className='main'>
                    <div className='gradient'></div>
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Rootlayout
