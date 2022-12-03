const LogoSvg = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#FF9800" stroke="none" d="m24 37-5-6v-6h10v6z" />
    <g fill="#FFA726" stroke="none">
      <circle cx={33} cy={19} r={2} />
      <circle cx={15} cy={19} r={2} />
    </g>
    <path
      fill="#FFB74D"
      d="M33 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9v-7z"
      stroke="none"
    />
    <path
      fill="#424242"
      d="M24 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2h-3z"
      stroke="none"
    />
    <g fill="#784719" stroke="none">
      <circle cx={28} cy={19} r={1} />
      <circle cx={20} cy={19} r={1} />
    </g>
    <path fill="#fff" stroke="none" d="m24 43-5-12 5 1 5-1z" />
    <path
      fill="#D32F2F"
      stroke="none"
      d="m23 35-.7 4.5 1.7 4 1.7-4L25 35l1-1-2-2-2 2z"
    />
    <path
      fill="#546E7A"
      d="m29 31-5 12-5-12S8 33 8 44h32c0-11-11-13-11-13z"
      stroke="none"
    />
  </svg>
)

export default LogoSvg
