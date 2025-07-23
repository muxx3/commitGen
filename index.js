import simpleGit from 'simple-git';
import fs from 'fs';
import moment from 'moment';

const git = simpleGit();
const FILE_PATH = './data.json';
const START_DATE = moment('2006-01-01');
const END_DATE = moment('2006-12-31');

async function makeCommitsForDay(date, count) {
  for (let i = 0; i < count; i++) {
    const commitDate = date.clone().set({ hour: 12, minute: i, second: 0 }).toISOString();
    fs.writeFileSync(FILE_PATH, JSON.stringify({ date: commitDate }));
    await git.add([FILE_PATH]);
    await git.commit(`Commit on ${commitDate}`, { '--date': commitDate });
    console.log(`Committed ${i + 1}/${count} on ${date.format('YYYY-MM-DD')}`);
  }
}

async function main() {
  let currentDate = START_DATE.clone();
  while (currentDate.isSameOrBefore(END_DATE)) {
    await makeCommitsForDay(currentDate, 100);
    currentDate.add(1, 'day');
  }
  console.log('All commits done, pushing...');
  await git.push();
  console.log('Push complete!');
}

main().catch(console.error);

