import React from 'react'

const ProfileIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M10.25 10.1834C10.6947 9.79853 11.0513 9.32249 11.2958 8.7876C11.5402 8.25272 11.6667 7.67151 11.6667 7.08342C11.6667 5.97835 11.2277 4.91854 10.4463 4.13714C9.66492 3.35574 8.60511 2.91675 7.50004 2.91675C6.39497 2.91675 5.33516 3.35574 4.55376 4.13714C3.77236 4.91854 3.33337 5.97835 3.33337 7.08342C3.33337 7.67151 3.45988 8.25272 3.70431 8.7876C3.94875 9.32249 4.30539 9.79853 4.75004 10.1834C3.58349 10.7117 2.59376 11.5647 1.89919 12.6405C1.20462 13.7164 0.834601 14.9695 0.833374 16.2501C0.833374 16.4711 0.921171 16.6831 1.07745 16.8393C1.23373 16.9956 1.44569 17.0834 1.66671 17.0834C1.88772 17.0834 2.09968 16.9956 2.25596 16.8393C2.41224 16.6831 2.50004 16.4711 2.50004 16.2501C2.50004 14.924 3.02682 13.6522 3.96451 12.7145C4.90219 11.7769 6.17396 11.2501 7.50004 11.2501C8.82612 11.2501 10.0979 11.7769 11.0356 12.7145C11.9733 13.6522 12.5 14.924 12.5 16.2501C12.5 16.4711 12.5878 16.6831 12.7441 16.8393C12.9004 16.9956 13.1124 17.0834 13.3334 17.0834C13.5544 17.0834 13.7663 16.9956 13.9226 16.8393C14.0789 16.6831 14.1667 16.4711 14.1667 16.2501C14.1655 14.9695 13.7955 13.7164 13.1009 12.6405C12.4063 11.5647 11.4166 10.7117 10.25 10.1834ZM7.50004 9.58342C7.00559 9.58342 6.52224 9.43679 6.11111 9.16209C5.69999 8.88739 5.37956 8.49694 5.19034 8.04012C5.00112 7.58331 4.95161 7.08064 5.04808 6.59569C5.14454 6.11074 5.38264 5.66528 5.73227 5.31565C6.0819 4.96602 6.52736 4.72792 7.01231 4.63145C7.49727 4.53499 7.99993 4.5845 8.45675 4.77372C8.91356 4.96294 9.30401 5.28337 9.57871 5.69449C9.85342 6.10561 10 6.58896 10 7.08342C10 7.74646 9.73665 8.38234 9.26781 8.85118C8.79897 9.32002 8.16308 9.58342 7.50004 9.58342ZM15.6167 9.85008C16.15 9.24952 16.4984 8.50763 16.6199 7.7137C16.7414 6.91977 16.6308 6.10764 16.3015 5.37508C15.9722 4.64252 15.4382 4.02074 14.7638 3.5846C14.0893 3.14846 13.3032 2.91653 12.5 2.91675C12.279 2.91675 12.0671 3.00455 11.9108 3.16083C11.7545 3.31711 11.6667 3.52907 11.6667 3.75008C11.6667 3.9711 11.7545 4.18306 11.9108 4.33934C12.0671 4.49562 12.279 4.58342 12.5 4.58342C13.1631 4.58342 13.799 4.84681 14.2678 5.31565C14.7366 5.78449 15 6.42037 15 7.08342C14.9989 7.52112 14.8828 7.95083 14.6634 8.3296C14.4441 8.70836 14.1291 9.0229 13.75 9.24175C13.6265 9.31302 13.5233 9.4148 13.4503 9.53737C13.3774 9.65993 13.3371 9.79917 13.3334 9.94175C13.3299 10.0832 13.3625 10.2232 13.4281 10.3486C13.4937 10.474 13.5902 10.5806 13.7084 10.6584L14.0334 10.8751L14.1417 10.9334C15.1462 11.4098 15.9936 12.1634 16.5842 13.1053C17.1747 14.0473 17.4838 15.1384 17.475 16.2501C17.475 16.4711 17.5628 16.6831 17.7191 16.8393C17.8754 16.9956 18.0874 17.0834 18.3084 17.0834C18.5294 17.0834 18.7413 16.9956 18.8976 16.8393C19.0539 16.6831 19.1417 16.4711 19.1417 16.2501C19.1485 14.9713 18.8282 13.712 18.2113 12.5918C17.5943 11.4716 16.7012 10.5278 15.6167 9.85008Z"
          fill="#131415"
        />
      </svg>
    )
  }
)

export default ProfileIcon
