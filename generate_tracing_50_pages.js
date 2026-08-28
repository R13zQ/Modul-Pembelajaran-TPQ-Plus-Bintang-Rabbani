const fs = require('fs');
const { jsPDF } = require('jspdf');
const opentype = require('d:/MODUL APLIKASI BELAJAR BINTANG RABBANI/node_modules/opentype.js');

let naskhFont = null;
const naskhFontPath = 'C:/Windows/Fonts/trado.ttf';
if (fs.existsSync(naskhFontPath)) {
  try {
    const fontBuffer = fs.readFileSync(naskhFontPath);
    naskhFont = opentype.parse(fontBuffer.buffer);
    console.log("Loaded Traditional Arabic Naskh font (trado.ttf) successfully!");
  } catch (e) {
    console.log("Could not parse trado.ttf:", e);
  }
}

function renderNaskhDoubleStrokeDots(doc, font, char, targetX, targetY, targetW, targetH, dotRadius = 0.95, spacing = 3.6) {
  if (!font) return;
  const glyph = font.charToGlyph(char);
  if (!glyph) return;

  const fontPt = 120;
  const path = glyph.getPath(0, 0, fontPt);
  const bbox = path.getBoundingBox();

  const glyphW = bbox.x2 - bbox.x1 || 1;
  const glyphH = bbox.y2 - bbox.y1 || 1;

  const scaleX = targetW / glyphW;
  const scaleY = targetH / glyphH;
  const scale = Math.min(scaleX, scaleY);

  const offsetX = targetX + (targetW - glyphW * scale) / 2 - bbox.x1 * scale;
  const offsetY = targetY + (targetH - glyphH * scale) / 2 - bbox.y1 * scale;

  function transform(x, y) {
    return {
      x: x * scale + offsetX,
      y: y * scale + offsetY
    };
  }

  let rawOutline = [];
  let currX = 0, currY = 0;

  path.commands.forEach(cmd => {
    if (cmd.type === 'M') {
      const p = transform(cmd.x, cmd.y);
      currX = p.x; currY = p.y;
      rawOutline.push({ x: currX, y: currY });
    } else if (cmd.type === 'L') {
      const p = transform(cmd.x, cmd.y);
      const dx = p.x - currX;
      const dy = p.y - currY;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.round(dist / spacing));
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        rawOutline.push({ x: currX + dx * t, y: currY + dy * t });
      }
      currX = p.x; currY = p.y;
    } else if (cmd.type === 'Q') {
      const p1 = transform(cmd.x1, cmd.y1);
      const p = transform(cmd.x, cmd.y);
      const steps = 6;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        const qx = mt * mt * currX + 2 * mt * t * p1.x + t * t * p.x;
        const qy = mt * mt * currY + 2 * mt * t * p1.y + t * t * p.y;
        rawOutline.push({ x: qx, y: qy });
      }
      currX = p.x; currY = p.y;
    } else if (cmd.type === 'C') {
      const p1 = transform(cmd.x1, cmd.y1);
      const p2 = transform(cmd.x2, cmd.y2);
      const p = transform(cmd.x, cmd.y);
      const steps = 8;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        const cx = mt*mt*mt*currX + 3*mt*mt*t*p1.x + 3*mt*t*t*p2.x + t*t*t*p.x;
        const cy = mt*mt*mt*currY + 3*mt*mt*t*p1.y + 3*mt*t*t*p2.y + t*t*t*p.y;
        rawOutline.push({ x: cx, y: cy });
      }
      currX = p.x; currY = p.y;
    }
  });

  let filtered = [];
  rawOutline.forEach(pt => {
    if (filtered.length === 0) {
      filtered.push(pt);
    } else {
      const last = filtered[filtered.length - 1];
      if (Math.hypot(pt.x - last.x, pt.y - last.y) >= spacing * 0.75) {
        filtered.push(pt);
      }
    }
  });

  doc.setFillColor(50, 50, 50);
  filtered.forEach(pt => {
    doc.circle(pt.x, pt.y, dotRadius, "F");
  });
}

function extractNaskhCenterlineDots(doc, font, char, targetX, targetY, targetW, targetH, dotRadius = 1.0, spacing = 4.8) {
  if (!font) return;
  const glyph = font.charToGlyph(char);
  if (!glyph) return;

  const fontPt = 120;
  const path = glyph.getPath(0, 0, fontPt);
  const bbox = path.getBoundingBox();

  const glyphW = bbox.x2 - bbox.x1 || 1;
  const glyphH = bbox.y2 - bbox.y1 || 1;

  const scaleX = targetW / glyphW;
  const scaleY = targetH / glyphH;
  const scale = Math.min(scaleX, scaleY);

  const offsetX = targetX + (targetW - glyphW * scale) / 2 - bbox.x1 * scale;
  const offsetY = targetY + (targetH - glyphH * scale) / 2 - bbox.y1 * scale;

  function transform(x, y) {
    return {
      x: x * scale + offsetX,
      y: y * scale + offsetY
    };
  }

  let rawOutline = [];
  let currX = 0, currY = 0;

  path.commands.forEach(cmd => {
    if (cmd.type === 'M') {
      const p = transform(cmd.x, cmd.y);
      currX = p.x; currY = p.y;
      rawOutline.push({ x: currX, y: currY });
    } else if (cmd.type === 'L') {
      const p = transform(cmd.x, cmd.y);
      const dx = p.x - currX;
      const dy = p.y - currY;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.round(dist / 1.5));
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        rawOutline.push({ x: currX + dx * t, y: currY + dy * t });
      }
      currX = p.x; currY = p.y;
    } else if (cmd.type === 'Q') {
      const p1 = transform(cmd.x1, cmd.y1);
      const p = transform(cmd.x, cmd.y);
      const steps = 10;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        const qx = mt * mt * currX + 2 * mt * t * p1.x + t * t * p.x;
        const qy = mt * mt * currY + 2 * mt * t * p1.y + t * t * p.y;
        rawOutline.push({ x: qx, y: qy });
      }
      currX = p.x; currY = p.y;
    } else if (cmd.type === 'C') {
      const p1 = transform(cmd.x1, cmd.y1);
      const p2 = transform(cmd.x2, cmd.y2);
      const p = transform(cmd.x, cmd.y);
      const steps = 12;
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        const cx = mt*mt*mt*currX + 3*mt*mt*t*p1.x + 3*mt*t*t*p2.x + t*t*t*p.x;
        const cy = mt*mt*mt*currY + 3*mt*mt*t*p1.y + 3*mt*t*t*p2.y + t*t*t*p.y;
        rawOutline.push({ x: cx, y: cy });
      }
      currX = p.x; currY = p.y;
    }
  });

  if (glyphW < 10 && glyphH < 10) {
    const center = transform((bbox.x1 + bbox.x2) / 2, (bbox.y1 + bbox.y2) / 2);
    doc.circle(center.x, center.y, dotRadius * 1.2, "F");
    return;
  }

  let centerPoints = [];
  for (let i = 0; i < rawOutline.length; i += 2) {
    const p1 = rawOutline[i];
    let closestDist = Infinity;
    let closestPt = null;

    for (let j = 0; j < rawOutline.length; j++) {
      const indexDiff = Math.abs(i - j);
      if (indexDiff > 8 && indexDiff < rawOutline.length - 8) {
        const p2 = rawOutline[j];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist > 1.8 && dist < 14.0 && dist < closestDist) {
          closestDist = dist;
          closestPt = p2;
        }
      }
    }

    if (closestPt) {
      centerPoints.push({
        x: (p1.x + closestPt.x) / 2,
        y: (p1.y + closestPt.y) / 2
      });
    }
  }

  if (centerPoints.length === 0) {
    centerPoints = rawOutline;
  }

  let filtered = [];
  centerPoints.forEach(pt => {
    if (filtered.length === 0) {
      filtered.push(pt);
    } else {
      let tooClose = false;
      for (let f of filtered) {
        if (Math.hypot(pt.x - f.x, pt.y - f.y) < spacing * 0.75) {
          tooClose = true;
          break;
        }
      }
      if (!tooClose) {
        filtered.push(pt);
      }
    }
  });

  doc.setFillColor(50, 50, 50);
  filtered.forEach(pt => {
    doc.circle(pt.x, pt.y, dotRadius, "F");
  });
}

