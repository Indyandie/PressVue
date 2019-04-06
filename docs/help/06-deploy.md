# Let's Go Live

Here are the [official instructions](https://vuepress.vuejs.org/guide/deploy.html#github-pages) from the man himself. If you're like me read below.

## Using Github 🐙

### The Build Up

1. Install npm in you project root
    * 🏃 on your CL `npm install`
2. Edit your `package.json`
    * ``` json
      "scripts": {
      "docs:build": "vuepress build docs" <!-- add this guy -->
      },
      ```
3. Create `deplay.sh` in your project root
    * ``` bash
        #!/usr/bin/env sh

        # abort on errors
        set -e

        # build
        npm run docs:build

        # navigate into the build output directory
        cd docs/.vuepress/dist

        # if you are deploying to a custom domain
        # echo 'www.example.com' > CNAME

        git init
        git add -A
        git commit -m 'deploy'

        # Pick your poison 💀

        # if you are deploying to https://<USERNAME>.github.io
        # git push -f https://github.com:<USERNAME>/<USERNAME>.github.io.git master

        # if you are deploying to https://<USERNAME>.github.io/<REPO>
        # git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

        cd -
      ```

4. 🏃 `sh deploy.sh` on your CL

### Github Pages

Setup Github pages for you repo following these [instructions](https://pages.github.com/).

4. Jump right into you repo settings


## The Catch

<img :src="$withBase('/hero.png')" alt="PressVue">
