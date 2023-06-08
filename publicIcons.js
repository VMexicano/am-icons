
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const svgtofont = require('svgtofont');
const { generateFonts, FontAssetType, OtherAssetType } = require('fantasticon');

const directoryPath = path.join(__dirname, './src/Icons');
const fileNames = [];
/** CREATE ICONS */
const readFiles = () => {
  return fs.promises.readdir(directoryPath).then(files => {
    console.log('reading files...')
    console.log('founded', files.length, ' files...')
    return new Promise((resolve, reject) => {
      if (files.length === 0) resolve();
      files.forEach(file => {
        const fileDir = file;
        const removeChar = NormalizeName(fileDir);
        fileNames.push({ fileDir, fileName: removeChar });
        resolve();
      });
    });
  })

}
const createReactFiles = () => {
  console.log('creating files...')
  const directoryPathReactComponentFile = path.join(__dirname, './src/components/images/');
  console.log('creating', fileNames.length, ' files...')
  const areAllFilesCreated = new Promise((resolve, reject) => {
    const indexDir = directoryPathReactComponentFile + 'index.js';
    let reactIndexFile = ``;
    fileNames.forEach(elementIcon => {
      const componentName = elementIcon.fileName.split('.')[0];
      const componentDir = directoryPathReactComponentFile + componentName + '.jsx';
      reactIndexFile += `export { default as ${componentName} } from './${componentName}';\n`;
      const reactFile = "import React from 'react';\n" +
        `import ${componentName}_ from '../../Icons/${elementIcon.fileDir}';\n` +
        'const ' + componentName + ' = (props) => {\n' +
        '  return (\n' +
        `    <img src={${componentName}_} alt={props.alt || ''} {...props} >\n` +
        '    </img>\n' +
        '  );\n' +
        '};\n' +
        'export default ' + componentName + ';\n';

      fs.writeFile(componentDir, reactFile, err => {
        if (err) {
          console.error(err);
          reject(err);
        }
        else {
          resolve();
        }
        // file written successfully
      });
      // console.log(reactFile)
    });

    fs.writeFile(indexDir, reactIndexFile, err => {
      if (err) {
        console.error(err);
      }
    });
  });
  return areAllFilesCreated;

}

const NormalizeName = (name) => {
  const capitalize = (str) => str.replace(/-([a-z])/g, (_, char) => '-' + char.toUpperCase()).replace(/_([a-z])/g, (_, char) => '_' + char.toUpperCase());
  return name.charAt(0).toUpperCase() + capitalize(name.slice(1)).replace(/[_-]|\s/g, "");
}
const removeFiles = () => {

  const directoryPathReactComponentFile = path.join(__dirname, './src/components/images/');
  const areAllFilesRemoved = new Promise((resolve, reject) => {
    fs.readdir(directoryPathReactComponentFile, (err, files) => {
      console.log('removing', files.length, ' files...')
      if (err) throw err;
      if (files.length === 0) resolve();
      for (const file of files) {
        fs.unlink(path.join(directoryPathReactComponentFile, file), (err) => {
          if (err) { reject(err) }
          resolve();
        });
      }
    });
  });
  return areAllFilesRemoved
};

const publishFiles = () => {
  console.log('publishing files...', fileNames.length)
  const directoryPathReactComponentFile = path.join(__dirname, './src/');
  const appDir = directoryPathReactComponentFile + 'Icons.js';
  const importImages = `import { ${fileNames.map(elementIcon => {
    const componentName = elementIcon.fileName.split('.')[0];
    return `${componentName},\n`;
  }).join('')
    } } from './components/images';\n`
  // console.log(importImages)
  const appFile = "import React from 'react';\n" +
    "import './Icons.css';\n" +
    importImages +
    'function Icons() {\n' +
    '  return (\n' +
    '    <div className="Icons">\n' +
    fileNames.map(elementIcon => {
      const componentName = elementIcon.fileName.split('.')[0];
      return `       <div className="iconImage">\n<${componentName} alt="${componentName}" />\n<p>${componentName}</p>\n</div>\n`;
    }).join('') +
    '    </div>\n' +
    '  );\n' +
    '}\n' +
    'export default Icons;\n';
  fs.writeFile(appDir, appFile, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
/**Finish Create ICONS */

/**Start Create Fonts */
const createFonts = () => {
  console.log('====================================');
  console.log('creating fonts...');
  console.log('====================================');
  generateFonts({
    inputDir: directoryPath, // (required)
    outputDir: './fonts', // (required)
    name: 'icons',
    fontTypes: [FontAssetType.EOT, FontAssetType.WOFF2, FontAssetType.WOFF],
    assetTypes: [
      OtherAssetType.CSS,
      OtherAssetType.HTML,
      OtherAssetType.JSON,
      OtherAssetType.TS
    ],
    formatOptions: { json: { indent: 2 } },
    templates: {},
    pathOptions: {},
    codepoints: {},
    fontHeight: 300,
    round: undefined, // --
    descent: undefined, // Will use `svgicons2svgfont` defaults
    normalize: undefined, // --
    selector: null,
    tag: 'i',
    prefix: 'icon',
    fontsUrl: '/fonts',
  }).then(results => console.log(results));
}

const normalizeSVGs = () => {
  const { optimize } = require('svgo');
  const directoryPathSvg = path.join(__dirname, './src/Icons/aircon.svg');
  const result = optimize(directoryPathSvg, {
    // optional but recommended field
    path: path.join(__dirname, './src/test'),
    // all config fields are also available here
    multipass: true,
  });
  const optimizedSvgString = result.data;
  console.log('====================================');
  console.log(optimizedSvgString);
  console.log('====================================');
}

for (const i of process.argv) {
  switch (i) {
    case 'createIcons':
      normalizeSVGs();
      // removeFiles().then(() => {
      //   readFiles().then(() => {
      //     createReactFiles().finally(() => {
      //       console.log('files created successfully...')
      //       publishFiles();
      //     });
      //   }); 
      // });
      break;
    case 'createFonts':
      normalizeSVGs();
      // createFonts();
      break;
    default:
      break;
  }
}

module.exports.readFiles = readFiles;