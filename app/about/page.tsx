// "use client"; // can't export metadata for client component

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | Name of Website",
    description: "A lot of keywords",
    keywords: "about, company, mission, ai, saas",
    twitter:{
        card: "summary_large_image",
        title: "About Us | Twitter"
    }
}

export default function About(){
    console.log("Hey is there is a server or client?")
    return <h1>About Page</h1>
}