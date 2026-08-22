import React from "react";

export function SvgSprites() {
  return (
    <svg className="_hide_1dpkx_1" style={{ display: "none" }}>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19" id="icon-mobile-menu">
        <path fill="currentColor" fillRule="evenodd" d="M0 0h24v3H0zM0 8h24v3H0zM0 16h24v3H0z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" id="icon-search">
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M14.704 13.152 11.21 9.658A6.15 6.15 0 0 0 7.393.126 6.154 6.154 0 0 0 .124 7.38a6.154 6.154 0 0 0 9.531 3.83l3.496 3.495a1.1 1.1 0 0 0 1.554-1.553Zm-11.343-4.2a3.95 3.95 0 0 1 2.795-6.745 3.955 3.955 0 0 1 3.953 3.951A3.95 3.95 0 0 1 8.95 8.952a3.929 3.929 0 0 1-5.59 0h.001Z"
          />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="icon-close">
        <path
          fill="currentColor"
          d="M10.592 0 6 4.592 1.408 0 0 1.408 4.592 6 0 10.592 1.408 12 6 7.408 10.592 12 12 10.592 7.408 6 12 1.408z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" id="icon-arrow">
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.1"
          d="m24.575 31.324 8.318-8.317c-2.418-2.372-5.905-5.952-8.323-8.323l-1.234 1.194c2.175 2.133 3.753 3.798 6.292 6.291l-15.691-.005v1.673l15.691.005-6.28 6.28 1.227 1.202Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" id="icon-play">
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M45 0c12.426 0 23.677 5.037 31.82 13.181C84.963 21.324 90 32.574 90 45.001c0 12.425-5.037 23.676-13.18 31.82C68.676 84.962 57.425 90 45 90s-23.677-5.037-31.82-13.18S0 57.426 0 45c0-12.425 5.037-23.676 13.182-31.82C21.324 5.039 32.575 0 45 0ZM33.823 25c-1.183 0-2.143.96-2.143 2.143v35.715c.009.36.1.727.292 1.063a2.133 2.133 0 0 0 2.914.786l15.464-8.929 15.443-8.915a2.134 2.134 0 0 0 .023-3.712L35.062 25.394a2.134 2.134 0 0 0-1.24-.395Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 8" id="icon-caret">
        <path fill="currentColor" fillRule="nonzero" d="M6.5 8 0 1.352 1.322 0 6.5 5.296 11.678 0 13 1.352z" />
      </symbol>
    </svg>
  );
}

export function Icon({
  id,
  className,
  style,
}: {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className} style={style}>
      <use href={`#${id}`} xlinkHref={`#${id}`} />
    </svg>
  );
}
