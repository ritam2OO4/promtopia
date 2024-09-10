import "@/styles/globals.css"
import Nav from "@/components/nav"
import Provider from "@/components/provider"
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
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Rootlayout
