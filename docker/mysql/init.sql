CREATE DATABASE IF NOT EXISTS `eg_site`;
CREATE DATABASE IF NOT EXISTS `eg_site_testing`;

GRANT ALL PRIVILEGES ON `eg_site`.* TO 'eg_site'@'%';
GRANT ALL PRIVILEGES ON `eg_site_testing`.* TO 'eg_site'@'%';
FLUSH PRIVILEGES;
