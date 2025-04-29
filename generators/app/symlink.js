import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createSymlink = (generator) => {
  const extensionPath = path.join(process.env.HOME || process.env.USERPROFILE, '.k8slens', 'extensions', generator.extensionConfig.name);
  generator.fs.ensureDir(path.dirname(extensionPath));
  generator.fs.symlink(
    generator.destinationPath(generator.extensionConfig.name),
    extensionPath
  );
};