// Equidistant Primitive Stroke Builders
function drawDottedLine(doc, x1, y1, x2, y2, r = 1.1, spacing = 5.0) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len === 0) return;
  const steps = Math.max(1, Math.round(len / spacing));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    doc.circle(x1 + dx * t, y1 + dy * t, r, "F");
  }
}

function drawDottedArc(doc, cx, cy, rx, ry, startDeg, endDeg, r = 1.1, spacing = 5.0) {
  let startRad = startDeg * Math.PI / 180;
  let endRad = endDeg * Math.PI / 180;
  let diff = endRad - startRad;
  if (diff <= 0) diff += Math.PI * 2;
  const avgR = (rx + ry) / 2;
  const arcLen = avgR * diff;
  const steps = Math.max(2, Math.round(arcLen / spacing));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = startRad + diff * t;
    doc.circle(cx + rx * Math.cos(a), cy + ry * Math.sin(a), r, "F");
  }
}

function drawDottedBezier(doc, x0, y0, x1, y1, x2, y2, x3, y3, r = 1.0, spacing = 4.8) {
  let pts = [];
  const steps = 30;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const mt = 1 - t;
    const x = mt*mt*mt*x0 + 3*mt*mt*t*x1 + 3*mt*t*t*x2 + t*t*t*x3;
    const y = mt*mt*mt*y0 + 3*mt*mt*t*y1 + 3*mt*t*t*y2 + t*t*t*y3;
    pts.push({x, y});
  }
  let filtered = [];
  pts.forEach(pt => {
    if (filtered.length === 0) filtered.push(pt);
    else {
      const last = filtered[filtered.length - 1];
      if (Math.hypot(pt.x - last.x, pt.y - last.y) >= spacing * 0.8) {
        filtered.push(pt);
      }
    }
  });
  filtered.forEach(pt => doc.circle(pt.x, pt.y, r, "F"));
}

// Data Huruf Latin A-Z
const latinList = [
  { char: 'A', lower: 'a', word1: 'Apel', word2: 'Ayam', emoji1: '🍎', emoji2: '🐓' },
  { char: 'B', lower: 'b', word1: 'Buku', word2: 'Bola', emoji1: '📚', emoji2: '⚽' },
  { char: 'C', lower: 'c', word1: 'Ceri', word2: 'Cicak', emoji1: '🍒', emoji2: '🦎' },
  { char: 'D', lower: 'd', word1: 'Domba', word2: 'Donat', emoji1: '🐑', emoji2: '🍩' },
  { char: 'E', lower: 'e', word1: 'Elang', word2: 'Ekor', emoji1: '🦅', emoji2: '🐈' },
  { char: 'F', lower: 'f', word1: 'Foto', word2: 'Film', emoji1: '📷', emoji2: '🎬' },
  { char: 'G', lower: 'g', word1: 'Gajah', word2: 'Gitar', emoji1: '🐘', emoji2: '🎸' },
  { char: 'H', lower: 'h', word1: 'Harimau', word2: 'Hati', emoji1: '🐯', emoji2: '❤️' },
  { char: 'I', lower: 'i', word1: 'Ikan', word2: 'Itik', emoji1: '🐟', emoji2: '🦆' },
  { char: 'J', lower: 'j', word1: 'Jerapah', word2: 'Jambu', emoji1: '🦒', emoji2: '🍈' },
  { char: 'K', lower: 'k', word1: 'Kelinci', word2: 'Kapal', emoji1: '🐰', emoji2: '⛵' },
  { char: 'L', lower: 'l', word1: 'Landak', word2: 'Lemon', emoji1: '🦔', emoji2: '🍋' },
  { char: 'M', lower: 'm', word1: 'Monyet', word2: 'Matahari', emoji1: '🐒', emoji2: '☀️' },
  { char: 'N', lower: 'n', word1: 'Naga', word2: 'Nanas', emoji1: '🐉', emoji2: '🍍' },
  { char: 'O', lower: 'o', word1: 'Orangutan', word2: 'Obat', emoji1: '🦧', emoji2: '💊' },
  { char: 'P', lower: 'p', word1: 'Pinguin', word2: 'Pensil', emoji1: '🐧', emoji2: '✏️' },
  { char: 'Q', lower: 'q', word1: 'Quran', word2: 'Qolbu', emoji1: '📖', emoji2: '💚' },
  { char: 'R', lower: 'r', word1: 'Rusa', word2: 'Roti', emoji1: '🦌', emoji2: '🍞' },
  { char: 'S', lower: 's', word1: 'Sapi', word2: 'Singa', emoji1: '🐄', emoji2: '🦁' },
  { char: 'T', lower: 't', word1: 'Tikus', word2: 'Topi', emoji1: '🐭', emoji2: '🎩' },
  { char: 'U', lower: 'u', word1: 'Ulat', word2: 'Udang', emoji1: '🐛', emoji2: '🦐' },
  { char: 'V', lower: 'v', word1: 'Vas', word2: 'Voli', emoji1: '🏺', emoji2: '🏐' },
  { char: 'W', lower: 'w', word1: 'Wortel', word2: 'Warna', emoji1: '🥕', emoji2: '🎨' },
  { char: 'X', lower: 'x', word1: 'Xylofon', word2: 'X-ray', emoji1: '🎵', emoji2: '🩻' },
  { char: 'Y', lower: 'y', word1: 'Yoyo', word2: 'Yogurt', emoji1: '🪀', emoji2: '🍦' },
  { char: 'Z', lower: 'z', word1: 'Zebra', word2: 'Zaitun', emoji1: '🦓', emoji2: '🫒' }
];

