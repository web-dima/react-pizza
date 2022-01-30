import React from "react"
import ContentLoader from "react-content-loader"

function Loader(){
    return (
            <ContentLoader
                className="pizza-block"
                speed={2} width={270}
                height={457}
                viewBox="0 0 288 457"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="144" cy="144" r="122"/>
                <rect x="14" y="300" rx="0" ry="0" width="267" height="30"/>
                <rect x="15" y="343" rx="0" ry="0" width="267" height="65"/>
                <rect x="15" y="419" rx="0" ry="0" width="106" height="29"/>
                <rect x="200" y="417" rx="0" ry="0" width="81" height="33"/>
            </ContentLoader>
    )
}

export default Loader