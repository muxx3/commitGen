<h2 align="center"> GitHub Contribution Art Generator </h2>

***This project is a simple Node.js script that generates artificial commit 
history to paint the GitHub contribution graph — useful for creating pixel art or writing text 
(like your name!) using the green squares on your GitHub profile.***


> This script makes 100 commits for every day of the year 2006, using backdated Git commits. The commits are pushed to a connected Git repository and visually render patterns (e.g., text or shapes) in the GitHub contributions graph.

<p align="center">
  <img src="https://raw.githubusercontent.com/muxx3/commitGen/main/gitcommit.png" alt="Git Commit Art" />
</p>

<h2 align="center">  Requirements </h2>

    Node.js (v18+ recommended)

    Git (installed and accessible in PATH)

    A new or existing GitHub repository

<h2 align="center">  Project Structure </h2>

    index.js – the script that generates and commits changes daily.

    data.json – temporary file written to with each commit.

    package.json – dependency and metadata config.

<h2 align="center">  How to Use </h2>

1. Clone a Private Repository

> type 'git clone git@github.com:muxx3/commitGen.git' in your terminal
>>cd commitGen

2. Install Dependencies

>npm install

4. Run the Script

>node index.js

    ⚠ Warning: It will take time

5. Push the Commits

>The script automatically pushes all commits to the remote repository once complete.

<h2 align="center">  How It Works </h2>

    Uses simple-git to automate Git.

    Loops over every day of 2006.

    For each day:

        Writes a JSON object to a file (data.json).

        Commits that file up to 100 times with backdated timestamps.

    Pushes all commits to the remote repo.
    
<h2 align="center">  Customization Ideas </h2>

    Modify makeCommitsForDay(date, count) to vary commit counts per day.

    Use a 2D matrix to "draw" text or shapes by mapping dates to commit intensity.

    Target different years by changing START_DATE and END_DATE.

<h2 align="center"> License </h2>

MIT or do-what-you-want.

Let me know if you’d like a version with ASCII preview or an art matrix feature next.

<h2 align="center"> Credits </h2>

Made with 🦀 (Rust) by ![ muxx3 ](https://github.com/muxx3)