// Single stroke paths for Capital A-Z
const capitalPaths = {
  'A': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w / 2, y, x, y + h, r, s);
    drawDottedLine(doc, x + w / 2, y, x + w, y + h, r, s);
    drawDottedLine(doc, x + w * 0.34, y + h * 0.6, x + w * 0.66, y + h * 0.6, r, s);
  },
  'B': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w * 0.45, y, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.48, x + w * 0.45, y + h * 0.48, r, s);
    drawDottedLine(doc, x + 4, y + h, x + w * 0.45, y + h, r, s);
    drawDottedArc(doc, x + w * 0.45, y + h * 0.24, w * 0.48, h * 0.24, 270, 90, r, s);
    drawDottedArc(doc, x + w * 0.45, y + h * 0.74, w * 0.52, h * 0.26, 270, 90, r, s);
  },
  'C': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.48, h * 0.48, 40, 320, r, s);
  },
  'D': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w * 0.35, y, r, s);
    drawDottedLine(doc, x + 4, y + h, x + w * 0.35, y + h, r, s);
    drawDottedArc(doc, x + w * 0.35, y + h * 0.5, w * 0.62, h * 0.5, 270, 90, r, s);
  },
  'E': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w, y, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.5, x + w * 0.75, y + h * 0.5, r, s);
    drawDottedLine(doc, x + 4, y + h, x + w, y + h, r, s);
  },
  'F': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w, y, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.5, x + w * 0.75, y + h * 0.5, r, s);
  },
  'G': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.48, h * 0.48, 40, 340, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.55, x + w * 0.95, y + h * 0.55, r, s);
    drawDottedLine(doc, x + w * 0.95, y + h * 0.55, x + w * 0.95, y + h * 0.95, r, s);
  },
  'H': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + w, y + h, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.5, x + w - 4, y + h * 0.5, r, s);
  },
  'I': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.5, y, x + w * 0.5, y + h, r, s);
    drawDottedLine(doc, x + w * 0.15, y, x + w * 0.85, y, r, s);
    drawDottedLine(doc, x + w * 0.15, y + h, x + w * 0.85, y + h, r, s);
  },
  'J': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.2, y, x + w * 0.8, y, r, s);
    drawDottedLine(doc, x + w * 0.65, y + 4, x + w * 0.65, y + h * 0.7, r, s);
    drawDottedArc(doc, x + w * 0.35, y + h * 0.7, w * 0.3, h * 0.3, 0, 180, r, s);
  },
  'K': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + 4, y + h * 0.5, r, s);
    drawDottedLine(doc, x + w * 0.35, y + h * 0.45, x + w, y + h, r, s);
  },
  'L': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y + h, x + w, y + h, r, s);
  },
  'M': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + w, y + h, r, s);
    drawDottedLine(doc, x, y, x + w * 0.5, y + h * 0.65, r, s);
    drawDottedLine(doc, x + w, y, x + w * 0.5, y + h * 0.65, r, s);
  },
  'N': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + w, y + h, r, s);
    drawDottedLine(doc, x, y, x + w, y + h, r, s);
  },
  'O': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.48, h * 0.48, 0, 360, r, s);
  },
  'P': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w * 0.45, y, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.5, x + w * 0.45, y + h * 0.5, r, s);
    drawDottedArc(doc, x + w * 0.45, y + h * 0.25, w * 0.5, h * 0.25, 270, 90, r, s);
  },
  'Q': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.48, h * 0.48, 0, 360, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.65, x + w * 0.95, y + h * 1.05, r, s);
  },
  'R': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h, r, s);
    drawDottedLine(doc, x + 4, y, x + w * 0.45, y, r, s);
    drawDottedLine(doc, x + 4, y + h * 0.5, x + w * 0.45, y + h * 0.5, r, s);
    drawDottedArc(doc, x + w * 0.45, y + h * 0.25, w * 0.5, h * 0.25, 270, 90, r, s);
    drawDottedLine(doc, x + w * 0.35, y + h * 0.5, x + w, y + h, r, s);
  },
  'S': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.26, w * 0.45, h * 0.24, 45, 270, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.74, w * 0.48, h * 0.26, 225, 90, r, s);
  },
  'T': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w, y, r, s);
    drawDottedLine(doc, x + w * 0.5, y + 4, x + w * 0.5, y + h, r, s);
  },
  'U': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x, y + h * 0.65, r, s);
    drawDottedLine(doc, x + w, y, x + w, y + h * 0.65, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.65, w * 0.5, h * 0.35, 0, 180, r, s);
  },
  'V': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w * 0.5, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + w * 0.5, y + h, r, s);
  },
  'W': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w * 0.25, y + h, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.4, x + w * 0.25, y + h, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.4, x + w * 0.75, y + h, r, s);
    drawDottedLine(doc, x + w, y, x + w * 0.75, y + h, r, s);
  },
  'X': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w, y + h, r, s);
    drawDottedLine(doc, x + w, y, x, y + h, r, s);
  },
  'Y': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w * 0.5, y + h * 0.5, r, s);
    drawDottedLine(doc, x + w, y, x + w * 0.5, y + h * 0.5, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.5, x + w * 0.5, y + h, r, s);
  },
  'Z': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x, y, x + w, y, r, s);
    drawDottedLine(doc, x + w, y, x, y + h, r, s);
    drawDottedLine(doc, x, y + h, x + w, y + h, r, s);
  }
};

