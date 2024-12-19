import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    // const [data, setData] = React.useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/arupsaha07')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    useLoaderData()
    const data = useLoaderData()

    return (
        <figure className="inline-flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-700 w-auto">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={data.avatar_url} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium text-white">{data.bio}</p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {data.name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {data.location}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/arupsaha07')
    return response.json()
}