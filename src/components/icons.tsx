import type { SVGProps } from "react";

export const Icons = {
  github: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.498 2 12.046c0 4.44 2.865 8.2 6.839 9.535.5.092.682-.218.682-.485 0-.24-.008-.875-.013-1.717-2.782.612-3.369-1.353-3.369-1.353-.454-1.167-1.108-1.478-1.108-1.478-.907-.626.069-.614.069-.614 1.003.071 1.53 1.043 1.53 1.043.892 1.54 2.341 1.095 2.91.837.091-.654.35-1.096.636-1.347-2.22-.255-4.555-1.122-4.555-4.993 0-1.103.39-2.005 1.029-2.713-.103-.256-.446-1.287.098-2.681 0 0 .84-.272 2.75 1.036a9.37 9.37 0 0 1 2.5-.34c.85.004 1.705.116 2.5.34 1.909-1.308 2.747-1.036 2.747-1.036.546 1.394.203 2.425.1 2.681.64.708 1.028 1.61 1.028 2.713 0 3.88-2.338 4.734-4.566 4.984.359.311.678.923.678 1.86 0 1.342-.012 2.424-.012 2.754 0 .27.18.582.688.483A10.056 10.056 0 0 0 22 12.046C22 6.498 17.523 2 12 2Z" />
    </svg>
  ),
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19.994 3A1.992 1.992 0 0 1 22 4.99v14.02A1.992 1.992 0 0 1 19.994 21H4.006A2.002 2.002 0 0 1 2 19.01V4.99C2 3.89 2.896 3 4.006 3h15.988ZM8.338 9.242H6.154v8.6h2.184v-8.6Zm-.122-3.343c-.7 0-1.269.57-1.269 1.273 0 .704.568 1.274 1.269 1.274.703 0 1.27-.57 1.27-1.274 0-.703-.567-1.273-1.27-1.273Zm9.63 6.681c0-2.068-1.098-3.031-2.56-3.031-1.18 0-1.71.651-2.005 1.11v-.949h-2.182c.029.628 0 8.6 0 8.6h2.182v-4.8c0-.257.018-.514.094-.699.204-.514.668-1.047 1.447-1.047 1.021 0 1.43.789 1.43 1.945v4.6h2.182v-4.73Z" />
    </svg>
  ),
  medium: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.5 6.75c.004-.525.146-.74.558-1.153L6.1 4.5h-.45v-.75h5.33l4.14 9.08 3.64-9.08H24v.75h-.43c-.52 0-.62.12-.62.61v13.78c0 .49.1.61.62.61H24v.75h-7.04v-.75h.43c.52 0 .62-.12.62-.61V6.24l-5.43 13.5h-.74l-4.88-10.5v8.75c0 .75.24 1.02.83 1.6l.74.75v.75H1v-.75l.74-.75c.58-.58.82-.85.82-1.6V6.75Z" />
    </svg>
  ),
  twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M17.52 3.45h2.63l-5.74 6.57 6.75 9.53h-5.28l-4.13-5.78-5.05 5.78H4.07l6.14-7.03-6.47-9.07h5.4l3.73 5.24 4.65-5.24Zm-.92 14.52h1.46L7.63 5.1H6.06l10.54 12.87Z" />
    </svg>
  ),
  mail: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V9.3l-7.47 4.67a1 1 0 0 1-1.06 0L4 9.3V17h16Z" />
    </svg>
  ),
  phone: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21Z" />
    </svg>
  ),
  external: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  ),
  arrowLeft: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  ),
  arrowRight: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L12.17 12z" />
    </svg>
  ),
};
