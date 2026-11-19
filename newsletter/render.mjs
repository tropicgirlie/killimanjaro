// Renders template.html with a diary entry JSON.
// Usage: node render.mjs entries/2026-11-23.json > out.html
// Supports a tiny Mustache subset: {{key.path}}, {{.}}, {{#section}}…{{/section}}, {{^inverse}}…{{/inverse}}
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(join(here, 'template.html'), 'utf8');
const entry = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const labels = JSON.parse(readFileSync(join(here, 'labels.json'), 'utf8'));

const fmtChange = n => (n > 0 ? '+' : n < 0 ? '−' : '±') + Math.abs(n).toFixed(1) + ' kg';

// Derived fields, so the weekly JSON stays simple to fill in.
const data = { ...entry, labels };
if (entry.mood) data.mood = { ...entry.mood, dots: '●'.repeat(entry.mood.score) + '○'.repeat(5 - entry.mood.score) };
if (entry.weight && entry.showWeight !== false) {
  data.weight = { value: entry.weight.kg.toFixed(1), week: fmtChange(entry.weight.kg - entry.weight.lastWeekKg), total: fmtChange(entry.weight.kg - entry.weight.startKg) };
} else data.weight = null;
if (entry.road) data.road = { ...entry.road, percent: Math.min(100, Math.round((entry.road.done / entry.road.goal) * 100)) };
data.stats = [
  entry.energy && { label: labels.energy, value: entry.energy },
  entry.sleepHours && { label: labels.sleep, value: `${entry.sleepHours} h` },
  entry.steps && { label: labels.steps, value: entry.steps.toLocaleString('en-IE') },
  entry.water && { label: labels.water, value: entry.water },
  entry.dose && { label: labels.dose, value: entry.dose },
].filter(Boolean);

const esc = v => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const lookup = (stack, path) => {
  if (path === '.') return stack[0];
  for (const ctx of stack) {
    if (ctx && typeof ctx === 'object') {
      const val = path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), ctx);
      if (val !== undefined) return val;
    }
  }
  return undefined;
};
const empty = v => v == null || v === false || v === '' || (Array.isArray(v) && v.length === 0);

function render(tpl, stack) {
  tpl = tpl.replace(/\{\{([#^])([\w.]+)\}\}([\s\S]*?)\{\{\/\2\}\}/g, (_, kind, key, inner) => {
    const val = lookup(stack, key);
    if (kind === '^') return empty(val) ? render(inner, stack) : '';
    if (empty(val)) return '';
    if (Array.isArray(val)) return val.map(item => render(inner, [item, ...stack])).join('');
    return render(inner, typeof val === 'object' ? [val, ...stack] : stack);
  });
  return tpl.replace(/\{\{([\w.]+|\.)\}\}/g, (_, key) => { const v = lookup(stack, key); return v == null ? '' : esc(v); });
}

process.stdout.write(render(template, [data]));
