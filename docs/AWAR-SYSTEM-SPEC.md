# AWAR Design System — Complete Specification

> "Algorithmic Warfare" — Terminal-inspired, ASCII aesthetic, React component library.
> Feed this file to Claude Code as project context to implement the system.

---

## Brand Identity

- **Name:** AWAR (compact of "Algorithmic Warfare")
- **Token namespace prefix:** `aw` → `--aw-ref-*` (primitive), `--aw-sys-*` (semantic), `--aw-[component]-*` (component)
- **Colors:** #773333 (dark maroon — brand identity) × #FF9944 (warm amber — accent/interactive)
- **Aesthetic:** Terminal-inspired, MS-DOS/CRT, monospace-only, zero border-radius, no shadows, ASCII box-drawing borders
- **References:** SRCL (sacred.computer) for terminal component patterns, oh-my-logo for ASCII art aesthetic

### Logo Mark

The AWAR mark is a brush-stroke rendering of the letters "awar" — a single-path SVG. The source file is `logo.svg` (512×512 viewBox, white fill on transparent).

```svg
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.7008 383.17C58.9742 382.59 60.2224 381.326 60.4746 380.362C60.7269 379.397 61.6552 378.608 62.5376 378.608C63.8113 378.608 64.0299 378.048 63.5987 375.892C63.219 373.993 63.4651 373.018 64.4156 372.653C65.2843 372.32 65.7757 372.716 65.7757 373.75C65.7757 374.64 66.6159 376.936 67.6428 378.852C69.8722 383.012 69.9951 384.758 68.1095 385.481C67.3393 385.777 66.7092 387.082 66.7092 388.382C66.7092 390.729 64.8798 391.401 60.1744 390.783C56.2376 390.265 54.4182 384.666 57.7008 383.17ZM70.4372 363.065C70.8821 361.963 71.6957 360.782 72.2451 360.443C72.7945 360.103 73.2441 358.825 73.2441 357.601C73.2441 356.378 73.6642 355.118 74.1777 354.8C74.6911 354.483 75.1261 353.513 75.1442 352.645C75.1629 351.776 76.6042 348.984 78.3484 346.44C80.0925 343.895 81.3131 341.479 81.0608 341.071C80.8085 340.663 80.9694 340.329 81.4181 340.329C82.5592 340.329 85.1297 334.679 85.9304 330.41C86.2989 328.446 87.17 326.269 87.8661 325.572C88.5622 324.876 88.893 323.92 88.6012 323.448C88.3093 322.976 88.481 322.59 88.9821 322.59C90.0024 322.59 91.8981 315.104 92.5876 308.352C92.9097 305.199 92.7055 303.917 91.8809 303.917C91.0355 303.917 90.8741 302.63 91.2848 299.162C91.7511 295.224 91.6132 294.497 90.4812 294.931C88.8445 295.559 88.6603 293.541 90.2128 291.989C90.9839 291.218 91.661 291.181 92.487 291.867C93.3106 292.55 94.2754 292.515 95.706 291.75C96.8295 291.148 98.7605 290.545 99.9972 290.409C101.234 290.274 102.391 290.001 102.568 289.804C105.76 286.251 112.454 276.149 112.454 274.885C112.454 273.955 112.82 272.23 113.268 271.05C113.715 269.871 114.579 267.225 115.186 265.171C116.397 261.075 120.063 252.374 120.89 251.633C121.177 251.376 121.467 250.262 121.536 249.156C121.721 246.135 126.975 233.651 133.13 221.601C136.009 215.966 137.278 207.777 135.455 206.6C134.682 206.101 134.703 205.91 135.529 205.899C136.155 205.892 136.425 205.255 136.129 204.485C135.834 203.714 136.057 203.084 136.626 203.084C137.194 203.084 137.659 202.429 137.659 201.629C137.659 200.828 138.043 200.411 138.513 200.701C138.983 200.991 139.511 200.796 139.687 200.268C140.639 197.411 162.327 197.537 167.792 200.431C169.493 201.332 169.857 207.359 168.271 208.34C167.865 208.591 167.533 209.981 167.533 211.428C167.533 212.875 166.885 214.597 166.093 215.254C165.094 216.084 164.951 216.748 165.626 217.423C166.161 217.958 166.599 218.987 166.599 219.709C166.599 220.431 167.649 221.848 168.933 222.857C170.217 223.867 171.267 225.648 171.267 226.815C171.267 227.982 172.107 229.697 173.134 230.627C174.161 231.556 175.001 233.067 175.001 233.984C175.001 234.901 175.421 235.911 175.935 236.228C176.448 236.546 176.868 237.398 176.868 238.123C176.868 238.848 177.898 241.692 179.156 244.444C180.415 247.195 182.067 252.434 182.829 256.086C185.934 270.982 196.473 284.331 196.473 273.369C196.473 272.114 196.883 271.383 197.406 271.707C197.92 272.024 198.34 271.394 198.34 270.306C198.34 269.034 198.729 268.57 199.432 269.004C200.14 269.442 200.337 269.191 199.992 268.292C199.688 267.5 200.221 266.429 201.234 265.797C202.209 265.187 203.008 264.045 203.008 263.258C203.008 262.471 203.828 260.69 204.831 259.298C205.834 257.907 207.789 253.437 209.177 249.365C210.564 245.293 212.894 240.191 214.355 238.026C215.816 235.861 217.011 233.676 217.011 233.17C217.011 231.398 228.267 222.442 233.582 219.985C238.875 217.539 243.15 217.178 243.15 219.177C243.15 219.74 243.428 219.924 243.767 219.585C244.737 218.614 247.18 222.71 247.524 225.884C248.844 238.049 248.921 238.353 250.935 239.327C252.045 239.864 252.428 240.332 251.786 240.367C251.144 240.4 250.619 241.113 250.619 241.947C250.619 243.135 250.011 243.343 247.818 242.904C246.067 242.554 245.017 242.728 245.017 243.368C245.017 244.02 244.471 243.94 243.516 243.147C242.247 242.093 241.834 242.148 240.846 243.499C240.203 244.378 239.235 245.098 238.695 245.098C236.695 245.098 239.506 254.702 243.605 261.867C245.64 265.424 243.73 267.111 240.373 264.72C238.96 263.715 237.537 263.16 237.21 263.487C236.883 263.814 236.615 263.602 236.615 263.016C236.615 261.435 231.549 259.106 229.123 259.574C227.963 259.797 226.373 259.622 225.591 259.183C224.799 258.74 223.718 258.747 223.156 259.198C218.203 263.178 214.099 267.691 212.449 270.974C211.36 273.14 209.631 275.36 208.606 275.909C207.581 276.458 206.742 277.425 206.742 278.058C206.742 278.691 205.587 279.926 204.175 280.801C202.138 282.064 201.966 282.398 203.341 282.418C204.43 282.433 204.89 282.924 204.578 283.737C204.222 284.666 204.625 284.89 206.003 284.529C207.133 284.234 207.778 284.431 207.567 285.007C206.713 287.345 197.002 297.381 195.595 297.381C194.743 297.381 193.616 297.81 193.091 298.335C189.727 301.7 177.512 299.138 176.433 294.841C176.128 293.626 175.31 292.415 174.615 292.148C173.56 291.743 173.576 290.94 174.711 287.286C175.855 283.602 175.884 281.876 174.891 276.374C174.242 272.78 173.819 269.442 173.95 268.957C174.081 268.472 173.741 267.106 173.194 265.922C171.499 262.252 170.503 259.709 169.24 255.834C166.239 246.626 156.999 234.048 154.655 235.982C153.501 236.934 153.147 236.929 152.82 235.952C152.508 235.025 152.111 234.998 151.105 235.833C150.384 236.431 149.795 236.518 149.795 236.027C149.795 235.536 149.165 235.135 148.395 235.135C147.625 235.135 146.994 235.598 146.994 236.163C146.994 236.729 146.012 238.654 144.811 240.442C143.61 242.23 142.053 246.319 141.351 249.528C140.649 252.738 139.741 255.364 139.333 255.364C138.926 255.364 138.592 256.379 138.592 257.62C138.592 258.861 138.136 260.028 137.579 260.214C135.945 260.759 129.955 281.786 130.051 286.641C130.125 290.342 128.26 294.471 126.224 295.117C125.325 295.402 124.589 295.938 124.589 296.308C124.589 296.677 122.699 298.981 120.388 301.427C118.078 303.873 116.187 306.669 116.187 307.64C116.187 308.61 115.741 309.68 115.196 310.017C114.651 310.354 113.793 311.534 113.289 312.64C111.881 315.729 110.098 318.671 108.538 320.479C107.759 321.381 106.146 324.115 104.954 326.554C103.762 328.993 102.516 330.988 102.185 330.988C101.854 330.988 100.633 333.194 99.4719 335.89C96.1796 343.533 95.3916 344.993 94.5579 344.993C94.1312 344.993 93.7821 345.833 93.7821 346.86C93.7821 347.887 93.4457 348.727 93.0345 348.727C92.6233 348.727 91.358 350.64 90.2226 352.977C89.0871 355.314 87.7431 356.97 87.2359 356.656C86.7286 356.343 86.3124 356.846 86.3109 357.775C86.3074 360.237 74.5046 372.401 73.8287 370.639C73.5394 369.885 72.4491 369.268 71.4061 369.268C69.343 369.268 68.9496 366.748 70.4369 363.061L70.4372 363.065ZM244.618 270.073C245.009 269.688 247.198 269.373 249.483 269.373C253.053 269.373 253.574 269.131 253.189 267.659C252.823 266.258 253.167 266.028 255.086 266.394C256.567 266.677 257.21 266.484 256.83 265.87C256.499 265.335 256.793 263.554 257.484 261.911C258.717 258.979 258.153 255.346 255.924 251.867C255.447 251.123 255.675 250.7 256.554 250.7C257.312 250.7 258.078 250.26 258.258 249.721C258.437 249.183 261.098 248.495 264.17 248.192C272.871 247.335 277.796 239.863 278.929 225.803C279.019 224.69 279.407 223.464 279.792 223.079C280.177 222.694 280.492 221.674 280.492 220.813C280.492 219.951 281.347 218.472 282.392 217.526C283.437 216.58 284.082 215.259 283.826 214.59C283.549 213.869 284.267 213.146 285.587 212.814C287.329 212.377 288.051 211.266 288.903 207.716C289.502 205.219 290.585 202.685 291.31 202.083C292.035 201.481 292.629 200.485 292.629 199.87C292.629 199.256 293.941 197.311 295.544 195.55C297.148 193.789 300.117 188.776 302.142 184.412C308.994 169.646 309.459 168.746 310.847 167.594C311.609 166.962 312.233 166.075 312.233 165.625C312.233 165.174 313.073 163.965 314.1 162.938C315.127 161.911 315.967 160.416 315.967 159.615C315.967 158.815 316.387 158.419 316.901 158.737C317.45 159.076 317.834 158.072 317.834 156.302C317.834 154.646 318.1 153.556 318.424 153.88C319.75 155.206 322.674 152.6 321.478 151.158C320.558 150.049 320.182 150.016 319.565 150.99C318.983 151.908 318.793 151.83 318.782 150.667C318.775 149.823 319.398 148.891 320.168 148.596C320.976 148.286 321.569 146.89 321.569 145.298C321.569 143.781 322.829 139.391 324.369 135.544C325.91 131.697 327.17 128.143 327.17 127.646C327.17 127.15 327.975 126.533 328.958 126.276C329.941 126.019 330.887 124.847 331.058 123.673C331.23 122.498 331.963 121.342 332.687 121.103C333.587 120.806 333.819 121.147 333.42 122.186C333.101 123.02 333.138 123.658 333.505 123.603C335.298 123.336 336.561 123.814 336.087 124.58C335.285 125.878 337.3 130.456 338.379 129.789C340.161 128.688 342.721 130.238 342.647 132.373C342.589 134.03 343.029 134.412 344.777 134.221C346.479 134.035 346.847 134.328 346.394 135.507C346.044 136.419 346.472 137.537 347.459 138.285C348.458 139.044 348.649 139.549 347.941 139.567C347.3 139.586 346.775 140.336 346.775 141.24C346.775 142.144 345.797 143.938 344.602 145.226C343.408 146.515 342.607 148.099 342.823 148.747C343.039 149.395 342.861 149.862 342.428 149.785C340.421 149.429 339.465 150.028 338.947 151.967C338.639 153.123 336.949 155.703 335.192 157.7C333.435 159.698 332.184 161.819 332.412 162.413C332.64 163.008 331.825 164.435 330.601 165.585C329.051 167.041 328.509 168.373 328.815 169.975C329.07 171.308 328.816 172.274 328.212 172.274C327.639 172.274 327.17 173.24 327.17 174.421C327.17 175.602 326.803 176.968 326.355 177.456C325.906 177.944 324.849 181.914 324.005 186.279C322.804 192.491 321.967 194.628 320.153 196.117C318.878 197.163 317.835 198.68 317.835 199.487C317.835 200.295 316.364 202.515 314.567 204.42C312.77 206.326 311.3 208.486 311.3 209.219C311.3 209.953 310.944 210.553 310.508 210.553C310.072 210.553 308.943 212.339 307.999 214.521C307.054 216.704 305.754 219.126 305.109 219.905C304.465 220.683 303.477 223.371 302.916 225.878C302.354 228.385 301.07 231.594 300.062 233.01C299.054 234.425 298.23 236.379 298.23 237.353C298.23 238.326 297.881 239.522 297.454 240.009C296.578 241.01 294.851 246.816 294.051 251.447C293.512 254.572 293.23 255.28 290.347 260.785C289.459 262.48 288.935 264.396 289.183 265.043C289.826 266.719 287.014 272.194 283.975 275.184C282.553 276.583 281.133 279.007 280.82 280.572C280.507 282.136 279.936 283.61 279.551 283.848C279.166 284.086 279.065 286.178 279.327 288.497C279.61 291.015 279.424 292.713 278.864 292.713C278.348 292.713 277.915 293.659 277.901 294.814C277.85 299.35 276.108 301.751 272.135 302.759C268.316 303.729 262.755 302.633 262.755 300.911C262.755 300.51 262.377 300.182 261.915 300.182C261.453 300.182 259.649 298.817 257.906 297.148C256.163 295.479 252.76 292.29 250.344 290.062C245.7 285.778 244.927 283.22 247.322 280.054C248.076 279.057 248.706 276.877 248.722 275.208C248.741 273.492 249.259 272.116 249.919 272.041C250.561 271.968 249.471 271.653 247.497 271.341C245.523 271.028 244.227 270.458 244.618 270.073ZM333.715 192.354C334.223 192.668 334.638 192.022 334.638 190.918C334.638 188.834 337.953 185.43 340.036 185.376C340.693 185.358 341.473 184.718 341.767 183.95C342.061 183.183 342.679 182.788 343.14 183.073C343.601 183.358 344.382 182.62 344.877 181.433C346.399 177.783 349.422 174.917 352.604 174.108C354.276 173.683 357.42 172.682 359.591 171.883C361.762 171.084 365.332 170.25 367.526 170.029C369.719 169.809 372.626 169.2 373.985 168.677C375.344 168.154 376.744 168.014 377.097 168.366C377.449 168.718 379.63 169.051 381.943 169.105C385.059 169.178 386.72 169.783 388.353 171.439C389.565 172.669 392.258 175.344 394.338 177.384C396.418 179.424 398.12 181.388 398.12 181.747C398.12 182.107 399.107 183.589 400.314 185.04C403.429 188.788 402.363 201.145 398.919 201.206C398.589 201.214 395.742 203.738 392.594 206.819C389.446 209.9 386.415 212.421 385.86 212.421C385.305 212.421 385.073 213 385.345 213.709C385.851 215.028 383.17 219.037 380.016 221.678C379.044 222.492 377.573 223.957 376.748 224.935C375.923 225.912 373.853 228.223 372.147 230.07C364.364 238.499 364.696 249.224 372.934 255.506C374.518 256.714 378.502 260.293 381.787 263.46C385.072 266.627 388.621 269.491 389.672 269.825C390.724 270.159 391.585 270.963 391.585 271.612C391.585 272.261 392.74 273.38 394.152 274.099C401.658 277.921 408.389 283.233 408.389 285.335C408.389 285.845 409.344 287.218 410.511 288.386C411.679 289.553 412.702 291.419 412.786 292.532C412.87 293.645 414.245 295.927 415.841 297.603C417.437 299.278 420.055 302.645 421.659 305.084C423.262 307.523 424.923 309.519 425.35 309.519C425.777 309.519 426.126 310.056 426.126 310.711C426.126 311.367 427.363 313.258 428.874 314.912C430.385 316.567 432.347 319.148 433.233 320.649C434.119 322.149 435.817 323.897 437.005 324.533C438.193 325.169 439.407 326.453 439.703 327.386C440.294 329.246 446.519 334.726 448.044 334.729C449.872 334.732 456 342.162 456 344.375C456 347.534 453.226 352.676 451.814 352.134C451.16 351.884 450.205 352.101 449.691 352.614C448.744 353.561 444.335 349.661 423.931 329.826C418.781 324.819 414.228 320.723 413.812 320.723C413.397 320.723 413.037 320.197 413.013 319.555C412.987 318.914 411.343 317.128 409.354 315.588C407.366 314.047 405.39 312.067 404.963 311.188C403.761 308.71 393.383 298.315 392.111 298.315C391.487 298.315 390.011 297.287 388.83 296.03C387.649 294.773 385.527 293.49 384.114 293.18C382.702 292.87 380.152 291.587 378.449 290.33C376.746 289.074 374.771 288.045 374.061 288.045C372.54 288.045 367.313 283.038 367.313 281.582C367.313 281.029 366.923 280.576 366.447 280.576C365.971 280.576 364.493 278.276 363.164 275.466C361.834 272.655 359.971 269.94 359.023 269.433C358.075 268.925 356.731 267.129 356.036 265.44C354.589 261.924 351.699 259.179 349.397 259.134C348.529 259.115 347.559 258.682 347.241 258.169C346.924 257.655 345.954 257.235 345.086 257.235C342.502 257.234 336.503 251.289 336.523 248.75C336.549 245.371 341.738 237.629 343.976 237.629C345.001 237.629 345.841 237.191 345.841 236.656C345.841 234.318 364.267 220.823 367.459 220.823C368.319 220.823 370.391 219.038 372.064 216.855C373.736 214.673 375.557 212.466 376.11 211.951C379.443 208.847 380.706 204.023 380.477 195.272L380.382 191.66L375.014 192.294C372.062 192.643 368.525 192.898 367.155 192.862C365.784 192.825 363.925 193.535 363.024 194.439C362.122 195.343 360.092 196.502 358.514 197.016C356.935 197.529 355.853 198.256 356.11 198.631C357.418 200.543 352.183 202.27 346.522 201.794C338.179 201.092 334.74 199.681 334.088 196.689C333.791 195.328 333.378 193.668 333.17 192.999C332.963 192.331 333.208 192.04 333.715 192.354Z" fill="currentColor"/>
</svg>
```

