<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'wordpress4');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'oCXQ`LUnxJ>q4he<k#1Cp@Gz6M8[c!fr;w!g`K|t/(}.le!.!BX{}{Rk6sw=I%=-');
define('SECURE_AUTH_KEY',  'Bc8[LAcMX:ixx+)*uq<I_)U11/+^6ROUia)iC2^%o2@n#&X=5*M:UB=70of-iQ,F');
define('LOGGED_IN_KEY',    'pKIZA!oe9$`Kp+?Vvrp>(;#OaIlg}:sF1&RAFHwnS`27%0xDuMl]q`u?0Ch-^,fW');
define('NONCE_KEY',        'R85439`kaA>H]V}l|7i*j Fs@u`#4[{J$agb;qNC)o/Rj=zi{||b.TzY=?VpMg6V');
define('AUTH_SALT',        '[.!Ie!JDHgS:DYmwifz#G^J&GYxD(/BJNabtQ0Ae(%B^RESd!=&!Cd2sYZ3zk(Z ');
define('SECURE_AUTH_SALT', 'Su;QQD%mpxugMy5RM).cAVo2WGzO*GA^)nJN8$-~qx<mVN.^!0Iv8i4|0-!p|}Ln');
define('LOGGED_IN_SALT',   'vCf|d^|3:f(^MUKAtHH&qka-dCx-P:!gUO[2O8{!HUy`irEn/=GZPA#UyVDMEZW<');
define('NONCE_SALT',       '&,38>j$R(u57N4(/X8nY&tg-eS()=c_ SU!mU6z]oA>ZE:IU$NT| -#.^1>@Y/Rt');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
