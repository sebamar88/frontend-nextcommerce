import { FC } from "react";

type CertificateLogoProps = {
    prefix: string;
};

const CertificateLogoSmall: FC<CertificateLogoProps> = ({ prefix }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="46"
        fill="none"
        viewBox="0 0 56 46"
    >
        <g filter={`url(#${prefix}_filter0_d)`}>
            <path
                fill={`url(#${prefix}_paint0_linear)`}
                d="M53.396 23.985l-2.87 4.683 2.87 4.682H2l3.154-4.683L2 23.986h51.396z"
            />
        </g>
        <g filter={`url(#${prefix}_filter1_d)`}>
            <path
                fill="#002355"
                d="M43.885 33.35l4.485-1.827H7.025l4.68 1.827h32.18z"
            />
        </g>
        <g filter={`url(#${prefix}_filter2_d)`}>
            <path
                fill={`url(#${prefix}_paint1_linear)`}
                d="M27.071 4.327c.335-.84 1.523-.84 1.858 0l.037.092a1 1 0 001.761.183l.048-.072c.5-.752 1.66-.51 1.818.38l.021.123a1 1 0 001.686.54l.06-.06c.644-.631 1.728-.157 1.7.743l-.004.158a1 1 0 001.535.874l.084-.054c.759-.48 1.717.204 1.509 1.077l-.045.186a1 1 0 001.318 1.171l.118-.043c.839-.309 1.63.555 1.25 1.364l-.094.2a1 1 0 001.043 1.416l.155-.021c.883-.124 1.473.882.936 1.593l-.145.192a1 1 0 00.722 1.6l.19.014c.886.068 1.25 1.17.58 1.752l-.187.163a1 1 0 00.369 1.713l.21.063c.85.254.974 1.406.197 1.834l-.21.116a1 1 0 000 1.752l.21.116c.776.428.653 1.58-.197 1.834l-.21.063a1 1 0 00-.37 1.713l.188.163c.67.582.306 1.684-.58 1.752l-.19.014a1 1 0 00-.722 1.6l.145.192c.537.711-.053 1.717-.936 1.593l-.155-.021a1 1 0 00-1.043 1.416l.094.2c.38.81-.411 1.673-1.25 1.364l-.118-.043a1 1 0 00-1.318 1.17l.045.187c.208.873-.75 1.557-1.508 1.077l-.085-.054a1 1 0 00-1.535.874l.005.158c.027.9-1.057 1.374-1.7.743l-.061-.06a1 1 0 00-1.686.54l-.021.123c-.157.89-1.319 1.132-1.818.38l-.048-.072a1 1 0 00-1.761.183l-.037.092c-.335.84-1.523.84-1.858 0l-.037-.092a1 1 0 00-1.761-.183l-.048.072c-.5.752-1.66.51-1.818-.38l-.021-.123a1 1 0 00-1.685-.54l-.062.06c-.643.631-1.727.157-1.7-.743l.005-.158a1 1 0 00-1.535-.874l-.084.053c-.759.481-1.717-.203-1.509-1.076l.045-.186a1 1 0 00-1.318-1.171l-.118.043c-.839.309-1.63-.555-1.25-1.364l.094-.2a1 1 0 00-1.043-1.416l-.155.021c-.883.124-1.473-.882-.936-1.593l.145-.192a1 1 0 00-.722-1.6l-.19-.014c-.886-.068-1.25-1.17-.58-1.752l.187-.163a1 1 0 00-.369-1.713l-.21-.063c-.85-.254-.973-1.406-.197-1.834l.21-.116a1 1 0 000-1.752l-.21-.116c-.776-.428-.653-1.58.197-1.834l.21-.063a1 1 0 00.37-1.713l-.188-.163c-.67-.582-.306-1.684.58-1.752l.19-.014a1 1 0 00.722-1.6l-.145-.192c-.537-.711.053-1.717.936-1.593l.155.021a1 1 0 001.043-1.416l-.094-.2c-.38-.81.411-1.673 1.25-1.364l.118.043a1 1 0 001.318-1.17l-.045-.187c-.208-.873.75-1.557 1.509-1.077l.084.054a1 1 0 001.535-.874l-.005-.158c-.027-.9 1.057-1.374 1.7-.743l.062.06a1 1 0 001.685-.54l.021-.123c.157-.89 1.319-1.132 1.818-.38l.048.072a1 1 0 001.761-.183l.037-.092z"
            />
            <path
                stroke={`url(#${prefix}_paint2_linear)`}
                strokeWidth="0.3"
                d="M21.806 39.534l-.105-.107.105.107a.85.85 0 011.432.46l.022.122c.18 1.023 1.516 1.301 2.09.437l.048-.072a.85.85 0 011.497.155l.037.093c.385.965 1.75.965 2.136 0l.037-.093a.85.85 0 011.497-.155l.048.072c.574.864 1.91.586 2.09-.437l.022-.123a.85.85 0 011.432-.459l.105-.107-.105.107.062.06c.74.726 1.986.18 1.955-.855l-.005-.157a.85.85 0 011.305-.743l.084.053c.872.553 1.974-.234 1.735-1.238l-.045-.186a.85.85 0 011.12-.995l.118.043c.965.355 1.875-.638 1.438-1.569l-.095-.2a.85.85 0 01.887-1.204l.155.022c1.015.142 1.694-1.014 1.077-1.832l-.145-.192a.85.85 0 01.613-1.36l.19-.015c1.02-.077 1.438-1.345.667-2.015l-.187-.162a.85.85 0 01.314-1.456l.21-.063c.978-.292 1.12-1.617.226-2.11l-.21-.116a.85.85 0 010-1.488l.21-.116c.893-.492.752-1.818-.226-2.11l-.21-.063a.85.85 0 01-.314-1.456l.187-.162c.771-.67.352-1.938-.666-2.015l-.19-.015a.85.85 0 01-.614-1.36l.145-.192c.617-.817-.062-1.974-1.077-1.832l-.155.022a.85.85 0 01-.887-1.204l.095-.2c.437-.93-.473-1.924-1.438-1.569l-.117.043a.85.85 0 01-1.12-.995l.044-.186c.24-1.004-.863-1.791-1.735-1.238l-.084.053a.85.85 0 01-1.305-.743l.005-.157c.03-1.036-1.216-1.58-1.955-.855l-.062.06a.85.85 0 01-1.432-.46l-.022-.122c-.18-1.022-1.516-1.301-2.09-.437l-.048.072a.85.85 0 01-1.497-.155l-.037-.093c-.385-.965-1.75-.965-2.136 0l-.037.093a.85.85 0 01-1.497.155l-.048-.072c-.574-.864-1.91-.585-2.09.437l-.022.123.148.026-.148-.026a.85.85 0 01-1.432.459l-.105.107.105-.107-.062-.06c-.74-.726-1.985-.18-1.955.855l.005.157a.85.85 0 01-1.305.743l-.084-.053c-.872-.553-1.974.234-1.735 1.238l.045.186a.85.85 0 01-1.12.995l-.118-.043c-.965-.355-1.875.638-1.438 1.569l.095.2a.85.85 0 01-.887 1.204l-.155-.022c-1.015-.142-1.694 1.014-1.077 1.832l.145.192a.85.85 0 01-.614 1.36l-.19.014c-1.018.078-1.437 1.346-.666 2.016l.187.162a.85.85 0 01-.314 1.456l-.21.063.043.144-.043-.144c-.978.292-1.12 1.617-.226 2.11l.21.116a.85.85 0 010 1.488l-.21.116c-.893.492-.752 1.818.226 2.11l.043-.144-.043.144.21.063a.85.85 0 01.314 1.456l-.187.162c-.771.67-.352 1.938.667 2.015l.19.015a.85.85 0 01.613 1.36l-.145.192c-.617.817.062 1.974 1.077 1.832l.155-.022a.85.85 0 01.887 1.204l-.095.2c-.437.93.473 1.924 1.438 1.569l.117-.043a.85.85 0 011.12.995l-.044.186c-.24 1.004.863 1.791 1.735 1.238l.084-.053a.85.85 0 011.305.743l-.005.157c-.03 1.036 1.216 1.58 1.955.855l.062-.06z"
            />
        </g>
        <path
            fill={`url(#${prefix}_paint3_linear)`}
            d="M39.151 33.477c6.105-6.365 5.93-16.438-.389-22.5-6.32-6.063-16.392-5.818-22.497.547-6.104 6.364-5.93 16.437.39 22.5 6.32 6.062 16.392 5.817 22.496-.547z"
        />
        <path
            fill={`url(#${prefix}_paint4_linear)`}
            d="M42.653 22.656c0-8.342-6.669-15.104-14.894-15.104-8.226 0-14.895 6.762-14.895 15.104 0 8.342 6.669 15.104 14.895 15.104 8.225 0 14.894-6.762 14.894-15.104z"
        />
        <g filter={`url(#${prefix}_filter3_i)`}>
            <path
                fill={`url(#${prefix}_paint5_radial)`}
                d="M27.759 36.082c7.53 0 13.635-6.105 13.635-13.636 0-7.53-6.105-13.635-13.635-13.635-7.531 0-13.636 6.105-13.636 13.635 0 7.531 6.105 13.636 13.636 13.636z"
            />
        </g>
        <g filter={`url(#${prefix}_filter4_d)`}>
            <path
                fill={`url(#${prefix}_paint6_linear)`}
                d="M48.37 22.157v9.366H7.025v-9.366H48.37z"
            />
        </g>
        <path
            fill="#fff"
            d="M14.282 29c.991 0 1.54-.564 1.852-1.142l-.795-.41a1.172 1.172 0 01-1.057.675c-.756 0-1.33-.648-1.33-1.526 0-.877.574-1.525 1.33-1.525.483 0 .874.3 1.057.676l.795-.418c-.306-.578-.86-1.135-1.852-1.135-1.271 0-2.282.975-2.282 2.402C12 28.026 13.01 29 14.282 29zM16.464 27.231c0 1.08.723 1.769 1.682 1.769.489 0 .985-.16 1.297-.467l-.365-.57c-.202.208-.547.334-.84.334-.535 0-.855-.355-.907-.78h2.34v-.195c0-1.1-.638-1.853-1.577-1.853-.959 0-1.63.787-1.63 1.762zm1.63-1.058c.547 0 .756.425.776.745h-1.552c.039-.334.26-.745.776-.745zM20.27 28.916h.828v-2.221c.137-.216.502-.383.776-.383.091 0 .17.014.228.028v-.864c-.391 0-.782.237-1.004.537v-.46h-.828v3.363zM23.676 29c.346 0 .567-.098.691-.216l-.176-.668c-.046.048-.163.097-.287.097-.182 0-.287-.16-.287-.369v-1.518h.64v-.773h-.64v-.92h-.834v.92h-.522v.773h.522v1.755c0 .599.313.919.893.919zM25.234 25.058c.274 0 .495-.236.495-.529 0-.292-.221-.529-.495-.529-.268 0-.496.237-.496.53 0 .292.228.528.496.528zm-.411 3.858h.828v-3.363h-.828v3.363zM29.015 25.058c.274 0 .496-.236.496-.529 0-.292-.222-.529-.496-.529-.267 0-.495.237-.495.53 0 .292.228.528.495.528zm-2.36 3.858h.834v-2.59h.64v-.773h-.64v-.181c0-.306.157-.474.392-.474.11 0 .202.035.267.084l.17-.64a1.269 1.269 0 00-.6-.14c-.62 0-1.063.439-1.063 1.17v.18h-.522v.774h.522v2.59zm1.95 0h.828v-3.363h-.828v3.363zM30.053 27.231c0 1.038.697 1.769 1.669 1.769.645 0 1.037-.3 1.245-.613l-.54-.536a.78.78 0 01-.666.362c-.502 0-.854-.397-.854-.982s.352-.975.854-.975a.75.75 0 01.665.362l.541-.543c-.208-.306-.6-.606-1.245-.606-.972 0-1.67.732-1.67 1.762zM35.4 28.916h.828v-2.172c0-.968-.659-1.275-1.376-1.275-.495 0-.991.168-1.376.53l.313.591c.267-.264.58-.396.92-.396.417 0 .69.222.69.564v.466c-.208-.271-.58-.41-.997-.41-.502 0-1.095.285-1.095 1.072 0 .752.593 1.114 1.095 1.114.41 0 .783-.16.998-.432v.348zm0-.807c-.137.195-.398.292-.665.292-.326 0-.594-.18-.594-.494 0-.328.268-.509.594-.509.267 0 .528.098.665.293v.418zM39.214 28.916h.835v-4.644h-.835v1.713a1.188 1.188 0 00-.971-.516c-.802 0-1.396.669-1.396 1.77 0 1.12.6 1.761 1.396 1.761.378 0 .723-.181.971-.515v.431zm0-1.086c-.137.223-.437.383-.717.383-.47 0-.796-.397-.796-.975 0-.585.326-.982.796-.982.28 0 .58.16.717.383v1.191zM42.33 29c1.044 0 1.67-.808 1.67-1.769 0-.954-.626-1.762-1.67-1.762-1.036 0-1.662.808-1.662 1.762 0 .961.626 1.769 1.663 1.769zm0-.787c-.514 0-.801-.453-.801-.982 0-.522.287-.975.802-.975.515 0 .808.453.808.975 0 .53-.293.982-.808.982z"
        />
        <path
            fill={`url(#${prefix}_paint7_linear)`}
            d="M19.944 15.363v1.777h.18l1.272-1.777h1.437l-1.77 2.31 1.732 2.32h-1.437l-1.17-1.702h-.244v1.702h-1.151v-4.63h1.151z"
        />
        <path
            fill={`url(#${prefix}_paint8_linear)`}
            d="M22.314 17.695c-.003-.312.05-.623.156-.916.098-.271.243-.522.429-.741a2.04 2.04 0 01.64-.5c.253-.119.53-.177.81-.17.258-.008.514.05.746.166.232.118.439.282.608.481v-.642h1.151V20h-1.15v-.642c-.168.204-.375.37-.609.486-.232.11-.486.162-.741.151a1.83 1.83 0 01-.815-.16c-.244-.121-.461-.29-.64-.496a2.337 2.337 0 01-.429-.736 2.596 2.596 0 01-.156-.908zm1.151 0c-.001.153.026.303.082.445a1.143 1.143 0 00.585.608 1.102 1.102 0 00.87 0 1.14 1.14 0 00.682-1.053 1.162 1.162 0 00-.184-.636 1.1 1.1 0 00-1.37-.426c-.13.059-.248.142-.35.245-.101.105-.181.23-.234.368a1.225 1.225 0 00-.081.45z"
        />
        <path
            fill={`url(#${prefix}_paint9_linear)`}
            d="M28.62 15.373v.651c.131-.19.298-.353.492-.477.21-.127.451-.19.695-.18l.388 1.177c-.271 0-.541.027-.807.08a1.286 1.286 0 00-.65.553.849.849 0 00-.119.396V20h-1.142v-4.627h1.143z"
        />
        <path
            fill={`url(#${prefix}_paint10_linear)`}
            d="M31.476 15.363l.958 2.988.995-2.988h1.225l-1.63 4.627h-1.235l-1.548-4.627h1.235z"
        />
        <path
            fill={`url(#${prefix}_paint11_linear)`}
            d="M34.872 14.21a.696.696 0 01.958-.658.69.69 0 01.424.659.682.682 0 01-.424.64.681.681 0 01-.754-.153.663.663 0 01-.204-.487zm1.253 1.165V20h-1.142v-4.625h1.142z"
        />
        <defs>
            <filter
                id={`${prefix}_filter0_d`}
                width="55.396"
                height="13.366"
                x="0"
                y="22.985"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
            <filter
                id={`${prefix}_filter1_d`}
                width="45.345"
                height="5.827"
                x="5.025"
                y="30.523"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
            <filter
                id={`${prefix}_filter2_d`}
                width="41.237"
                height="42.205"
                x="7.382"
                y="3.397"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
            <filter
                id={`${prefix}_filter3_i`}
                width="27.271"
                height="28.271"
                x="14.123"
                y="8.811"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="shape" result="effect1_innerShadow" />
            </filter>
            <filter
                id={`${prefix}_filter4_d`}
                width="45.345"
                height="13.366"
                x="5.025"
                y="21.157"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
            <linearGradient
                id={`${prefix}_paint0_linear`}
                x1="55.538"
                x2="6.007"
                y1="28.668"
                y2="28.668"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#3486FA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint1_linear`}
                x1="8"
                x2="43.372"
                y1="20.473"
                y2="33.306"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#EDB439" />
                <stop offset="0.219" stopColor="#FFE7B4" />
                <stop offset="0.51" stopColor="#E5BE59" />
                <stop offset="0.589" stopColor="#B57527" />
                <stop offset="0.703" stopColor="#D09B2F" />
                <stop offset="0.875" stopColor="#F1CA6E" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint2_linear`}
                x1="28"
                x2="28"
                y1="2"
                y2="43"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#F2C158" />
                <stop offset="1" stopColor="#BB7D29" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint3_linear`}
                x1="15.523"
                x2="42.499"
                y1="32.938"
                y2="19.977"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#EDB439" />
                <stop offset="0.219" stopColor="#FFE7B4" />
                <stop offset="0.51" stopColor="#E5BE59" />
                <stop offset="0.589" stopColor="#B57527" />
                <stop offset="0.703" stopColor="#D09B2F" />
                <stop offset="0.875" stopColor="#F1CA6E" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint4_linear`}
                x1="26.285"
                x2="36.266"
                y1="37.76"
                y2="11.295"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#EDB439" />
                <stop offset="0.219" stopColor="#FFE7B4" />
                <stop offset="0.51" stopColor="#E5BE59" />
                <stop offset="0.589" stopColor="#B57527" />
                <stop offset="0.703" stopColor="#D09B2F" />
                <stop offset="0.875" stopColor="#F1CA6E" />
            </linearGradient>
            <radialGradient
                id={`${prefix}_paint5_radial`}
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(50.366 -5.396 31.671) scale(12.9074 28.9551)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FDFDFD" />
                <stop offset="1" stopColor="#CECFD0" />
            </radialGradient>
            <linearGradient
                id={`${prefix}_paint6_linear`}
                x1="29.497"
                x2="29.022"
                y1="37.526"
                y2="21.235"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.458" stopColor="#156CEB" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#3486FA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint7_linear`}
                x1="20.813"
                x2="20.813"
                y1="15.17"
                y2="19.632"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#115DCA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint8_linear`}
                x1="24.584"
                x2="24.584"
                y1="15.174"
                y2="19.639"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#115DCA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint9_linear`}
                x1="28.836"
                x2="28.836"
                y1="15.173"
                y2="19.639"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#115DCA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint10_linear`}
                x1="32.447"
                x2="32.447"
                y1="15.17"
                y2="19.629"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#115DCA" />
            </linearGradient>
            <linearGradient
                id={`${prefix}_paint11_linear`}
                x1="35.563"
                x2="35.563"
                y1="13.228"
                y2="19.493"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.01" stopColor="#3486FA" />
                <stop offset="0.224" stopColor="#0E3A7A" />
                <stop offset="0.656" stopColor="#14458D" />
                <stop offset="0.859" stopColor="#115DCA" />
            </linearGradient>
        </defs>
    </svg>
);

export default CertificateLogoSmall;
