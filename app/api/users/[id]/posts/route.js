import { connectToDB } from "@/utils/database"
import Prompt from "@/models/prompt"

export const GET = async(req, {params}) => {
    try {
        await connectToDB();
        const prompt = await Prompt.find({creator: params.id}).populate('creator')
        return new Response(JSON.stringify(prompt), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch posts", {status: 500})
    }
}