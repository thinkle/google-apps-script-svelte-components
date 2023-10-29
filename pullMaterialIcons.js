import fs from "fs";
import path from "path";

const iconStyles = ["filled", "outlined", "round", "sharp", "two-tone"];

const reservedWords = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "as",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "any",
  "boolean",
  "constructor",
  "declare",
  "get",
  "module",
  "require",
  "number",
  "set",
  "string",
  "symbol",
  "type",
  "from",
  "of",
];

const sanitizeName = (name) => {
  if (reservedWords.includes(name)) return `icon_${name}`;

  if (name === "two-tone") return "twoTone";

  if (/^\d/.test(name)) return `icon${name}`;

  return name;
};

const convertSvgToTsExport = (iconName) => {
  let tsContent = "";
  const sanitizedIconName = sanitizeName(iconName);
  // As we crawl, let's build a map of existing styles...
  let styles = [];
  for (const style of iconStyles) {
    const svgFilePath = path.join(
      process.cwd(),
      `node_modules/@material-design-icons/svg/${style}/${iconName}.svg`
    );
    let sanitizedStyle = style;
    if (style === "two-tone") {
      sanitizedStyle = "twoTone";
    }
    if (fs.existsSync(svgFilePath)) {
      tsContent += `import ${sanitizedStyle} from "@material-design-icons/svg/${style}/${iconName}.svg?raw";\n`;
      styles.push(sanitizedStyle);
    }
  }

  tsContent += `\nexport const ${sanitizedIconName} = {\n  ${styles.join(", ")} 
  \n}`;

  const tsFilePath = path.join(
    process.cwd(),
    `src/lib/icons/${sanitizedIconName}.ts`
  );
  fs.writeFileSync(tsFilePath, tsContent);
  return sanitizedIconName;
};

// Crawl through one style folder to get all icon names
const sampleStyleDir = path.join(
  process.cwd(),
  "node_modules/@material-design-icons/svg/outlined"
);

// Create write stream for index file
const indexFilePath = path.join(process.cwd(), `src/lib/icons/index.ts`);
const indexFileStream = fs.createWriteStream(indexFilePath);

// Generate TS files for all icons
fs.readdirSync(sampleStyleDir).forEach((file) => {
  const iconName = path.parse(file).name;
  let fileName = convertSvgToTsExport(iconName);
  indexFileStream.write(`export { ${fileName} } from './${fileName}';\n`);
});
indexFileStream.end();
