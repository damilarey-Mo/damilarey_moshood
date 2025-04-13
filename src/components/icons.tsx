import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Download,
  ExternalLink,
  Figma,
  Github,
  LucideProps,
  Moon,
  Star,
  Sun,
} from 'lucide-react';

export const Icons = {
  sun: Sun,
  moon: Moon,
  arrowRight: ArrowRight,
  download: Download,
  preview: ExternalLink,
  githubOutline: Github,
  briefcase: Briefcase,
  chevronDown: ChevronDown,
  star: Star,
  figma: Figma,
  audiophile: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M8.508 29.92C8.508 27.856 8.892 26.044 9.66 24.484C10.452 22.924 11.52 21.724 12.864 20.884C14.208 20.044 15.708 19.624 17.364 19.624C18.78 19.624 20.016 19.912 21.072 20.488C22.152 21.064 22.98 21.82 23.556 22.756V19.912H29.712V40H23.556V37.156C22.956 38.092 22.116 38.848 21.036 39.424C19.98 40 18.744 40.288 17.328 40.288C15.696 40.288 14.208 39.868 12.864 39.028C11.52 38.164 10.452 36.952 9.66 35.392C8.892 33.808 8.508 31.984 8.508 29.92ZM23.556 29.956C23.556 28.42 23.124 27.208 22.26 26.32C21.42 25.432 20.388 24.988 19.164 24.988C17.94 24.988 16.896 25.432 16.032 26.32C15.192 27.184 14.772 28.384 14.772 29.92C14.772 31.456 15.192 32.68 16.032 33.592C16.896 34.48 17.94 34.924 19.164 34.924C20.388 34.924 21.42 34.48 22.26 33.592C23.124 32.704 23.556 31.492 23.556 29.956ZM40.3216 22.756C40.9216 21.82 41.7496 21.064 42.8056 20.488C43.8616 19.912 45.0976 19.624 46.5136 19.624C48.1696 19.624 49.6696 20.044 51.0136 20.884C52.3576 21.724 53.4136 22.924 54.1816 24.484C54.9736 26.044 55.3696 27.856 55.3696 29.92C55.3696 31.984 54.9736 33.808 54.1816 35.392C53.4136 36.952 52.3576 38.164 51.0136 39.028C49.6696 39.868 48.1696 40.288 46.5136 40.288C45.1216 40.288 43.8856 40 42.8056 39.424C41.7496 38.848 40.9216 38.104 40.3216 37.192V49.576H34.1656V19.912H40.3216V22.756ZM49.1056 29.92C49.1056 28.384 48.6736 27.184 47.8096 26.32C46.9696 25.432 45.9256 24.988 44.6776 24.988C43.4536 24.988 42.4096 25.432 41.5456 26.32C40.7056 27.208 40.2856 28.42 40.2856 29.956C40.2856 31.492 40.7056 32.704 41.5456 33.592C42.4096 34.48 43.4536 34.924 44.6776 34.924C45.9016 34.924 46.9456 34.48 47.8096 33.592C48.6736 32.68 49.1056 31.456 49.1056 29.92Z"
        fill="white"
      />
    </svg>
  ),
  Figma: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 15 15"
      fill="currentColor"
      {...props}
    >
      <path
        d="M7.5 1V9.5M7.5 9.5V11.5C7.5 12.6046 6.60457 13.5 5.5 13.5C4.39543 13.5 3.5 12.6046 3.5 11.5C3.5 10.3954 4.39543 9.5 5.5 9.5M7.5 9.5H5.5M5.5 9.5C4.39543 9.5 3.5 8.60457 3.5 7.5C3.5 6.39543 4.39543 5.5 5.5 5.5M5.5 5.5H7.5M5.5 5.5H9.5M5.5 5.5C4.39543 5.5 3.5 4.60457 3.5 3.5C3.5 2.39543 4.39543 1.5 5.5 1.5H9.5C10.6046 1.5 11.5 2.39543 11.5 3.5C11.5 4.60457 10.6046 5.5 9.5 5.5M9.5 5.5C10.6046 5.5 11.5 6.39543 11.5 7.5C11.5 8.60457 10.6046 9.5 9.5 9.5C8.39543 9.5 7.5 8.60457 7.5 7.5C7.5 6.39543 8.39543 5.5 9.5 5.5Z"
        stroke="currentColor"
      />
    </svg>
  ),
  wordpress: (props: LucideProps) => (
    <svg
      fill="currentColor"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.513,255.987c0,101.127,58.76,188.531,144.006,229.938L22.645,152.016 
      C8.472,183.779,0.513,218.96,0.513,255.987z M428.476,243.101c0-31.588-11.341-53.446-21.06-70.45 
      c-12.949-21.059-25.088-38.874-25.088-59.92c0-23.492,17.803-45.349,42.891-45.349c1.148,0,2.221,0.137,3.307,0.199 
      C383.089,25.938,322.521,0.5,256,0.5c-89.263,0-167.784,45.798-213.47,115.149c6.001,0.2,11.652,0.325,16.443,0.325 
      c26.723,0,68.104-3.244,68.104-3.244c13.76-0.823,15.395,19.412,1.634,21.046c0,0-13.848,1.622-29.243,2.42l93.042,276.747 
      l55.903-167.685l-39.797-109.062c-13.773-0.798-26.798-2.42-26.798-2.42c-13.761-0.824-12.151-21.87,1.622-21.046 
      c0,0,42.18,3.244,67.293,3.244c26.71,0,68.092-3.244,68.092-3.244c13.773-0.823,15.395,19.412,1.622,21.046 
      c0,0-13.86,1.622-29.23,2.42l92.332,274.638l25.487-85.134C421.988,292.491,428.476,264.957,428.476,243.101z 
      M260.491,278.331l-76.662,222.765C206.722,507.819,230.937,511.5,256,511.5c29.768,0,58.299-5.14,84.847-14.484
      c-0.674-1.098-1.31-2.258-1.821-3.53L260.491,278.331z 
      M480.199,133.427c1.098,8.134,1.722,16.867,1.722,26.261c0,25.924-4.866,55.08-19.425,91.509l-78.035,225.621 
      c75.952-44.289,127.026-126.565,127.026-220.831C511.487,211.574,500.135,169.806,480.199,133.427z"
      />
    </svg>
  ),
  php: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
      fill="black"
      {...props}
    >
      <rect width="64" height="64" fill="white" />
      <path d="M5.265 13.38c.596 0 1.041-.112 1.323-.332.279-.218.471-.595.572-1.122.094-.492.058-.836-.106-1.021-.168-.189-.532-.286-1.082-.286h-.954L4.49 13.38h.775zm-3.117 3.401a.146.146 0 0 1-.114-.055.151.151 0 0 1-.031-.125l1.4-7.316a.15.15 0 0 1 .146-.122h3.017c.948 0 1.654.262 2.098.777.446.519.584 1.243.409 2.155a3.457 3.457 0 0 1-.363 1.025c-.17.309-.395.595-.668.85a2.923 2.923 0 0 1-1.099.669c-.395.131-.903.197-1.51.197H4.212l-.349 1.824a.15.15 0 0 1-.145.122h-1.57v-.001zm10.645-1.945a.144.144 0 0 1-.113-.055.154.154 0 0 1-.031-.124l.611-3.237c.058-.308.044-.529-.04-.622-.051-.057-.206-.153-.664-.153h-1.108l-.769 4.07a.148.148 0 0 1-.144.122H9a.144.144 0 0 1-.113-.055.154.154 0 0 1-.031-.124l1.382-7.316a.148.148 0 0 1 .144-.122h1.537c.044 0 .085.02.113.055.028.035.039.08.031.125l-.333 1.766h1.192c.908 0 1.523.165 1.882.503.365.346.479.898.339 1.642l-.643 3.405a.148.148 0 0 1-.144.122h-1.563v-.002zm5.177-1.456c.619 0 1.081-.112 1.374-.332.289-.218.489-.595.594-1.122.098-.492.06-.836-.111-1.021-.175-.189-.553-.286-1.124-.286h-.989l-.549 2.761h.805zm-3.236 3.401a.156.156 0 0 1-.119-.055.149.149 0 0 1-.032-.125l1.454-7.316a.153.153 0 0 1 .151-.122h3.133c.985 0 1.718.262 2.178.777.463.519.606 1.243.425 2.155-.074.371-.2.716-.377 1.024-.176.309-.41.595-.693.85-.34.311-.724.536-1.141.669-.411.131-.938.197-1.568.197h-1.269l-.362 1.823a.153.153 0 0 1-.151.122h-1.629v.001z"></path>
    </svg>
  ),
  framer: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
      fill="white"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  nextstarter: (props: LucideProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path
        d="M14.42 44V20.64H20.02L26.068 38.72C26.004 37.9307 25.9293 37.024 25.844 36C25.7587 34.9547 25.684 33.92 25.62 32.896C25.5773 31.8507 25.556 30.9653 25.556 30.24V20.64H29.78V44H24.18L18.196 25.92C18.26 26.6027 18.324 27.4133 18.388 28.352C18.452 29.2907 18.5053 30.24 18.548 31.2C18.612 32.16 18.644 33.0133 18.644 33.76V44H14.42ZM41.2875 44.32C39.6448 44.32 38.2155 44.0427 36.9995 43.488C35.7835 42.9333 34.8448 42.1547 34.1835 41.152C33.5222 40.1493 33.1915 38.9653 33.1915 37.6H37.9915C37.9915 38.3893 38.2902 39.0187 38.8875 39.488C39.5062 39.936 40.3382 40.16 41.3835 40.16C42.3862 40.16 43.1648 39.936 43.7195 39.488C44.2955 39.04 44.5835 38.4213 44.5835 37.632C44.5835 36.9493 44.3702 36.3627 43.9435 35.872C43.5168 35.3813 42.9195 35.0507 42.1515 34.88L39.7835 34.336C37.7995 33.8667 36.2528 33.0027 35.1435 31.744C34.0555 30.464 33.5115 28.9067 33.5115 27.072C33.5115 25.024 34.2048 23.392 35.5915 22.176C36.9782 20.9387 38.8555 20.32 41.2235 20.32C43.6128 20.32 45.5008 20.9173 46.8875 22.112C48.2955 23.2853 48.9995 24.8747 48.9995 26.88H44.1995C44.1995 26.1333 43.9328 25.5467 43.3995 25.12C42.8875 24.6933 42.1408 24.48 41.1595 24.48C40.2422 24.48 39.5382 24.6933 39.0475 25.12C38.5568 25.5467 38.3115 26.176 38.3115 27.008C38.3115 27.6267 38.5142 28.1813 38.9195 28.672C39.3462 29.1413 39.9542 29.4613 40.7435 29.632L43.0795 30.176C45.1488 30.6453 46.7168 31.4987 47.7835 32.736C48.8502 33.952 49.3835 35.5093 49.3835 37.408C49.3835 38.7733 49.0422 39.9787 48.3595 41.024C47.6982 42.0693 46.7595 42.88 45.5435 43.456C44.3488 44.032 42.9302 44.32 41.2875 44.32Z"
        fill="white"
      />
    </svg>
  ),
  bootstrap: (props: LucideProps) => (
    <svg
      fill="white"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" fill="black" />
      <path d="M20 0H4C1.793.006.006 1.793 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2.187 16.855c-.2.482-.517.907-.923 1.234-.42.34-.952.62-1.607.82-.654.203-1.432.305-2.333.305H6.518v-14h6.802c1.258 0 2.266.283 3.02.86.76.58 1.138 1.444 1.138 2.61 0 .705-.172 1.31-.518 1.81-.344.497-.84.886-1.48 1.156v.046c.854.18 1.515.585 1.95 1.215s.658 1.426.658 2.387c0 .538-.104 1.05-.3 1.528l.025.027zm-2.776-3.45c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59h-.017zm-.6-2.823c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4c.583 0 1.08-.17 1.464-.496z" />
    </svg>
  ),
  github: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.0004 2.40002C6.69879 2.40002 2.40039 6.69842 2.40039 12C2.40039 16.4984 5.49799 20.2624 9.67399 21.304C9.62919 21.1744 9.60039 21.024 9.60039 20.8376V19.1968C9.21079 19.1968 8.55799 19.1968 8.39399 19.1968C7.73719 19.1968 7.15319 18.9144 6.86999 18.3896C6.55559 17.8064 6.50119 16.9144 5.72199 16.3688C5.49079 16.1872 5.66679 15.98 5.93319 16.008C6.42519 16.1472 6.83319 16.4848 7.21719 16.9856C7.59959 17.4872 7.77959 17.6008 8.49399 17.6008C8.84039 17.6008 9.35879 17.5808 9.84679 17.504C10.1092 16.8376 10.5628 16.224 11.1172 15.9344C7.92039 15.6056 6.39479 14.0152 6.39479 11.856C6.39479 10.9264 6.79079 10.0272 7.46359 9.26962C7.24279 8.51762 6.96519 6.98402 7.54839 6.40002C8.98679 6.40002 9.85639 7.33282 10.0652 7.58482C10.782 7.33922 11.5692 7.20002 12.3964 7.20002C13.2252 7.20002 14.0156 7.33922 14.734 7.58642C14.9404 7.33602 15.8108 6.40002 17.2524 6.40002C17.838 6.98482 17.5572 8.52482 17.334 9.27522C18.0028 10.0312 18.3964 10.928 18.3964 11.856C18.3964 14.0136 16.8732 15.6032 13.6812 15.9336C14.5596 16.392 15.2004 17.68 15.2004 18.6504V20.8376C15.2004 20.9208 15.182 20.9808 15.1724 21.052C18.9132 19.7408 21.6004 16.1888 21.6004 12C21.6004 6.69842 17.302 2.40002 12.0004 2.40002Z"
      />
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.1992 3.19995H4.79922C3.91522 3.19995 3.19922 3.91595 3.19922 4.79995V19.2C3.19922 20.084 3.91522 20.7999 4.79922 20.7999H19.1992C20.0832 20.7999 20.7992 20.084 20.7992 19.2V4.79995C20.7992 3.91595 20.0832 3.19995 19.1992 3.19995ZM8.76242 17.6H6.40242V10.0064H8.76242V17.6ZM7.55842 8.92075C6.79762 8.92075 6.18242 8.30395 6.18242 7.54475C6.18242 6.78555 6.79842 6.16955 7.55842 6.16955C8.31682 6.16955 8.93362 6.78635 8.93362 7.54475C8.93362 8.30395 8.31682 8.92075 7.55842 8.92075ZM17.6024 17.6H15.244V13.9072C15.244 13.0264 15.228 11.8935 14.0176 11.8935C12.7896 11.8935 12.6008 12.8528 12.6008 13.8432V17.6H10.2424V10.0064H12.5064V11.044H12.5384C12.8536 10.4472 13.6232 9.81755 14.7712 9.81755C17.1608 9.81755 17.6024 11.3904 17.6024 13.4352V17.6Z"
      />
    </svg>
  ),
  html: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.382 17.3833H19.4986L19.852 21.62H34.0236L32.9603 34.1367L25.0053 36.6667L24.927 36.6417L17.0603 34.1333L16.6303 29.0333H20.4836L20.652 31.015L25.047 31.9833L29.3653 31.0133L29.8236 25.6583H16.3403L15.297 13.3333H34.7286L34.382 17.3833Z"
      />
    </svg>
  ),
  css: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.1937 21.79L33.4503 33.9317L25.0536 36.6767L16.657 33.9317L16.3386 28.125H20.5886L20.6953 30.765L25.0536 32.2433L29.412 30.765L29.7303 26.015H20.377L20.1653 21.7917H29.9436L30.262 17.5683H15.5936L15.2753 13.3433H34.7253L34.1937 21.79Z"
      />
    </svg>
  ),
  shopify: (props: LucideProps) => (
    <svg
      fill="currentColor"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m14.49 20.937 5.381-1.166S17.93 6.633 17.914 6.546c-.016-.086-.086-.144-.158-.144s-1.439-.101-1.439-.101-.949-.949-1.064-1.05c-.027-.029-.057-.043-.086-.058l-.677 15.744zm.446-15.772c-.016 0-.043.014-.057.014-.016 0-.217.059-.533.158-.318-.919-.879-1.768-1.871-1.768h-.086c-.289-.361-.633-.519-.936-.519-2.316 0-3.426 2.892-3.77 4.359-.892.275-1.538.476-1.613.505-.504.158-.517.172-.574.648-.057.344-1.367 10.489-1.367 10.489l10.117 1.899.69-15.785zm-2.635.704v.102c-.559.173-1.178.36-1.783.547.346-1.323.992-1.972 1.553-2.217.146.375.23.878.23 1.568zm-.92-2.2c.1 0 .201.028.303.102-.732.344-1.539 1.222-1.871 2.978a59.11 59.11 0 0 1-1.411.432c.389-1.339 1.325-3.512 2.979-3.512zm.402 7.812s-.604-.315-1.322-.315c-1.08 0-1.123.676-1.123.849 0 .921 2.418 1.28 2.418 3.453 0 1.712-1.08 2.806-2.547 2.806-1.756 0-2.648-1.094-2.648-1.094l.475-1.554s.922.792 1.697.792a.693.693 0 0 0 .721-.69c0-1.209-1.986-1.268-1.986-3.252 0-1.669 1.195-3.295 3.627-3.295.936 0 1.395.272 1.395.272l-.707 2.028zm.922-7.281c.518.06.85.648 1.064 1.311-.258.087-.547.173-.863.273v-.187c0-.561-.072-1.022-.201-1.397z" />
    </svg>
  ),
  tailwind: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_717_63)">
        <path
          fill="currentColor"
          d="M25 10.0042C18.3333 10.0042 14.1667 13.3364 12.5 20.001C15 16.6687 17.9167 15.4198 21.25 16.2521C23.1521 16.7271 24.5115 18.1073 26.0167 19.6344C28.4667 22.1208 31.3031 25 37.5 25C44.1667 25 48.3333 21.6677 50 15.0021C47.5 18.3344 44.5833 19.5844 41.25 18.7521C39.349 18.2771 37.9896 16.8969 36.4844 15.3698C34.0333 12.8823 31.1958 10.0042 25 10.0042ZM12.5 25C5.83333 25 1.66667 28.3323 0 34.9979C2.5 31.6656 5.41667 30.4156 8.75 31.2489C10.651 31.725 12.0104 33.1041 13.5156 34.6302C15.9667 37.1177 18.8042 39.9969 25 39.9969C31.6667 39.9969 35.8333 36.6646 37.5 29.9989C35 33.3312 32.0833 34.5812 28.75 33.7479C26.8479 33.2729 25.4885 31.8927 23.9833 30.3666C21.5333 27.8792 18.6969 25 12.5 25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_717_63">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  javascript: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        d="M43.3359 4H6.66797C5.19531 4 4 5.19531 4 6.66797V43.332C4 44.8047 5.19531 46 6.66797 46H43.332C44.8047 46 46 44.8047 46 43.3359V6.66797C46 5.19531 44.8047 4 43.3359 4ZM27 36.1836C27 40.1797 24.6562 42 21.2344 42C18.1406 42 15.9102 39.9258 15 38L18.1445 36.0977C18.75 37.1719 19.6719 38 21 38C22.2695 38 23 37.5039 23 35.5742V23H27V36.1836ZM35.6758 42C32.1328 42 30.1211 40.2148 29 38L32 36C32.8164 37.3359 33.707 38.6133 35.5898 38.6133C37.1719 38.6133 38 37.8242 38 36.7305C38 35.4258 37.1406 34.9609 35.4023 34.1992L34.4492 33.7891C31.6953 32.6172 29.8633 31.1484 29.8633 28.0391C29.8633 25.1797 32.0469 23 35.4531 23C37.8789 23 39.6211 23.8437 40.8789 26.0547L37.9102 27.9648C37.2539 26.7891 36.5508 26.3281 35.4531 26.3281C34.3359 26.3281 33.6289 27.0391 33.6289 27.9648C33.6289 29.1094 34.3359 29.5703 35.9727 30.2812L36.9258 30.6914C40.1719 32.0781 42 33.4961 42 36.6836C42 40.1172 39.3008 42 35.6758 42Z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5547 3.9844C33.775 3.95818 32.9589 4.09412 32.1406 4.3594C30.5041 4.88996 28.7892 5.92391 27.0293 7.35549C26.3396 7.91653 25.6436 8.55785 24.9453 9.2383C24.2624 8.57513 23.5807 7.95102 22.9062 7.40237C21.1478 5.97193 19.4375 4.93759 17.8047 4.40823C16.1719 3.87886 14.5472 3.86246 13.2129 4.63284C11.8786 5.40321 11.0806 6.81738 10.7227 8.49612C10.3647 10.1749 10.4041 12.174 10.7637 14.4121C10.8886 15.1895 11.0667 16.0051 11.2695 16.836C10.5071 17.067 9.76668 17.31 9.08008 17.5781C7.00798 18.3875 5.29345 19.3557 4.04492 20.5078C2.7964 21.66 1.99023 23.0583 1.99023 24.5938C1.99023 26.1292 2.7964 27.5256 4.04492 28.6778C5.29345 29.8299 7.00798 30.8001 9.08008 31.6094C9.81425 31.8961 10.6091 32.1543 11.4297 32.3985C11.1345 33.5013 10.8954 34.5715 10.7324 35.586C10.3726 37.8259 10.3346 39.8253 10.6934 41.5078C11.0521 43.1904 11.8505 44.6126 13.1914 45.3867C14.5323 46.1609 16.1643 46.1419 17.8008 45.6114C19.4373 45.0808 21.1502 44.0488 22.9102 42.6172C23.5935 42.0613 24.2848 41.4272 24.9766 40.7539C25.672 41.4313 26.366 42.0684 27.0527 42.627C28.8112 44.0574 30.5234 45.0898 32.1562 45.6192C33.7891 46.1485 35.4137 46.1649 36.748 45.3946C38.0824 44.6242 38.8784 43.21 39.2363 41.5313C39.5943 39.8525 39.5549 37.8553 39.1953 35.6172C39.0319 34.6 38.7926 33.5262 38.4961 32.4199C39.3438 32.1699 40.1637 31.9047 40.9199 31.6094C42.992 30.8001 44.7066 29.8299 45.9551 28.6778C47.2036 27.5256 48.0098 26.1292 48.0098 24.5938C48.0098 23.0583 47.2036 21.66 45.9551 20.5078C44.7066 19.3557 42.992 18.3875 40.9199 17.5781C40.2235 17.3061 39.4717 17.06 38.6973 16.8262C38.9018 15.9902 39.0833 15.1688 39.209 14.3867C39.5688 12.1468 39.6068 10.1455 39.248 8.46291C38.8893 6.78037 38.089 5.36015 36.748 4.58596C36.0776 4.19887 35.3344 4.01061 34.5547 3.9844ZM34.4629 6.01955C34.9522 6.03293 35.3695 6.14936 35.7266 6.35549C36.4406 6.76775 36.9684 7.57012 37.25 8.89065C37.5316 10.2112 37.5218 11.9954 37.1895 14.0645C37.0756 14.7729 36.9104 15.5237 36.7227 16.293C34.6772 15.8007 32.4357 15.4354 30.0469 15.2207C28.8476 13.5594 27.6154 12.0458 26.373 10.7031C27.0302 10.0617 27.6831 9.46175 28.3203 8.94338C29.946 7.62096 31.4851 6.72112 32.7695 6.30471C33.4117 6.09651 33.9736 6.00618 34.4629 6.01955ZM15.4863 6.02541C15.9784 6.01168 16.5415 6.10176 17.1855 6.31057C18.4737 6.72818 20.0155 7.62762 21.6426 8.95119C22.267 9.45916 22.9053 10.0477 23.5488 10.6739C22.2973 12.0275 21.0549 13.5542 19.8477 15.2305C17.4689 15.4491 15.2366 15.8164 13.2012 16.3106C13.0148 15.5456 12.8496 14.7986 12.7363 14.0938C12.4036 12.0229 12.3953 10.2384 12.6777 8.91409C12.9601 7.58974 13.4922 6.78133 14.2129 6.36526C14.5732 6.15722 14.9942 6.03915 15.4863 6.02541ZM24.9766 12.1426C25.7912 13.0291 26.606 13.9992 27.4141 15.043C26.62 15.0099 25.8163 14.9903 25 14.9903C24.1675 14.9903 23.3484 15.0105 22.5391 15.0449C23.3474 14.0003 24.1618 13.0298 24.9766 12.1426ZM25 17.0098C26.3599 17.0098 27.6853 17.0657 28.9746 17.1602C29.8617 18.4343 30.7286 19.7861 31.5547 21.2168C32.2805 22.474 32.9373 23.7292 33.5352 24.9688C32.931 26.2248 32.2632 27.497 31.5273 28.7715C30.8796 29.8934 30.2032 30.959 29.5156 31.9864C28.0593 32.1081 26.5503 32.1758 25 32.1758C23.4124 32.1758 21.8695 32.1041 20.3809 31.9766C19.7047 30.964 19.0397 29.9146 18.4023 28.8106C17.6682 27.539 17.0036 26.2691 16.4004 25.0156C17.0061 23.7551 17.6737 22.4782 18.4121 21.1992C19.2338 19.776 20.0982 18.4321 20.9805 17.1641C22.2836 17.0674 23.6245 17.0098 25 17.0098ZM31.5488 17.4102C33.1973 17.6159 34.7451 17.9014 36.1855 18.2442C35.7581 19.6453 35.2317 21.1088 34.5938 22.6192C34.1796 21.8207 33.7506 21.0196 33.2871 20.2168C32.7254 19.2439 32.1404 18.3164 31.5488 17.4102ZM18.3438 17.4258C17.7647 18.3151 17.1948 19.2246 16.6445 20.1778C16.1751 20.9908 15.7372 21.8028 15.3184 22.6114C14.686 21.1101 14.1627 19.6549 13.7383 18.2617C15.168 17.9184 16.7068 17.6338 18.3438 17.4258ZM38.1641 18.7754C38.8729 18.9899 39.5576 19.2137 40.1855 19.459C42.0957 20.2051 43.6067 21.0885 44.5859 21.9922C45.5652 22.8959 45.9902 23.7577 45.9902 24.5938C45.9902 25.4298 45.5652 26.2916 44.5859 27.1953C43.6067 28.099 42.0957 28.9825 40.1855 29.7285C39.4877 30.0011 38.721 30.2483 37.9238 30.4824C37.3552 28.7237 36.6294 26.8888 35.7656 25.0156C36.7588 22.8651 37.5611 20.7683 38.1641 18.7754ZM11.8027 18.7852C12.3988 20.7582 13.1908 22.8341 14.1699 24.9629C13.3005 26.847 12.5711 28.6923 12 30.461C11.231 30.2329 10.4902 29.9925 9.81445 29.7285C7.9043 28.9825 6.39335 28.099 5.41406 27.1953C4.43477 26.2916 4.00977 25.4298 4.00977 24.5938C4.00977 23.7577 4.43477 22.8959 5.41406 21.9922C6.39335 21.0885 7.9043 20.2051 9.81445 19.459C10.4328 19.2175 11.1059 18.9969 11.8027 18.7852ZM25 20C22.2504 20 20 22.2504 20 25C20 27.7496 22.2504 30 25 30C27.7496 30 30 27.7496 30 25C30 22.2504 27.7496 20 25 20ZM15.3418 27.3653C15.7625 28.1779 16.2 28.9933 16.6719 29.8106C17.041 30.45 17.4181 31.0724 17.8008 31.6836C16.4578 31.4974 15.1812 31.2616 13.9824 30.9824C14.3637 29.8148 14.8197 28.6028 15.3418 27.3653ZM34.6191 27.3653C35.1433 28.6057 35.5996 29.8197 35.9824 30.9903C34.7798 31.2691 33.4993 31.5041 32.1523 31.6895C32.5401 31.0708 32.923 30.4406 33.2969 29.793C33.7653 28.9817 34.2011 28.1719 34.6191 27.3653ZM13.4062 32.9239C15.2161 33.3526 17.1777 33.6819 19.2578 33.8965C20.6464 35.9049 22.093 37.7095 23.5488 39.2871C22.8978 39.9219 22.2526 40.5176 21.6211 41.0313C19.9954 42.3537 18.4543 43.2516 17.1699 43.668C15.8855 44.0844 14.9269 44.0295 14.2129 43.6172C13.4988 43.2049 12.973 42.4026 12.6914 41.0821C12.4098 39.7615 12.4176 37.9793 12.75 35.9102C12.9008 34.9715 13.1262 33.9664 13.4062 32.9239ZM36.5605 32.9317C36.843 33.9806 37.069 34.9894 37.2207 35.9336C37.5534 38.0045 37.5617 39.789 37.2793 41.1133C36.9969 42.4376 36.4687 43.248 35.748 43.6641C35.0274 44.0802 34.0596 44.1344 32.7715 43.7168C31.4834 43.2992 29.9416 42.3998 28.3145 41.0762C27.6784 40.5588 27.0287 39.9583 26.373 39.3184C27.8387 37.7346 29.2955 35.9208 30.6934 33.9004C32.7787 33.6873 34.7458 33.3599 36.5605 32.9317ZM21.8672 34.1016C22.894 34.1575 23.9342 34.1953 25 34.1953C26.0305 34.1953 27.0371 34.1598 28.0312 34.1074C27.015 35.4786 25.979 36.7252 24.9473 37.8477C23.9161 36.7228 22.8821 35.474 21.8672 34.1016Z"
      />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg viewBox="0 0 50 50" {...props}>
      <g clipPath="url(#clip0_748_15)">
        <path
          d="M23.3627 0.0134552C23.2551 0.0232289 22.913 0.057437 22.6051 0.0818713C15.5034 0.722051 8.85142 4.55336 4.63832 10.442C2.29228 13.7162 0.791789 17.4303 0.224829 21.3642C0.0244379 22.7374 0 23.143 0 25.0049C0 26.8668 0.0244379 27.2724 0.224829 28.6456C1.58358 38.0333 8.26491 45.9207 17.3265 48.843C18.9492 49.3659 20.6598 49.7227 22.6051 49.9377C23.3627 50.0208 26.6373 50.0208 27.3949 49.9377C30.7527 49.5663 33.5973 48.7355 36.4027 47.3037C36.8328 47.0838 36.9159 47.0251 36.8573 46.9763C36.8182 46.9469 34.9853 44.4888 32.7859 41.5176L28.7879 36.1176L23.7781 28.7043C21.0215 24.6286 18.7537 21.2958 18.7341 21.2958C18.7146 21.2909 18.695 24.5846 18.6852 28.6065C18.6706 35.6485 18.6657 35.9319 18.5777 36.0981C18.4506 36.3375 18.3529 36.4353 18.1476 36.5428C17.9912 36.621 17.8544 36.6356 17.1163 36.6356H16.2708L16.0459 36.4939C15.8993 36.4011 15.7918 36.2789 15.7185 36.1372L15.6158 35.9173L15.6256 26.1191L15.6403 16.316L15.7918 16.1255C15.87 16.0228 16.0362 15.8909 16.1535 15.8274C16.3539 15.7296 16.4321 15.7198 17.2776 15.7198C18.2747 15.7198 18.4409 15.7589 18.6999 16.0424C18.7732 16.1206 21.4858 20.206 24.7312 25.1271C27.9765 30.0481 32.4145 36.7676 34.5943 40.0662L38.5533 46.0624L38.7537 45.9305C40.5279 44.7772 42.4047 43.1352 43.8905 41.4248C47.0528 37.7938 49.0909 33.3663 49.7752 28.6456C49.9756 27.2724 50 26.8668 50 25.0049C50 23.143 49.9756 22.7374 49.7752 21.3642C48.4164 11.9765 41.7351 4.0891 32.6735 1.16676C31.0753 0.648748 29.3744 0.292007 27.4682 0.0769845C26.999 0.0281158 23.7683 -0.0256398 23.3627 0.0134552ZM33.5973 15.1334C33.8319 15.2507 34.0225 15.4755 34.0909 15.7101C34.13 15.8371 34.1398 18.5542 34.13 24.6775L34.1153 33.4641L32.566 31.089L31.0117 28.714V22.3269C31.0117 18.1975 31.0313 15.8762 31.0606 15.7638C31.1388 15.4902 31.3099 15.2751 31.5445 15.1481C31.7449 15.0455 31.8182 15.0357 32.5855 15.0357C33.3089 15.0357 33.436 15.0455 33.5973 15.1334Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_748_15">
          <rect width="50" height="50" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  chocity: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path d="M68.39,0C30.63,0,0,30.63,0,68.39s30.63,68.39,68.39,68.39,68.39-30.63,68.39-68.39S106.16,0,68.39,0Zm0,130.84c-34.45,0-62.45-28-62.45-62.45S33.94,5.94,68.39,5.94s62.45,28,62.45,62.45-28,62.45-62.45,62.45Z" />
      <path d="M96.07,37.56c-4.86-4.86-11.54-7.5-18.58-7.5s-13.72,2.64-18.58,7.5-7.5,11.54-7.5,18.58c0,4.8,1.31,9.43,3.8,13.44l18.58,29.24,18.58-29.24c2.49-4.01,3.8-8.64,3.8-13.44,0-7.04-2.64-13.72-7.5-18.58Zm-18.58,26.49c-4.36,0-7.91-3.55-7.91-7.91s3.55-7.91,7.91-7.91,7.91,3.55,7.91,7.91-3.55,7.91-7.91,7.91Z" />
    </svg>
  ),
  python: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z" />
      <path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z" />
    </svg>
  ),
};
