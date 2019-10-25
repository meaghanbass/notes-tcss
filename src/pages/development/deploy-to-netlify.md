---
title: "Deploying to Netlify"
tag: "dev"
---

* Push site to GitHub
* Create a new repo - 
    * ***Leave "Initialize the repo with a README" unchecked***
* cd into blog directory on your computer
* <pre class="pre-sm">> git init
> git add .
> git commit -m "initial commit"
> git remote add origin https://github.com/yourname/your-repo.git
> git push -u origin master</pre>
* Sign in to <a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a>
* <kbd>New site from Git</kbd>
* Select GitHub
* *Select "Install" Netlify to Github if the option is required*
* Choose the repository that you are deploying
* <kbd>Deploy Site</kbd>
