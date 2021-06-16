<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'eh-innenarchitektur');

// Project repository
set('repository', 'git@github.com:ugrupp/eh-innenarchitektur.git');

// Override php and composer binaries
set('bin/composer', '/usr/bin/php7.4-cli ~/composer.phar');
set('bin/php', '/usr/bin/php7.4-cli');

// Shared files/dirs between deploys
set('shared_files', [
    '.env',
    'config/license.key'
]);
set('shared_dirs', [
    'storage',
    'web/cpresources',
    'web/images',
    'web/imager',
    'web/photos',
    'web/icons',
    'web/pictograms',
    'web/files',
    'web/videos',
    'web/user-uploads'
]);

// Writable dirs by web server
set('writable_dirs', [
    'storage',
    'storage/backups',
    'storage/composer-backups',
    'storage/config-backups',
    'storage/logs',
    'storage/runtime',
    'config/project',
    'web/cpresources',
    'web/images',
    'web/imager',
    'web/photos',
    'web/icons',
    'web/pictograms',
    'web/files',
    'web/videos',
    'web/user-uploads'
]);
set('writable_mode', 'chmod');
set('allow_anonymous_stats', false);

// Only keep 2 releases
set('keep_releases', 2);

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false);


// Set the default deploy environment to staging
set('default_stage', 'production');

// Hosts
host('production')
    ->hostname('eh')
    ->stage('production')
    ->set('deploy_path', '~/relaunch2021/production');

// Tasks
desc('Execute migrations');
task('craft:migrate', function () {
    run('{{release_path}}/craft migrate/up');
})->once();

desc('Clear Craft caches');
task('craft:clear_caches', function () {
    run('{{release_path}}/craft clear-caches/all');
});

desc('Clear Vite file cache');
task('craft:clear_vite_cache', function () {
    run('{{bin/php}} {{release_path}}/craft clear-caches/vite-file-cache');
});

desc('Build assets locally');
task('build', function () {
    run('npm run build');
})->local();

desc('Upload assets');
task('upload', function () {
    upload(__DIR__ . "/web/dist/", '{{release_path}}/web/dist/');
});

desc('Build and deploy your project');
task('go', [
    'build',
    'deploy'
]);

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'upload',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

after('deploy:symlink', 'craft:clear_vite_cache');

// [Optional] Run migrations
// after('deploy:vendors', 'craft:migrate');

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Run with '--parallel'
// dep deploy --parallel
