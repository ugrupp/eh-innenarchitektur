<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;
use mikehaertl\shellcommand\Command;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,

    // The URI segment that tells Craft to load the control panel
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

    // The secure key Craft will use for hashing and encrypting data
    'securityKey' => App::env('SECURITY_KEY'),

    // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode' => $isDev,

    // Whether administrative changes should be allowed
    'allowAdminChanges' => $isDev,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,

    // Whether images should be upscaled if the provided transform size is larger than the image
    'upscaleImages' => false,

    // IONOS' MariaDB client verifies certificates by default, but its database
    // servers use an IONOS-internal CA that is not in the hosting trust store.
    // Keep TLS enabled while allowing Craft's backup/restore commands to connect.
    'backupCommand' => static fn(Command $command) => $command->addArg('--skip-ssl-verify-server-cert'),
    'restoreCommand' => static fn(Command $command) => $command->addArg('--skip-ssl-verify-server-cert'),

    // We recommend overriding the @web alias if you plan on using it, to avoid a cache poisoning vulnerability.
    'aliases' => [
        '@web' => App::env('PRIMARY_SITE_URL'),
    ],
];
