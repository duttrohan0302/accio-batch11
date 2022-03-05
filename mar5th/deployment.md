# Getting started with deploying React Code on Netlify

## Steps

### One time Steps
1. Create an account on netlify.com
2. Go to the root directory of your folder and run <pre>npm i netlify-cli</pre>

### To deploy
1. You should have a build folder
  - Go to the project folder and run <pre>npm run build</pre>
2. In the same folder, run <pre>npx netlify deploy</pre> and sign in if required
3. Choose Create & Configure a new site
4. Enter Optional Site name
5. In publish directory, enter "build"
6. If you use separate links for separate projects, run <pre>npx netlify deploy --prod</pre>Otherwise just use the Website Draft URL


