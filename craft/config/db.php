<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

define('DB_NAME', 'test_craft2');

$dbConfig = array(
    '*' => array(
      'initSQLs' => array("SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"),
        'server' => 'localhost',
        'user' => 'test_craft2',
        'password' => 'Myfuturecareer1',
        'database' => DB_NAME,
        'tablePrefix' => 'craft',
    ),
    '.staging.' => array(
      'initSQLs' => array("SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"),
        'server' => 'localhost',
        'user' => 'test_craft2',
        'password' => 'Myfuturecareer1',
        'database' => DB_NAME,
        'tablePrefix' => 'craft'
    ),
    'local.' => array(
      'initSQLs' => array("SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';"),
        'server' => 'localhost',
        'user' => 'test_craft2',
        'password' => 'Myfuturecareer1',
        'database' => DB_NAME,
        'tablePrefix' => 'craft'
    )
);

return $dbConfig;