Note: The SVG fill is set to `currentColor` so it inherits text color from the parent. The source file uses `fill="white"` — the component normalizes this.

### Logo Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 16px | Favicon, tab bar |
| `sm` | 24px | Inline with text, nav bar |
| `md` | 32px | Default, headers |
| `lg` | 48px | Hero sections, cards |
| `xl` | 64px | Splash screens, about pages |
| `2xl` | 96px | Marketing, print |

### Logo Color Variants

| Variant | Mark color | Background | Usage |
|---------|-----------|------------|-------|
| `default` | `--aw-sys-color-text-primary` | transparent | Standard usage on dark/light surfaces. Adapts to mode. |
| `brand` | `--aw-ref-color-neutral-0` (white) | `--aw-ref-color-maroon-500` (#773333) | Hero blocks, identity areas. The original logo treatment. |
| `accent` | `--aw-ref-color-amber-500` (#FF9944) | transparent | Highlighted placement, loading screens. |
| `mono` | `--aw-ref-color-neutral-400` | transparent | Subdued, watermark, footer. |
| `inverse` | `--aw-sys-color-text-inverse` | transparent | On brand-colored backgrounds. |

### Logo Clear Space

Minimum clear space around the mark = **1× the logo height** on all sides. At `md` (32px), that's 32px of padding. No other elements, text, or borders may intrude into this zone.

```
┌──────────────────────────┐
│                          │
│    ┌──────────────┐      │
│    │              │      │
│    │  AWAR mark   │      │
│    │              │      │
│    └──────────────┘      │
│    ←── 1× height ──→     │
│                          │
└──────────────────────────┘
```

### Wordmark

"AWAR" rendered in the system monospace font:

| Property | Value |
|----------|-------|
| Font | `--aw-ref-font-mono` |
| Weight | `--aw-ref-font-weight-bold` (700) |
| Letter spacing | `0.15em` |
| Transform | `uppercase` |
| Size | Follows the same size scale as the logo mark |

The wordmark can optionally include the subtitle "ALGORITHMIC WARFARE" at caption size below the main text, separated by `--aw-sys-space-gap-xs` (2px).

### Logo Lockup

The mark + wordmark composed together. Two orientations:

**Horizontal lockup** (default):
```
[mark] ── gap ── AWAR
                 ALGORITHMIC WARFARE (optional subtitle)
```
- Gap between mark and wordmark = `--aw-sys-space-gap-lg` (16px)
- Mark and wordmark vertically center-aligned
- Subtitle right-aligned under wordmark

**Stacked lockup** (compact/mobile):
```
    [mark]
     AWAR
ALGORITHMIC WARFARE (optional)
```
- Mark centered above wordmark
- Gap = `--aw-sys-space-gap-md` (8px)
- All elements center-aligned

### Favicon / App Icon

The mark rendered on the #773333 maroon background at standard icon sizes:

| Asset | Size | Format | Notes |
|-------|------|--------|-------|
| `favicon.ico` | 16×16, 32×32 | ICO | Multi-resolution |
| `favicon.svg` | scalable | SVG | White mark on maroon, with `<rect>` background |
| `apple-touch-icon.png` | 180×180 | PNG | White mark on maroon, no transparency |
| `icon-192.png` | 192×192 | PNG | PWA manifest |
| `icon-512.png` | 512×512 | PNG | PWA manifest, store listing |
| `og-image.png` | 1200×630 | PNG | Social media card — mark + wordmark on maroon |

---

## Part 1: Twelve Visual Seed Decisions

These 12 decisions generate the complete primitive and semantic token system.

### Typography (3 decisions)

| # | Decision | Value |
|---|----------|-------|
| 1 | Brand typeface | Single monospace stack: `"Berkeley Mono", "JetBrains Mono", "Fira Code", "IBM Plex Mono", "Cascadia Code", "Source Code Pro", ui-monospace, monospace`. No separate body face. Hierarchy via weight, size, color — never font-family switching. |
| 2 | Base font size | 14px. Gives ~80 chars per 672px container (classic 80-column terminal width). |
| 3 | Type scale ratio | 1.200 (Minor Third). Snapped values: 11, 12, 14, 16, 20, 24, 28. Line-heights snap to 4px grid: 16, 16, 20, 24, 28, 32, 36. |

### Spacing (2 decisions)

| # | Decision | Value |
|---|----------|-------|
| 4 | Base spacing unit | 4px. Divides into 20px line-height. Tightest viable quantum for monospace grids. |
| 5 | Scale progression | Linear-hybrid: `2, 4, 8, 12, 16, 24, 32, 48, 64, 96`. 2px step for tight icon-to-text gaps, large values for layout. |

### Color (3 decisions)

| # | Decision | Value |
|---|----------|-------|
| 6 | Primary brand color | #773333 (maroon) as identity surface, #FF9944 (amber) as accent/interactive. |
| 7 | Gray temperature | Warm, tinted toward maroon hue (~10° red-brown). Cold neutrals would clash with warm palette. |
| 8 | Secondary/tertiary override | Yes — intentionally constrained two-color system. Maroon, amber, warm grays, plus hardcoded semantic feedback colors. No algorithmic derivation. |

### Shape (1 decision)

| # | Decision | Value |
|---|----------|-------|
| 9 | Base corner radius | 0px everywhere. No radius scale. Consistent with MS-DOS boxes, ASCII box-drawing, terminal windows. |

### Elevation (2 decisions)

| # | Decision | Value |
|---|----------|-------|
| 10 | Elevation levels | 3: flat, raised, overlay. Expressed through border brightness and background tone shifts, not shadows. |
| 11 | Dark-mode surface strategy | Tone-based only (no shadows). Darker = recessed, lighter = elevated. ASCII borders for visual separation. |

### Density (1 decision)

| # | Decision | Value |
|---|----------|-------|
| 12 | Default density | Compact. Component height = 28px (4px + 20px line + 4px). Dense mode = 24px. |

---

## Part 2: Thirteen Component Architecture Decisions

These 13 decisions define how the token system becomes a shippable React component library.

### Theme Infrastructure (3 decisions)

| # | Decision | Value |
|---|----------|-------|
| 13 | Styling technology | CSS custom properties as the token layer + CSS Modules for component scoping. Zero runtime, minimal tooling. |
| 14 | Token source format | TypeScript object as source of truth → generated CSS custom properties file. Type safety in development, zero-runtime CSS at delivery. |
| 15 | Mode switching | `data-mode` attribute on `<html>` managed by `<AWARProvider>`. Resolution chain: localStorage → `data-mode` attr → `defaultMode` prop → `'dark'`. React context provides `{ mode, toggle, setMode }` via `useAWARTheme` hook. CSS theming is still pure CSS (`[data-mode]` selectors), but the Provider manages the state and DOM sync. |

### Component Architecture (5 decisions)

| # | Decision | Value |
|---|----------|-------|
| 16 | Composition model | Compound components for multi-part (Card, Modal, Table). Flat exports for single-purpose (Button, Badge, Input). Atomic taxonomy for folder organization only. |
| 17 | Layout primitives | `Stack` (vertical), `Inline` (horizontal), `Grid`. No generic `Box`. |
| 18 | Token overrides | Variants prop for the 80% case + CSS custom property overrides (`--aw-[component]-[property]`) for the 20%. |
| 19 | Polymorphic `as` prop | No `as` on interactive components. Limited `as` on layout primitives only (Stack, Inline, Grid). |
| 20 | Accessibility | Radix Primitives for complex interactive components (Dialog, DropdownMenu, Popover, Tooltip, Tabs). Roll-your-own ARIA for simple components (Button, Badge, Card, Alert). |

### Interaction & Motion (3 decisions)

| # | Decision | Value |
|---|----------|-------|
| 21 | Transitions | Subtle: 100ms ease-out on background-color, border-color, opacity. Modals and dropdowns appear instantly (no slide/fade). |
| 22 | Cursors | Standard web cursors. `pointer` on buttons/links, `text` on inputs, `not-allowed` on disabled. Terminal feel comes from visuals, not cursor confusion. |
| 23 | Keyboard shortcuts | Colocated shortcut layer. Shortcuts are declared inside the components they belong to via `useShortcut` hook — no central registry. Scoped by default (fires only when focus is inside component subtree), optionally global. Collision: scoped wins over global when its region has focus. Hints rendered inline via `Kbd` component next to the action they trigger. |

### Scope & Delivery (2 decisions)

| # | Decision | Value |
|---|----------|-------|
| 24 | Component set | All four tiers + branding. Branding: Logo, Wordmark, LogoLockup. Tier 0 (Layout): Stack, Inline, Grid. Tier 1 (Primitives): Text, Button, Input, Badge, Divider, Kbd. Tier 2 (Containers): Card, Alert, Table, ActionBar, List. Tier 3 (Overlays): Modal, Dropdown, Tooltip, Popover. |
| 25 | Package target | Installed dependency with Provider model (`npm install awar-ui`). Consumer wraps their app in `<AWARProvider>`, which auto-injects token CSS and provides theme context. Similar to Chakra UI, MUI, and Radix Themes. |

---

## Part 3: Complete Token System

### Three-Tier Architecture

```
Tier 1: Primitive (--aw-ref-*)    → Raw, context-free values. Never used directly by components.
Tier 2: Semantic (--aw-sys-*)     → Assign meaning by aliasing primitives. Mode-switching happens here.
Tier 3: Component (--aw-[comp]-*) → Scope to specific components. Reference semantic tokens.
```

Dependency chain: component → semantic → primitive.
New components reference semantic tokens, never primitives directly.

---

### Primitive Tokens

#### Color Primitives

```css
/* ── Brand: Maroon ── */
--aw-ref-color-maroon-100:  #F2E0E0;
--aw-ref-color-maroon-200:  #D4A3A3;
--aw-ref-color-maroon-300:  #B06666;
--aw-ref-color-maroon-400:  #994444;
--aw-ref-color-maroon-500:  #773333;
--aw-ref-color-maroon-600:  #5C2828;
--aw-ref-color-maroon-700:  #421D1D;
--aw-ref-color-maroon-800:  #2E1414;
--aw-ref-color-maroon-900:  #1A0C0C;

/* ── Brand: Amber ── */
--aw-ref-color-amber-100:   #FFF0D9;
--aw-ref-color-amber-200:   #FFDCA3;
--aw-ref-color-amber-300:   #FFC06D;
--aw-ref-color-amber-400:   #FFB055;
--aw-ref-color-amber-500:   #FF9944;
--aw-ref-color-amber-600:   #E07A20;
--aw-ref-color-amber-700:   #B85E10;
--aw-ref-color-amber-800:   #8A4508;
--aw-ref-color-amber-900:   #5C2D00;

/* ── Warm Neutrals (red-brown tinted) ── */
--aw-ref-color-neutral-0:   #FFFFFF;
--aw-ref-color-neutral-50:  #FAF7F5;
--aw-ref-color-neutral-100: #F0EBE8;
--aw-ref-color-neutral-200: #DBD4D0;
--aw-ref-color-neutral-300: #B8AEAA;
--aw-ref-color-neutral-400: #958A85;
--aw-ref-color-neutral-500: #736661;
--aw-ref-color-neutral-600: #524846;
--aw-ref-color-neutral-700: #3A3230;
--aw-ref-color-neutral-800: #252020;
--aw-ref-color-neutral-900: #171312;
--aw-ref-color-neutral-950: #0D0B0A;
--aw-ref-color-neutral-1000:#000000;

/* ── Feedback (hardcoded conventions) ── */
--aw-ref-color-red-500:     #CC3333;
--aw-ref-color-red-300:     #E87070;
--aw-ref-color-green-500:   #33AA55;
--aw-ref-color-green-300:   #66CC88;
--aw-ref-color-yellow-500:  #CCAA00;
--aw-ref-color-yellow-300:  #EEDD55;
--aw-ref-color-blue-500:    #4488BB;
--aw-ref-color-blue-300:    #77AADD;
```

#### Typography Primitives

```css
/* ── Font Family ── */
--aw-ref-font-mono: "Berkeley Mono", "JetBrains Mono", "Fira Code", "IBM Plex Mono", "Cascadia Code", "Source Code Pro", ui-monospace, monospace;

/* ── Font Size ── */
--aw-ref-font-size-xs:   11px;
--aw-ref-font-size-sm:   12px;
--aw-ref-font-size-md:   14px;   /* base */
--aw-ref-font-size-lg:   16px;
--aw-ref-font-size-xl:   20px;
--aw-ref-font-size-2xl:  24px;
--aw-ref-font-size-3xl:  28px;

/* ── Line Height (4px grid) ── */
--aw-ref-line-height-xs:  16px;
--aw-ref-line-height-sm:  16px;
--aw-ref-line-height-md:  20px;
--aw-ref-line-height-lg:  24px;
--aw-ref-line-height-xl:  28px;
--aw-ref-line-height-2xl: 32px;
--aw-ref-line-height-3xl: 36px;

/* ── Font Weight ── */
--aw-ref-font-weight-regular: 400;
--aw-ref-font-weight-medium:  500;
--aw-ref-font-weight-bold:    700;

/* ── Letter Spacing ── */
--aw-ref-letter-spacing-normal: 0em;
--aw-ref-letter-spacing-wide:   0.05em;
--aw-ref-letter-spacing-wider:  0.1em;

/* ── Text Transform ── */
--aw-ref-text-transform-none:      none;
--aw-ref-text-transform-uppercase: uppercase;
```

#### Spacing Primitives

```css
--aw-ref-space-0:   0px;
--aw-ref-space-1:   2px;
--aw-ref-space-2:   4px;
--aw-ref-space-3:   8px;
--aw-ref-space-4:   12px;
--aw-ref-space-5:   16px;
--aw-ref-space-6:   24px;
--aw-ref-space-7:   32px;
--aw-ref-space-8:   48px;
--aw-ref-space-9:   64px;
--aw-ref-space-10:  96px;
```

#### Shape Primitives

```css
--aw-ref-radius-none:          0px;

--aw-ref-border-width-thin:    1px;
--aw-ref-border-width-medium:  2px;
--aw-ref-border-width-thick:   4px;

--aw-ref-border-style-solid:   solid;
--aw-ref-border-style-dashed:  dashed;
```

#### Elevation Primitives

```css
--aw-ref-shadow-none:       none;

--aw-ref-z-base:            0;
--aw-ref-z-raised:          10;
--aw-ref-z-dropdown:        100;
--aw-ref-z-sticky:          200;
--aw-ref-z-overlay:         300;
--aw-ref-z-modal:           400;

--aw-ref-opacity-disabled:  0.38;
--aw-ref-opacity-hover:     0.08;
--aw-ref-opacity-pressed:   0.16;
--aw-ref-opacity-overlay:   0.60;
```

---

### Semantic Tokens — Dark Mode (default)

Dark mode is the primary mode. Terminal-first.

#### Color Semantics (Dark)

```css
/* Surfaces (depth via tone — no shadows) */
--aw-sys-color-bg-root:            var(--aw-ref-color-neutral-950);
--aw-sys-color-bg-surface:         var(--aw-ref-color-neutral-900);
--aw-sys-color-bg-surface-raised:  var(--aw-ref-color-neutral-800);
--aw-sys-color-bg-surface-overlay: var(--aw-ref-color-neutral-700);

/* Brand surfaces */
--aw-sys-color-bg-brand:           var(--aw-ref-color-maroon-500);
--aw-sys-color-bg-brand-subtle:    var(--aw-ref-color-maroon-800);

/* Text */
--aw-sys-color-text-primary:       var(--aw-ref-color-neutral-100);
--aw-sys-color-text-secondary:     var(--aw-ref-color-neutral-400);
--aw-sys-color-text-muted:         var(--aw-ref-color-neutral-500);
--aw-sys-color-text-inverse:       var(--aw-ref-color-neutral-950);
--aw-sys-color-text-brand:         var(--aw-ref-color-maroon-300);
--aw-sys-color-text-accent:        var(--aw-ref-color-amber-500);

/* Interactive */
--aw-sys-color-interactive:        var(--aw-ref-color-amber-500);
--aw-sys-color-interactive-hover:  var(--aw-ref-color-amber-400);
--aw-sys-color-interactive-active: var(--aw-ref-color-amber-600);
--aw-sys-color-interactive-muted:  var(--aw-ref-color-amber-800);

/* Borders */
--aw-sys-color-border-default:     var(--aw-ref-color-neutral-700);
--aw-sys-color-border-strong:      var(--aw-ref-color-neutral-500);
--aw-sys-color-border-interactive: var(--aw-ref-color-amber-500);
--aw-sys-color-border-brand:       var(--aw-ref-color-maroon-400);

/* Feedback */
--aw-sys-color-feedback-error:          var(--aw-ref-color-red-500);
--aw-sys-color-feedback-error-text:     var(--aw-ref-color-red-300);
--aw-sys-color-feedback-success:        var(--aw-ref-color-green-500);
--aw-sys-color-feedback-success-text:   var(--aw-ref-color-green-300);
--aw-sys-color-feedback-warning:        var(--aw-ref-color-yellow-500);
--aw-sys-color-feedback-warning-text:   var(--aw-ref-color-yellow-300);
--aw-sys-color-feedback-info:           var(--aw-ref-color-blue-500);
--aw-sys-color-feedback-info-text:      var(--aw-ref-color-blue-300);

/* Selection & focus */
--aw-sys-color-selection-bg:       var(--aw-ref-color-amber-900);
--aw-sys-color-focus-ring:         var(--aw-ref-color-amber-500);
```

#### Color Semantics (Light) — overrides only

```css
--aw-sys-color-bg-root:            var(--aw-ref-color-neutral-50);
--aw-sys-color-bg-surface:         var(--aw-ref-color-neutral-0);
--aw-sys-color-bg-surface-raised:  var(--aw-ref-color-neutral-100);
--aw-sys-color-bg-surface-overlay: var(--aw-ref-color-neutral-200);

--aw-sys-color-bg-brand:           var(--aw-ref-color-maroon-500);
--aw-sys-color-bg-brand-subtle:    var(--aw-ref-color-maroon-100);

--aw-sys-color-text-primary:       var(--aw-ref-color-neutral-900);
--aw-sys-color-text-secondary:     var(--aw-ref-color-neutral-600);
--aw-sys-color-text-muted:         var(--aw-ref-color-neutral-400);
--aw-sys-color-text-inverse:       var(--aw-ref-color-neutral-50);
--aw-sys-color-text-brand:         var(--aw-ref-color-maroon-600);
--aw-sys-color-text-accent:        var(--aw-ref-color-amber-700);

--aw-sys-color-interactive:        var(--aw-ref-color-amber-700);
--aw-sys-color-interactive-hover:  var(--aw-ref-color-amber-600);
--aw-sys-color-interactive-active: var(--aw-ref-color-amber-800);
--aw-sys-color-interactive-muted:  var(--aw-ref-color-amber-100);

--aw-sys-color-border-default:     var(--aw-ref-color-neutral-200);
--aw-sys-color-border-strong:      var(--aw-ref-color-neutral-400);
--aw-sys-color-border-interactive: var(--aw-ref-color-amber-700);
--aw-sys-color-border-brand:       var(--aw-ref-color-maroon-400);

--aw-sys-color-feedback-error:          var(--aw-ref-color-red-500);
--aw-sys-color-feedback-error-text:     var(--aw-ref-color-red-500);
--aw-sys-color-feedback-success:        var(--aw-ref-color-green-500);
--aw-sys-color-feedback-success-text:   var(--aw-ref-color-green-500);
--aw-sys-color-feedback-warning:        var(--aw-ref-color-yellow-500);
--aw-sys-color-feedback-warning-text:   var(--aw-ref-color-yellow-500);
--aw-sys-color-feedback-info:           var(--aw-ref-color-blue-500);
--aw-sys-color-feedback-info-text:      var(--aw-ref-color-blue-500);

--aw-sys-color-selection-bg:       var(--aw-ref-color-amber-100);
--aw-sys-color-focus-ring:         var(--aw-ref-color-amber-600);
```

#### Typography Semantics (shared across modes)

```css
/* Display — ASCII art headers, hero text */
--aw-sys-type-display-size:         var(--aw-ref-font-size-3xl);
--aw-sys-type-display-line-height:  var(--aw-ref-line-height-3xl);
--aw-sys-type-display-weight:       var(--aw-ref-font-weight-bold);
--aw-sys-type-display-tracking:     var(--aw-ref-letter-spacing-normal);
--aw-sys-type-display-transform:    var(--aw-ref-text-transform-uppercase);

/* Heading — section titles, panel headers */
--aw-sys-type-heading-size:         var(--aw-ref-font-size-lg);
--aw-sys-type-heading-line-height:  var(--aw-ref-line-height-lg);
--aw-sys-type-heading-weight:       var(--aw-ref-font-weight-bold);
--aw-sys-type-heading-tracking:     var(--aw-ref-letter-spacing-wide);
--aw-sys-type-heading-transform:    var(--aw-ref-text-transform-uppercase);

/* Subheading — card titles, secondary headings */
--aw-sys-type-subheading-size:         var(--aw-ref-font-size-md);
--aw-sys-type-subheading-line-height:  var(--aw-ref-line-height-md);
--aw-sys-type-subheading-weight:       var(--aw-ref-font-weight-medium);
--aw-sys-type-subheading-tracking:     var(--aw-ref-letter-spacing-wide);
--aw-sys-type-subheading-transform:    var(--aw-ref-text-transform-uppercase);

/* Body — default reading text */
--aw-sys-type-body-size:            var(--aw-ref-font-size-md);
--aw-sys-type-body-line-height:     var(--aw-ref-line-height-md);
--aw-sys-type-body-weight:          var(--aw-ref-font-weight-regular);
--aw-sys-type-body-tracking:        var(--aw-ref-letter-spacing-normal);

/* Label — buttons, badges, form labels */
--aw-sys-type-label-size:           var(--aw-ref-font-size-sm);
--aw-sys-type-label-line-height:    var(--aw-ref-line-height-sm);
--aw-sys-type-label-weight:         var(--aw-ref-font-weight-medium);
--aw-sys-type-label-tracking:       var(--aw-ref-letter-spacing-wider);
--aw-sys-type-label-transform:      var(--aw-ref-text-transform-uppercase);

/* Caption — timestamps, metadata, footnotes */
--aw-sys-type-caption-size:         var(--aw-ref-font-size-xs);
--aw-sys-type-caption-line-height:  var(--aw-ref-line-height-xs);
--aw-sys-type-caption-weight:       var(--aw-ref-font-weight-regular);
--aw-sys-type-caption-tracking:     var(--aw-ref-letter-spacing-normal);
```

All type roles use `--aw-ref-font-mono` as their font-family. Omitted from each role to avoid redundancy.

#### Spacing Semantics (shared across modes)

```css
/* Component internals (padding) */
--aw-sys-space-inset-xs:    var(--aw-ref-space-1);    /*  2px */
--aw-sys-space-inset-sm:    var(--aw-ref-space-2);    /*  4px */
--aw-sys-space-inset-md:    var(--aw-ref-space-3);    /*  8px */
--aw-sys-space-inset-lg:    var(--aw-ref-space-5);    /* 16px */
--aw-sys-space-inset-xl:    var(--aw-ref-space-6);    /* 24px */

/* Gaps between elements */
--aw-sys-space-gap-xs:      var(--aw-ref-space-1);    /*  2px */
--aw-sys-space-gap-sm:      var(--aw-ref-space-2);    /*  4px */
--aw-sys-space-gap-md:      var(--aw-ref-space-3);    /*  8px */
--aw-sys-space-gap-lg:      var(--aw-ref-space-5);    /* 16px */
--aw-sys-space-gap-xl:      var(--aw-ref-space-6);    /* 24px */

/* Layout-level spacing */
--aw-sys-space-layout-xs:   var(--aw-ref-space-5);    /* 16px */
--aw-sys-space-layout-sm:   var(--aw-ref-space-6);    /* 24px */
--aw-sys-space-layout-md:   var(--aw-ref-space-7);    /* 32px */
--aw-sys-space-layout-lg:   var(--aw-ref-space-8);    /* 48px */
--aw-sys-space-layout-xl:   var(--aw-ref-space-9);    /* 64px */

/* Component heights (density) */
--aw-sys-size-compact:      24px;   /* 2 + 20 + 2 */
--aw-sys-size-default:      28px;   /* 4 + 20 + 4 */
--aw-sys-size-comfortable:  36px;   /* 8 + 20 + 8 */
--aw-sys-size-large:        44px;   /* 12 + 20 + 12 */

/* Icons */
--aw-sys-size-icon-sm:      12px;
--aw-sys-size-icon-md:      16px;
--aw-sys-size-icon-lg:      20px;
```

#### Shape Semantics (shared across modes)

```css
--aw-sys-shape-radius:         var(--aw-ref-radius-none);  /* 0px everywhere */

--aw-sys-border-default:       var(--aw-ref-border-width-thin) var(--aw-ref-border-style-solid) var(--aw-sys-color-border-default);
--aw-sys-border-strong:        var(--aw-ref-border-width-thin) var(--aw-ref-border-style-solid) var(--aw-sys-color-border-strong);
--aw-sys-border-interactive:   var(--aw-ref-border-width-medium) var(--aw-ref-border-style-solid) var(--aw-sys-color-border-interactive);
--aw-sys-border-dashed:        var(--aw-ref-border-width-thin) var(--aw-ref-border-style-dashed) var(--aw-sys-color-border-default);
```

#### Elevation Semantics (shared across modes)

```css
/* Surface elevation = background color (tone-based, no shadows) */
--aw-sys-elevation-flat:       var(--aw-sys-color-bg-surface);
--aw-sys-elevation-raised:     var(--aw-sys-color-bg-surface-raised);
--aw-sys-elevation-overlay:    var(--aw-sys-color-bg-surface-overlay);

/* Z-index by role */
--aw-sys-z-default:            var(--aw-ref-z-base);
--aw-sys-z-dropdown:           var(--aw-ref-z-dropdown);
--aw-sys-z-sticky:             var(--aw-ref-z-sticky);
--aw-sys-z-overlay:            var(--aw-ref-z-overlay);
--aw-sys-z-modal:              var(--aw-ref-z-modal);

/* State layers */
--aw-sys-state-disabled:       var(--aw-ref-opacity-disabled);
--aw-sys-state-hover:          var(--aw-ref-opacity-hover);
--aw-sys-state-pressed:        var(--aw-ref-opacity-pressed);
--aw-sys-state-scrim:          var(--aw-ref-opacity-overlay);
```

#### Motion Semantics

```css
--aw-sys-transition-fast:      100ms ease-out;   /* color, border, opacity changes */
--aw-sys-transition-none:      0ms;              /* overlays appear instantly */
```

---

## Part 4: ASCII Character Conventions

These are content-level conventions, not tokens, but components should use them consistently.

```
Box drawing (single):   ┌─┐│ │└─┘  ├─┤ ┬ ┴ ┼
Box drawing (double):   ╔═╗║ ║╚═╝  ╠═╣ ╦ ╩ ╬
Connectors:             ├─┤ ┬ ┴ ┼
Bullets/arrows:         ▸ ▾ ▹ ▿ ⭢ ⊹ ❯
Block fills:            █ ▓ ▒ ░
Progress:               ████████░░░░
Checkbox:               [x] [ ] [~]
Dividers:               ── ═══ ─ · ─
Section toggle:         ▾ EXPANDED    ▸ COLLAPSED
Keyboard shortcuts:     ⌘+S  ⌃+T  ⌥+1
Status indicators:      ● (filled dot)
```

---

## Part 5: Keyboard Shortcut Layer

Shortcuts are colocated with the components they apply to. There is no central registry, no command palette, no routing table. A shortcut is born when its component mounts and dies when it unmounts.

### `useShortcut` Hook

```ts
// Scoped (default) — fires only when focus is inside this component's DOM subtree
useShortcut("ctrl+s", handleSave)

// Global — fires regardless of focus position
useShortcut("ctrl+t", toggleTheme, { global: true })

// Disabled conditionally
useShortcut("ctrl+d", handleDelete, { enabled: isEditing })
```

**Signature:**

```ts
function useShortcut(
  combo: string,                    // e.g. "ctrl+s", "ctrl+shift+p", "alt+1"
  callback: (e: KeyboardEvent) => void,
  options?: {
    global?: boolean               // default: false (scoped to component subtree)
    enabled?: boolean              // default: true — allows conditional shortcuts
    preventDefault?: boolean       // default: true — suppress browser default
  }
): void
```

**Implementation rules:**

1. Attaches a `keydown` listener on `document`.
2. On fire: walks from `document.activeElement` up through the DOM.
3. **Scoped handler** fires only if the component's root element is an ancestor of (or is) the active element.
4. **Global handler** fires when no scoped handler for that combo matched.
5. If multiple scoped handlers claim the same combo, **nearest ancestor to focus wins** (deepest-match-first traversal).
6. **Dev-mode collision warning**: if two global handlers register the same combo, `console.warn` with both component names.
7. Cleanup on unmount — no stale listeners.

**Resolution priority (highest to lowest):**

```
1. Scoped handler whose root is nearest ancestor to activeElement
2. Scoped handler whose root is farther ancestor
3. Global handler
```

This means a `Card` with a scoped `ctrl+s` (save this card) can coexist with a page-level global `ctrl+s` (save all). When focus is inside the card, the card's handler wins. When focus is elsewhere, the global handler fires.

### `Kbd` Component

Pure display component that renders a keyboard shortcut hint in the terminal style. No behavior, no event handling.

```tsx
<Kbd>⌃+S</Kbd>
<Kbd combo="ctrl+s" />       // auto-formats to platform-appropriate glyphs
<Kbd combo="ctrl+shift+p" /> // renders: ⌃+⇧+P (mac) or Ctrl+Shift+P (win/linux)
```

**Props:**

```ts
interface KbdProps {
  combo?: string          // shorthand: "ctrl+s" → auto-formatted
  children?: ReactNode    // manual: pass pre-formatted text like "⌃+S"
  platform?: "mac" | "win" | "auto"  // default: "auto" (detect from navigator)
}
```

**Rendering rules:**

| Input | Mac output | Win/Linux output |
|-------|-----------|-----------------|
| `ctrl` | `⌃` | `Ctrl` |
| `alt` | `⌥` | `Alt` |
| `shift` | `⇧` | `Shift` |
| `meta` / `cmd` | `⌘` | `Win` |
| Letter keys | Uppercase: `S`, `K`, `P` | Same |
| `+` separator | `+` | `+` |

**Styling:** Uses `--aw-sys-type-caption-*` tokens (11px, regular weight). Color: `--aw-sys-color-text-muted`. Inline element, no border, no background — just the glyph text. This keeps it unobtrusive next to labels and buttons.

### Shortcut Placement Convention

Shortcuts are always rendered **adjacent to the action they trigger**, not in a separate legend or help panel. Common patterns:

```
Button with shortcut:
┌──────────────────┐
│ ⌃+S SAVE         │     ← Kbd inline, before label
└──────────────────┘

Action bar item:
 ⌃+1 Example I   ⌃+2 Example II   ⌃+3 Example III

Card header with shortcut:
┌──────────────────────────────┐
│ ▾ SYSTEM STATUS        ⌃+I  │     ← Kbd right-aligned in header
├──────────────────────────────┤
│ ...                          │
└──────────────────────────────┘

Standalone action:
 ⌃+T Light Mode                      ← Kbd before label text
```

### Combo Naming Conventions

| Modifier | Canonical name in `combo` string | Notes |
|----------|--------------------------------|-------|
| Control | `ctrl` | Maps to `⌃` on Mac, `Ctrl` elsewhere |
| Alt/Option | `alt` | Maps to `⌥` on Mac, `Alt` elsewhere |
| Shift | `shift` | Maps to `⇧` on Mac, `Shift` elsewhere |
| Command/Meta | `meta` | Maps to `⌘` on Mac, `Win` elsewhere. Avoid — browsers reserve many `meta+*` combos. |

**Combo format:** Modifiers first (alphabetical), then key, joined by `+`. Examples: `ctrl+s`, `ctrl+shift+p`, `alt+1`.

### Reserved Shortcuts (avoid collisions)

These are owned by browsers and OS — never bind them:

| Combo | Browser/OS action |
|-------|------------------|
| `ctrl+t` | ⚠️ New tab (most browsers). Safe to override in web apps if app is the primary context. SRCL uses this for theme toggle — acceptable for a terminal-aesthetic app. |
| `ctrl+w` | Close tab. **Never override.** |
| `ctrl+n` | New window. **Never override.** |
| `ctrl+q` | Quit browser. **Never override.** |
| `ctrl+l` | Focus address bar. **Avoid.** |
| `ctrl+r` | Reload. Overridable with care — SRCL uses it. |
| `F1–F12` | Various browser/OS functions. Use with caution. |

**Safe combos for web apps:** `ctrl+s`, `ctrl+k`, `ctrl+shift+*`, `ctrl+/`, `ctrl+.`, `ctrl+[0-9]`, `alt+[letter]`.

### Usage Example

A component with both a shortcut and its visible hint:

```tsx
function SaveButton({ onSave }) {
  const ref = useRef(null)
  useShortcut("ctrl+s", onSave)

  return (
    <button ref={ref} onClick={onSave}>
      <Kbd combo="ctrl+s" /> SAVE
    </button>
  )
}
```

The shortcut and the hint are declared in the same component, 3 lines apart. If you delete the component, both the behavior and the hint disappear. Nothing else in the system needs to know this shortcut existed.

---

## Part 6: Component Inventory

### Tier 0 — Layout

| Component | Description | `as` prop |
|-----------|-------------|-----------|
| `Stack` | Vertical flex container with `gap` prop mapped to spacing scale | Yes |
| `Inline` | Horizontal flex container with `gap` prop mapped to spacing scale | Yes |
| `Grid` | CSS Grid wrapper with `columns` and `gap` props | Yes |

### Tier 1 — Primitives

| Component | Description | Variants |
|-----------|-------------|----------|
| `Text` | Typography component. Props: `role` (display, heading, subheading, body, label, caption), `color`, `transform` | — |
| `Button` | Interactive button. Always `<button>`. | `primary`, `secondary`, `danger`, `ghost` |
| `Input` | Text input with label, optional prefix glyph (▸), error state | — |
| `Badge` | Inline status/category label | `default`, `success`, `warning`, `error`, `info`, `brand` |
| `Divider` | Horizontal rule using `─` or `═` characters or CSS border | `thin`, `thick` |
| `Kbd` | Keyboard shortcut hint. Props: `combo` (auto-formatted) or `children` (manual). Pure display, no behavior. Platform-aware glyph rendering. | — |
| `Logo` | SVG mark component. Props: `size` (xs–2xl), `variant` (default, brand, accent, mono, inverse). Renders `currentColor` SVG at standardized dimensions. | `default`, `brand`, `accent`, `mono`, `inverse` |
| `Wordmark` | "AWAR" text rendered in system monospace. Props: `size`, `subtitle` (boolean — shows "ALGORITHMIC WARFARE"). | — |
| `LogoLockup` | Composed mark + wordmark. Props: `orientation` (horizontal, stacked), `size`, `variant`, `subtitle`. | `horizontal`, `stacked` |

### Tier 2 — Containers (compound components)

| Component | Parts | Description |
|-----------|-------|-------------|
| `Card` | `Card`, `Card.Header`, `Card.Body`, `Card.Footer` | MS-DOS-style panel with border and header bar |
| `Alert` | `Alert` | Left-border-accented feedback message. Variants: error, warning, success, info |
| `Table` | `Table`, `Table.Head`, `Table.Body`, `Table.Row`, `Table.Cell` | Dense monospace data table with header row |
| `ActionBar` | `ActionBar`, `ActionBar.Item` | Top/bottom bar with keyboard shortcut labels |
| `List` | `List`, `List.Item` | Vertical list with optional bullets/icons |

### Tier 3 — Overlays (Radix-backed)

| Component | Radix Primitive | Description |
|-----------|----------------|-------------|
| `Modal` | `Dialog` | Centered overlay with scrim. Instant appear (no animation). |
| `Dropdown` | `DropdownMenu` | Action menu triggered by button. Instant appear. |
| `Tooltip` | `Tooltip` | Hover/focus hint. Small delay, instant appear. |
| `Popover` | `Popover` | Rich content overlay anchored to trigger. |

---

## Part 7: Implementation Notes for Claude Code

### Project Structure (suggested)

```
awar-ui/
├── src/
│   ├── tokens/
│   │   ├── primitives.ts          # Source of truth (TypeScript object)
│   │   ├── semantics.ts           # Dark/light semantic mappings
│   │   ├── generate-css.ts        # Script: TS → CSS custom properties
│   │   └── tokens.css             # Generated output (committed)
│   ├── components/
│   │   ├── branding/
│   │   │   ├── Logo/
│   │   │   ├── Wordmark/
│   │   │   ├── LogoLockup/
│   │   │   └── logo.svg              # Source SVG (currentColor fill)
│   │   ├── layout/
│   │   │   ├── Stack/
│   │   │   ├── Inline/
│   │   │   └── Grid/
│   │   ├── primitives/
│   │   │   ├── Text/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Badge/
│   │   │   ├── Kbd/
│   │   │   └── Divider/
│   │   ├── containers/
│   │   │   ├── Card/
│   │   │   ├── Alert/
│   │   │   ├── Table/
│   │   │   ├── ActionBar/
│   │   │   └── List/
│   │   └── overlays/
│   │       ├── Modal/
│   │       ├── Dropdown/
│   │       ├── Tooltip/
│   │       └── Popover/
│   ├── providers/
│   │   └── AWARProvider/
│   │       ├── AWARProvider.tsx    # Provider component (CSS injection + theme context)
│   │       ├── AWARProvider.types.ts
│   │       ├── ThemeContext.ts     # Mode type, ThemeContextValue, createContext
│   │       └── index.ts
│   ├── hooks/
│   │   ├── useTheme.ts            # Standalone mode detection + toggle (no context)
│   │   ├── useAWARTheme.ts        # Context-based hook (requires AWARProvider)
│   │   └── useShortcut.ts         # Keyboard shortcut binding (scoped/global)
│   └── index.ts                   # Public exports
├── package.json
└── tsconfig.json
```

### Each component folder contains:

```
Button/
├── Button.tsx            # Component implementation
├── Button.module.css     # Styles using CSS custom properties
├── Button.types.ts       # Props interface
└── index.ts              # Re-export
```

### Key implementation rules:

1. **Components consume `--aw-sys-*` tokens only** — never reference `--aw-ref-*` directly.
2. **Component tokens** (`--aw-button-bg`, etc.) are defined in the component's CSS Module, aliasing semantic tokens. This is the override point for consumers.
3. **Mode switching** is pure CSS: `[data-mode="dark"]` and `[data-mode="light"]` selectors in `tokens.css` swap semantic values. No React context needed.
4. **Transitions**: Apply `transition: background-color 100ms ease-out, border-color 100ms ease-out, opacity 100ms ease-out` to interactive elements. No transitions on overlays.
5. **Border-radius: 0** on everything. Enforce in a global reset.
6. **Font-family**: Set once on `body` via tokens.css. Components inherit.
7. **Radix components** (Tier 3): Import unstyled primitives, apply AWAR styles via CSS Modules. Follow Radix's `data-state` attributes for styling open/closed/active states.
8. **Keyboard shortcuts** are always colocated: `useShortcut` call + `<Kbd>` hint live in the same component. No central shortcut registry. Scoped by default, `{ global: true }` for page-level bindings.

### Token Count

| Category | Primitive | Semantic (dark) | Semantic (light) |
|----------|-----------|----------------|-----------------|
| Color    | 33        | 28             | 28 (remapped)   |
| Typography | 18      | 25             | — (shared)      |
| Spacing  | 11        | 18             | — (shared)      |
| Shape    | 6         | 5              | — (shared)      |
| Elevation| 9         | 10             | — (shared)      |
| Motion   | —         | 2              | — (shared)      |
| **Total**| **77**    | **88**         | **28**          |

### Consumer Integration

Consumers wrap their app in `<AWARProvider>` — this auto-injects the token CSS and provides theme context:

```tsx
import { AWARProvider } from 'awar-ui'

function App() {
  return (
    <AWARProvider defaultMode="dark">
      <YourApp />
    </AWARProvider>
  )
}
```

Theme state is accessed via the `useAWARTheme` hook:

```tsx
import { useAWARTheme } from 'awar-ui'

function ThemeToggle() {
  const { mode, toggle, setMode } = useAWARTheme()
  return <button onClick={toggle}>{mode === 'dark' ? 'Light' : 'Dark'}</button>
}
```

**`AWARProviderProps`:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultMode` | `'dark' \| 'light'` | `'dark'` | Fallback mode if no localStorage or `data-mode` attr found |
| `children` | `ReactNode` | — | Required |

**Mode resolution chain** (first match wins): `localStorage('aw-mode')` → `document.documentElement[data-mode]` → `defaultMode` prop → `'dark'`.

The standalone `useTheme` hook remains available for cases where a full Provider is not desired.

### Scrollbar Styling

Global scrollbar styles are applied in `tokens.css` to maintain the terminal aesthetic across all scrollable elements:

- **Width/height**: `1ch` (monospace-proportional)
- **Track**: Surface background with a `1px` left border
- **Thumb**: Interactive color (`--aw-sys-color-interactive`), hover state uses `--aw-sys-color-interactive-hover`
- **Corner**: Surface background

WebKit browsers use `::-webkit-scrollbar-*` pseudo-elements. Firefox falls back to `scrollbar-width: thin` + `scrollbar-color` via `@supports not selector(::-webkit-scrollbar)`. Scrollbar colors automatically adapt to the active mode.
