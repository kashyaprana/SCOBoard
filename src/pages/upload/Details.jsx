import React from 'react'

const Details = ({ data }) => {
    return (
        <ul>
            <li>
                <p>File Name: {data?.file?.name}</p>
            </li>
            <li>
                <p>Url: <a href={data.url} target="_blank" rel="noreferrer">{data?.url}</a></p>
            </li>
            <li>
                <p>Url: <a href={data.url} target="_blank" rel="noreferrer">{data.url}</a></p>
            </li>
        </ul>
    )
}

export default Details