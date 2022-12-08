import {LoaderFunction, redirect} from "@remix-run/router";
import {getAuth} from "@clerk/remix/ssr.server";
import MainLayout from "~/components/MainLayout";
import { json } from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getList} from "~/models/list.server";

type LoaderData = {
    list: Awaited<ReturnType<typeof getList>>;
}

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request);
    if(!userId){
        return redirect("http://localhost:3000");
    }
    return json<LoaderData>({
        list: await getList(userId)
    });
}

export default function ShoppingList() {
    return (
        <MainLayout>
            <h2>Shopping List</h2>
            <Items />
        </MainLayout>
    );
}

function Items() {
    const { list } = useLoaderData() as LoaderData;
    return (
        <ul>
            { list.map((item, index) => <li key={index}>{item}</li>) }
        </ul>
    );
}