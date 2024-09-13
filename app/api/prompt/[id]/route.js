import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findOne(params.id).populate('creator');
        if (!prompt) return new Response("Prompt not found", { status: 404 })
        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        console.log("Error, Data not fetched", error)
        return ("Error, Data not fetched", error, { status: 500 })
    }
}

// patch (update)

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = params.json();
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id).populate('creator');
        if (!existingPrompt) {
            return new Response("Can't able to find prompt", { status: 404 })
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 })

    } catch (error) {
        return new Response("failed to update Prompt", { status: 500 })
    }
}

// Delete (delete)

export const DELETE = async (request,{params})=>{
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt deleted sucessfully", { status: 500 })
    } catch (error) {
        return new Response("failed to delete Prompt", { status: 500 })
        
    }
}