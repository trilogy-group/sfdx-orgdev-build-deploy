const core = require('@actions/core');
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function (versionOverride) {
  const installed = execCommand.run('sfdx', ['version'], null, 'sfdxIsInstalled');
  if (!installed) {
    core.info('=== Downloading and installing SFDX cli ===');
    execCommand.run('npm', ['install', 'sfdx-cli' + (versionOverride ? '@' + versionOverride : ''), '--global']);
    core.info('=== SFDX cli installed ===');

    execCommand.run('npm', ['install', '@salesforce/cli@1.35.0', '--global']);
    core.info('=== SF DOWNGRADED ===');
  }
};

module.exports.install = function (versionOverride) {
  //Installs Salesforce DX CLI
  fnInstallSFDX(versionOverride);
};
