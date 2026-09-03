const ALLOWED_KEYS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
};

export function getTabIdIncrement(event) {
  switch (event.key) {
    case ALLOWED_KEYS.ARROW_LEFT:
    case ALLOWED_KEYS.ARROW_LEFT_IE11: {
      return -1;
    }

    case ALLOWED_KEYS.ARROW_RIGHT:
    case ALLOWED_KEYS.ARROW_RIGHT_IE11: {
      return 1;
    }
  }

  return undefined;
}

export function modulus(m, n) {
  return ((m % n) + n) % n;
}
