import fs from 'fs';

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replace hex colors for backgrounds
content = content.replace(/#060e1c/g, '#f8fafc');   // dark navy -> slate-50
content = content.replace(/#0a1628/g, '#ffffff');   // navy -> white
content = content.replace(/#0d1e35/g, '#f1f5f9');   // slightly lighter navy -> slate-100

// Replace hex colors for gold -> green
content = content.replace(/#c9a84c/g, '#10b981');   // gold -> emerald-500
content = content.replace(/#e8c96e/g, '#34d399');   // light gold -> emerald-400

// Replace rgb/rgba colors corresponding to dark backgrounds
content = content.replace(/10,22,40/g, '255,255,255');
content = content.replace(/6,14,28/g, '248,250,252');
content = content.replace(/26,58,92/g, '226,232,240');

// Replace rgb/rgba gold to green (201, 168, 76 -> 16, 185, 129)
content = content.replace(/201,168,76/g, '16,185,129');

// Replace Tailwind text colors
content = content.replace(/text-white/g, 'text-slate-900');
content = content.replace(/text-gray-300/g, 'text-slate-700');
content = content.replace(/text-gray-400/g, 'text-slate-600');
// text-gray-500 can stay the same, but let's change just to be safe
content = content.replace(/text-gray-500/g, 'text-slate-500');

content = content.replace(/text-yellow-400/g, 'text-emerald-600');
content = content.replace(/hover:text-yellow-400/g, 'hover:text-emerald-600');
content = content.replace(/border-yellow-400/g, 'border-emerald-500');

// Special cases
content = content.replace(/hover:bg-white hover:text-gray-900/g, 'hover:bg-slate-900 hover:text-white');
// The word "Navy" in comment
content = content.replace(/Navy:/g, 'Light:');
// The word "Gold" in comment
content = content.replace(/Gold:/g, 'Green:');

// Gradient text issues (if text is light, we need it dark on light bgs)
// The file has some inline styles where color is manually set to white or light gray.
// E.g., style={{ color: "#0a1628" }} -> we changed #0a1628 to #ffffff, so text will be white.
// Let's fix cases where color was #0a1628 but it was used as text color inside a button:
// "color: '#0a1628'" became "color: '#ffffff'" which is good because the gradient is now emerald (dark). Wait, emerald is #10b981, white text on it is good.
// Let's make sure the text color for the title "KJS WEST GLOBAL" is dealt with. It had `text-white` which is now `text-slate-900`, that is correct!

fs.writeFileSync('src/App.jsx', content);
console.log('Replaced colors successfully.');