// Single stroke paths for Lowercase a-z
const lowercasePaths = {
  'a': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.42, y + h * 0.6, w * 0.32, h * 0.32, 0, 360, r, s);
    drawDottedLine(doc, x + w * 0.82, y + h * 0.28, x + w * 0.82, y + h * 0.92, r, s);
  },
  'b': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y, x + w * 0.15, y + h, r, s);
    drawDottedArc(doc, x + w * 0.52, y + h * 0.65, w * 0.35, h * 0.32, 0, 360, r, s);
  },
  'c': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.6, w * 0.42, h * 0.36, 40, 320, r, s);
  },
  'd': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.85, y, x + w * 0.85, y + h, r, s);
    drawDottedArc(doc, x + w * 0.48, y + h * 0.65, w * 0.35, h * 0.32, 0, 360, r, s);
  },
  'e': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.55, x + w * 0.88, y + h * 0.55, r, s);
    drawDottedArc(doc, x + w * 0.48, y + h * 0.58, w * 0.4, h * 0.35, 0, 310, r, s);
  },
  'f': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.5, y + h * 0.3, x + w * 0.5, y + h, r, s);
    drawDottedLine(doc, x + w * 0.2, y + h * 0.45, x + w * 0.8, y + h * 0.45, r, s);
    drawDottedArc(doc, x + w * 0.65, y + h * 0.25, w * 0.25, h * 0.22, 180, 360, r, s);
  },
  'g': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.45, y + h * 0.4, w * 0.35, h * 0.32, 0, 360, r, s);
    drawDottedLine(doc, x + w * 0.8, y + h * 0.2, x + w * 0.8, y + h * 0.85, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.85, w * 0.3, h * 0.18, 0, 180, r, s);
  },
  'h': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y, x + w * 0.15, y + h, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.45, x + w * 0.85, y + h, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.45, w * 0.35, h * 0.25, 180, 360, r, s);
  },
  'i': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.5, y + h * 0.3, x + w * 0.5, y + h, r, s);
    doc.circle(x + w * 0.5, y + h * 0.12, r * 1.1, "F");
  },
  'j': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.65, y + h * 0.3, x + w * 0.65, y + h * 0.85, r, s);
    doc.circle(x + w * 0.65, y + h * 0.12, r * 1.1, "F");
    drawDottedArc(doc, x + w * 0.35, y + h * 0.85, w * 0.3, h * 0.2, 0, 180, r, s);
  },
  'k': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y, x + w * 0.15, y + h, r, s);
    drawDottedLine(doc, x + w * 0.8, y + h * 0.3, x + w * 0.15, y + h * 0.65, r, s);
    drawDottedLine(doc, x + w * 0.35, y + h * 0.55, x + w * 0.8, y + h, r, s);
  },
  'l': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.5, y, x + w * 0.5, y + h, r, s);
  },
  'm': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.1, y + h, r, s);
    drawDottedArc(doc, x + w * 0.32, y + h * 0.45, w * 0.22, h * 0.22, 180, 360, r, s);
    drawDottedLine(doc, x + w * 0.54, y + h * 0.45, x + w * 0.54, y + h, r, s);
    drawDottedArc(doc, x + w * 0.76, y + h * 0.45, w * 0.22, h * 0.22, 180, 360, r, s);
    drawDottedLine(doc, x + w * 0.98, y + h * 0.45, x + w * 0.98, y + h, r, s);
  },
  'n': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y + h * 0.3, x + w * 0.15, y + h, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.45, w * 0.35, h * 0.25, 180, 360, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.45, x + w * 0.85, y + h, r, s);
  },
  'o': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.6, w * 0.42, h * 0.36, 0, 360, r, s);
  },
  'p': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y + h * 0.25, x + w * 0.15, y + h * 1.1, r, s);
    drawDottedArc(doc, x + w * 0.52, y + h * 0.6, w * 0.37, h * 0.32, 0, 360, r, s);
  },
  'q': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.85, y + h * 0.25, x + w * 0.85, y + h * 1.1, r, s);
    drawDottedArc(doc, x + w * 0.48, y + h * 0.6, w * 0.37, h * 0.32, 0, 360, r, s);
  },
  'r': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.2, y + h * 0.3, x + w * 0.2, y + h, r, s);
    drawDottedArc(doc, x + w * 0.55, y + h * 0.45, w * 0.35, h * 0.22, 180, 360, r, s);
  },
  's': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.43, w * 0.38, h * 0.18, 45, 270, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.77, w * 0.4, h * 0.2, 225, 90, r, s);
  },
  't': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.45, y + h * 0.1, x + w * 0.45, y + h * 0.85, r, s);
    drawDottedLine(doc, x + w * 0.15, y + h * 0.35, x + w * 0.75, y + h * 0.35, r, s);
    drawDottedArc(doc, x + w * 0.65, y + h * 0.85, w * 0.2, h * 0.15, 0, 180, r, s);
  },
  'u': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.15, y + h * 0.3, x + w * 0.15, y + h * 0.7, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.3, x + w * 0.85, y + h, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.7, w * 0.35, h * 0.25, 0, 180, r, s);
  },
  'v': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.5, y + h, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.5, y + h, r, s);
  },
  'w': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.3, y + h, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.5, x + w * 0.3, y + h, r, s);
    drawDottedLine(doc, x + w * 0.5, y + h * 0.5, x + w * 0.7, y + h, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.7, y + h, r, s);
  },
  'x': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.9, y + h, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.1, y + h, r, s);
  },
  'y': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.5, y + h * 0.7, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.2, y + h * 1.1, r, s);
  },
  'z': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y + h * 0.3, x + w * 0.9, y + h * 0.3, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.1, y + h, r, s);
    drawDottedLine(doc, x + w * 0.1, y + h, x + w * 0.9, y + h, r, s);
  }
};

