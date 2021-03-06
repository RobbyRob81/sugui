import React from 'react';

const ChatIcon = props => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path d="M17.896 9.32l-.279-.081a7.424 7.424 0 0 0-2.352-.225 7.5 7.5 0 0 0-2.315.512 6.411 6.411 0 0 0-1.855 1.125c-.506.436-.918.97-1.21 1.57a3.846 3.846 0 0 0-.375 1.854c.031.637.223 1.257.557 1.8.35.56.814 1.04 1.36 1.411a6.227 6.227 0 0 0 1.957.888c.767.2 1.561.276 2.352.225h.076c.267.182.547.344.838.485a6.081 6.081 0 0 0 2.445.616 6.356 6.356 0 0 0 1.564-.125s-1.642-.953-1.688-1.936c.389-.227.75-.497 1.079-.805.311-.29.584-.619.812-.978.22-.344.389-.717.5-1.11a3.75 3.75 0 0 0-.427-3 4.524 4.524 0 0 0-.829-.99 7.763 7.763 0 0 0-2.209-1.227" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.681 9.258l.044-.237c.194-1.171-.595-2.287-.595-2.287a6.065 6.065 0 0 0-1.74-1.799 8 8 0 0 0-2.5-1.125c-.983-.257-2-.355-3.015-.291a9.632 9.632 0 0 0-2.963.652 8.21 8.21 0 0 0-2.375 1.43 6.262 6.262 0 0 0-1.548 2A4.888 4.888 0 0 0 2.5 9.965c.026.514.135 1.021.325 1.5.191.479.452.927.775 1.329.337.419.726.792 1.159 1.111.442.33 1.366.73 1.903.964-.697 1.637-2.327 2.602-2.327 2.602.667.055 1.34.029 2-.08a7.907 7.907 0 0 0 1.375-.358s.551-.197 2.125-1.065l.204-.112" stroke={props.color && props.color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default ChatIcon;
