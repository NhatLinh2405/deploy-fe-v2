import { SVGProps } from 'react';

const SurfIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            opacity={0.4}
            d="m22.16 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z"
            fill="#7A838C"
        />
        <path
            d="M15.56 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L3 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Z"
            fill="#7A838C"
        />
    </svg>
);

export default SurfIcon;
