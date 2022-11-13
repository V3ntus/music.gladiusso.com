# [music.gladiusso.com](https://music.gladiusso.com)

~~Redesign is currently not deployed.~~
You can view a deploy demo here: https://v3ntus.github.io/  
[![React GH Pages Deploy](https://github.com/V3ntus/music.gladiusso.com/actions/workflows/deploy-react-app-gh-pages.yml/badge.svg)](https://github.com/V3ntus/music.gladiusso.com/actions/workflows/deploy-react-app-gh-pages.yml)

<details>
  <summary>Best not look at how the deploy workflow looks like</summary>
  <ol>
    <li>If you insist, it starts at <a href="https://github.com/V3ntus/music.gladiusso.com/blob/redesign/.github/workflows/deploy-react-app-gh-pages.yml">this action</a> which is a fork to include the `--force` flag for `npm install` operations</li>
    <li>That action deploys a build to the `gh-pages` branch, but the <a href="https://v3ntus.github.io/music.gladiusso.com/">deployed build is broken</a>. Ok maybe it isn't now, but it was before this next step</li>
    <li>The <a href="https://github.com/V3ntus/music.gladiusso.com/blob/gh-pages/.github/workflows/copycat.yml">Copycat Action</a> copies this build to the v3ntus.github.io repo in order to get the static files to be listed in the root of v3ntus.github.io</li>
  </ol>
  I promise this will be simplified someday, but the CI/CD workflow works for now (until it doesn't. watch it break on the next commit)
</details>

### Usage:

1. Clone the repo
2. Run `npm install`
3. Run `npm start`

## DeepSource:

[![DeepSource](https://deepsource.io/gh/V3ntus/music.gladiusso.com.svg/?label=active+issues&show_trend=true&token=RQj9wGWhsgNj4AaSgUp-Nwqw)](https://deepsource.io/gh/V3ntus/music.gladiusso.com/?ref=repository-badge)
