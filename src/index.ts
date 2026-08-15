/**
 * md3-wallpaper host half — intentionally empty. The skin is a pure
 * presentation-layer client plugin (the official skin contract): everything
 * the skin writes lives in the browser half and is retracted on dispose.
 */

export function apply(): void {
  // No host-side services, events, or model requests.
}
