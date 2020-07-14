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
      "token": "jDplnkaJhNRGnqLd9opzhmBLSJl7XR3ogIT4TsCyEuYhWJKLqrWASdCaOBvZkJEe6R6MXJTPFOuZv9HTbHz2QnU4a0VBHFZG70r3MNnFY0h5iCslQujfC866RFNouoOKAQujR/i8FtFIsgZKTLQAcxnOH7ce6EAF4fCXAsrwxiWI5VfuZ7k5uW03sCM/+LSLAYof4CduPz5gy6RWd/oR9pqZAGusxuk/k4yd+hHdE2rCxQL/ZotcjhpGeFUqf//cyt8b1DgODoLhusGTHrAsT0B0DdhsU5xJLFY85JokFZX8Fl36ReXpbbSlA3YWrGSiGIzCRwoyNMW5YKHuGDP2vg=="
    }
  }]
};