// Single stroke paths for Hijaiyah Arabic Letters (98%+ Khat Naskh Single Stroke)
const hijaiyahPaths = {
  // 1. Alif
  'ا': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.52, y + h * 0.05, x + w * 0.48, y + h * 0.35, x + w * 0.52, y + h * 0.65, x + w * 0.5, y + h * 0.95, r, s);
  },
  // 2. Ba
  'ب': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.35, x + w * 0.88, y + h * 0.72, x + w * 0.12, y + h * 0.72, x + w * 0.12, y + h * 0.35, r, s);
    doc.circle(x + w * 0.5, y + h * 0.92, r * 1.1, "F");
  },
  // 3. Ta
  'ت': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.42, x + w * 0.88, y + h * 0.78, x + w * 0.12, y + h * 0.78, x + w * 0.12, y + h * 0.42, r, s);
    doc.circle(x + w * 0.42, y + h * 0.22, r * 1.1, "F");
    doc.circle(x + w * 0.58, y + h * 0.22, r * 1.1, "F");
  },
  // 4. Tsa
  'ث': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.45, x + w * 0.88, y + h * 0.82, x + w * 0.12, y + h * 0.82, x + w * 0.12, y + h * 0.45, r, s);
    doc.circle(x + w * 0.42, y + h * 0.26, r * 1.1, "F");
    doc.circle(x + w * 0.58, y + h * 0.26, r * 1.1, "F");
    doc.circle(x + w * 0.5, y + h * 0.1, r * 1.1, "F");
  },
  // 5. Jim
  'ج': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.3, y + h * 0.18, x + w * 0.55, y + h * 0.15, x + w * 0.75, y + h * 0.15, x + w * 0.82, y + h * 0.18, r, s);
    drawDottedBezier(doc, x + w * 0.82, y + h * 0.18, x + w * 0.65, y + h * 0.3, x + w * 0.55, y + h * 0.38, x + w * 0.48, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.48, y + h * 0.42, x + w * 0.95, y + h * 0.5, x + w * 0.9, y + h * 0.92, x + w * 0.22, y + h * 0.78, r, s);
    doc.circle(x + w * 0.52, y + h * 0.65, r * 1.1, "F");
  },
  // 6. Ha
  'ح': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.3, y + h * 0.18, x + w * 0.55, y + h * 0.15, x + w * 0.75, y + h * 0.15, x + w * 0.82, y + h * 0.18, r, s);
    drawDottedBezier(doc, x + w * 0.82, y + h * 0.18, x + w * 0.65, y + h * 0.3, x + w * 0.55, y + h * 0.38, x + w * 0.48, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.48, y + h * 0.42, x + w * 0.95, y + h * 0.5, x + w * 0.9, y + h * 0.92, x + w * 0.22, y + h * 0.78, r, s);
  },
  // 7. Kha
  'خ': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.3, y + h * 0.18, x + w * 0.55, y + h * 0.15, x + w * 0.75, y + h * 0.15, x + w * 0.82, y + h * 0.18, r, s);
    drawDottedBezier(doc, x + w * 0.82, y + h * 0.18, x + w * 0.65, y + h * 0.3, x + w * 0.55, y + h * 0.38, x + w * 0.48, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.48, y + h * 0.42, x + w * 0.95, y + h * 0.5, x + w * 0.9, y + h * 0.92, x + w * 0.22, y + h * 0.78, r, s);
    doc.circle(x + w * 0.55, y + h * 0.05, r * 1.1, "F");
  },
  // 8. Dal
  'د': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.68, y + h * 0.2, x + w * 0.5, y + h * 0.35, x + w * 0.3, y + h * 0.6, x + w * 0.25, y + h * 0.8, r, s);
    drawDottedLine(doc, x + w * 0.25, y + h * 0.8, x + w * 0.82, y + h * 0.8, r, s);
  },
  // 9. Dzal (ذ)
  'ذ': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.68, y + h * 0.28, x + w * 0.52, y + h * 0.4, x + w * 0.32, y + h * 0.62, x + w * 0.25, y + h * 0.82, r, s);
    drawDottedLine(doc, x + w * 0.25, y + h * 0.82, x + w * 0.82, y + h * 0.82, r, s);
    doc.circle(x + w * 0.55, y + h * 0.12, r * 1.15, "F");
  },
  // 10. Ra (ر)
  'ر': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.72, y + h * 0.25, x + w * 0.62, y + h * 0.48, x + w * 0.42, y + h * 0.78, x + w * 0.18, y + h * 0.9, r, s);
  },
  // 11. Zai (ز)
  'ز': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.72, y + h * 0.28, x + w * 0.62, y + h * 0.5, x + w * 0.42, y + h * 0.8, x + w * 0.18, y + h * 0.92, r, s);
    doc.circle(x + w * 0.62, y + h * 0.1, r * 1.15, "F");
  },
  // 12. Sin (س)
  'س': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.28, x + w * 0.88, y + h * 0.45, x + w * 0.72, y + h * 0.45, x + w * 0.72, y + h * 0.28, r, s);
    drawDottedBezier(doc, x + w * 0.72, y + h * 0.28, x + w * 0.72, y + h * 0.48, x + w * 0.55, y + h * 0.48, x + w * 0.55, y + h * 0.28, r, s);
    drawDottedBezier(doc, x + w * 0.55, y + h * 0.28, x + w * 0.55, y + h * 0.9, x + w * 0.12, y + h * 0.9, x + w * 0.12, y + h * 0.5, r, s);
  },
  // 13. Syin (ش)
  'ش': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.35, x + w * 0.88, y + h * 0.5, x + w * 0.72, y + h * 0.5, x + w * 0.72, y + h * 0.35, r, s);
    drawDottedBezier(doc, x + w * 0.72, y + h * 0.35, x + w * 0.72, y + h * 0.52, x + w * 0.55, y + h * 0.52, x + w * 0.55, y + h * 0.35, r, s);
    drawDottedBezier(doc, x + w * 0.55, y + h * 0.35, x + w * 0.55, y + h * 0.92, x + w * 0.12, y + h * 0.92, x + w * 0.12, y + h * 0.55, r, s);
    doc.circle(x + w * 0.62, y + h * 0.18, r * 1.15, "F");
    doc.circle(x + w * 0.78, y + h * 0.18, r * 1.15, "F");
    doc.circle(x + w * 0.7, y + h * 0.05, r * 1.15, "F");
  },
  // 14. Shod (ص)
  'ص': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.52, y + h * 0.42, x + w * 0.72, y + h * 0.22, x + w * 0.92, y + h * 0.25, x + w * 0.88, y + h * 0.42, r, s);
    drawDottedLine(doc, x + w * 0.88, y + h * 0.42, x + w * 0.52, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.52, y + h * 0.32, x + w * 0.52, y + h * 0.9, x + w * 0.12, y + h * 0.9, x + w * 0.12, y + h * 0.5, r, s);
  },
  // 15. Dhod (ض)
  'ض': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.52, y + h * 0.44, x + w * 0.72, y + h * 0.24, x + w * 0.92, y + h * 0.27, x + w * 0.88, y + h * 0.44, r, s);
    drawDottedLine(doc, x + w * 0.88, y + h * 0.44, x + w * 0.52, y + h * 0.44, r, s);
    drawDottedBezier(doc, x + w * 0.52, y + h * 0.34, x + w * 0.52, y + h * 0.92, x + w * 0.12, y + h * 0.92, x + w * 0.12, y + h * 0.52, r, s);
    doc.circle(x + w * 0.72, y + h * 0.1, r * 1.15, "F");
  },
  // 16. Tha (ط)
  'ط': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.35, y + h * 0.78, x + w * 0.62, y + h * 0.52, x + w * 0.92, y + h * 0.55, x + w * 0.85, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.78, x + w * 0.22, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.42, y + h * 0.05, x + w * 0.42, y + h * 0.78, r, s);
  },
  // 17. Dzha (ظ)
  'ظ': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.35, y + h * 0.78, x + w * 0.62, y + h * 0.52, x + w * 0.92, y + h * 0.55, x + w * 0.85, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.78, x + w * 0.22, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.42, y + h * 0.05, x + w * 0.42, y + h * 0.78, r, s);
    doc.circle(x + w * 0.72, y + h * 0.38, r * 1.15, "F");
  },
  // 18. Ain (ع)
  'ع': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.75, y + h * 0.18, x + w * 0.45, y + h * 0.15, x + w * 0.45, y + h * 0.35, x + w * 0.7, y + h * 0.38, r, s);
    drawDottedBezier(doc, x + w * 0.7, y + h * 0.38, x + w * 0.92, y + h * 0.52, x + w * 0.88, y + h * 0.92, x + w * 0.2, y + h * 0.8, r, s);
  },
  // 19. Ghain (غ)
  'غ': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.75, y + h * 0.22, x + w * 0.45, y + h * 0.19, x + w * 0.45, y + h * 0.39, x + w * 0.7, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.7, y + h * 0.42, x + w * 0.92, y + h * 0.56, x + w * 0.88, y + h * 0.94, x + w * 0.2, y + h * 0.82, r, s);
    doc.circle(x + w * 0.62, y + h * 0.08, r * 1.15, "F");
  },
  // 20. Fa (ف)
  'ف': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedArc(doc, x + w * 0.78, y + h * 0.3, w * 0.14, h * 0.14, 0, 360, r, s);
    drawDottedBezier(doc, x + w * 0.78, y + h * 0.44, x + w * 0.78, y + h * 0.78, x + w * 0.12, y + h * 0.78, x + w * 0.12, y + h * 0.45, r, s);
    doc.circle(x + w * 0.78, y + h * 0.08, r * 1.15, "F");
  },
  // 21. Qaf (ق)
  'ق': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedArc(doc, x + w * 0.78, y + h * 0.3, w * 0.14, h * 0.14, 0, 360, r, s);
    drawDottedBezier(doc, x + w * 0.78, y + h * 0.44, x + w * 0.78, y + h * 0.9, x + w * 0.15, y + h * 0.9, x + w * 0.15, y + h * 0.5, r, s);
    doc.circle(x + w * 0.7, y + h * 0.08, r * 1.15, "F");
    doc.circle(x + w * 0.86, y + h * 0.08, r * 1.15, "F");
  },
  // 22. Kaf (ك)
  'ك': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedLine(doc, x + w * 0.82, y + h * 0.08, x + w * 0.82, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.82, y + h * 0.78, x + w * 0.18, y + h * 0.78, r, s);
    drawDottedLine(doc, x + w * 0.18, y + h * 0.62, x + w * 0.18, y + h * 0.78, r, s);
    drawDottedBezier(doc, x + w * 0.42, y + h * 0.3, x + w * 0.58, y + h * 0.3, x + w * 0.38, y + h * 0.55, x + w * 0.58, y + h * 0.55, r, s);
  },
  // 23. Lam (ل)
  'ل': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedLine(doc, x + w * 0.78, y + h * 0.08, x + w * 0.78, y + h * 0.55, r, s);
    drawDottedBezier(doc, x + w * 0.78, y + h * 0.55, x + w * 0.78, y + h * 0.9, x + w * 0.18, y + h * 0.9, x + w * 0.18, y + h * 0.5, r, s);
  },
  // 24. Mim (م)
  'م': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedArc(doc, x + w * 0.68, y + h * 0.2, w * 0.16, h * 0.14, 0, 360, r, s);
    drawDottedLine(doc, x + w * 0.52, y + h * 0.2, x + w * 0.52, y + h * 0.95, r, s);
  },
  // 25. Nun (ن)
  'ن': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.88, y + h * 0.35, x + w * 0.88, y + h * 0.88, x + w * 0.12, y + h * 0.88, x + w * 0.12, y + h * 0.35, r, s);
    doc.circle(x + w * 0.5, y + h * 0.2, r * 1.15, "F");
  },
  // 26. Wau (و)
  'و': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedArc(doc, x + w * 0.75, y + h * 0.25, w * 0.14, h * 0.14, 0, 360, r, s);
    drawDottedBezier(doc, x + w * 0.75, y + h * 0.39, x + w * 0.65, y + h * 0.6, x + w * 0.45, y + h * 0.85, x + w * 0.18, y + h * 0.9, r, s);
  },
  // 27. Ha (ه - Big Ha)
  'ه': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.4, h * 0.4, 0, 360, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.42, w * 0.18, h * 0.2, 0, 360, r, s);
  },
  // 28. Ya (ي)
  'ي': (doc, x, y, w, h, r = 1.0, s = 4.8) => {
    drawDottedBezier(doc, x + w * 0.8, y + h * 0.2, x + w * 0.5, y + h * 0.15, x + w * 0.45, y + h * 0.38, x + w * 0.75, y + h * 0.42, r, s);
    drawDottedBezier(doc, x + w * 0.75, y + h * 0.42, x + w * 0.9, y + h * 0.82, x + w * 0.15, y + h * 0.82, x + w * 0.15, y + h * 0.5, r, s);
    doc.circle(x + w * 0.4, y + h * 0.92, r * 1.15, "F");
    doc.circle(x + w * 0.6, y + h * 0.92, r * 1.15, "F");
  }
};

