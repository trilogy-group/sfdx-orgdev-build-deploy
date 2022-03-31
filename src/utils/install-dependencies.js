const core = require('@actions/core')
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function(){
    const installed = execCommand.run('sfdx',['version'],null,'sfdxIsInstalled');
    if (!installed) {
        core.info('=== Downloading and installing SFDX cli ===');
        execCommand.run('npm install sfdx-cli --global', []);
        core.info('=== SFDX cli installed ===');
    }
};

module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
