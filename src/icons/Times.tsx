import { ComponentProps } from "react";

const Times = ({
    color = "#1B2141",
    ...props
}: ComponentProps<"svg">): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10.596"
        height="10.503"
        viewBox="0 0 10.596 10.503"
        {...props}
    >
        <g transform="translate(1.298 0.658)">
            <path
                d="M.5.047,7.884,7.431"
                transform="translate(0 1)"
                fill="none"
                stroke={color}
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
            <path
                d="M.116,8.431,7.791.756"
                fill="none"
                stroke={color}
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
        </g>
    </svg>
);

export default Times;
