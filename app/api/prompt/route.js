import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        console.log("Error, Data not fetched", error)
        return ("Error, Data not fetched", error, { status: 500 })
    }
}
