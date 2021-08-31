# Project Setup

To create a package.json file, use npm init -y

To create a tsconfig file use tsc --init

Installing nodemon and concurrently allows you to build locally automatically while the terminal is running.

npm install nodemon currently

To configure the output directory, go to the outdir in the ts.config and change it to "./build"

To configure the src directy, go to the rootdir in the ts.config and change it to "./src"

To setup nodemon and currently to run automatically, modify the package.json and place this block in the scripts section of the codebase

"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:\*"

# What this will do

This project will read in data from a csv file, run analytics on that file, then report on the data.

This project made heavy use of composition in the Summary.ts file. Two interfaces were defined for Analyzer and OutputTarget. These two intefaces were then inheritted by  
the given analyzer and report target that was going to be reporting. The inhertiance is optional and only exists so that typescript will validate that the class implements the interface correctly.

This process allows a user to generate a new summary and passing in the object they want for an analyzer like an html report or console report. The same can be said for analyzers if there were more than a wins analysis.

This differs from inheritance where the summary class would need to implemented by either each reporting or analyzer that was going to be reported on.
