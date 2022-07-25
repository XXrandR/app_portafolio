from node:16-alpine
run apk add --no-cache libc6-compat
workdir app/
copy package.json app ./
run npm install

cmd "npm" "run" "dev"
