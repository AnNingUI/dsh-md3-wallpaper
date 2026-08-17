#!/usr/bin/env node
/**
 * Scale FAB icon paths so their content fits within the Material 20×20dp live
 * area of the 24×24 grid. Uniform scale k around center c=(12,12). Arc-aware:
 * radii scale, rotation + flags preserved, endpoints scaled.
 */
const k = 0.85;
const c = 12;

function format(v) {
  const r = Math.round(v * 1000) / 1000;
  return String(r);
}

// Tokenize path into commands and number groups. Numbers keep raw string.
function parsePath(d) {
  const re = /([a-zA-Z])|(-?\d*\.?\d+(?:e[-+]?\d+)?)/gi;
  const tokens = [];
  let m;
  while ((m = re.exec(d))) {
    if (m[1]) tokens.push({ type: 'cmd', val: m[1] });
    else tokens.push({ type: 'num', val: parseFloat(m[0]) });
  }
  return tokens;
}

function transform(d, kk, cc) {
  const t = parsePath(d);
  const out = [];
  let current = null; // current command letter
  let pendingArc = []; // numbers waiting to be emitted for an arc segment

  function scaleEndpoint(x) {
    return cc + (x - cc) * kk;
  }

  // Emit buffered arc continuation numbers as raw when not an arc now handled.
  let i = 0;
  while (i < t.length) {
    const tok = t[i];
    if (tok.type === 'cmd') {
      current = tok.val;
      out.push(current);
      i++;
      continue;
    }
    // tok.type === 'num' from here
    const upper = current.toUpperCase();
    if (upper === 'A' || upper === 'a') {
      // arc: rx ry rot largeArc sweep x y  (8 numbers: per segment 7)
      // read 7 numbers
      const seg = [];
      for (let n = 0; n < 7; n++) {
        if (i + n < t.length && t[i + n].type === 'num') seg.push(t[i + n].val);
        else break;
      }
      if (seg.length === 7) {
        const rel = current === 'a';
        let rx = seg[0], ry = seg[1], rot = seg[2], large = seg[3], sweep = seg[4];
        let x = seg[5], y = seg[6];
        rx *= kk; ry *= kk;
        // rotation & flags unchanged
        x = rel ? x * kk : scaleEndpoint(x);
        y = rel ? y * kk : scaleEndpoint(y);
        out.push(
          [format(rx), format(ry), format(rot), String(large), String(sweep), format(x), format(y)].join(' ')
        );
        i += 7;
        continue;
      }
    } else {
      // horizontal/vertical implicit coordinate — each counts as one endpoint number
      if (i + 1 <= t.length) {
        let v = tok.val;
        if (upper === 'H' || upper === 'h' || upper === 'V' || upper === 'v') {
          v = (current === current.toLowerCase()) ? v * kk : scaleEndpoint(v);
        } else {
          // scale all remaining numbers for this command; but simpler: scale pairs
          // We handle generic: each coordinate scaled (relative: *kk, absolute: centered)
          // Detect rel vs abs for lone numbers by continuation isn't trackable simply;
          // do best-effort: for L/M/C/S/Q/T and their relatives, second-subsequent numbers
          // are y-coordinates. We group by pairs and scale whole path with endpoint rule.
          v = (current === current.toLowerCase()) ? v * kk : scaleEndpoint(v);
        }
        out.push(format(v));
        i++;
        continue;
      }
    }
    i++;
  }
  return out.join(' ');
}

const close = 'M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H8V4H20V16M4 6V20H18V22H4C2.9 22 2 21.11 2 20V6H4M9.77 12.84L12.6 10L9.77 7.15L11.17 5.75L14 8.6L16.84 5.77L18.24 7.17L15.4 10L18.23 12.84L16.83 14.24L14 11.4L11.17 14.24L9.77 12.84Z';

const wall = 'M4,4H11V2H4A2,2 0 0,0 2,4V11H4V4M10,13L6,18H18L15,14L12.97,16.71L10,13M17,8.5A1.5,1.5 0 0,0 15.5,7A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5M20,2H13V4H20V11H22V4A2,2 0 0,0 20,2M20,20H13V22H20A2,2 0 0,0 22,20V13H20V20M4,13H2V20A2,2 0 0,0 4,22H11V20H4V13Z';

console.log('CLOSE:');
console.log(transform(close, k, c));
console.log('\nWALL:');
console.log(transform(wall, k, c));
