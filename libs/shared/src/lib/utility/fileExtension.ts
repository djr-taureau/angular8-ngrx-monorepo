import { filter, contains, pathOr } from 'ramda';

const fileExtensions = [
  {
    systemSlug: 'worddoc',
    matchCriteria: ['docx']
  },
  {
    systemSlug: 'powerpoint',
    matchCriteria: ['pptx']
  },
  {
    systemSlug: 'excel',
    matchCriteria: ['xlsx']
  },
  {
    systemSlug: 'image',
    matchCriteria: ['jpg', 'jpeg', 'gif', 'png']
  },
  {
    systemSlug: 'zip',
    matchCriteria: ['zip', 'gz']
  },
  {
    systemSlug: 'pdf',
    matchCriteria: ['pdf']
  }
];

// const isFileType = compare => n => contains(compare, n.matchCriteria);

/**
 * Return a string with a slug reprensenting a file type. This is used for determining file type to render system icons
 * @param fileName a string containing the file name or path to file.
 */
// export const fileTypesSlug = (fileName: string) => {
//   const fileExtension = fileName.split('.').pop();
//   const fileExtensionFilter = filter(isFileType(fileExtension), fileExtensions);

//   return pathOr('file', [0, 'systemSlug'], fileExtensionFilter);
// };
