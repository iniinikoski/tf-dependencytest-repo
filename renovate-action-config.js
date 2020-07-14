const core = require('@actions/core');
const github = require('@actions/github');

const terraformAccessToken = process.env.TF_ACCESS_TOKEN;
const debugMe = process.env['DEBUG_ME']

console.log("The value of debug value is: " + debugMe)

if(!terraformAccessToken){
  console.log("The TF_ACCESS_TOKEN environment variable must be set")
  process.exit(1);
}

module.exports = {
  branchPrefix: 'test-renovate-action/',
  dryRun: true,
  // logLevel: 'trace',
  logLevel: 'debug',
  onboarding: false,
  platform: 'github',
  enabledManagers: ['terraform'],
  includeForks: false,
  repositories: [
    'iniinikoski/tf-dependencytest-repo',
  ],
  "hostRules": [
    {
      "hostName": "app.terraform.io",
      "token": terraformAccessToken,
      "abortOnError": true
    }
  ]
};
