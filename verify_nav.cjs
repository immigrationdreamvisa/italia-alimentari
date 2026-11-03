const { exec } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
exec(`"${chromePath}" --headless=new --dump-dom http://127.0.0.1:3000/`, { maxBuffer: 10 * 1024 * 1024 }, (err, stdout) => {
  if (err) { console.error('Error:', err); process.exit(1); }
  const navIdx = stdout.indexOf('<nav');
  console.log('Nav HTML:\n', stdout.substring(navIdx, navIdx + 600));
  process.exit(0);
});

