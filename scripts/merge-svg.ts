import { readFileSync, writeFileSync } from 'fs';
import { parse, stringify } from 'svgson';

const [backgroundPath, characterPath, outputPath] = process.argv.slice(2);

if (!backgroundPath || !characterPath || !outputPath) {
  console.error('Usage: ts-node merge-svg.ts <background.svg> <character.svg> <output.svg>');
  process.exit(1);
}

(async () => {
  const backgroundText = readFileSync(backgroundPath, 'utf8');
  const characterText = readFileSync(characterPath, 'utf8');

  const background = await parse(backgroundText);
  const character = await parse(characterText);

  // must add xlink if it is present in either of the svg
  const usesXlink =
  backgroundText.includes('xlink:') || characterText.includes('xlink:');
  if (usesXlink && !background.attributes['xmlns:xlink']) {
    background.attributes['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
  }

  // group with g tag
  const charGroup = {
    name: 'g',
    type: 'element',
    value: '',
    attributes: {
      transform: 'translate(0, 0)',
    },
    children: character.children,
  };

  background.children.push(charGroup);

  const outputSvg = stringify(background, { selfClose: true });
  writeFileSync(outputPath, outputSvg, 'utf8');
})();
