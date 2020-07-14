module.exports = {
  branchPrefix: 'test-renovate-action/',
  dryRun: true,
  logLevel: 'debug',
  onboarding: false,
  platform: 'github',
  includeForks: false,
  repositories: [
    'iniinikoski/tf-dependencytest-repo',
  ],
  "hostRules": [{
    "hostName": "app.terraform.io",
    "encrypted": {
      "token": "kApe5W9Sb6xnCBTanePzWKJUteerMmSHtnK/p82/OyRA5k2N8ruFcOW/4D4dss3pBUCO4Zxwlm4ymLghbIquj/UL+2r2ijAIR5SO+kc9c+Es3B9IqBTyJ0xKi4LOluQvzO8MxKN43LzuzILNnvxnuE+x2fQGaZIUkYuUOj+5rvxw0G8bEI+EiHSPaUFFnUrUuQ1mIjFmR2eM+6+tPQemnLxKaIhA2/j/xMAE2S9UECiH+PJxiYsxFreKTPLXd7/RJ9PMXYnVFb0vAWMPisBetDPXc/7JIADR0Z48iMqhCiLli0nQF4BlOkCeuVBjkf6WaPBod799aAKoMRao7zb/YQ=="
    }
  }]
};
