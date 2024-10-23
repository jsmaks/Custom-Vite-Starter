const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const directoryPath = path.join(__dirname, 'src/assets/images');

function processDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
      const fullPath = path.join(directory, file.name);

      if (file.isDirectory()) {
        processDirectory(fullPath);
      } else if (
        path.extname(file.name) === '.png' ||
        path.extname(file.name) === '.jpg' ||
        path.extname(file.name) === '.jpeg'
      ) {
        const outputPath = path.join(
          directory,
          path.basename(file.name, path.extname(file.name)) + '.webp'
        );

        sharp(fullPath)
          .webp({ quality: 60 })
          .toFile(outputPath)
          .catch(err => console.error(err));
      }
    });
  });
}

processDirectory(directoryPath);
