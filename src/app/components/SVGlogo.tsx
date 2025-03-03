import React from "react";

const SVGLogo = ({ width = 80, height = 80, fill = "none", ...props }) => {
    return (
        <svg
            version="1.1"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 80.3 80.3"
            xmlSpace="preserve"
            width={width}
            height={height}
            fill={fill}
            {...props}
        >
            <style>
                {`
                .st13 { fill: #332319; }
                .st17 { fill: #628185; }
                `}
            </style>
            <circle cx="40.2" cy="40.2" r="40.2" fill="#0c2c48" />
            <path fill="#fff" d="M15.9 19.4h48.5v41.5H15.9z" />
            <path fill="#edab7e" d="m60.3 30.1-2.2-6.9-2.2 6.9z" />
            <path className="st13" d="m59 25.9-.9-2.7-.8 2.7z" />
            <path fill="#e07e45" d="M59.6 29.4c-.4 0-.6.4-.7.8h-.1c0-.5-.3-.8-.7-.8-.4 0-.6.4-.7.8h-.1c0-.5-.3-.8-.7-.8-.4 0-.6.4-.7.8v25.3c0 .4.3.8.6.8h3.2c.3 0 .6-.3.6-.8V30.2c-.1-.5-.4-.8-.7-.8z" />
            <path fill="#ff8f8f" d="M59.7 56.2c.3 0 .6-.3.6-.8v-2.5H56v2.5c0 .4.3.8.6.8" />
            <path fill="#a6d1d9" d="M55.8 47.6h4.6v5.9h-4.6z" />
            <path className="st17" d="M55.8 52h4.6v.4h-4.6zM55.8 50.4h4.6v.4h-4.6zM55.8 48.8h4.6v.4h-4.6z" />
            <g>
                <path
                    className="st13"
                    d="M34.7 47.2c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9zm0-14.8c-3.8 0-6.9 3.1-6.9 6.9 0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9z"
                />
            </g>
            <g>
                <path className="st13" d="M49.9 55.1H35.5V40.7h14.4v14.4zm-13-1.4h11.6V42.1H36.9v11.6z" />
            </g>
            <g>
                <path className="st13" d="M45.6 50.1H21.1V25.6h24.5v24.5zm-22.5-2h20.5V27.6H23.1v20.5z" />
            </g>
        </svg>
    );
};

export default SVGLogo;
