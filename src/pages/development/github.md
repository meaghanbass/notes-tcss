---
title: "GitHub"
tag: ["dev","github"]
---

### Terminal Commands

<div class="card">
    <h4>Setup</h4>
    <table class="col-2">
        <tr>
            <td class="code">git config --global username [firstname lastname]</td>
            <td>Set a name that is identifiable for credit when review version history</td>
        </tr>
        <tr>
            <td class="code">git config --global useremail [email address]</td>
            <td>Set an email address that will be associated with each history marker</td>
        </tr>
        <tr>
            <td class="code">git config --global color.ui auto</td>
            <td>Set automatic command line coloring for Git for easy reviewing</td>
        </tr>
    </table>
</div>

<div class="card">
    <h4>Setup & Init</h4>
    <table class="col-2">
        <tr>
            <td class="code">git init</td>
            <td>Initialize an existing directory as a Git repository</td>
        </tr>
        <tr>
            <td class="code">git clone [url]</td>
            <td>Retrieve an entire repository from a hosted location via URL</td>
        </tr>
    </table>
</div>

<div class="card">
    <h4>Basics</h4>
    <table class="col-2">
        <tr>
            <td class="code">git status</td>
            <td>Show modifiedd files in working directory</td>
        </tr>
        <tr>
            <td class="code">git add [file-name.txt]</td>
            <td>Add a file to the staging area</td>
        </tr>
        <tr>
            <td class="code">git add .</td>
            <td>Add all new and changed files to the staging area</td>
        </tr>
        <tr>
            <td class="code">git commit -m "message"</td>
            <td>Commit changes</td>
        </tr>
        <tr>
            <td class="code">git push</td>
            <td>Push changes to remote repository</td>
        </tr>
        <tr>
            <td class="code">git rm -r [file]</td>
            <td>Remove a file (or folder)</td>
        </tr>
        <tr>
            <td class="code">git reset [file]</td>
            <td>Unstage a file while retaining the changes in working directory</td>
        </tr>
        <tr>
            <td class="code">git diff</td>
            <td>Difference of what is changed but not staged</td>
        </tr>
        <tr>
            <td class="code">git diff --staged</td>
            <td>Difference of what is staged but not yet committed</td>
        </tr>
        <tr>
            <td class="code">git pull</td>
            <td>Fetch and merge any commits from the tracking remote branch</td>
        </tr>
    </table>
</div>

<div class="card">
    <section>
        <span class="marker-green-sm"></span><a href="https://education.github.com/git-cheat-sheet-education.pdf">See more in a PDF from GitHub</a>
    </section>
</div>