// Single stroke paths for numbers 0-9
const digitPaths = {
  '0': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.5, w * 0.42, h * 0.48, 0, 360, r, s);
  },
  '1': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.5, y, x + w * 0.5, y + h, r, s);
    drawDottedLine(doc, x + w * 0.2, y + h * 0.25, x + w * 0.5, y, r, s);
    drawDottedLine(doc, x + w * 0.2, y + h, x + w * 0.8, y + h, r, s);
  },
  '2': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.28, w * 0.45, h * 0.26, 220, 40, r, s);
    drawDottedLine(doc, x + w * 0.85, y + h * 0.4, x + w * 0.1, y + h, r, s);
    drawDottedLine(doc, x + w * 0.1, y + h, x + w * 0.9, y + h, r, s);
  },
  '3': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y, x + w * 0.9, y, r, s);
    drawDottedLine(doc, x + w * 0.9, y, x + w * 0.4, y + h * 0.45, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.7, w * 0.45, h * 0.28, 220, 90, r, s);
  },
  '4': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.7, y, x + w * 0.1, y + h * 0.65, r, s);
    drawDottedLine(doc, x + w * 0.1, y + h * 0.65, x + w * 0.95, y + h * 0.65, r, s);
    drawDottedLine(doc, x + w * 0.7, y + h * 0.3, x + w * 0.7, y + h, r, s);
  },
  '5': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.85, y, x + w * 0.2, y, r, s);
    drawDottedLine(doc, x + w * 0.2, y, x + w * 0.2, y + h * 0.45, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.7, w * 0.45, h * 0.28, 220, 90, r, s);
  },
  '6': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.8, y, x + w * 0.2, y + h * 0.5, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.7, w * 0.42, h * 0.28, 0, 360, r, s);
  },
  '7': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedLine(doc, x + w * 0.1, y, x + w * 0.9, y, r, s);
    drawDottedLine(doc, x + w * 0.9, y, x + w * 0.3, y + h, r, s);
  },
  '8': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.26, w * 0.38, h * 0.24, 0, 360, r, s);
    drawDottedArc(doc, x + w * 0.5, y + h * 0.74, w * 0.44, h * 0.26, 0, 360, r, s);
  },
  '9': (doc, x, y, w, h, r = 1.0, s = 5.8) => {
    drawDottedArc(doc, x + w * 0.5, y + h * 0.3, w * 0.42, h * 0.28, 0, 360, r, s);
    drawDottedLine(doc, x + w * 0.9, y + h * 0.3, x + w * 0.3, y + h, r, s);
  }
};

