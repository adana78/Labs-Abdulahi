import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const message = {
            message: "This is my first API end point",
            from: "Abdulahi"
        }

        return NextResponse.json(message, { status: 200 })

    } catch (e) {
        return NextResponse.json(e, { status: 500 })
    }
}