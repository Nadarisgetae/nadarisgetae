const fs = require('fs');
let workflow = fs.readFileSync('app/workflow/page.tsx', 'utf8');
workflow = workflow.replace(
  `color: '#000', backgroundColor: '#FF0055', padding: '18px 40px', borderRadius: '2px', display: 'inline-block', color: '#fff'`,
  `color: '#fff', backgroundColor: '#FF0055', padding: '18px 40px', borderRadius: '2px', display: 'inline-block'`
);
fs.writeFileSync('app/workflow/page.tsx', workflow);
console.log('Workflow fixed!');