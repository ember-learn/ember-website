import type { TOC } from '@ember/component/template-only';

interface TerminalCodeSignature {
  Args: {};
  Blocks: {
    default: [];
  };
}

<template>
  <div class="terminal-code bg-dark">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <code data-test-terminal-code>
      {{yield}}
    </code>
  </div>
</template> satisfies TOC<TerminalCodeSignature>;
