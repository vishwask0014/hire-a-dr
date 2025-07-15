import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client)


// create interpreation
async function createInterpretation(data: { term: string, interpretetion: string }) {
    try {
        const response = await database.createDocument('68736386001902fa268a', "interpetation", ID.unique(), data)
        return response

    } catch (error) {
        console.error("Error creating interperation", error)
        throw new Error("Failed to create interpretaion")
    }
}


// fetch interpretation
async function fetchInterpretation() {
    try {
        const response = await database.listDocuments('68736386001902fa268a', "interpetation", [Query.orderDesc("$createdAt")])
        return response.documents;

    } catch (error) {
        console.error("Error fetching interperation", error)
        throw new Error("Failed to fetch interpretaion")
    }
}


// POST METHOD
async function POST(req: Request) {
    try {
        const { term, interpatation } = await req.json()
        const data = { term, interpatation }

        const response = await createInterpretation(data);
        return NextResponse.json({ message: "interperation created" })

    }
    catch (error) {
        console.error("post method is not working", error)
        return NextResponse.json({ message: "post method not working" })
    }
}


// GET METHOD
async function GET() {
    try {
        const interpatation = await fetchInterpretation();
        return NextResponse.json({ message: 'Get method not working' })
    }
    catch (error) {
        return NextResponse.json(


            { error: "failed to fetch interperation" }, { status: 500 })
    }
}