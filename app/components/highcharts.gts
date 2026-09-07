import type { TOC } from '@ember/component/template-only';
import drawChart from 'ember-website/modifiers/draw-chart';

type Chart = {
  highchartsOptions: Record<string, unknown>;
};

interface HighchartsSignature {
  Args: {
    chart?: Chart;
  };
}

<template>
  <div class="pt-4" data-test-chart {{drawChart @chart}} />
</template> satisfies TOC<HighchartsSignature>;
