from node:16-alpine
run apk add --no-cache libc6-compat
workdir app/
copy . .
run npm install

cmd "npm" "run" "build"
cmd "npm" "run" "dev"
