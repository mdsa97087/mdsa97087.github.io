###

FOR GITHUB IO


1.  Make github repo
    `mdsa97087.github.io`
2.  Make Folder
3.  git init
4.  `git remote add origin                           https://github.com/mdsa97087/mdsa97087.github.io.git`

5.  git remote -v
6.  Go to package.json
    `"homepage": "https://mdsa97087.github.io",`

7.  In script
    `
"predeploy": "npm run build",
"deploy": "gh-pages -d build", `

8.    Install
      ` npm install -g gh-pages `

9.    gh-pages --version

10.   ` npm run deploy `

