import type { TOC } from '@ember/component/template-only';

interface WindowSvgSignature {
  Args: {};
  Blocks: {
    default: [];
  };
}

<template>
  <svg
    viewBox="0 0 460 360"
    xmlns="http://www.w3.org/2000/svg"
    {{! @glint-expect-error: Incorrect type }}
    xmlns:xlink="http://www.w3.org/1999/xlink"
  ><defs />
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="105.1%"
        id="window-svg-b"
        width="104%"
        x="-2%"
        y="-1.7%"
      ><feOffset
          dy="3"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        /><feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2.5"
        /><feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        /></filter>
      <filter
        filterUnits="objectBoundingBox"
        height="103.1%"
        id="window-svg-d"
        width="102.4%"
        x="-1.2%"
        y="-.7%"
      ><feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetInner1"
        /><feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        /><feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
        /></filter>
      <filter
        filterUnits="objectBoundingBox"
        height="100.3%"
        id="window-svg-g"
        width="100.2%"
        x="-.1%"
        y="-.2%"
      ><feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetInner1"
        /><feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        /><feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
        /></filter>
      <filter
        filterUnits="objectBoundingBox"
        height="153.1%"
        id="window-svg-i"
        width="103.7%"
        x="-1.8%"
        y="-20.3%"
      ><feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="2"
          result="shadowSpreadOuter1"
        /><feOffset
          dy="1"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        /><feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="1"
        /><feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        /><feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        /><feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="2.5"
          result="shadowSpreadOuter2"
        /><feOffset
          in="shadowSpreadOuter2"
          result="shadowOffsetOuter2"
        /><feComposite
          in="shadowOffsetOuter2"
          in2="SourceAlpha"
          operator="out"
          result="shadowOffsetOuter2"
        /><feColorMatrix
          in="shadowOffsetOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        /><feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="2"
          result="shadowSpreadOuter3"
        /><feOffset
          dy="3"
          in="shadowSpreadOuter3"
          result="shadowOffsetOuter3"
        /><feGaussianBlur
          in="shadowOffsetOuter3"
          result="shadowBlurOuter3"
          stdDeviation="1"
        /><feComposite
          in="shadowBlurOuter3"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter3"
        /><feColorMatrix
          in="shadowBlurOuter3"
          result="shadowMatrixOuter3"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode
            in="shadowMatrixOuter2"
          /><feMergeNode in="shadowMatrixOuter3" /></feMerge>
      </filter>
      <filter
        filterUnits="objectBoundingBox"
        height="154.2%"
        id="window-svg-k"
        width="103.5%"
        x="-1.7%"
        y="-18.8%"
      ><feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        /><feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="1"
        /><feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        /><feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius=".5"
          result="shadowSpreadOuter2"
        /><feOffset
          in="shadowSpreadOuter2"
          result="shadowOffsetOuter2"
        /><feColorMatrix
          in="shadowOffsetOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        /><feOffset
          dy="3"
          in="SourceAlpha"
          result="shadowOffsetOuter3"
        /><feGaussianBlur
          in="shadowOffsetOuter3"
          result="shadowBlurOuter3"
          stdDeviation="1"
        /><feColorMatrix
          in="shadowBlurOuter3"
          result="shadowMatrixOuter3"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode
            in="shadowMatrixOuter2"
          /><feMergeNode in="shadowMatrixOuter3" /></feMerge>
      </filter>
      <filter
        filterUnits="objectBoundingBox"
        height="154.2%"
        id="window-svg-m"
        width="145.8%"
        x="-22.9%"
        y="-18.8%"
      ><feOffset
          dy="1"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        /><feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="1"
        /><feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        /><feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius=".5"
          result="shadowSpreadOuter2"
        /><feOffset
          in="shadowSpreadOuter2"
          result="shadowOffsetOuter2"
        /><feColorMatrix
          in="shadowOffsetOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        /><feOffset
          dy="3"
          in="SourceAlpha"
          result="shadowOffsetOuter3"
        /><feGaussianBlur
          in="shadowOffsetOuter3"
          result="shadowBlurOuter3"
          stdDeviation="1"
        /><feColorMatrix
          in="shadowBlurOuter3"
          result="shadowMatrixOuter3"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode
            in="shadowMatrixOuter2"
          /><feMergeNode in="shadowMatrixOuter3" /></feMerge>
      </filter><path
        d="M10 0h430a10 10 0 0110 10v330a10 10 0 01-10 10H10a10 10 0 01-10-10V10A10 10 0 0110 0z"
        id="window-svg-a"
      /><path d="M0 0h450v308H0z" id="window-svg-f" /><path
        d="M23 63h404a3 3 0 013 3v26a3 3 0 01-3 3H23a3 3 0 01-3-3V66a3 3 0 013-3z"
        id="window-svg-j"
      /><path
        d="M90 9h309a3 3 0 013 3v18a3 3 0 01-3 3H90a3 3 0 01-3-3V12a3 3 0 013-3z"
        id="window-svg-l"
      />
      <linearGradient
        id="window-svg-c"
        x1="50%"
        x2="50%"
        y1="0%"
        y2="100%"
      ><stop offset="0%" stop-color="#EEEEF1" /><stop
          offset="100%"
          stop-color="#D7D9DF"
        /></linearGradient><rect
        height="24"
        id="window-svg-n"
        rx="3"
        width="24"
        x="411"
        y="9"
      /></defs>
    <g fill="none" fill-rule="evenodd" transform="translate(5 2)">
      <mask fill="#fff" id="window-svg-e"><use
          {{! @glint-expect-error: Incorrect type }}
          xlink:href="#window-svg-a"
        /></mask>
      <g fill-rule="nonzero"><use
          fill="#000"
          filter="url(#window-svg-b)"
          {{! @glint-expect-error: Incorrect type }}
          xlink:href="#window-svg-a"
          {{! @glint-expect-error: Incorrect type }}
        /><use fill="url(#window-svg-c)" xlink:href="#window-svg-a" /><use
          fill="#000"
          filter="url(#window-svg-d)"
          {{! @glint-expect-error: Incorrect type }}
          xlink:href="#window-svg-a"
        /></g>
      <g mask="url(#window-svg-e)">
        <g transform="translate(0 42)">
          <mask fill="#fff" id="window-svg-h"><use
              {{! @glint-expect-error: Incorrect type }}
              xlink:href="#window-svg-f"
            /></mask>
          <g fill-rule="nonzero"><use
              fill="#FFF"
              {{! @glint-expect-error: Incorrect type }}
              xlink:href="#window-svg-f"
            /><use
              fill="#000"
              filter="url(#window-svg-g)"
              {{! @glint-expect-error: Incorrect type }}
              xlink:href="#window-svg-f"
            /></g><path
            d="M0 0h450v43H0z"
            fill="#1B3A4B"
            fill-rule="nonzero"
            mask="url(#window-svg-h)"
          />
          <g
            fill-rule="nonzero"
            mask="url(#window-svg-h)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ><use
              fill="#000"
              filter="url(#window-svg-i)"
              {{! @glint-expect-error: Incorrect type }}
              xlink:href="#window-svg-j"
            /><path
              d="M23 62h404a4 4 0 014 4v26a4 4 0 01-4 4H23a4 4 0 01-4-4V66a4 4 0 014-4z"
              fill="#FFF"
              fill-rule="evenodd"
              stroke="#337698"
              stroke-width="2"
            /></g>
        </g>
      </g>
      <g fill-rule="nonzero" mask="url(#window-svg-e)"><use
          fill="#000"
          filter="url(#window-svg-k)"
          {{! @glint-expect-error: Incorrect type }}
          xlink:href="#window-svg-l"
          {{! @glint-expect-error: Incorrect type }}
        /><use fill="#FFF" xlink:href="#window-svg-l" /></g>
      <g fill-rule="nonzero" mask="url(#window-svg-e)"><use
          fill="#000"
          filter="url(#window-svg-m)"
          {{! @glint-expect-error: Incorrect type }}
          xlink:href="#window-svg-n"
          {{! @glint-expect-error: Incorrect type }}
        /><use fill="#EAEBEE" xlink:href="#window-svg-n" /></g>
      <g
        fill-rule="nonzero"
        mask="url(#window-svg-e)"
        stroke="#000"
        stroke-opacity=".1"
      >
        <g transform="translate(15 15)"><circle
            cx="6"
            cy="6"
            fill="#FF6159"
            r="5.5"
          /><circle cx="26" cy="6" fill="#FFBD2D" r="5.5" /><circle
            cx="46"
            cy="6"
            fill="#2ACB42"
            r="5.5"
          /></g>
      </g><path
        d="M424 20h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4v-4a1 1 0 112 0v4z"
        fill="#686C75"
        fill-rule="nonzero"
        mask="url(#window-svg-e)"
      /></g>
    {{yield}}
    <text
      fill="#686C75"
      font-family="Helvetica"
      font-size="12"
      mask="url(#window-svg-e)"
    >
      <tspan x="100" y="27">https://emberobserver.com</tspan>
    </text>
  </svg>
</template> satisfies TOC<WindowSvgSignature>;
