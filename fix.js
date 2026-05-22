const fs = require('fs');
let book = fs.readFileSync('app/book/page.tsx', 'utf8');
// Remove the duplicate Link import
book = book.replace(
  `import { useState } from 'react';\nimport Link from 'next/link';\nimport Link from 'next/link';`,
  `import { useState } from 'react';\nimport Link from 'next/link';`
);
fs.writeFileSync('app/book/page.tsx', book);
console.log('Duplicate import removed!');