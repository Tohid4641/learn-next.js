import { Metadata } from "next";
import ButtonComponent from "./button";

export const metadata: Metadata = {
    title: "Contact Us | Name of Website",
    description: "A lot of keywords",
    keywords: "contact, company, mission, ai, saas",
    twitter:{
        card: "summary_large_image",
        title: "Contact Us | Twitter"
    }
}

export default async function Contact(){
    console.log("Hey is there is a server or client?")

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // console.log(posts)
    return <div>
        {" "}
        <ButtonComponent/>
    </div>
}