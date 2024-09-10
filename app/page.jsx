import Feed from "@/components/feed"


function home() {
    return (
        <section className='text-zinc-400 w-full flex-center flex-col'>
            <h1 className='head_text text-center'>Reveal & Pass
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>AI-Powered Prompts</span>
            </h1>
            <p className='desc text-center'>Promtopia is an open-source AI promting tool for modern world to discover, create and disseminate creative promts.</p>
            <Feed/>
        </section>
    )
}

export default home
