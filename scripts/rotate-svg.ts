import { readFileSync, writeFileSync } from 'fs';
import { parse, stringify } from 'svgson';

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const svgText = readFileSync(inputPath, 'utf8');

(async () => {
  const parsedSvg = await parse(svgText);

  // get viewBox
  const viewBox = parsedSvg.attributes.viewBox?.split(' ').map(Number);
  if (!viewBox || viewBox.length !== 4) {
    throw new Error('viewBox is not set properly');
  }

  const [minX, minY, width, height] = viewBox;

  // rotate viewBox
  parsedSvg.attributes.viewBox = `${minX} ${minY} ${height} ${width}`;

  // reverse width and height
  const origWidth = parsedSvg.attributes.width;
  const origHeight = parsedSvg.attributes.height;
  parsedSvg.attributes.width = origHeight;
  parsedSvg.attributes.height = origWidth;

  // <g> add rotate and translate
  const g = parsedSvg.children.find(c => c.name === 'g');
  if (!g) throw new Error('<g> can\'t be found');

  const prevTransform = g.attributes.transform || '';
  g.attributes.transform = `rotate(90) translate(0 ${-height}) ${prevTransform}`.trim();

  const output = stringify(parsedSvg, { selfClose: true });
  writeFileSync(outputPath, output, 'utf8');
})();
