const core = require('@actions/core')
const execCommand = require('./exec-command.js');

const SDFX_URL = 'https://developer.salesforce.com/media/salesforce-cli/sfdx/channels/stable/sfdx-linux-x64.tar.xz';
const SDFX_FILENAME = 'sfdx-linux-x64.tar.xz';

var fnInstallSFDX = function(){
    const installed = execCommand.run('sfdx',['version'],null,'sfdxIsInstalled');
    if (!installed) {
        core.info('=== Downloading and installing SFDX cli ===');
        execCommand.run('wget', [SDFX_URL]);
        execCommand.run('mkdir', ['-p', 'sfdx-cli']);
        execCommand.run('tar', ['xJf', SDFX_FILENAME, '-C', 'sfdx-cli', '--strip-components', '1']);
        // execCommand.run('./sfdx-cli/install', []);
        core.info('=== SFDX cli installed ===');
    }
};

module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
