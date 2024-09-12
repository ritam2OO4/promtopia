import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    try {
        const { userId, prompt, tag } = await request.json();

        await connectToDB();

        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error('Error occurred while saving the prompt:', error);
        return new Response("Failed to create a new prompt", { status: 500 });
    }
};
