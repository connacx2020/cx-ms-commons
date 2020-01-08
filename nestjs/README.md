# local package linking using yarn link
at the nest-ms-commons package repo: yarn link
at the consuming repo: yarn link @cx/nest-ms-commons

# build everytime the codes change
yarn build

# to publish package to npm,
npm login
export PATH=$PATH:/Users/oakkyaw/.npm-global/bin
np