import fs from 'fs';
import path from 'path';

function convertSvgFile(inputFile: string, outputFile: string): void {
  try {
    if (!fs.existsSync(inputFile)) {
      throw new Error(`can't find input file: ${inputFile}`);
    }

    const svgContent = fs.readFileSync(inputFile, 'utf-8');

    const convertedSvg = svgContent.replace(
      /(\s+style=["'])([^"']*color-interpolation-filters\s*:\s*([^;"']+))([^"']*)(["'])/g,
      (match, prefix, beforeProp, value, afterProp, suffix) => {
        const remainingStyle = (beforeProp.replace(/color-interpolation-filters\s*:\s*[^;"']+\s*;?\s*/, '') + afterProp)
          .replace(/^\s*;\s*|\s*;\s*$/g, '')
          .replace(/\s*;\s*;/g, ';');

        let result = ` colorInterpolationFilters="${value.trim()}"`;

        if (remainingStyle.trim()) {
          result += `${prefix}${remainingStyle}${suffix}`;
        }

        return result;
      }
    );

    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, convertedSvg, 'utf-8');


  } catch (error) {
    throw new Error(`error: ${error}`)
  }
}

function main() {
  const args = process.argv.slice(2);

  const [inputFile, outputFile] = args;
  convertSvgFile(inputFile, outputFile);
}

main();

export { convertSvgFile };