function renderNumberSingleStroke(doc, numStr, x, y, digitW = 20, digitH = 35) {
  const digits = String(numStr).split('');
  digits.forEach((d, idx) => {
    if (digitPaths[d]) {
      digitPaths[d](doc, x + idx * (digitW + 4), y, digitW, digitH, 1.0, 5.8);
    }
  });
}

function generateTracingPDF() {
  console.log("Generating 100% Equidistant Single-Stroke CALISTUNG & Hijaiyah Tracing PDF (42 Pages)...");
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // Load Tahoma font for Arabic preview support
  const fontPath = 'C:/Windows/Fonts/tahoma.ttf';
  let hasArabicFont = false;
  if (fs.existsSync(fontPath)) {
    try {
      const fontBase64 = fs.readFileSync(fontPath).toString('base64');
      doc.addFileToVFS('tahoma.ttf', fontBase64);
      doc.addFont('tahoma.ttf', 'Tahoma', 'normal', 'Identity-H');
      hasArabicFont = true;
    } catch (e) {}
  }

  const totalPages = 42;

  function drawHeaderFooter(pageNo) {
    doc.setFillColor(26, 35, 126); doc.rect(0, 0, 210, 14, "F");
    doc.setFont("Helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(255, 255, 255);
    doc.text(`Lembar Tracing Santri ${pageNo}`, 15, 9.5);
    doc.text("TPQ Plus Bintang Rabbani", 195, 9.5, { align: "right" });
    doc.setFont("Helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(180, 0, 0);
    doc.text("dilarang mengcopy, memperbanyak dan menggunakan dokumen ini tanpa seizin dari TPQ Plus Bintang Rabbani.", 15, 287);
    doc.setFont("Helvetica", "bold"); doc.setFontSize(8.5); doc.setTextColor(26, 35, 126);
    doc.text(`Halaman ${pageNo} dari ${totalPages}`, 195, 287, { align: "right" });
  }

  function drawImageByDocIndex(index, cx, cy) {
    const imgType = index % 5;
    doc.setFillColor(60, 60, 60);
    if (imgType === 0) { // Apel
      drawDottedArc(doc, cx - 4, cy, 7, 9, 0, 360, 1.0, 5.5);
      drawDottedArc(doc, cx + 4, cy, 7, 9, 0, 360, 1.0, 5.5);
      drawDottedLine(doc, cx, cy - 8, cx + 2, cy - 14, 1.0, 5.5);
    } else if (imgType === 1) { // Jeruk
      drawDottedArc(doc, cx, cy, 10, 10, 0, 360, 1.0, 5.5);
      doc.circle(cx, cy - 10, 1.1, "F");
    } else if (imgType === 2) { // Kucing
      drawDottedArc(doc, cx, cy, 10, 8, 0, 360, 1.0, 5.5);
      drawDottedLine(doc, cx - 8, cy - 4, cx - 5, cy - 12, 1.0, 5.5);
      drawDottedLine(doc, cx - 5, cy - 12, cx - 2, cy - 6, 1.0, 5.5);
      drawDottedLine(doc, cx + 2, cy - 6, cx + 5, cy - 12, 1.0, 5.5);
      drawDottedLine(doc, cx + 5, cy - 12, cx + 8, cy - 4, 1.0, 5.5);
    } else if (imgType === 3) { // Ikan
      drawDottedArc(doc, cx, cy, 12, 8, 0, 360, 1.0, 5.5);
      drawDottedLine(doc, cx + 11, cy, cx + 18, cy - 7, 1.0, 5.5);
      drawDottedLine(doc, cx + 18, cy - 7, cx + 18, cy + 7, 1.0, 5.5);
      drawDottedLine(doc, cx + 18, cy + 7, cx + 11, cy, 1.0, 5.5);
    } else { // Bunga
      drawDottedArc(doc, cx, cy, 4, 4, 0, 360, 1.0, 5.5);
      for (let i = 0; i < 5; i++) {
        let a = i * 72 * Math.PI / 180;
        drawDottedArc(doc, cx + Math.cos(a) * 9, cy + Math.sin(a) * 9, 4, 4, 0, 360, 1.0, 5.5);
      }
    }
  }

  doc.setFillColor(60, 60, 60);

  for (let p = 1; p <= totalPages; p++) {
    if (p > 1) doc.addPage();
    drawHeaderFooter(p);
    let y = 24;

    if (p <= 26) {
      const item = latinList[p - 1];
      doc.setFillColor(232, 244, 253); doc.rect(15, y, 180, 12, "F");
      doc.setFont("Helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(26, 35, 126);
      doc.text(`LEMBAR TRACING "${item.char}" / "${item.lower}"`, 105, y + 8, { align: "center" });

      y += 16;
      drawImageByDocIndex(p - 1, 172, y + 16);
      y += 37;

      // Section A: Huruf Kapital
      doc.setFont("Helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(26, 35, 126);
      doc.text(`A. Penebalan Huruf Kapital (${item.char})`, 15, y); y += 4;
      doc.rect(15, y, 180, 96);
      
      const capFunc = capitalPaths[item.char];
      if (capFunc) {
        doc.setFillColor(60, 60, 60);
        capFunc(doc, 30, y + 8, 30, 36, 1.0, 5.8);
        capFunc(doc, 90, y + 8, 30, 36, 1.0, 5.8);
        capFunc(doc, 150, y + 8, 30, 36, 1.0, 5.8);

        capFunc(doc, 30, y + 52, 30, 36, 1.0, 5.8);
        capFunc(doc, 90, y + 52, 30, 36, 1.0, 5.8);
        capFunc(doc, 150, y + 52, 30, 36, 1.0, 5.8);
      }

      y += 103;

      // Section B: Huruf Kecil
      doc.setFont("Helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(26, 35, 126);
      doc.text(`B. Penebalan Huruf Kecil (${item.lower})`, 15, y); y += 4;
      doc.rect(15, y, 180, 96);

      const lowFunc = lowercasePaths[item.lower];
      if (lowFunc) {
        doc.setFillColor(60, 60, 60);
        lowFunc(doc, 32, y + 8, 26, 36, 1.0, 5.8);
        lowFunc(doc, 92, y + 8, 26, 36, 1.0, 5.8);
        lowFunc(doc, 152, y + 8, 26, 36, 1.0, 5.8);

        lowFunc(doc, 32, y + 52, 26, 36, 1.0, 5.8);
        lowFunc(doc, 92, y + 52, 26, 36, 1.0, 5.8);
        lowFunc(doc, 152, y + 52, 26, 36, 1.0, 5.8);
      }

    } else if (p >= 27 && p <= 35) {
      if (p === 35) {
        doc.text("LEMBAR SPECIAL ANGKA 25", 105, y + 8, { align: "center" }); y += 18;
        doc.rect(15, y, 180, 100);
        doc.setFillColor(60, 60, 60);
        renderNumberSingleStroke(doc, "25", 25, y + 10, 20, 36);
        renderNumberSingleStroke(doc, "25", 85, y + 10, 20, 36);
        renderNumberSingleStroke(doc, "25", 145, y + 10, 20, 36);

        renderNumberSingleStroke(doc, "25", 25, y + 54, 20, 36);
        renderNumberSingleStroke(doc, "25", 85, y + 54, 20, 36);
        renderNumberSingleStroke(doc, "25", 145, y + 54, 20, 36);
      } else {
        for (let i = 0; i < 3; i++) {
          let numVal = (p - 27) * 3 + 1 + i;
          if (numVal > 25) break;
          doc.rect(15, y, 180, 75);
          doc.setFont("Helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(26, 35, 126);
          doc.text(`Angka ${numVal}:`, 52, y + 12);
          doc.setFillColor(60, 60, 60);
          renderNumberSingleStroke(doc, numVal, 56, y + 22, 18, 36);
          renderNumberSingleStroke(doc, numVal, 106, y + 22, 18, 36);
          renderNumberSingleStroke(doc, numVal, 154, y + 22, 18, 36);
          y += 81;
        }
      }
    } else {
      const hijaiyahNames = {
        'ا': 'Alif', 'ب': 'Ba', 'ت': 'Ta', 'ث': 'Tsa', 'ج': 'Jim', 'ح': 'Ha', 'خ': 'Kha',
        'د': 'Dal', 'ذ': 'Dzal', 'ر': 'Ra', 'ز': 'Zai', 'س': 'Sin', 'ش': 'Syin', 'ص': 'Shod',
        'ض': 'Dhod', 'ط': 'Tha', 'ظ': 'Dzha', 'ع': "'Ain", 'غ': 'Ghain', 'ف': 'Fa', 'ق': 'Qaf',
        'ك': 'Kaf', 'ل': 'Lam', 'م': 'Mim', 'ن': 'Nun', 'و': 'Wau', 'ه': 'Ha', 'ي': 'Ya'
      };
      let idx = p - 36;
      let letters = Object.keys(hijaiyahNames);
      let pageLetters = letters.slice(idx * 4, idx * 4 + 4);
      pageLetters.forEach((key) => {
        doc.rect(15, y, 180, 56);
        if (hasArabicFont) doc.setFont("Tahoma", "normal");
        else doc.setFont("Helvetica", "bold");
        doc.setFontSize(26);
        doc.setTextColor(194, 24, 91);
        doc.text(key, 33, y + 34, { align: "center" });

        doc.setFont("Helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(26, 35, 126);
        doc.text(`Huruf ${hijaiyahNames[key] || key} (Khat Naskh):`, 52, y + 10);

        doc.setFillColor(60, 60, 60);
        // Exactly 3 double-stroke trace letters per box (1 row of 3 big Khat Naskh outline letters)
        if (naskhFont) {
          renderNaskhDoubleStrokeDots(doc, naskhFont, key, 58, y + 12, 28, 38, 0.95, 3.6);
          renderNaskhDoubleStrokeDots(doc, naskhFont, key, 104, y + 12, 28, 38, 0.95, 3.6);
          renderNaskhDoubleStrokeDots(doc, naskhFont, key, 150, y + 12, 28, 38, 0.95, 3.6);
        } else if (hijaiyahPaths[key]) {
          hijaiyahPaths[key](doc, 58, y + 10, 28, 38, 1.0, 4.8);
          hijaiyahPaths[key](doc, 104, y + 10, 28, 38, 1.0, 4.8);
          hijaiyahPaths[key](doc, 150, y + 10, 28, 38, 1.0, 4.8);
        }
        y += 61;
      });
    }
  }

  const filename = "Modul_Tracing_50_Halaman_CALISTUNG_Bintang_Rabbani.pdf";
  const pdfOutput = doc.output('arraybuffer');
  fs.writeFileSync(filename, Buffer.from(pdfOutput));
  console.log(`PDF successfully generated and saved to: ${filename}`);
}

generateTracingPDF();
