## Option 1
<pre>
cd folderName
npm install -g create-react-app
create-react-app appName
cd appName
npm start
</pre>

## Option 2
<pre>
cd folderName
npx create-react-app appName
cd appName
npm start
</pre>

## Troubleshooting

If node_modules folder is deleted, run following commands
<pre>
cd appName
npm install
npm start
</pre>

If git showing many changes, so only subset will be recorded  
Create a .gitignore file in the root directory with the following contents
<pre>
node_modules
</pre>