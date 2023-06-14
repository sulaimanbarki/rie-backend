-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 17, 2023 at 01:49 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rie`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_permission`
--

DROP TABLE IF EXISTS `admin_permission`;
CREATE TABLE IF NOT EXISTS `admin_permission` (
  `permission_id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_title` varchar(100) NOT NULL,
  `permission_value` varchar(100) NOT NULL,
  `permission_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_permission`
--

INSERT INTO `admin_permission` (`permission_id`, `permission_title`, `permission_value`, `permission_status`, `created_at`, `updated_at`) VALUES
(1, 'Read', 'read', 1, '2021-06-09 04:48:32', NULL),
(2, 'Write', 'write', 1, '2021-06-09 04:48:46', NULL),
(3, 'Edit', 'edit', 1, '2021-06-09 04:49:05', NULL),
(4, 'Delete', 'delete', 1, '2021-06-09 04:49:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_profile`
--

DROP TABLE IF EXISTS `admin_profile`;
CREATE TABLE IF NOT EXISTS `admin_profile` (
  `adprofile_id` int(11) NOT NULL AUTO_INCREMENT,
  `aduser_id` int(11) NOT NULL,
  `adprofile_city` varchar(100) NOT NULL,
  `adprofile_country` varchar(100) NOT NULL,
  `adprofile_avatar` varchar(100) DEFAULT NULL,
  `adprofile_bio` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`adprofile_id`),
  KEY `aduser_id` (`aduser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_profile`
--

INSERT INTO `admin_profile` (`adprofile_id`, `aduser_id`, `adprofile_city`, `adprofile_country`, `adprofile_avatar`, `adprofile_bio`, `created_at`, `updated_at`) VALUES
(2, 5, 'Mardan', '23200', NULL, 'A test bio', '2021-06-13 20:53:03', '2021-09-06 18:46:38'),
(3, 6, 'Peshawar', 'Pakistan', NULL, 'boi', '2021-06-16 20:39:06', '2021-06-16 20:39:06'),
(4, 7, 'Peshawar', 'Pakistan', NULL, 'No Need of writing my Bio', '2021-09-02 18:33:56', '2022-01-25 07:27:19'),
(5, 8, 'Rawalpindi', 'Pakistan', NULL, '', '2022-01-25 09:16:21', '2022-01-25 09:16:21'),
(8, 20, 'Peshawar', 'Pakistan', 'http://127.0.0.1:8000/uploads/1675685165.png', 'some', '2023-02-06 07:06:05', '2023-02-06 07:06:05'),
(9, 21, 'Peshawar', 'Pakistan', 'http://127.0.0.1:8000/uploads/1675685937.png', 'some', '2023-02-06 07:18:57', '2023-02-06 07:18:57'),
(10, 22, 'Peshawar', 'Pakistan', 'http://127.0.0.1:8000/uploads/1675686310.png', 'some bio', '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(11, 23, 'Peshawar', 'Pakistan', 'http://127.0.0.1:8000uploads/1675688156.png', 'Quis tempor sit eius', '2023-02-06 07:26:26', '2023-02-06 07:55:56');

-- --------------------------------------------------------

--
-- Table structure for table `admin_roles`
--

DROP TABLE IF EXISTS `admin_roles`;
CREATE TABLE IF NOT EXISTS `admin_roles` (
  `adrole_id` int(11) NOT NULL AUTO_INCREMENT,
  `adrole_code` varchar(100) NOT NULL,
  `adrole_uuid` varchar(100) NOT NULL,
  `adrole_title` varchar(100) NOT NULL,
  `adrole_slug` varchar(100) NOT NULL,
  `adrole_description` varchar(250) NOT NULL,
  `adrole_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`adrole_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_roles`
--

INSERT INTO `admin_roles` (`adrole_id`, `adrole_code`, `adrole_uuid`, `adrole_title`, `adrole_slug`, `adrole_description`, `adrole_status`, `created_at`, `updated_at`) VALUES
(1, '57376674', '098f34f8-aa10-40d0-ad30-3f35caa664fa', 'Aministrator', 'aministrator', 'This user has power of all', 1, '2021-06-03 06:34:21', '2023-01-23 21:10:15'),
(2, '25800048', '4646f168-6924-4ea4-934b-c5c6a6844501', 'Data Entry', 'data-entry', 'Team for data entry.', 1, '2021-06-03 18:37:21', '2022-01-25 06:42:55'),
(5, '51617464', 'decbf997-3485-4deb-bfe7-c08e4f848792', 'Admin', 'admin', 'this is', 1, '2021-06-15 00:59:28', '2021-06-16 20:36:48');

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE IF NOT EXISTS `admin_users` (
  `aduser_id` int(11) NOT NULL AUTO_INCREMENT,
  `aduser_code` varchar(100) NOT NULL,
  `aduser_uuid` varchar(100) NOT NULL,
  `adfirst_name` varchar(100) NOT NULL,
  `adlast_name` varchar(100) NOT NULL,
  `aduser_name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `_hint` varchar(200) NOT NULL,
  `remember_token` varchar(100) NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`aduser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`aduser_id`, `aduser_code`, `aduser_uuid`, `adfirst_name`, `adlast_name`, `aduser_name`, `password`, `_hint`, `remember_token`, `_status`, `created_at`, `updated_at`) VALUES
(5, '55854670', '16dfc530-9ae8-4029-afea-f3af6d222fe7', 'Khalid &', 'Khalid', 'admin@admin.com', '$2y$10$9S33hWzl6iUjwlsJL5N5HewQcH0ymqycm53d5Z.hWpgLUhwSozzFC', 'eyJpdiI6Im9UMzdHdXVmZlV6R3BhWFRDdlM3N1E9PSIsInZhbHVlIjoiNjlCeHNtSlVSUzI2RzA0M2tpbGZKUT09IiwibWFjIjoiYjFjZDQ1MWUxYzY3NDIxNTMzYWU1YWIyNDUzOWFhZTM3ZDliMmZjMzIyYWNlNjlhNTI1OGI0MjU4MjNmODM3NiJ9', '', 1, '2021-06-13 20:53:03', '2021-09-06 18:46:38'),
(6, '76150977', '893de516-1659-4d33-8dff-93c1310b08c0', 'Qasim', 'Ali', 'qasim@admin.com', '$2y$10$.ruyyYIvJupVviW0ZQo1FOyyDT/X3dj3NIk018YI7i.DpEEFzo3C.', 'eyJpdiI6IkYrV0Z0aUxhMTZmZEZ1eVRKbmdNZnc9PSIsInZhbHVlIjoic0JkZWNQMXF6SlJHc3Y4aUszNFhrdz09IiwibWFjIjoiZTk2YWI4YTE1ODIwYWJmMmFmYzg1NjBkN2UwNWE3MTBhMzYzMjdlMWVkZTlhZTAxOWVlMjQxMTU4MWVlOTRlYSJ9', '', 1, '2021-06-16 20:39:06', '2023-02-06 06:05:04'),
(7, '29579133', '321edb60-96db-4b79-bd02-60cd84ed1743', 'Waqar', 'Yunas', 'vakareunas@gmail.com', '$2y$10$A7/C5Xe47YizMeJUWOhREe3f4aI2lTY5WVqggEHlEV5HTtUb9nQjm', 'eyJpdiI6IlIvQ0xFVUdxZG5GM2JLTGRqOEF6YWc9PSIsInZhbHVlIjoiQ3NxZzhmcmpjaENXdFh2NmsvaWJBdz09IiwibWFjIjoiNTZlMjYxOTU5YjkzZGE0OWQxODI1NTQ2MTUzNjY4OWM1ZmFlOWExOWFlNWRjNjc3NDg1NmEwZDZiOGUyM2RjOSJ9', '', 1, '2021-09-02 18:33:56', '2021-09-02 18:33:56'),
(8, '09546761', '25ce54be-f7da-4170-a0d7-5bd50fa20d48', 'WAQAS', 'YAQOOB', 'waqasvu1@gmail.com', '$2y$10$DnNx0L9/yUFk5epy9F.DnOcSfCjQ50H5U/2RHbziBOiakZ3p8mPsi', 'eyJpdiI6InFJYkJKMnJTZFpkc0RqQnE1UkZ4YXc9PSIsInZhbHVlIjoiVi9HcmVIUGlQYXRPSXNpNVFlR2Zvdz09IiwibWFjIjoiYzkxMDU1YWU4OTM2ZTRlZWQ4Mzk0MDIyNDNkNjlkZGQ5MmY1NzNhODk0MmI5MzY2YWY3NzRiOGU4OWI0YTRlYyJ9', '', 1, '2022-01-25 09:16:21', '2022-01-25 09:16:21'),
(9, '29731923', '14def5ab-3767-4b4a-88b1-4099f087a6dc', 'John Doe', 'Shaun Doe', 'johndoe@abc.com', '$2y$10$ot1v9xq/GZ3sOvh8IINtLOrNmwPyDcxjQjOBQh4RKCaV7y4rqMRMy', 'eyJpdiI6ImlhS2dvRmwwN2puSTNQNDFFNVdEaHc9PSIsInZhbHVlIjoiUzFWM1VhRWlaS0dVbit1WU93ZmhHZz09IiwibWFjIjoiMjc3ZGY1ZDhlMzdlMmE2NDA5NGM4OWY4YmZhY2E0YTc2MTI4YmViZTEzZWJiMTA0YzA4ZjU2NTg3M2M1NGMxNyJ9', '', 1, '2023-02-03 01:44:31', '2023-02-03 01:44:31'),
(20, '48566592', 'a8ac946b-d430-4f7d-9e34-6e8298a599d7', 'Barki', 'Khan', 'admin@gmail.com', '$2y$10$pBU2JrKwH9T5a13yrp7x9eGdSy8LRFogffh3.5tN7tCgYuD.Gi/cy', 'eyJpdiI6IitMcHpZZmZneWJZdElINWk2UEYwaGc9PSIsInZhbHVlIjoia0RlbU5LbGFMSG1yUXRXdjVJMGVzUT09IiwibWFjIjoiZDkyMzlhZWY4NjYyNjg4NmU0ZWQ1MmMxYzlhMTQ3ZWU1N2QwOWRlZDkwZmEzMDEyNTQ1YWIyYWZhYTExMmY0YSJ9', '', 1, '2023-02-06 07:06:05', '2023-02-06 07:06:05'),
(21, '76204812', '376e8abf-15c2-4fa9-879a-bc64826c40db', 'Ali', 'Jaan', 'ali@gmail.com', '$2y$10$smUkmYMAnk7sSUgNg4IuDezQPb5pjoJN3Mgx74EV0tAkZRAStF.bS', 'eyJpdiI6IjRaZDhzK2o5VXoyaisyd0Z6WkFnaFE9PSIsInZhbHVlIjoiNkxTa2pGTWRHdkRkY095MENIWXRxUT09IiwibWFjIjoiYzVlNDQ3NzIxMTViZTU3NGIyYjAwOTZiYjZkYjViNGZiNTcwYzcxNzQ2MTYyNDg1MTYyYzcxZTAyZWExNjU5NSJ9', '', 1, '2023-02-06 07:18:57', '2023-02-06 07:18:57'),
(22, '85359188', '2fbfc3d7-20ed-4fbe-86e8-af2ef4b68a1b', 'Asad Zaman', 'Khan', 'asad@gmail.com', '$2y$10$ED8yolKiilkimWEzofwfW.G7I7x.pWNAGvk5iEYcZ.baJ5n7OjC6W', 'eyJpdiI6ImEyK1lNUXVCZTdHSWtVS2ZBaGx0Umc9PSIsInZhbHVlIjoiemw4bUM5TExISUdheEpxWklkUnVFQT09IiwibWFjIjoiYmEwYmQyZjFmY2UyMzZiMjRkNTQ1OGViZmRmYzBhNjVmMGUxMmEzMWM3YWE0YzIwZjA3NDFhZjJiZWM0MjRhZiJ9', '', 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(23, '86220675', '76706f9b-cdb9-4cf7-af31-0c59edc9114e', 'Judah khan', 'Kirk', 'vovel@mailinator.com', '$2y$10$JEI7FfpjwnYIeddPYtrOeOS/MCnzS1Fj5I61xloXXpHEdvrS0zB2a', 'eyJpdiI6Ik9rSHZoc2ZSNkIzeGl4V0xWOHF5RkE9PSIsInZhbHVlIjoibmhqY1NsNHRPSW5MSEQ4eTRsdHQydz09IiwibWFjIjoiNmY0YTE5YzdhMjZlOTM4OTRmNTQyMzQ5NzU2OWY3MDlmNmNlYzZkNmYxNzRhMjJkYWQ0MmU2MTE1OWQyZWFkMSJ9', '', 1, '2023-02-06 07:26:26', '2023-02-06 07:42:38');

-- --------------------------------------------------------

--
-- Table structure for table `adrole_to_links`
--

DROP TABLE IF EXISTS `adrole_to_links`;
CREATE TABLE IF NOT EXISTS `adrole_to_links` (
  `rolelink_id` int(11) NOT NULL AUTO_INCREMENT,
  `adrole_id` int(11) NOT NULL,
  `modulelink_id` int(11) NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`rolelink_id`),
  KEY `role_id` (`adrole_id`),
  KEY `modulelink_id` (`modulelink_id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `adrole_to_links`
--

INSERT INTO `adrole_to_links` (`rolelink_id`, `adrole_id`, `modulelink_id`, `_status`, `created_at`, `updated_at`) VALUES
(1, 5, 14, 1, '2021-06-17 18:55:42', '2021-06-17 18:55:42'),
(4, 5, 17, 1, '2021-06-17 18:56:24', '2021-06-17 18:56:24'),
(5, 5, 18, 1, '2021-06-17 18:56:49', '2021-06-17 18:56:49'),
(6, 5, 19, 1, '2021-06-17 18:56:49', '2021-06-17 18:56:49'),
(8, 1, 16, 1, '2021-06-17 20:23:30', '2021-06-17 20:23:30'),
(9, 1, 14, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(10, 1, 15, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(12, 1, 18, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(13, 1, 19, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(14, 2, 15, 1, '2021-06-17 20:26:22', '2021-06-17 20:26:22'),
(15, 2, 16, 1, '2021-06-17 20:26:22', '2021-06-17 20:26:22'),
(16, 5, 15, 1, '2021-06-17 20:26:43', '2021-06-17 20:26:43'),
(17, 5, 16, 1, '2021-06-17 20:26:43', '2021-06-17 20:26:43'),
(18, 5, 20, 1, '2021-06-18 07:15:57', '2021-06-18 07:15:57'),
(19, 5, 21, 1, '2021-06-18 07:28:55', '2021-06-18 07:28:55'),
(20, 5, 23, 1, '2021-06-18 07:28:55', '2021-06-18 07:28:55'),
(21, 5, 22, 1, '2021-06-18 07:28:55', '2021-06-18 07:28:55'),
(22, 5, 24, 1, '2021-06-19 07:10:28', '2021-06-19 07:10:28'),
(23, 5, 25, 1, '2021-06-22 19:47:48', '2021-06-22 19:47:48'),
(24, 5, 26, 1, '2021-06-23 00:23:37', '2021-06-23 00:23:37'),
(25, 5, 27, 1, '2021-06-23 01:24:41', '2021-06-23 01:24:41'),
(26, 5, 28, 1, '2021-06-29 19:23:55', '2021-06-29 19:23:55'),
(27, 5, 29, 1, '2021-06-29 19:32:50', '2021-06-29 19:32:50'),
(28, 5, 30, 1, '2021-07-25 21:50:13', '2021-07-25 21:50:13'),
(29, 5, 31, 1, '2021-09-02 19:35:38', '2021-09-02 19:35:38'),
(30, 5, 32, 1, '2021-09-02 20:50:52', '2021-09-02 20:50:52'),
(31, 5, 33, 1, '2021-09-02 21:42:25', '2021-09-02 21:42:25'),
(32, 5, 34, 1, '2021-09-02 23:05:14', '2021-09-02 23:05:14'),
(33, 5, 37, 1, '2021-09-02 23:05:14', '2021-09-02 23:05:14'),
(34, 5, 36, 1, '2021-09-02 23:05:14', '2021-09-02 23:05:14'),
(35, 5, 38, 1, '2021-09-02 23:38:14', '2021-09-02 23:38:14'),
(36, 5, 40, 1, '2021-09-06 20:11:53', '2021-09-06 20:11:53'),
(37, 5, 39, 1, '2021-09-06 20:11:53', '2021-09-06 20:11:53'),
(38, 5, 41, 1, '2021-09-06 21:51:09', '2021-09-06 21:51:09'),
(39, 5, 42, 1, '2021-09-07 00:22:52', '2021-09-07 00:22:52'),
(40, 5, 43, 1, '2021-09-07 00:22:52', '2021-09-07 00:22:52'),
(41, 5, 44, 1, '2021-09-07 01:13:41', '2021-09-07 01:13:41'),
(42, 5, 45, 1, '2022-01-10 06:11:06', '2022-01-10 06:11:06'),
(43, 5, 47, 1, '2022-01-10 06:11:06', '2022-01-10 06:11:06'),
(44, 5, 46, 1, '2022-01-10 06:11:06', '2022-01-10 06:11:06'),
(45, 5, 48, 1, '2022-01-11 13:11:19', '2022-01-11 13:11:19'),
(46, 5, 49, 1, '2022-01-11 13:11:19', '2022-01-11 13:11:19'),
(47, 5, 50, 1, '2022-01-11 13:11:19', '2022-01-11 13:11:19'),
(48, 5, 54, 1, '2022-01-11 13:44:41', '2022-01-11 13:44:41'),
(49, 5, 52, 1, '2022-01-11 13:44:41', '2022-01-11 13:44:41'),
(50, 5, 51, 1, '2022-01-11 13:44:41', '2022-01-11 13:44:41'),
(51, 5, 55, 1, '2022-01-22 08:30:13', '2022-01-22 08:30:13'),
(52, 5, 57, 1, '2022-01-23 02:36:49', '2022-01-23 02:36:49'),
(53, 5, 59, 1, '2022-01-23 02:36:49', '2022-01-23 02:36:49'),
(54, 5, 58, 1, '2022-01-23 02:36:49', '2022-01-23 02:36:49'),
(55, 5, 60, 1, '2022-01-23 03:46:33', '2022-01-23 03:46:33'),
(56, 5, 62, 1, '2022-01-23 03:46:33', '2022-01-23 03:46:33'),
(57, 5, 61, 1, '2022-01-23 03:46:33', '2022-01-23 03:46:33'),
(58, 5, 91, 1, '2022-01-23 04:26:21', '2022-01-23 04:26:21'),
(59, 5, 90, 1, '2022-01-23 04:26:21', '2022-01-23 04:26:21'),
(60, 5, 89, 1, '2022-01-23 04:26:21', '2022-01-23 04:26:21'),
(61, 5, 92, 1, '2022-01-23 09:29:09', '2022-01-23 09:29:09'),
(62, 5, 94, 1, '2022-01-23 09:29:09', '2022-01-23 09:29:09'),
(63, 5, 93, 1, '2022-01-23 09:29:09', '2022-01-23 09:29:09'),
(64, 5, 95, 1, '2022-01-23 09:45:57', '2022-01-23 09:45:57'),
(65, 5, 96, 1, '2022-01-23 10:29:42', '2022-01-23 10:29:42'),
(66, 5, 97, 1, '2022-01-23 10:45:08', '2022-01-23 10:45:08'),
(67, 5, 80, 1, '2022-01-24 07:00:24', '2022-01-24 07:00:24'),
(68, 5, 82, 1, '2022-01-24 07:00:24', '2022-01-24 07:00:24'),
(69, 5, 81, 1, '2022-01-24 07:00:24', '2022-01-24 07:00:24'),
(70, 5, 79, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(71, 5, 78, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(72, 5, 72, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(73, 5, 73, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(74, 5, 77, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(75, 5, 74, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(76, 5, 75, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(77, 5, 76, 1, '2022-01-24 07:41:46', '2022-01-24 07:41:46'),
(78, 5, 65, 1, '2022-01-25 04:27:50', '2022-01-25 04:27:50'),
(79, 5, 64, 1, '2022-01-25 04:27:50', '2022-01-25 04:27:50'),
(80, 5, 63, 1, '2022-01-25 04:27:50', '2022-01-25 04:27:50'),
(81, 5, 67, 1, '2022-01-25 04:28:08', '2022-01-25 04:28:08'),
(82, 5, 68, 1, '2022-01-25 04:28:08', '2022-01-25 04:28:08'),
(83, 5, 66, 1, '2022-01-25 04:28:08', '2022-01-25 04:28:08'),
(84, 5, 69, 1, '2022-01-25 06:01:26', '2022-01-25 06:01:26'),
(85, 5, 71, 1, '2022-01-25 06:01:26', '2022-01-25 06:01:26'),
(86, 5, 70, 1, '2022-01-25 06:01:26', '2022-01-25 06:01:26'),
(87, 5, 98, 1, '2022-02-01 05:49:39', '2022-02-01 05:49:39'),
(88, 5, 101, 1, '2022-02-04 13:33:26', '2022-02-04 13:33:26'),
(89, 5, 102, 1, '2022-02-08 11:53:11', '2022-02-08 11:53:11'),
(90, 5, 103, 1, '2022-02-08 11:53:11', '2022-02-08 11:53:11'),
(91, 5, 104, 1, '2022-02-08 11:53:11', '2022-02-08 11:53:11'),
(92, 5, 108, 1, '2022-02-14 10:55:24', '2022-02-14 10:55:24'),
(93, 5, 107, 1, '2022-02-14 10:55:24', '2022-02-14 10:55:24'),
(94, 5, 109, 1, '2022-03-27 07:04:06', '2022-03-27 07:04:06'),
(95, 5, 110, 1, '2022-03-27 07:04:06', '2022-03-27 07:04:06'),
(96, 5, 111, 1, '2022-03-27 07:04:06', '2022-03-27 07:04:06'),
(97, 5, 100, 1, '2023-01-25 01:50:19', '2023-01-25 01:50:19'),
(98, 5, 99, 1, '2023-01-25 01:50:19', '2023-01-25 01:50:19'),
(99, 5, 121, 1, '2023-01-25 01:50:19', '2023-01-25 01:50:19'),
(100, 5, 130, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(101, 5, 138, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(102, 5, 126, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(103, 5, 127, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(104, 5, 125, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(105, 5, 122, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(106, 5, 135, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(107, 5, 136, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(108, 5, 137, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(109, 5, 124, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(110, 5, 131, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(111, 5, 133, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(112, 5, 132, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(113, 5, 140, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(114, 5, 141, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(115, 5, 123, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(116, 5, 139, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(117, 5, 128, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(118, 5, 134, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18'),
(119, 5, 129, 1, '2023-01-25 06:48:18', '2023-01-25 06:48:18');

-- --------------------------------------------------------

--
-- Table structure for table `adrole_to_module`
--

DROP TABLE IF EXISTS `adrole_to_module`;
CREATE TABLE IF NOT EXISTS `adrole_to_module` (
  `rolemodule_id` int(11) NOT NULL AUTO_INCREMENT,
  `adrole_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`rolemodule_id`),
  KEY `adrole_id` (`adrole_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `adrole_to_module`
--

INSERT INTO `adrole_to_module` (`rolemodule_id`, `adrole_id`, `module_id`, `_status`, `created_at`, `updated_at`) VALUES
(6, 1, 7, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(7, 1, 4, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(9, 1, 6, 1, '2021-06-17 20:24:36', '2021-06-17 20:24:36'),
(10, 2, 4, 1, '2021-06-17 20:26:22', '2021-06-17 20:26:22'),
(27, 6, 4, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(28, 6, 5, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(29, 6, 6, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(30, 6, 7, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(31, 6, 10, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(32, 6, 11, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(33, 6, 12, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(34, 6, 13, 1, '2023-01-24 07:12:50', '2023-01-24 07:12:50'),
(35, 5, 4, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(36, 5, 5, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(37, 5, 6, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(38, 5, 7, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(39, 5, 10, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(40, 5, 11, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(41, 5, 12, 1, '2023-01-24 07:17:13', '2023-01-24 07:17:13'),
(42, 5, 13, 1, '2023-01-24 07:17:14', '2023-01-24 07:17:14'),
(43, 5, 15, 1, '2023-01-24 07:17:14', '2023-01-24 07:17:14'),
(44, 5, 16, 1, '2023-01-24 07:17:14', '2023-01-24 07:17:14');

-- --------------------------------------------------------

--
-- Table structure for table `aduser_to_permission`
--

DROP TABLE IF EXISTS `aduser_to_permission`;
CREATE TABLE IF NOT EXISTS `aduser_to_permission` (
  `userper_id` int(11) NOT NULL AUTO_INCREMENT,
  `aduser_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `persmission_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`userper_id`),
  KEY `permission_id` (`permission_id`),
  KEY `aduser_id` (`aduser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aduser_to_permission`
--

INSERT INTO `aduser_to_permission` (`userper_id`, `aduser_id`, `permission_id`, `persmission_status`, `created_at`, `updated_at`) VALUES
(19, 6, 4, 1, '2021-06-16 20:39:06', '2021-06-16 20:39:06'),
(20, 6, 3, 1, '2021-06-16 20:39:06', '2021-06-16 20:39:06'),
(32, 5, 1, 1, '2021-09-06 18:46:39', '2021-09-06 18:46:39'),
(33, 5, 2, 1, '2021-09-06 18:46:39', '2021-09-06 18:46:39'),
(34, 5, 3, 1, '2021-09-06 18:46:39', '2021-09-06 18:46:39'),
(35, 5, 4, 1, '2021-09-06 18:46:39', '2021-09-06 18:46:39'),
(39, 7, 3, 1, '2022-01-25 07:27:19', '2022-01-25 07:27:19'),
(40, 7, 1, 1, '2022-01-25 07:27:19', '2022-01-25 07:27:19'),
(41, 7, 2, 1, '2022-01-25 07:27:19', '2022-01-25 07:27:19'),
(60, 8, 1, 1, '2023-02-06 06:23:11', '2023-02-06 06:23:11'),
(61, 8, 2, 1, '2023-02-06 06:23:11', '2023-02-06 06:23:11'),
(62, 8, 3, 1, '2023-02-06 06:23:11', '2023-02-06 06:23:11'),
(63, 22, 0, 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(64, 22, 0, 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(65, 22, 0, 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(66, 22, 0, 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(92, 23, 1, 1, '2023-02-06 07:55:56', '2023-02-06 07:55:56'),
(93, 23, 2, 1, '2023-02-06 07:55:56', '2023-02-06 07:55:56'),
(94, 23, 3, 1, '2023-02-06 07:55:56', '2023-02-06 07:55:56'),
(95, 23, 4, 1, '2023-02-06 07:55:56', '2023-02-06 07:55:56');

-- --------------------------------------------------------

--
-- Table structure for table `aduser_to_role`
--

DROP TABLE IF EXISTS `aduser_to_role`;
CREATE TABLE IF NOT EXISTS `aduser_to_role` (
  `aduserrole_id` int(11) NOT NULL AUTO_INCREMENT,
  `aduser_id` int(11) NOT NULL,
  `adrole_id` int(11) NOT NULL,
  `adrole_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`aduserrole_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aduser_to_role`
--

INSERT INTO `aduser_to_role` (`aduserrole_id`, `aduser_id`, `adrole_id`, `adrole_status`, `created_at`, `updated_at`) VALUES
(6, 6, 1, 1, '2021-06-16 20:39:06', '2021-06-16 20:39:06'),
(10, 5, 5, 1, '2021-09-06 18:46:38', '2021-09-06 18:46:38'),
(12, 7, 2, 1, '2022-01-25 07:27:19', '2022-01-25 07:27:19'),
(14, 9, 1, 1, '2023-02-03 01:44:31', '2023-02-03 01:44:31'),
(20, 8, 1, 1, '2023-02-06 06:23:11', '2023-02-06 06:23:11'),
(23, 18, 1, 1, '2023-02-06 06:52:28', '2023-02-06 06:52:28'),
(24, 19, 1, 1, '2023-02-06 07:04:30', '2023-02-06 07:04:30'),
(25, 20, 1, 1, '2023-02-06 07:06:05', '2023-02-06 07:06:05'),
(26, 21, 1, 1, '2023-02-06 07:18:57', '2023-02-06 07:18:57'),
(27, 22, 1, 1, '2023-02-06 07:25:10', '2023-02-06 07:25:10'),
(35, 23, 1, 1, '2023-02-06 07:55:56', '2023-02-06 07:55:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobs_to_apply`
--

DROP TABLE IF EXISTS `jobs_to_apply`;
CREATE TABLE IF NOT EXISTS `jobs_to_apply` (
  `jobapply_id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_mobile` varchar(255) NOT NULL,
  `user_coverletter` text,
  `user_cv` text,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`jobapply_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs_to_apply`
--

INSERT INTO `jobs_to_apply` (`jobapply_id`, `job_id`, `user_fullname`, `user_email`, `user_mobile`, `user_coverletter`, `user_cv`, `_status`, `created_at`, `updated_at`) VALUES
(1, 2, 'qasim', 'khan@yahoo.com', '03338315741', 'im intrested', 'cv', 1, '2022-02-04 13:45:30', '2022-02-04 13:45:30'),
(2, 2, 'qasim', 'khan@yahoo.com', '03338315741', 'im intrested', 'cv', 1, '2022-02-04 13:45:39', '2022-02-04 13:45:39'),
(3, 2, 'xoca@mailinator.com', 'qijegugy@mailinator.com', 'riho@mailinator.com', 'In repudiandae saepe', '/cvs/1675333582.PNG', 1, '2023-02-02 05:26:22', '2023-02-02 05:26:22'),
(4, 2, 'haviniwoc@mailinator.com', 'rivy@mailinator.com', 'ziqul@mailinator.com', 'Ipsam fugiat iure v', 'http://localhost/cvs/1675333648.PNG', 1, '2023-02-02 05:27:28', '2023-02-02 05:27:28'),
(5, 2, 'huragysoj@mailinator.com', 'hoxazuj@mailinator.com', 'vycagyc@mailinator.com', 'Inventore minus culp', 'http://localhost/uploads/cvs/1675333739.PNG', 1, '2023-02-02 05:28:59', '2023-02-02 05:28:59'),
(6, 2, 'gity@mailinator.com', 'doja@mailinator.com', 'gupir@mailinator.com', 'Cum porro facere rep', 'http://localhost/uploads/cvs/1675334079.PNG', 1, '2023-02-02 05:34:39', '2023-02-02 05:34:39'),
(7, 2, 'zibyjequ@mailinator.com', 'myja@mailinator.com', 'fypyd@mailinator.com', 'Nulla ut amet venia', 'http://localhostPNG', 1, '2023-02-02 05:38:02', '2023-02-02 05:38:02'),
(8, 2, 'fyzoboxo@mailinator.com', 'xodafom@mailinator.com', 'rudi@mailinator.com', 'Rerum minim inventor', 'http://localhost/storage/uploads/1675334477_Capture.PNG', 1, '2023-02-02 05:41:17', '2023-02-02 05:41:17');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_08_19_000000_create_failed_jobs_table', 1),
(2, '2021_09_24_063449_create_jobs_table', 2),
(3, '2023_01_23_155315_donar', 3),
(4, '2023_01_23_155446_distributor', 3),
(5, '2023_01_23_155549_recepient', 3),
(6, '2023_01_23_155621_items', 3),
(7, '2023_01_23_155720_donation', 3),
(8, '2023_01_17_114611_create_mmenus_table', 4),
(9, '2023_01_17_114627_create_mpages_table', 4),
(10, '2023_01_31_060118_service_to_files', 5);

-- --------------------------------------------------------

--
-- Table structure for table `module_to_links`
--

DROP TABLE IF EXISTS `module_to_links`;
CREATE TABLE IF NOT EXISTS `module_to_links` (
  `modulelink_id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` int(11) NOT NULL,
  `link_title` varchar(100) NOT NULL,
  `link_val` varchar(255) NOT NULL,
  `_visiblity` int(11) NOT NULL DEFAULT '1' COMMENT 'The link should either appear within the menu or not',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`modulelink_id`),
  KEY `module_id` (`module_id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `module_to_links`
--

INSERT INTO `module_to_links` (`modulelink_id`, `module_id`, `link_title`, `link_val`, `_visiblity`, `created_at`, `updated_at`) VALUES
(14, 7, 'Home', 'home', 1, '2021-06-16 20:17:53', '2021-06-16 20:17:53'),
(17, 5, 'Manage Roles', 'roles-mgt', 1, '2021-06-16 20:18:19', '2021-06-16 20:18:19'),
(18, 6, 'Create Member', 'team-mgt/create', 1, '2021-06-16 20:18:27', '2021-06-16 20:18:27'),
(19, 6, 'Members List', 'team-mgt', 1, '2021-06-16 20:18:27', '2021-06-16 20:18:27'),
(21, 4, 'Create a Module', 'modules-mgt/create', 1, '2021-06-18 07:26:25', '2021-06-18 07:26:25'),
(22, 4, 'Modules List', 'modules-mgt', 1, '2021-06-18 07:26:25', '2021-06-18 07:26:25'),
(23, 4, 'Module Edit', 'modules-mgt/*/edit', 0, '2021-06-18 07:26:25', '2021-06-18 07:26:25'),
(24, 6, 'Member Edit', 'team-mgt/*/edit', 0, '2021-06-19 07:10:08', '2021-06-19 07:10:08'),
(63, 10, 'Create a Blog', 'blogs-mgt/create', 1, '2022-01-23 04:22:16', '2022-01-23 04:22:16'),
(64, 10, 'Blogs List', 'blogs-mgt', 1, '2022-01-23 04:22:16', '2022-01-23 04:22:16'),
(65, 10, 'Blog Edit', 'blogs-mgt/*/edit', 0, '2022-01-23 04:22:16', '2022-01-23 04:22:16'),
(66, 11, 'Create a Job', 'jobs-mgt/create', 1, '2022-01-23 04:22:29', '2022-01-23 04:22:29'),
(67, 11, 'Jobs List', 'jobs-mgt', 1, '2022-01-23 04:22:29', '2022-01-23 04:22:29'),
(68, 11, 'Job Edit', 'jobs-mgt/*/edit', 0, '2022-01-23 04:22:29', '2022-01-23 04:22:29'),
(69, 12, 'Create Service', 'services-mgt/create', 1, '2022-01-23 04:22:40', '2022-01-23 04:22:40'),
(70, 12, 'Services List', 'services-mgt', 1, '2022-01-23 04:22:40', '2022-01-23 04:22:40'),
(71, 12, 'Edit Services', 'services-mgt/*/edit', 0, '2022-01-23 04:22:40', '2022-01-23 04:22:40'),
(72, 13, 'Create Category', 'categories-mgt/create', 1, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(73, 13, 'List Categories', 'categories-mgt', 1, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(74, 13, 'Edit Category', 'categories-mgt/*/edit', 0, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(75, 13, 'Create Product', 'products-mgt/create', 1, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(76, 13, 'List Product', 'products-mgt', 1, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(77, 13, 'Edit Product', 'products-mgt/*/edit', 0, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(78, 13, 'Add Product Images', 'add-product-images/$', 0, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(79, 13, 'Add Product Files', 'product-files/$', 0, '2022-01-23 04:22:51', '2022-01-23 04:22:51'),
(80, 15, 'Create Event', 'event-mgt/create', 1, '2022-01-23 04:23:16', '2022-01-23 04:23:16'),
(81, 15, 'List Events', 'event-mgt', 1, '2022-01-23 04:23:16', '2022-01-23 04:23:16'),
(82, 15, 'Edit Event', 'event-mgt/*/edit', 0, '2022-01-23 04:23:16', '2022-01-23 04:23:16'),
(109, 13, 'Create Subcategory', 'sub-categories-mgt/create', 1, '2022-03-27 07:02:54', '2022-03-27 07:02:54'),
(110, 13, 'Edit Subcategory', 'sub-categories-mgt/*/edit', 0, '2022-03-27 07:03:22', '2022-03-27 07:03:22'),
(111, 13, 'List Subcategory', 'sub-categories-mgt', 1, '2022-03-27 07:03:36', '2022-03-27 07:03:36'),
(122, 16, 'Create Slider', 'slider-mgt/create', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(123, 16, 'Slider Management', 'slider-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(124, 16, 'Edit Slider', 'slider-mgt/*/edit', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(125, 16, 'Contact Information', 'contact-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(126, 16, 'Contact Create', 'contact-mgt/create', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(127, 16, 'Contact Edit', 'contact-mgt/*/edit', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(128, 16, 'Theme Informations', 'theme-setting', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(129, 16, 'We Offer', 'theme-edit-weoffer', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(130, 16, 'Add Companies', 'add-companies', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(131, 16, 'Footer Links', 'footerlink-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(132, 16, 'Footer Links Edit', 'footerlink-mgt/*/edit', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(133, 16, 'Footer Links Create', 'footerlink-mgt/create', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(134, 16, 'Video Content Section', 'edit-video-content', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(135, 16, 'Customers Review', 'review-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(136, 16, 'Customers Review', 'review-mgt/create', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(137, 16, 'Edit Customers Review', 'review-mgt/*/edit', 0, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(138, 16, 'Certificates', 'add-certificate', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(139, 16, 'Theme Content', 'themecontent-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(140, 16, 'Menus', 'menus-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23'),
(141, 16, 'Pages', 'pages-mgt', 1, '2023-01-25 06:47:23', '2023-01-25 06:47:23');

-- --------------------------------------------------------

--
-- Table structure for table `products_to_files`
--

DROP TABLE IF EXISTS `products_to_files`;
CREATE TABLE IF NOT EXISTS `products_to_files` (
  `productfile_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `product_file` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`productfile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products_to_files`
--

INSERT INTO `products_to_files` (`productfile_id`, `product_id`, `product_file`, `created_at`, `updated_at`) VALUES
(1, 1, 'http://127.0.0.1:8000/storage/uploads/1675057834_safety materials.docx', '2023-01-30 00:50:34', '2023-01-30 00:50:34'),
(2, 1, 'http://127.0.0.1:8000/storage/uploads/1675058157_Unit testing report sidb.docx', '2023-01-30 00:55:57', '2023-01-30 00:55:57');

-- --------------------------------------------------------

--
-- Table structure for table `products_to_images`
--

DROP TABLE IF EXISTS `products_to_images`;
CREATE TABLE IF NOT EXISTS `products_to_images` (
  `productimages_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`productimages_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products_to_images`
--

INSERT INTO `products_to_images` (`productimages_id`, `product_id`, `product_image`, `created_at`, `updated_at`) VALUES
(1, 1, 'http://127.0.0.1:8000/storage/photos/5/prod1.png', '2023-01-26 01:30:30', '2023-01-26 01:30:30'),
(2, 2, 'http://127.0.0.1:8000/storage/photos/5/prod1.png', '2023-01-26 01:30:30', '2023-01-26 01:30:30'),
(3, 1, 'http://127.0.0.1:8000/storage/photos/5/nav1.png', '2023-01-30 00:44:07', '2023-01-30 00:44:07'),
(4, 1, 'http://127.0.0.1:8000/storage/photos/5/nav3.png', '2023-01-30 00:44:39', '2023-01-30 00:44:39');

-- --------------------------------------------------------

--
-- Table structure for table `service_to_files`
--

DROP TABLE IF EXISTS `service_to_files`;
CREATE TABLE IF NOT EXISTS `service_to_files` (
  `servicefile_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `service_id` bigint(20) NOT NULL,
  `servicefile_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `servicefile_link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `servicefile_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`servicefile_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_to_files`
--

INSERT INTO `service_to_files` (`servicefile_id`, `service_id`, `servicefile_name`, `servicefile_link`, `servicefile_status`, `created_at`, `updated_at`) VALUES
(1, 9, 'Service Details', 'http://127.0.0.1:8000/storage/uploads/1675146165_servicefile.docx', 1, '2023-01-31 01:22:45', '2023-01-31 01:22:45'),
(3, 9, 'Links', 'http://127.0.0.1:8000/storage/uploads/1675146416_servicefile.docx', 1, '2023-01-31 01:26:56', '2023-01-31 01:26:56');

-- --------------------------------------------------------

--
-- Table structure for table `wq_blogs`
--

DROP TABLE IF EXISTS `wq_blogs`;
CREATE TABLE IF NOT EXISTS `wq_blogs` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_code` varchar(100) NOT NULL,
  `blog_title` varchar(200) NOT NULL,
  `blog_excerpt` varchar(255) NOT NULL,
  `blog_details` longtext NOT NULL,
  `blog_image` varchar(200) NOT NULL,
  `blog_slug` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_blogs`
--

INSERT INTO `wq_blogs` (`blog_id`, `blog_code`, `blog_title`, `blog_excerpt`, `blog_details`, `blog_image`, `blog_slug`, `created_at`, `updated_at`) VALUES
(3, '216752279', 'Backend Developer Learning Path 2021', 'Want to become a Backend Web Developer in 2021? Being a fresher and not knowing what career to choose is something we all went through. But, if you have concluded to become a backend developer,', '<p>Want to become a Backend Web Developer in 2021? Being a fresher and not knowing what career to choose is something we all went through. But, if you have concluded to become a backend developer, we will help you to know the programming languages, tools and technologies that are often used for backend development. Please remember this roadmap is the extension of our previous blog on the&nbsp;backend developer roadmap&nbsp;and is here to help you identify more areas to learn.</p>\r\n\r\n<p>So let&rsquo;s get started!</p>\r\n\r\n<h2>Who is a Backend Developer?</h2>\r\n\r\n<p>Backend developers deal with the logical side of the application. Backend development refers to server-side development that centers on scripting, databases, and web application architecture. In simple terms, the backend developer handles behind-the-scenes activities that take place while performing a function on the website or application. It&rsquo;s the backend developer&rsquo;s responsibility to write code that communicates with databases or APIs, creating libraries, working on data architecture and business processes, and so on.</p>\r\n\r\n<p>Backend development gives the foundation code to enable web apps to perform the actions users ask using the frontend and deliver the right outcome. But what are the technologies, tools, languages that you need to know about to become a&nbsp;backend developer? Let&rsquo;s check that out!</p>\r\n\r\n<h2>Backend Web Developer RoadMap For 2021</h2>\r\n\r\n<p>Here&rsquo;s the 2021 roadmap for the backend Web developer journey you have been waiting for. It consists of recommendations, alternate options, and learning as you go technologies and tools.&nbsp;</p>\r\n\r\n<h2>Skills A Backend Web Developer Need in 2021</h2>\r\n\r\n<p>With the 2021 roadmap mentioned above, you can clearly understand that backend development is a logical and technical side of the web app. So we are going to discuss technologies and tools that are essential to becoming a good backend developer.</p>\r\n\r\n<h3>1.&nbsp;Basic Internet, Operating System and Frontend Knowledge</h3>\r\n\r\n<p>Similar to frontend development, being a backend developer also requires learning the basics of the internet (like how it works, what is HTTP/HTTPS, working on browsers, DNS working, and what&rsquo;s domain name and hosting).</p>\r\n\r\n<p>Once done learning about the internet, you need to learn general information about operating systems, i.e., memory management, terminal usage, OS working, process management, threads and concurrency, basic terminal commands, I/O management, and basic concepts of networking.</p>\r\n\r\n<h3>2.&nbsp;Programming language</h3>\r\n\r\n<p>Needless to say, a backend developer must learn a programming language to improve their coding skills. While Java is the recommended language to learn in backend development, you can also go for other languages like Javascript, C#, Python, Ruby and PHP.</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://www.javascript.com/\">JavaScript</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.java.com/\">Java</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://docs.microsoft.com/en-us/dotnet/csharp/\">C#</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.python.org/\">Python</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.ruby-lang.org/en/\">Ruby</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.php.net/\">PHP</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>3.&nbsp;Version Control System</h3>\r\n\r\n<p>A version Control system is a tool that assists both frontend and backend developers to interact and handle changes done over time. It also gives information like what kind of changes are done and by whom. In short, a version control system amplifies the speed of the project by allowing collaboration between developers, removing errors possibilities, and even recovering the code in case of an accident.</p>\r\n\r\n<p>For backend development, you can use the following version control systems.</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://git-scm.com/\">Git</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://github.com/github\">GitHub</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://about.gitlab.com/\">GitLab</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://bitbucket.org/product/guides/getting-started/overview\">BitBucket</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>4.&nbsp;Database</h3>\r\n\r\n<p>In the context of a web application, a database is a brain that helps to make a web app dynamic. Whenever you search for a product or request logins, the database is responsible for storing data, accepting queries, fetching information and returning to the web app with the required outcome.</p>\r\n\r\n<p>Backend developers either use relational or NoSQL databases. Some of them are as follows:</p>\r\n\r\n<p>Relational Databases</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://www.postgresql.org/\">PostgreSQL</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.mysql.com/\">MySQL</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.microsoft.com/en-in/sql-server/sql-server-downloads\">MS SQL</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.oracle.com/in/database/\">Oracle</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://mariadb.com/\">MariaDB</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<p>NoSQL Databases</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://www.mongodb.com/\">MongoDB</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://rethinkdb.com/\">RethinkDB</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://aws.amazon.com/dynamodb/\">DynamoDB</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://couchdb.apache.org/\">CouchDB</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://graphql.org/\">GraphQL</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<p>Besides learning about a few of the databases mentioned above, you also need to understand some basic concepts of databases like ORMs, ACID, N+1 Problem, Transactions, Data Normalization and Indexes.</p>\r\n\r\n<h3>5.&nbsp;APIs</h3>\r\n\r\n<p>Application Programming Interfaces&nbsp;or APIs is an intermediary between services that allows them to interact with each other. Backend developers use APIs to make connections among different applications or services to provide an enhanced user experience through the frontend. Some of the APIs you should know about are:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://restfulapi.net/\">REST</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.json.org/\">JSON</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.soapui.org/\">SOAP</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://github.com/google/gson\">GSON</a></p>\r\n	</li>\r\n	<li>\r\n	<p>XML-RPC</p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard\">AES</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>6.&nbsp;Caching</h3>\r\n\r\n<p>Caching is the method to store a copy of a given resource in a cache (temporary storage location) and provide the data quickly whenever requested. The core aim of caching is to enhance the performance of data retrieval while reducing the requirement of accessing the underlying storage layer that is slow to process.</p>\r\n\r\n<p>Here is a list of caching techniques and tools you should be aware of.</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://aws.amazon.com/caching/cdn/\">CDN</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://en.wikipedia.org/wiki/Web_cache\">Server Side</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.ibm.com/docs/SS6SGM_5.1.0/com.ibm.cobol51.aix.doc/PGandLR/tasks/tpfio52a.html\">Client-Side</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://redis.io/\">Redis</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>7.&nbsp;Testing</h3>\r\n\r\n<p>Backend testing is the process to check the database or server-side of the web app. The purpose of backend testing is to determine the efficiency of the database layer while ensuring it is free from data corruption, deadlocks or data loss. Testing methods that are used by backend developers include:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://en.wikipedia.org/wiki/Integration_testing\">Integration Testing</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.guru99.com/unit-testing-guide.html\">Unit Testing</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.javatpoint.com/functional-testing\">Functional Testing</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>8.&nbsp;Code Analysis Tools</h3>\r\n\r\n<p>Code analysis is a method for debugging and analyzing code to ensure it runs smoothly. You can refer to our previous blogs to learn about different methods and tools for analysis -&nbsp;Code Analysis Tools: Code&rsquo;s Journey From Developers to Testers&nbsp;and&nbsp;Static Code Analysis Tools For Java To Provide Quality Measurements.</p>\r\n\r\n<p>Some of the tools used for code analysis are:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://www.sonarlint.org/\">SonarLint</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://junit.org/junit5/\">JUnit</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.jacoco.org/jacoco/trunk/doc/\">JaCoCo</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://pmd.github.io/pmd/\">PMD</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.sonarqube.org/\">SonarQube</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.qualys.com/\">Qualys</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.jenkins.io/\">Jenkins</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>9.&nbsp;Architectural Patterns</h3>\r\n\r\n<p>An architectural pattern is a reusable solution to the recurring problems while developing the software. A few most commonly used architectural patterns consist of:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p>Monolithic</p>\r\n	</li>\r\n	<li>\r\n	<p>SOA</p>\r\n	</li>\r\n	<li>\r\n	<p>Microservices</p>\r\n	</li>\r\n	<li>\r\n	<p>CQRS</p>\r\n	</li>\r\n	<li>\r\n	<p>Event Sourcing</p>\r\n	</li>\r\n	<li>\r\n	<p>Serverless</p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>10.&nbsp;Message Broker</h3>\r\n\r\n<p>A message broker is a software that allows systems, apps and services to interact with one another to exchange information. A message broker is a module that translates the formal messaging protocol of the server into the formal messaging protocol of the client (receiver). You can learn one of the given message brokers to use in your future project.</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p>RabbitMQ</p>\r\n	</li>\r\n	<li>\r\n	<p>Kafka</p>\r\n	</li>\r\n	<li>\r\n	<p>Kinesis</p>\r\n	</li>\r\n	<li>\r\n	<p>JBOSS messaging</p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>11.&nbsp;Containerization</h3>\r\n\r\n<p>Containerization is the packaging of software code with all the necessary elements like frameworks, libraries and other dependencies, to make services isolated from each other in a container. Containerization is done by the backend developer to easily move or run a container, independent of its infrastructure or environment. One of the most used containers that you should learn is Docker.</p>\r\n\r\n<h3>12.&nbsp;Design Patterns</h3>\r\n\r\n<p>Design Patterns are elaborated solutions for a common set of problems that can occur during web app development. It offers a standardized approach for such recurring issues. Below is the list of different design patterns you should know about.</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/singleton-design-pattern-java\">Singleton</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/factory-design-patterns-in-java\">Factory</a></p>\r\n	</li>\r\n	<li>\r\n	<p>Observer</p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/decorator-design-pattern-java-example\">Decorator</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/what-is-adapter-design-pattern\">Adapter</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/template-method-design-pattern\">Template Method</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/mediator-design-pattern\">Mediator</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/when-use-composite-design-pattern-java\">Composite</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/facade-design-pattern\">Facade</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/iterator-design-pattern\">Iterator</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.decipherzone.com/blog-detail/proxy-design-pattern-in-java\">Proxy</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>13.&nbsp;Authentication Method</h3>\r\n\r\n<p>Authentication methods are used to verify the identity of a user or device who wants to access resources, data or applications. The authentication phase provides a user identity to the security system. Some of the methods used by backend developers are:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><a href=\"http://www.md5.cz/\">MD5</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://en.wikipedia.org/wiki/Secure_Hash_Algorithms\">SHA</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.npmjs.com/package/scrypt\">Scrypt</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://en.wikipedia.org/wiki/Bcrypt\">Bcrypt</a></p>\r\n	</li>\r\n	<li>\r\n	<p><a href=\"https://www.rsa.com/\">RSA</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<h3>14.&nbsp;WebHook</h3>\r\n\r\n<p>WebHook&nbsp;or reverse API is a way where an app provides real-time information to other applications. Unlike APIs, webhooks don&rsquo;t require a request that follows a response. Instead, webhooks just sends data when it is available without a request with custom callbacks. This main feature of the webhook makes it efficient for both users and providers.</p>\r\n\r\n<h3>15.&nbsp;WebSocket</h3>\r\n\r\n<p>The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user&#39;s browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.&nbsp;WebSocket&nbsp;is a continuous connection between a client and the server. It provides a full-duplex, bi-directional channel for communication that works over HTTP via TCP/IP socket connection. Simply put, it is a thin and lightweight layer over TCP that makes it suitable for utilizing subprotocols to lodge messages.</p>\r\n\r\n<p><em>Never Give Up On Learning&nbsp;</em></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Blog Coutesy:&nbsp;<a href=\"https://dev.to/codehackerz/backend-developer-learning-path-2021-37c\">Dev.to</a></strong></p>', 'https://panel.wqsoftwares.com/storage/photos/5/Blogs/lala-azizli-8IJ5xNTv1QM-unsplash.jpg', 'backend-developer-learning-path-2021', '2021-10-20 01:20:47', '2022-01-26 07:07:23'),
(4, '240554959', 'Apple\'s 13-inch MacBook Pro With M1 Chip', 'New entry-level 13-inch MacBook Pro models were introduced on November 10, 2020, bringing a new Apple M1 chip in place of Intel processor and graphics options.', '<p><img alt=\"A MacBook Pro desktop showing Control Center and several open apps.\" src=\"https://help.apple.com/assets/5F46CA8B094622AD463B4A64/5F46CA9D094622AD463B4A8A/en_US/5854c364bdcda0c53a5e86a67f7a89b8.png\" style=\"height:311px; width:532px\" /></p>\r\n\r\n<p>Your MacBook&nbsp;Pro with Apple M1 chip delivers powerful performance to run your favorite apps faster than ever, as well as advanced technologies including Wi-Fi 6 and support for USB 4. Keyboard enhancements include more functionality for Touch&nbsp;ID and the Fn/Globe key&nbsp;<img alt=\"\" src=\"https://help.apple.com/assets/5F46CA8B094622AD463B4A64/5F46CA9D094622AD463B4A8A/en_US/4ddf09305361b1b79afbcb5b56cf2f83.png\" style=\"height:30px; width:30px\" />.&nbsp;See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/magic-keyboard-apdd0116a6a2/2020/mac/11\">MacBook&nbsp;Pro&nbsp;Magic&nbsp;Keyboard with Touch&nbsp;Bar and Touch&nbsp;ID</a>.</p>\r\n\r\n<p>macOS Big Sur introduces a fresh new look for your Mac desktop, designed to be more closely integrated across Apple devices. The new design includes a translucent dock and menu bar, updated yet familiar icons, and more spacious menus. Full-height sidebars and integrated toolbar buttons make apps easier to use. Even the sounds you hear when getting a notification or alert have been updated.</p>\r\n\r\n<p>The new design makes navigation even easier and gives you more control with these features:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><em>Control Center:&nbsp;</em>The new Control Center puts all your favorite menu bar items in one place, so you have quick access to the controls and preferences you use the most (for example, Wi-Fi, AirDrop, and Bluetooth). See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/control-center-apdc362a41b2/2020/mac/11\">Control Center on your Mac</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Notification Center:&nbsp;</em>The redesigned Notification Center presents your notifications and widgets in a single column. You can customize which widgets you see, and interact with your notifications (for example, reply to an email). The Weather widget is even more precise and warns about severe weather or significant changes. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/notification-center-apd6d7eb47b9/2020/mac/11\">Notification Center on your Mac</a>.</p>\r\n	</li>\r\n</ul>\r\n\r\n<p>In addition to the redesigned look and feel, macOS Big Sur includes key improvements to these apps:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><em>Safari:&nbsp;</em>Enjoy a faster personalized browsing experience in the biggest update to Safari since its original launch in 2003. Make your browsing experience your own with a new customizable start page, and find many additional extensions in the App Store. Navigate with ease using all-new Favicons in tabs and tab previews that appear when you hover over them. Click the translation icon to quickly translate webpages (beta) between seven supported languages. Safari also has a new privacy report that shows you how it protects your privacy across the different websites you browse. Already the world&rsquo;s fasted desktop browser, Safari provides faster browsing and loading of frequently visited sites than Chrome or Firefox. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/safari-apd8c78b9596/2020/mac/11\">Safari</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Maps:&nbsp;</em>New curated guides help you discover the best places to eat, shop, and explore in a locale&mdash;you can even make your own guides. Use Look Around to take an interactive 3D tour through the streets of select cities. And now you can plan a cycling route that gives you elevation and obstacle indicators, or a route for your electric vehicle, complete with charging stops and time estimates. Indoor maps are available for major airports and shopping centers, so you can easily find restaurants, restrooms, and stores. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/maps-apda975416ce/2020/mac/11\">Maps</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Messages:&nbsp;</em>New tools make it easier to share expressive messages and manage your group conversations. With new Message effects, you can personalize messages with balloons, confetti, and more. Add a Memoji sticker that matches your mood and personality to the conversation, and create new ones with the Memoji editor on Mac. You can even quickly share trending GIFs or images from your photos library with #images and the new photo picker. New group messaging features streamlined interactions with family, friends, and colleagues. Pin favorite conversations to the top of your messages list for fast access. Use inline replies to respond directly to a message, and direct a message to an individual in a group conversation by simply typing their name. Set a photo or an emoji for a group conversation, and it&rsquo;s shared with all members of the group. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/messages-apdcf94e89a2/2020/mac/11\">Messages</a>.</p>\r\n	</li>\r\n</ul>\r\n\r\n<p>macOS Big Sur also provides these new features and enhancements to existing features:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><em>AirPods:&nbsp;</em>AirPods seamlessly switch between active devices paired to the same iCloud account, making it even easier to use your AirPods with your Apple devices. On your Mac, you can click a notification to switch the audio from another device. Device switching works with AirPods Pro, AirPods (2nd generation), Powerbeats, Powerbeats Pro, and Beats Solo Pro. Requires an iPhone or iPod with the latest version of iOS; an iPad with the latest version of iPadOS; or a Mac with the latest version of macOS.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Apple Arcade:&nbsp;</em>See what games your Game Center friends are playing right from the Arcade tab, and view your achievements and goals on game pages. Game Center now includes an in-game dashboard so you can see your progress and that of your friends at a glance. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/app-store-apd787343df7/2020/mac/11\">App&nbsp;Store</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Battery:&nbsp;</em>Your MacBook&nbsp;Pro now features Optimized Battery Charging and a chart of battery levels and usage history. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/charge-the-battery-apdbc13fd966/2020/mac/11\">Charge the MacBook&nbsp;Pro battery</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Family Sharing:&nbsp;</em>An improved family settings UI gives family members more clarity and control over how their family is set up. It&#39;s easier than ever to set up your family, add new members, and manage your family details. See more about Family Sharing in&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/access-your-icloud-content-apd785390d2e/2020/mac/11\">Access your iCloud content on your Mac</a>&nbsp;and&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/apple-account-apd1c52f9d30/2020/mac/11\">Apple Account on Mac</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Home:&nbsp;</em>The Home app has several improvements, including a visual status area with a summary of accessories that require your attention or have important status changes to share, Face Recognition and Activity Zones for doorbells and video cameras, and Adaptive Lighting for smart light bulbs. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/home-apdc148cae8a/2020/mac/11\">Home</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>iPhone and iPad apps on MacBook&nbsp;Pro with Apple M1 chip:&nbsp;</em>Many iPhone and iPad apps can now run on your MacBook&nbsp;Pro with Apple M1 chip. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/app-store-apd787343df7/2020/mac/11\">App&nbsp;Store</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Listen Now:&nbsp;</em>In Music and Podcasts, the Listen Now tab learns your preferences (favorite artists, interviews, mixes, podcasts) and provides suggestions based on what you listen to. Podcasts includes a more focused Up Next so you can easily resume the next episode in your queue. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/music-apdec3c9584d/2020/mac/11\">Music</a>&nbsp;and&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/podcasts-apdabe805d46/2020/mac/11\">Podcasts</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Notes:&nbsp;</em>New text styles give you even more formatting options for your notes. Enhanced scanning on iPhone helps you capture sharper scans and automatically transfers them to your Mac for immediate use. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/notes-apdf79aa72fa/2020/mac/11\">Notes</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Photos:&nbsp;</em>Video and photo editing capabilities have been expanded with filters, special effects, and more. You can do more refined photo retouching and add captions to photos and videos. Enhancements to Memories include more music tracks for movies and video stabilization. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/photos-apd43838df41/2020/mac/11\">Photos</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Reminders:&nbsp;</em>Split up tasks and receive smart suggestions to use your reminders in new ways. Assign reminders to people you share lists with and they&rsquo;ll get a notification. You can also let smart suggestions help you create a reminder based on similar ones you&rsquo;ve created in the past. When you&rsquo;re corresponding with someone in Mail, Siri recognizes possible reminders and makes suggestions for you to create them. Then use new keyboard shortcuts to quickly find the reminder you need. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/reminders-apdff850cfc8/2020/mac/11\">Reminders</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Software updates:&nbsp;</em>With macOS Big Sur, software updates begin in the background and complete faster than before&mdash;so it&rsquo;s easier to keep your Mac up to date and secure.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Spotlight:&nbsp;</em>Spotlight is faster than ever. It now prominently shows your top search results and suggestions as you type&mdash;making it even quicker to access high quality suggestions. Spotlight technology is also used in the Find menus for apps like Safari, Pages, Keynote, and more. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/spotlight-apd10f8d1038/2020/mac/11\">Spotlight on your Mac</a>.</p>\r\n	</li>\r\n	<li>\r\n	<p><em>Voice Memos:&nbsp;</em>Add folders to help you keep your Voice Memos organized. Easily mark recordings as Favorites so you can quickly access them later. Take your Voice Memos one step further by automatically reducing background noise with a single click. See&nbsp;<a href=\"https://support.apple.com/en-gb/guide/macbook-pro/voice-memos-apd9a3a201c9/2020/mac/11\">Voice Memos</a>.</p>\r\n	</li>\r\n</ul>', 'https://panel.wqsoftwares.com/storage/photos/5/Blogs/m1-chip-slide.jpeg', 'apples-13-inch-macbook-pro-with-m1-chip', '2021-10-20 02:20:09', '2022-01-26 07:07:33'),
(5, '405674176', 'Node.js Makes Fullstack Programming Easy With Server-side JavaScript', 'Web application developers are inundated with options when it comes to choosing the languages, frameworks, libraries, and environments they will use to build their applications.', '<p>Web application developers are inundated with options when it comes to choosing the languages, frameworks, libraries, and environments they will use to build their applications. Depending on which statistics you believe,&nbsp;<a href=\"https://stackoverflow.blog/2015/07/29/why-are-there-so-many-programming-languages/\">the total number of available languages</a>&nbsp;is somewhere between 700 and 9000. The most popular&mdash;for the past nine years according to the&nbsp;<a href=\"https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages\">2021 Stack Overflow Developer Survey</a>&mdash;is JavaScript. Most people think of JavaScript as a front-end language.</p>\r\n\r\n<p>Originally launched in 2009,&nbsp;<a href=\"https://nodejs.org/\">Node.js</a>&nbsp;has quickly become one of the most widely used options among application developers. More than half of developers are now using Node.js&mdash;it is the most popular non-language, non-database development tool. It allows you to run JavaScript on the server side, which lets software engineers develop on the full web stack.&nbsp;</p>\r\n\r\n<p>Node.js&rsquo;s popularity has snowballed for good reason. Node.js is a fast, low-cost, effective alternative to other back-end solutions. And with its two-way client-server communication channel, it is hard to beat for cross-platform development.</p>\r\n\r\n<p>Here we step through just a few of the features that help set Node.js apart from the crowd.</p>\r\n\r\n<h2>What is Node.js?</h2>\r\n\r\n<p>Node.js is a free, open-source, event-driven JavaScript runtime environment rather than a framework, library, or language. Based on Google Chrome&rsquo;s V8 JavaScript engine, Node.js improves efficiency with its asynchronous, single-threaded, non-blocking I/O architecture.&nbsp;</p>\r\n\r\n<p>By breaking software down into small pieces that run simultaneously, Node.js creates lightweight, fast, scalable applications. Node.js also allows developers to use JavaScript to create command-line tools for server-side scripting.&nbsp;</p>\r\n\r\n<p>Because of its speed and multi-tasking abilities, Node.js has become a tool of choice for many major corporations and organizations. Among the primary industries using Node.js are education, healthcare, government, and finance.&nbsp;</p>\r\n\r\n<h2>Why should you use Node.js?</h2>\r\n\r\n<p>Developers that are already well-versed in other programming languages, frameworks, libraries, or environments might wonder why they spend the time to learn Node.js. The short answer is that Node.js speeds development and improves overall application performance.&nbsp;</p>\r\n\r\n<h3>Node.js is easy to learn</h3>\r\n\r\n<p>If you aren&rsquo;t already using Node.js, then you have to invest the time to learn it. Application developers typically don&rsquo;t have much free time, so if they intend to learn a new tool, it needs to be simple to pick up. The vast majority of developers are already familiar with JavaScript.&nbsp;</p>\r\n\r\n<p>And because Node.js facilitates the use of JavaScript on the server-side, it makes it easier for front-end developers to quickly and simply build server-side applications, even if they have limited knowledge or experience with back-end programming principles.&nbsp;&nbsp;</p>\r\n\r\n<p>Node.js also has&nbsp;<a href=\"https://nodejs.org/en/docs/\">extensive documentation libraries</a>&nbsp;to help you learn more about using Node.js for your development projects.</p>\r\n\r\n<h3>Node.js is fast</h3>\r\n\r\n<p>When discussing speed, it is important to distinguish between the speed of application development and actual application performance. Node.js offers advantages for both.</p>\r\n\r\n<p>Several factors contribute to Node.js&rsquo;s speed advantage. First is the Google V8 engine, which powers lightning-fast conversion of JavaScript to machine code. Google&rsquo;s dedication to the V8 engine assures developers that there will be frequent updates and ongoing performance improvements.&nbsp;&nbsp;</p>\r\n\r\n<p>Node.js applications run much faster than other applications. Because Node uses an asynchronous, non-blocking programming model, processes can run in parallel rather than waiting for other processes to complete. The result is improved speed and performance.</p>\r\n\r\n<p>Node promotes reusability of modules, which decreases development time. Moreover, with a large number of modules available from the community, developers can frequently find much-needed functionality without building it from scratch.</p>\r\n\r\n<h3>Node.js has single module caching&nbsp;</h3>\r\n\r\n<p>Another contributor to Node&rsquo;s performance advantages is its&nbsp;<a href=\"https://scotch.io/tutorials/how-to-optimize-node-requests-with-simple-caching-strategies\">use of single-module caching</a>. The first time a module is requested, it is cached in in-app memory. Subsequent calls to the module access the cached version, rather than recompiling the module. As a result, Node.js applications load faster and are more responsive.</p>\r\n\r\n<h3>Node.js facilitates development of real-time applications</h3>\r\n\r\n<p>Node&rsquo;s architecture makes it an ideal candidate for developing real-time applications. Node facilitates rapid data transfer between server and client with asynchronous operations, ensuring no lag between a user request and the server response.&nbsp;</p>\r\n\r\n<p>Node allows multiple processes to run concurrently. Therefore, I/O operations are fast and responsive. This is particularly useful&nbsp;<a href=\"https://www.atlantic.net/dedicated-server-hosting/how-to-configure-reverse-proxy-for-node-js-application-using-apache-on-ubuntu-20-04/\">when configuring web proxies</a>&nbsp;or building applications with a large number of simultaneous users, such as chat and messaging apps.</p>\r\n\r\n<p>And don&rsquo;t forget the V8 engine, which increases Node.js&rsquo;s overall speed and performance, which are extra important for real-time applications.</p>\r\n\r\n<h3>Node.js scales easily&nbsp;</h3>\r\n\r\n<p>Scaling Node.js is simple. Node.js can support tens or hundred of thousands of concurrent connections. And Node.js applications can easily be extended by the addition of new modules.</p>\r\n\r\n<p>Node.js relies on the cluster module, which is a load balancer that distributes processes across all available CPU cores. This allows Node.js applications to handle large numbers of processes quickly and efficiently.</p>\r\n\r\n<p>Node&rsquo;s modular architecture promotes scaling of development efforts. Development of individual microservices can proceed in parallel, reducing development time and facilitating modular addition of functionality to applications.</p>\r\n\r\n<h3>Node.js has workable streaming&nbsp;</h3>\r\n\r\n<p>Node.js data handling features rely on creating streams of data when it receives requests (such as HTTP requests) from a client web server. Using streams, Node.js breaks up modules into smaller pieces, which it processes individually, without keeping the entirety of the data in memory at once. Node.js can therefore process larger files faster and more efficiently, which is why it&rsquo;s a good choice for developing video or live conferences.</p>\r\n\r\n<p>Using streams has two primary advantages. First, it reduces the amount of memory needed to deal with large files. Second, it allows data processing to begin immediately on receipt of the first piece of data, rather than waiting until the entire package is transmitted.</p>\r\n\r\n<h3>Node.js is cost-effective&nbsp;</h3>\r\n\r\n<p>Node&rsquo;s individual advantages when combined lead to cost savings:</p>\r\n\r\n<ul>\r\n	<li>Because Node.js makes it easy for front-end developers with JavaScript experience&nbsp;<a href=\"https://www.geeksforgeeks.org/javascript-backend-basics/\">to work on back-end development</a>, you no longer need to have completely separate teams for the front end and back end.</li>\r\n	<li>Develop applications faster with pre-built microservices from the community.&nbsp;</li>\r\n	<li>Node&rsquo;s more efficient usage of resources means that you can minimize an application&rsquo;s server footprint</li>\r\n	<li>Node&rsquo;s scalability means that adding functionality is simpler and faster, reducing ongoing development costs&nbsp;&nbsp;</li>\r\n</ul>\r\n\r\n<h3>Node.js has a strong and active community</h3>\r\n\r\n<p>Because of Node.js&rsquo;s growing popularity, a large and active community provides support and resources. Node.js fans are constantly available to respond to questions and assist you with issues that arise during development. And many Node.js developers are happy to share their efforts with the community at large.&nbsp;</p>\r\n\r\n<p>One of the most useful community-based resources is the Node package manager (npm). npm is a huge online collection of published Node.js projects that you can install with ease. With npm, it is easy to find pre-built content and integrate it into your application.</p>\r\n\r\n<h3>Node.js can help you land a job</h3>\r\n\r\n<p>Demand for Node.js developers has grown almost as rapidly as interest in the tool. But there is still&nbsp;<a href=\"https://stackoverflow.com/jobs?q=node.js\">more demand than available developers</a>. So adding Node.js to your arsenal makes you that much more desirable for prospective employers.</p>\r\n\r\n<h2>When wouldn&rsquo;t you use Node.js?</h2>\r\n\r\n<p>No tool is perfect, and not surprisingly, Node.js does have some downsides. Despite its many advantages, there are applications where Node.js may not be your best solution.</p>\r\n\r\n<h3>If your application relies on CPU-bound processes</h3>\r\n\r\n<p>Computationally-heavy applications take a toll on Node.js&rsquo;s efficiency and performance. This is because Node.js prioritizes high computation processes above other processes, which results in processing delays.</p>\r\n\r\n<p>Node.js is attempting to overcome this concern through the worker threads multi-threading tool it released in 2018. The effectiveness of worker threads is still up in the air, and Node is working to improve the tool&rsquo;s capabilities.</p>\r\n\r\n<h3>If you are concerned about data security</h3>\r\n\r\n<p>Some developers believe that the lack of default error handling in Node.js&nbsp;<a href=\"https://char.gd/recharged/daily/npm-as-an-attack-vector\">makes it vulnerable to exploits</a>. Admittedly, Node.js, like any other programming language or development tool, is prone to attack. However, this concern is probably overblown.</p>\r\n\r\n<p>Using programming and application development best practices and incorporating security into the development process can minimize security concerns. And, naturally, it is helpful to include application features that encourage users&nbsp;<a href=\"https://privacycanada.net/online-privacy-guide/\">to build effective security practices</a>, for example, multi-factor authentication.</p>\r\n\r\n<h3>If you are afraid of callback hell</h3>\r\n\r\n<p>Because Node.js is asynchronous, it can generate a large number of callbacks. When callbacks get deeply nested, you can enter what developers not-so-fondly term&nbsp;<a href=\"http://callbackhell.com/\">callback hell</a>. Frequently, callback hell can result from poor programming hygiene rather than actually being an issue with Node.js, but you should be aware that it is a potential issue when using Node.js.</p>\r\n\r\n<h3>If you want a stable API</h3>\r\n\r\n<p>Node.js&rsquo;s API is known for its lack of stability. It changes frequently and, at times, the changes have not been backward compatible (such as Node.js 8), causing extra effort for developers.</p>\r\n\r\n<h2>Take Node.js for a spin</h2>\r\n\r\n<p>Given its rise in popularity and well-documented speed and performance advantages for many popular applications, Node.js is a no-brainer&nbsp;<a href=\"https://stackoverflow.blog/2021/02/08/moving-from-designer-to-developer-stack-overflow/\">for application development</a>. Even the most skeptical developers should give Node.js a test run to see if it is worth adding to their development resources.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Post Credit:&nbsp;<a href=\"https://stackoverflow.blog/2021/10/25/node-js-makes-fullstack-programming-easy-with-server-side-javascript/\">Stackoverflow</a></strong></p>', 'https://panel.wqsoftwares.com/storage/photos/5/Blogs/221021-StackOverflow-Node.js-1200x630.jpg', 'nodejs-makes-fullstack-programming-easy-with-server-side-javascript', '2021-11-04 05:34:57', '2022-01-26 07:07:41'),
(7, '405679999', 'Server-side Rendering (SSR)', 'An SSR app only delivers what a user requests. It proceeds further with the initial request made and doesn’t waits until all the JavaScript files are loaded. A hybrid of SSR and CSR is the best possible solution to tackle this hindrance.', '<blockquote>\r\n<p><strong>What is Server-Side Rendering?&nbsp;</strong></p>\r\n</blockquote>\r\n\r\n<p>SSR is a technique of rendering web applications on the server and returning responses to users. It is the ability of an application to contribute in displaying the web page on the server instead of rendering it in the browser. &nbsp;This means as soon as the user opens a web application, it sends a request to the server which returns a response together with the content i.e HTML, CSS, JavaScript, and other assets required to display the content to the user.&nbsp;</p>\r\n\r\n<p>Unlike, Client-side rendered application SSR returns a page with the content is to the user. The disadvantage of this approach is that request is always made to the server whenever a user clicks a link. This may be slow as the server has to go through the process of handling the request then returning the HTML, CSS, and JavaScript files.&nbsp;</p>\r\n\r\n<p>A hybrid of SSR and CSR is the best possible solution to tackle this hindrance. This hybrid model is known as a Universal or Isomorphic app in some circles. In an Isomorphic app, we can reduce the slow initial load time by Client-side rendered applications via initial HTML rendering from the server. Later on, it lets the client take over rendering responsibilities thus eliminating the frequent requests made to the server in SSR apps.&nbsp;</p>\r\n\r\n<p><strong>Benefits of SSR&nbsp;</strong></p>\r\n\r\n<ol>\r\n	<li><strong>Faster Initial Load Time: </strong>An SSR app only delivers what a user requests. It proceeds further with the initial request made and doesn&rsquo;t wait until all the JavaScript files are loaded. It is commonly known as Time to First Byte; which is the response time as soon as a user clicks a link to get feedback.</li>\r\n	<li><strong>Good for SEO: </strong>SSR apps are appropriate for Search engines (Google, Bing, etc.) as Search engine bots can crawl the entire app and index its pages. Unlike Client-side rendered apps that load and update just a single page.</li>\r\n	<li><strong>Great for Static Sites:</strong> SSR can be great for building static sites as the server returns a full HTML to the user.&nbsp;</li>\r\n</ol>\r\n\r\n<p><strong>Drawbacks of SSR&nbsp;</strong></p>\r\n\r\n<ol>\r\n	<li>Frequent Server Requests: Numerous performance issues occur as every request via the user is returned to the server for processing.</li>\r\n	<li>Overall Slower Load Time: Overall load time is slower as the server has to process each request compared to single-page applications. A single-page Application only fetches all the required content at the initial load time. Furthermore, in larger SSR applications processing requests shall take some time which may lead to a slow Time To First Byte.&nbsp;</li>\r\n</ol>', 'https://panel.wqsoftwares.com/storage/photos/5/Blogs/blog1 (withbg).png', 'server-side-rendering-ssr', '2021-11-26 05:09:39', '2021-11-26 05:09:39'),
(9, '405670000', 'Why Promises Are Used In Javascript', 'Promises are used to deal with asynchronous operations in JavaScript. They are smooth to manipulate while managing a couple of asynchronous operations in which callbacks can create callback hell main to unmanageable code. Prior to promises events and call', '<p>Promises are used to deal with asynchronous operations in JavaScript. They are smooth to manipulate while managing a couple of asynchronous operations in which callbacks can create callback hell main to unmanageable code.</p>\r\n\r\n<p>Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. Multiple callback capabilities may create callback hell that leads to unmanageable code. Events have been now not accurate at coping with asynchronous operations.</p>\r\n\r\n<p>Promises are the precise preference for dealing with asynchronous operations withinside the only manner. They can cope with a couple of asynchronous operations effortlessly and offer higher blunders dealing with than callbacks and events.</p>\r\n\r\n<p><strong>A promise can be created using the Promise constructor. Syntax&nbsp;</strong></p>\r\n\r\n<p><strong><img alt=\"\" src=\"https://panel.wqsoftwares.com/storage/photos/5/Blogs/promises.png\" style=\"height:529px; width:600px\" /></strong></p>\r\n\r\n<p><strong>Benefits of Promises</strong></p>\r\n\r\n<ol>\r\n	<li>Improves Code Readability</li>\r\n	<li>Better handling of asynchronous operations</li>\r\n	<li>Better flow of control definition in asynchronous logic</li>\r\n	<li>Better Error Handling</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>A Promise has four states:</strong></p>\r\n\r\n<ol>\r\n	<li><strong>Fulfilled</strong>: Action related to the promise succeeded</li>\r\n	<li><strong>Rejected</strong>: Action related to the promise failed</li>\r\n	<li><strong>Pending</strong>: Promise is still pending i.e not fulfilled or rejected yet</li>\r\n	<li><strong>Settled</strong>: Promise has fulfilled or rejected<strong> </strong></li>\r\n</ol>', 'https://panel.wqsoftwares.com/storage/photos/5/Blogs/code blog copy.png', 'why-promises-are-used-in-javascript', '2021-12-08 03:14:48', '2021-12-08 03:14:48');

-- --------------------------------------------------------

--
-- Table structure for table `wq_categories`
--

DROP TABLE IF EXISTS `wq_categories`;
CREATE TABLE IF NOT EXISTS `wq_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_slug` varchar(255) NOT NULL,
  `category_image` text,
  `category_order` int(11) NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_categories`
--

INSERT INTO `wq_categories` (`category_id`, `category_name`, `category_slug`, `category_image`, `category_order`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'Excavators', 'excavators', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/category/WhatsApp Image 2022-01-24 at 12.40.29 PM.jpeg', 1, 1, '2022-01-11 13:13:32', '2022-01-24 07:43:00'),
(2, 'Wheels Loaders', 'wheels-loaders', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/category/WhatsApp Image 2022-01-24 at 12.40.29 PM (1).jpeg', 2, 1, '2022-01-11 13:13:50', '2022-01-24 07:43:18'),
(3, 'Wheel', 'wheel', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/category/WhatsApp Image 2022-01-24 at 12.40.30 PM.jpeg', 3, 1, '2022-01-23 03:16:00', '2022-01-24 07:44:32'),
(4, 'BUS', 'bus', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/category/bus.jpg', 4, 1, '2022-01-25 09:23:34', '2022-02-11 12:59:32'),
(5, 'TRUCK', 'truck', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/category/about__751x500.jpg', 5, 1, '2022-02-11 12:36:20', '2022-02-11 12:59:50'),
(6, 'Cars', 'cars', 'http://127.0.0.1:8000/storage/photos/5/Untitled-1.png', 2, 1, '2023-01-23 21:07:51', '2023-01-23 21:07:51');

-- --------------------------------------------------------

--
-- Table structure for table `wq_certificates`
--

DROP TABLE IF EXISTS `wq_certificates`;
CREATE TABLE IF NOT EXISTS `wq_certificates` (
  `certificate_id` int(11) NOT NULL AUTO_INCREMENT,
  `certificate_name` varchar(255) DEFAULT NULL,
  `certificate_file` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`certificate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_certificates`
--

INSERT INTO `wq_certificates` (`certificate_id`, `certificate_name`, `certificate_file`, `created_at`, `updated_at`) VALUES
(4, 'Green Field', 'http://127.0.0.1:8000/storage/photos/5/ach.png', '2023-01-30 09:12:00', '2023-01-30 09:12:00'),
(5, 'Green Field 2', 'http://127.0.0.1:8000/storage/photos/5/ach.png', '2023-01-30 09:12:24', '2023-01-30 09:12:24'),
(6, 'Green Field 3', 'http://127.0.0.1:8000/storage/photos/5/ach.png', '2023-01-30 09:12:42', '2023-01-30 09:12:42');

-- --------------------------------------------------------

--
-- Table structure for table `wq_companies`
--

DROP TABLE IF EXISTS `wq_companies`;
CREATE TABLE IF NOT EXISTS `wq_companies` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `company_link` text NOT NULL,
  `company_logo` text NOT NULL,
  `group_of_companies` int(11) DEFAULT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_companies`
--

INSERT INTO `wq_companies` (`company_id`, `company_name`, `company_link`, `company_logo`, `group_of_companies`, `_status`, `created_at`, `updated_at`) VALUES
(18, 'FORTE', '/url', 'http://127.0.0.1:8000/storage/photos/5/FCL 2@2x.png', NULL, 1, '2023-01-26 00:58:17', '2023-01-26 00:58:17'),
(19, 'Islah', '/islah', 'http://127.0.0.1:8000/storage/photos/5/Islah 1@2x.png', NULL, 1, '2023-01-26 01:01:01', '2023-01-26 01:01:01'),
(20, 'KKH', '/url', 'http://127.0.0.1:8000/storage/photos/5/KKH@2x.png', NULL, 1, '2023-01-26 01:01:27', '2023-01-26 01:01:27'),
(21, 'Moun Khalid', '/maoun-khalid', 'http://127.0.0.1:8000/storage/photos/5/Mount Khalid 3D Logo-01@2x.png', NULL, 1, '2023-01-26 01:02:15', '2023-01-26 01:02:15'),
(22, 'Toyota', '/url', 'http://127.0.0.1:8000/storage/photos/5/TRM 1@2x.png', NULL, 1, '2023-01-26 01:02:49', '2023-01-26 01:02:49');

-- --------------------------------------------------------

--
-- Table structure for table `wq_contact_information`
--

DROP TABLE IF EXISTS `wq_contact_information`;
CREATE TABLE IF NOT EXISTS `wq_contact_information` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_title` varchar(255) NOT NULL,
  `contact_branch` varchar(255) DEFAULT NULL,
  `contact_address` text,
  `contact_phone` varchar(255) DEFAULT NULL,
  `contact_mobile` varchar(255) DEFAULT NULL,
  `contact_fax` varchar(255) DEFAULT NULL,
  `contact_email` text,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_contact_information`
--

INSERT INTO `wq_contact_information` (`contact_id`, `contact_title`, `contact_branch`, `contact_address`, `contact_phone`, `contact_mobile`, `contact_fax`, `contact_email`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'Islamabad Branch', 'Islamabad', 'Blue area islamabad', '051 000000', '03330000000', '051 0000002', 'info@khalidandkhalidholdings.com.pk', 1, '2022-01-27 07:02:16', '2022-01-27 07:02:16'),
(2, 'Peshawar Branch', 'PESHAWAR', 'WQsoftwares 4th Floor Diljan Arcade Ring Road Near Hayatabad', '091 0000000', '03338315741', '091 0000000', 'detoxeng@gmail.com', 1, '2022-01-27 07:02:43', '2022-01-27 07:02:43'),
(3, 'Mardan', 'Mardan', 'C3 4th Block Ring Road Mardan Charsadda', '081 8282727', '099982727272', '099982727272', 'mardan@kandk.com', 1, '2022-02-01 06:48:33', '2022-02-01 06:48:33'),
(4, 'Rawalpindi Branch', 'Rawalpindi', 'Head Office: Toyota Rawal Motors Building,Swan Camp, G.T Road Rawalpindi.', '0092-51- 4917218', '0092-51- 4917117', '0', 'info@khalidandkhalidholdings.com.pk', 1, '2022-02-18 12:26:46', '2022-02-18 12:26:46');

-- --------------------------------------------------------

--
-- Table structure for table `wq_customerreviews`
--

DROP TABLE IF EXISTS `wq_customerreviews`;
CREATE TABLE IF NOT EXISTS `wq_customerreviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `review_name` varchar(100) NOT NULL,
  `review_designation` varchar(100) NOT NULL,
  `review_image` text NOT NULL,
  `review_content` varchar(255) NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_customerreviews`
--

INSERT INTO `wq_customerreviews` (`review_id`, `review_name`, `review_designation`, `review_image`, `review_content`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'Shacman', 'Software Developer', 'http://127.0.0.1:8000/storage/photos/5/cust1.png', 'I had a great experience shopping on this website. The selection was huge and the prices were very reasonable. The customer service was also top-notch, answering all of my questions promptly and professionally. I will definitely be shopping here again!', 1, '2022-02-09 03:23:28', '2023-01-26 04:43:02'),
(4, 'Sunlog', 'Product Manager', 'http://127.0.0.1:8000/storage/photos/5/cust2.png', 'This website has a terrible return policy. I was extremely disappointed when I was told that I couldn\'t return an item that was clearly defective. I will never shop here again.', 1, '2022-02-25 06:51:41', '2023-01-26 04:44:10'),
(5, 'Marsha', 'Software Developer', 'http://127.0.0.1:8000/storage/photos/5/cust3.png', 'I recently made a purchase on this website and was very pleased with the speed of the delivery. The items were also exactly as described and of good quality. Overall, I had a positive experience and would recommend this website to others.', 1, '2022-02-25 06:58:54', '2023-01-26 04:44:48');

-- --------------------------------------------------------

--
-- Table structure for table `wq_events`
--

DROP TABLE IF EXISTS `wq_events`;
CREATE TABLE IF NOT EXISTS `wq_events` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_title` varchar(255) DEFAULT NULL,
  `event_slug` varchar(255) NOT NULL,
  `event_date` date DEFAULT NULL,
  `event_time` time DEFAULT NULL,
  `event_cover` text,
  `event_excerpt` text,
  `event_description` text,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_events`
--

INSERT INTO `wq_events` (`event_id`, `event_title`, `event_slug`, `event_date`, `event_time`, `event_cover`, `event_excerpt`, `event_description`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'Event title', 'event-title', '2022-01-25', '03:07:00', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/events/jason-leung-4BKiS_BgOwI-unsplash-min-compressed.jpg', 'lore iosum thi sis dummy tetx im working', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of&nbsp;</p>', 1, '2022-01-24 07:05:16', '2022-01-25 06:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `wq_footerlinks`
--

DROP TABLE IF EXISTS `wq_footerlinks`;
CREATE TABLE IF NOT EXISTS `wq_footerlinks` (
  `footer_linkid` int(11) NOT NULL AUTO_INCREMENT,
  `footer_linkname` varchar(255) DEFAULT NULL,
  `footer_linknameslug` varchar(255) NOT NULL,
  `footer_link` text,
  `footer_linktype` varchar(255) DEFAULT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`footer_linkid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_footerlinks`
--

INSERT INTO `wq_footerlinks` (`footer_linkid`, `footer_linkname`, `footer_linknameslug`, `footer_link`, `footer_linktype`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'KHALID1', 'khalid1', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/events/jason-leung-4BKiS_BgOwI-unsplash-min-compressed.jpg', 'Category Section', 1, '2022-02-07 10:47:21', '2022-02-07 10:53:04'),
(2, 'KHALID2', 'khalid2', 'BLACK', 'Product Section', 1, '2022-02-07 10:47:38', '2022-02-07 10:47:38'),
(3, 'KHALID3', 'khalid3', 'GREEN', 'Quick Link', 1, '2022-02-07 10:47:50', '2022-02-10 12:58:34');

-- --------------------------------------------------------

--
-- Table structure for table `wq_jobs`
--

DROP TABLE IF EXISTS `wq_jobs`;
CREATE TABLE IF NOT EXISTS `wq_jobs` (
  `job_id` int(11) NOT NULL AUTO_INCREMENT,
  `job_title` varchar(200) NOT NULL,
  `job_slug` varchar(255) DEFAULT NULL,
  `job_lastdate` date DEFAULT NULL,
  `job_location` varchar(200) DEFAULT NULL,
  `job_type` varchar(200) DEFAULT NULL,
  `job_features` longtext,
  `job_benefits` longtext,
  `job_experience` varchar(200) NOT NULL,
  `job_education` varchar(2000) NOT NULL,
  `job_detail` longtext NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_jobs`
--

INSERT INTO `wq_jobs` (`job_id`, `job_title`, `job_slug`, `job_lastdate`, `job_location`, `job_type`, `job_features`, `job_benefits`, `job_experience`, `job_education`, `job_detail`, `_status`, `created_at`, `updated_at`) VALUES
(2, 'Designer In Pakistan', 'designer-in-pakistan', '2023-02-12', 'Islamabad', 'Remote Work', 'Proven experience as a Computer Security Specialist Programming skills are preferred (e.g. knowledge of C++, PHP languages) Familiarity with security frameworks (e.g. NIST Cybersecurity framework) and risk management methodologies Knowledge of patch management, firewalls and intrusion detection/prevention systems (e.g. TippingPoint) Familiarity with public key infrastructure (PKI) and cryptographic protocols (e.g. SSL/ TLS) An analytical mind with excellent problem-solving ability Outstanding communication and organization skills Decision-making skills BSc/BA in Computer Science, Information Technology or a related field; professional certification (e.g. CompTIA Security+, CISSP) is a plus', 'Proven experience as a Computer Security Specialist Programming skills are preferred (e.g. knowledge of C++, PHP languages) Familiarity with security frameworks (e.g. NIST Cybersecurity framework) and risk management methodologies Knowledge of patch management, firewalls and intrusion detection/prevention systems (e.g. TippingPoint) Familiarity with public key infrastructure (PKI) and cryptographic protocols (e.g. SSL/ TLS) An analytical mind with excellent problem-solving ability Outstanding communication and organization skills Decision-making skills BSc/BA in Computer Science, Information Technology or a related field; professional certification (e.g. CompTIA Security+, CISSP) is a plus', '1+', 'Bachelor / Master', '<p>Proven experience as a Computer Security Specialist Programming skills are preferred (e.g. knowledge of C++, PHP languages) Familiarity with security frameworks (e.g. NIST Cybersecurity framework) and risk management methodologies Knowledge of patch management, firewalls and intrusion detection/prevention systems (e.g. TippingPoint) Familiarity with public key infrastructure (PKI) and cryptographic protocols (e.g. SSL/ TLS) An analytical mind with excellent problem-solving ability Outstanding communication and organization skills Decision-making skills BSc/BA in Computer Science, Information Technology or a related field; professional certification (e.g. CompTIA Security+, CISSP) is a plus&nbsp;</p>', 1, '2022-01-10 00:14:48', '2022-02-18 12:31:06'),
(3, 'SOFTWARE DEVELOPER', 'software-developer', '2022-12-25', 'RAWALPINDI', 'PROGRAMMER', 'CODING,TESTING,IMPLEMENTATION', 'NO', '2 TO 4 YEAR', 'BSCS', '<p>TEST&nbsp;</p>', 1, '2022-01-25 09:18:29', '2022-01-27 09:47:10');

-- --------------------------------------------------------

--
-- Table structure for table `wq_menus`
--

DROP TABLE IF EXISTS `wq_menus`;
CREATE TABLE IF NOT EXISTS `wq_menus` (
  `menu_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `menu_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_order` int(11) NOT NULL,
  `menu_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`menu_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wq_menus`
--

INSERT INTO `wq_menus` (`menu_id`, `menu_code`, `menu_title`, `menu_slug`, `menu_order`, `menu_status`, `created_at`, `updated_at`) VALUES
(1, '24129991', 'Main links', 'main-links', 2, 1, '2023-01-24 00:55:57', '2023-01-24 01:04:11'),
(2, '42513506', 'About Us', 'about-us', 3, 1, '2023-01-24 00:56:25', '2023-01-24 00:56:25');

-- --------------------------------------------------------

--
-- Table structure for table `wq_module`
--

DROP TABLE IF EXISTS `wq_module`;
CREATE TABLE IF NOT EXISTS `wq_module` (
  `module_id` int(11) NOT NULL AUTO_INCREMENT,
  `module_title` varchar(100) NOT NULL,
  `module_slug` varchar(100) NOT NULL,
  `_order` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`module_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_module`
--

INSERT INTO `wq_module` (`module_id`, `module_title`, `module_slug`, `_order`, `created_at`, `updated_at`) VALUES
(4, 'Modules', 'modules', 2, '2021-06-15 21:47:04', '2021-06-18 07:26:25'),
(5, 'Roles', 'roles-mgt', 3, '2021-06-15 21:47:30', '2021-06-16 20:18:19'),
(6, 'Team Management', 'team-management', 4, '2021-06-15 21:48:06', '2021-06-16 20:18:27'),
(7, 'Home', 'home', 1, '2021-06-16 20:17:53', '2021-06-16 20:17:53'),
(10, 'Blogs', 'blogs', 5, '2021-09-06 20:11:33', '2022-01-23 04:22:16'),
(11, 'Job', 'job', 6, '2021-09-07 00:22:36', '2022-01-23 04:22:29'),
(12, 'Services', 'services', 7, '2022-01-10 06:08:57', '2022-01-23 04:22:40'),
(13, 'Products', 'products', 8, '2022-01-11 13:08:51', '2022-01-23 04:22:51'),
(15, 'Events Management', 'events-management', 9, '2022-01-23 03:46:07', '2022-01-23 04:23:16'),
(16, 'Theme Configuration', 'theme-configuration', 10, '2022-01-23 04:25:57', '2022-01-23 04:25:57');

-- --------------------------------------------------------

--
-- Table structure for table `wq_pages`
--

DROP TABLE IF EXISTS `wq_pages`;
CREATE TABLE IF NOT EXISTS `wq_pages` (
  `page_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `page_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_cover` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_summary` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_buttonlabel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`page_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wq_pages`
--

INSERT INTO `wq_pages` (`page_id`, `menu_id`, `page_title`, `page_slug`, `page_cover`, `page_summary`, `page_details`, `page_buttonlabel`, `page_url`, `page_status`, `created_at`, `updated_at`) VALUES
(12, 1, 'Home', 'home', 'http://127.0.0.1:8000/images/1674641465.png', 'some content', 'details', 'Shop Here', '', 1, '2023-01-25 05:11:05', '2023-01-25 05:11:05'),
(13, 1, 'Some page', 'some-page', '', 'some', 'some', 'View Details', '/page-url', 1, '2023-01-25 05:25:12', '2023-01-25 05:25:12');

-- --------------------------------------------------------

--
-- Table structure for table `wq_policies`
--

DROP TABLE IF EXISTS `wq_policies`;
CREATE TABLE IF NOT EXISTS `wq_policies` (
  `policy_id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_title` varchar(200) NOT NULL,
  `policy_body` longtext NOT NULL,
  `policy_slug` varchar(200) NOT NULL,
  `policy_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_policies`
--

INSERT INTO `wq_policies` (`policy_id`, `policy_title`, `policy_body`, `policy_slug`, `policy_status`, `created_at`, `updated_at`) VALUES
(3, 'Environmental Policy', '<p>Natural resource depletion, climate change, biodiversity degradation and water shortage pose an Elevating threat to the world; communities and individuals. They even threaten the sustainability of our business. These problems repeatedly impact the most susceptible who lack resources and resilience to adapt the changing environments.</p>\r\n\r\n<p><strong>Our Approach:</strong></p>\r\n\r\n<p>WQsoftwares private limited is devoted to dealing with the environmental impact as an integral part of our strategy. In specific, it is our policy to pledge environmental integrity of our developments and amenities at all times. We are committed to leading the company in minimizing the impact of its activities on the environment by observing to the following principles:&nbsp; management structures and measures explicitly designed to minimalize the use of harmful materials, energy and other natural resources, to reduce the generation of waste, and to support reuse and recycling of materials.</p>\r\n\r\n<p>WQsoftwares&rsquo; environmental policy is supported via four philosophies. We shall constantly seek prospects to develop and improve our environmental enactment through establishment of objectives and targets, determining progress, and recording the outcomes; including but not limited to paper, energy, fuel consumption, and water and automobile miles. We shall endorse involvement and focus our commitment to accountable environmental administration through encouragement of environmental responsibility amongst employees; providing the basic training and provision to facilitate the implementation of these policies; through notifying the suppliers regarding our environmental policy and boosting adaptation of effective environmental management practices; and petitioning input from our employees, suppliers, customers and board members in achieving our environmental goals. In addition to educating our employees regarding environmental issues and raising awareness amongst them about the subject, we also promote sustainable practices for our suppliers, clients and customers, in order to actually exceed legal compliance. All of the results achieved are communicated through our Sustainability Report.</p>\r\n\r\n<p><strong>Scope of Policy:</strong></p>\r\n\r\n<p>The Company is devoted to decreasing its impact on air, land and water, through its dedicated and effective environmental policy. This Environmental Policy applies to:</p>\r\n\r\n<ul>\r\n	<li>All employees and joint venture companies of The WQsoftwares through our Code of Conduct Policy.</li>\r\n	<li>The energy conservation dedicated to the employees and partner companies are outlined in the Code of renewable energies.&nbsp;</li>\r\n</ul>\r\n\r\n<p><strong>Governance:</strong></p>\r\n\r\n<p>The Company&rsquo;s Policy outlines our obligation to the protection of environment and is implemented through the sustainability strategy, renewable energy promise. Our sustainability efforts are directly administered by the Human Resource Management.</p>', 'environmental-policy', 1, '2021-10-18 02:40:30', '2021-10-18 02:40:30'),
(4, 'Women Empowerment Policy', '<p>WQsoftwares private limited is dedicated to dealing with the women empowerment as fundamental strategy. It is our main focus to pledge to women grows and integrity at all times in the work place. We are committed to leading the company in minimizing the Gender discrimination in the work place and dealing with the work place harassment.</p>\r\n\r\n<p>Empowering women at the workplace refers to the fact; women can have more control over their lives. Such as; giving them the freedom to make their own programs, gain new skills, and gain autonomy. Women empowerment comes to life when the women bring strength and power to the workplace and are not only accepted by the company but utilized in different projects.</p>\r\n\r\n<p><strong>Our Approach:</strong></p>\r\n\r\n<p>WQsoftwares&rsquo; Women empowerment policy is supported via basic values acting as a pillar for is sustainability. The basic ways in which the company targets to promote women empowerment at the workplace are as follows:</p>\r\n\r\n<ol>\r\n	<li><strong>Women Recruitment in different fields</strong></li>\r\n</ol>\r\n\r\n<p>The company believes in recruiting women in different fields of IT to empower and open further doors for women in the industry. We believe to eliminate gender inequality and provide equal opportunities to women as men.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n	<li><strong>Encourage women to make the leap</strong></li>\r\n</ol>\r\n\r\n<p>To help women achieve success; the company actively encourages women to take more risks and opportunities. External support in the form of workshops and sessions is provided for capacity building and self-confidence.</p>\r\n\r\n<p>3. <strong>Promote</strong> a fair parental leave policy</p>\r\n\r\n<p>An open-minded and robust parental leave policy will eradicate the complexity and stigmatization of women coming back to work after pregnancy leave. This ideal marks the future success of empowered women in the workplace, respecting the shared vision and needs of women.</p>\r\n\r\n<p>4. <strong>New role creation</strong> for women, so companies can prosper</p>\r\n\r\n<p>Times have changed, so it&rsquo;s the need of the hour to change the &ldquo;typical&rdquo; job. Women offer a different and unique perspective to the business world. Here at WQsoftwares we celebrate and integrate this. Instead of encouraging women to take on the roles they have played for decades, the company considers to develop new roles and creation of criteria to the recruitment of smart women in the industry through our prestigious company.</p>\r\n\r\n<p>5. <strong>Prevent</strong> sexual harassment</p>\r\n\r\n<p>Our executive body believes in the long-term impact. The company leaders take necessary steps to eliminate work place harassment and tackle it on immediate basis, it is important to do everything in visibility.</p>\r\n\r\n<p>6. <strong>Pay equal salary</strong> for equal work and experience</p>\r\n\r\n<p>The company understands that the bottom line comes to paying for equity capital. Encouraging people to consider about gender in the workplace and the need for these corrections is a challenge. Regardless, our company is dedicated to eliminate this.</p>\r\n\r\n<p>7. <strong>Diversify</strong> leadership by promoting women to management and executive positions</p>\r\n\r\n<p>Our leaders believe it is important to encourage women to pursue careers at all levels of work (especially in male-dominated fields). Show them that while it is important to equally encourage men and women, women are valuable to the overall structure. Also, women are provided with the resources to improve their skills. A diverse working environment benefits the company&rsquo;s overall innovation and performance goals.</p>', 'women-empowerment-policy', 1, '2021-10-18 02:44:11', '2021-10-18 02:44:11'),
(5, 'Recruitment Policy', '<p>The recruitment and selection decision is of major importance as the means for finding the best possible person-to-job fit which will, when aggregated, contribute significantly towards WQsoftwares&rsquo; effectiveness. It is also becoming increasingly important, as the Company evolves and changes, that new recruits show a willingness to learn, adaptability and ability to work as part of a team. The Recruitment &amp; Selection procedure should help managers to ensure that these criteria are addressed.<br />\r\nThis policy ensures our Recruitment and Selection Policy shall be:<br />\r\n&bull;&nbsp;&nbsp; &nbsp;Fair and consistent;<br />\r\n&bull;&nbsp;&nbsp; &nbsp;Non-discriminatory;<br />\r\n&bull;&nbsp;&nbsp; &nbsp;Conform to all statutory regulations and agreed best practice.</p>\r\n\r\n<p>To ensure the achievement of these aims, all appointing managers will receive training in effective recruitment and selection.</p>', 'recruitment-policy', 1, '2021-10-18 02:48:43', '2021-10-18 02:52:02');

-- --------------------------------------------------------

--
-- Table structure for table `wq_products`
--

DROP TABLE IF EXISTS `wq_products`;
CREATE TABLE IF NOT EXISTS `wq_products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_slug` varchar(255) NOT NULL,
  `product_color` varchar(100) DEFAULT NULL,
  `product_model` varchar(255) DEFAULT NULL,
  `product_fueltype` varchar(255) DEFAULT NULL,
  `product_details` longtext,
  `product_info` json DEFAULT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_products`
--

INSERT INTO `wq_products` (`product_id`, `category_id`, `subcategory_id`, `product_name`, `product_slug`, `product_color`, `product_model`, `product_fueltype`, `product_details`, `product_info`, `_status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Excavator', 'excavator', '', '', '', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '{\"fuel_capacity\": null, \"fuel_material\": null, \"axle_rear_axle\": null, \"axle_front_axle\": null, \"size_wheel_base\": null, \"cabin_cabin_type\": null, \"size_wheel_track\": \"qweqweqwe\", \"size_total_height\": null, \"size_total_length\": null, \"tyres_tyres_model\": null, \"basic_model_number\": \"Mod\", \"clutch_clutch_type\": null, \"electrical_battery\": \"asdasdd\", \"engine_engine_type\": \"qwewe\", \"engine_rated_power\": null, \"engine_rated_speed\": null, \"size_overall_width\": null, \"engine_engine_model\": null, \"basic_driving_method\": \"DM\", \"braking_braking_type\": null, \"engine_bore_diameter\": null, \"engine_engine_stroke\": null, \"frame_standard_sizes\": null, \"frame_structure_type\": null, \"quality_total_weight\": \"TOTAL WEIGHT (KG)\", \"braking_driving_brake\": null, \"braking_parking_brake\": null, \"engine_maximum_torque\": null, \"clutch_clutch_diameter\": null, \"steering_steering_type\": null, \"braking_auxiliary_brake\": null, \"engine_engine_fuel_type\": null, \"engine_compression_ratio\": null, \"transmission_speed_ratio\": null, \"performance_maximum_speed\": \"MAXIMUM SPEED (KM/H)\", \"clutch_manipulation_method\": null, \"electrical_vehicle_voltage\": null, \"engine_engine_displacement\": null, \"quality_total_vehicle_mass\": \"TOTAL VEHICLE MASS (KG)\", \"size_front_rear_suspension\": null, \"transmission_control_method\": null, \"transmission_transmission_model\": null, \"performance_minimum_turning_diameter\": \"MINIMUM TURNING DIAMETER\", \"suspension_rear_suspension_structure\": null, \"suspension_front_suspension_structure\": null}', 1, '2022-03-30 03:47:14', '2023-01-30 00:47:02'),
(2, 6, 2, 'Wheeled Excavator', 'wheeled-excavator', '', '', '', 'im updating this information', '{\"fuel_capacity\": \"Consequatur Omnis b\", \"fuel_material\": \"Officia aute laudant\", \"axle_rear_axle\": \"axle_rear_axle\", \"axle_front_axle\": \"axle_front_axle\", \"size_wheel_base\": \"3222mm\", \"cabin_cabin_type\": \"Nesciunt dolorem qu\", \"size_wheel_track\": \"3222mm\", \"size_total_height\": \"4322mm\", \"size_total_length\": \"10000mm\", \"tyres_tyres_model\": \"Magni voluptas qui d\", \"basic_model_number\": \"YX-332\", \"clutch_clutch_type\": \"clutch_clutch_type\", \"electrical_battery\": \"Voluptatem sunt rem\", \"engine_engine_type\": \"turbo\", \"engine_rated_power\": \"engine_rated_power\", \"engine_rated_speed\": \"engine_rated_speed\", \"size_overall_width\": \"4400mm\", \"engine_engine_model\": \"ZX-18\", \"basic_driving_method\": \"Manual\", \"braking_braking_type\": \"Nihil iste ad asperi\", \"engine_bore_diameter\": \"engine bore diameter\", \"engine_engine_stroke\": \"engine engine stroke\", \"frame_standard_sizes\": \"Vel qui ad ad except\", \"frame_structure_type\": \"Inventore voluptate\", \"quality_total_weight\": \"100kg\", \"braking_driving_brake\": \"Molestiae Nam volupt\", \"braking_parking_brake\": \"Consectetur rerum d\", \"engine_maximum_torque\": \"engine_maximum_torque\", \"clutch_clutch_diameter\": \"clutch_clutch_diameter\", \"steering_steering_type\": \"Illo ut veniam labo\", \"braking_auxiliary_brake\": \"Rerum similique sit\", \"engine_engine_fuel_type\": \"engine_engine_fuel_type\", \"engine_compression_ratio\": \"engine compression ratio\", \"transmission_speed_ratio\": \"ttransmission_speed_ratio\", \"performance_maximum_speed\": \"120\", \"clutch_manipulation_method\": \"clutch_manipulation_method\", \"electrical_vehicle_voltage\": \"Odio occaecat ut off\", \"engine_engine_displacement\": \"8000\", \"quality_total_vehicle_mass\": \"120kg\", \"size_front_rear_suspension\": \"Front rear suspension\", \"transmission_control_method\": \"transmission_control_method\", \"transmission_transmission_model\": \"transmission_transmission_model\", \"performance_minimum_turning_diameter\": \"3222mm\", \"suspension_rear_suspension_structure\": \"Placeat provident\", \"suspension_front_suspension_structure\": \"Quis aspernatur sint\"}', 1, '2022-03-30 03:47:14', '2023-02-01 04:31:29');

-- --------------------------------------------------------

--
-- Table structure for table `wq_reachus`
--

DROP TABLE IF EXISTS `wq_reachus`;
CREATE TABLE IF NOT EXISTS `wq_reachus` (
  `reachus_id` int(11) NOT NULL AUTO_INCREMENT,
  `reachus_name` varchar(255) NOT NULL,
  `reachus_email` varchar(255) NOT NULL,
  `reachus_message` text,
  PRIMARY KEY (`reachus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_reachus`
--

INSERT INTO `wq_reachus` (`reachus_id`, `reachus_name`, `reachus_email`, `reachus_message`) VALUES
(2, 'Stewart Albert', 'kicixo@mailinator.com', NULL),
(3, 'Quin Atkins', 'taxyju@mailinator.com', NULL),
(4, 'Abbot Cabrera', 'fagufidyta@mailinator.com', NULL),
(5, 'Deirdre Stone', 'noty@mailinator.com', NULL),
(6, 'Kyla Wolfe', 'dulofas@mailinator.com', NULL),
(7, 'Dieter Gross', 'kahyfecy@mailinator.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wq_services`
--

DROP TABLE IF EXISTS `wq_services`;
CREATE TABLE IF NOT EXISTS `wq_services` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_slug` varchar(255) NOT NULL,
  `service_excerpt` text NOT NULL,
  `service_details` longtext NOT NULL,
  `service_icon` varchar(255) DEFAULT NULL,
  `service_cover` longtext NOT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_services`
--

INSERT INTO `wq_services` (`service_id`, `service_name`, `service_slug`, `service_excerpt`, `service_details`, `service_icon`, `service_cover`, `_status`, `created_at`, `updated_at`) VALUES
(9, 'Work Shop Services', 'work-shop-services', 'Services', '<p>We thrive by building long lasting relationships with our customer by providing with after sale expert advice on functional, efficient repair and maintenance of machines provided by us, through its life cycle.</p>', 'icon', 'http://127.0.0.1:8000/storage/photos/5/cmic.png', 1, '2022-03-10 10:48:26', '2023-01-26 02:38:16'),
(10, 'Spare Parts', 'spare-parts', 'Services', '<p>A warehouse facility with genuine spare parts, for attaining optimum productivity throughout the product life cycle.</p>', 'icon', 'http://127.0.0.1:8000/storage/photos/5/cmic.png', 1, '2022-03-10 10:49:17', '2023-01-26 02:38:34'),
(11, 'Rawal Industrial Equipment', 'rawal-industrial-equipment', 'Services', '<p>Rawal Industrial Equipment Pvt. Ltd is committed to the philosophy of providing total solutions backed by comprehensive aftersales services and support services instead of just making sales.</p>', 'icon', 'http://127.0.0.1:8000/storage/photos/5/cmic.png', 1, '2022-03-10 10:49:37', '2023-01-26 02:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `wq_sliders`
--

DROP TABLE IF EXISTS `wq_sliders`;
CREATE TABLE IF NOT EXISTS `wq_sliders` (
  `slider_id` int(11) NOT NULL AUTO_INCREMENT,
  `slider_title` varchar(255) DEFAULT NULL,
  `slider_buttonlabel` varchar(100) DEFAULT NULL,
  `slider_image` text,
  `slider_link` text,
  `slider_description` varchar(255) NOT NULL DEFAULT 'Nothing',
  `slider_order` int(11) DEFAULT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`slider_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_sliders`
--

INSERT INTO `wq_sliders` (`slider_id`, `slider_title`, `slider_buttonlabel`, `slider_image`, `slider_link`, `slider_description`, `slider_order`, `_status`, `created_at`, `updated_at`) VALUES
(1, 'Khalid and Khalid Holdings', 'Shop Now', 'http://127.0.0.1:8000/storage/photos/5/1.jpg', 'link', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium molestiae enim similique deleniti harum repellat expedita blanditiis inventore, sit delectus nemo libero magnam nulla repudiandae, iure ut consequuntur, alias consectetur?', 1, 1, '2022-01-24 06:53:01', '2023-01-25 07:28:41'),
(5, 'Khalid and Khalid Holdings', 'Visit Store', 'http://127.0.0.1:8000/storage/photos/5/3.jpg', 'https://google.com', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium molestiae enim similique deleniti harum repellat expedita blanditiis inventore, sit delectus nemo libero magnam nulla repudiandae, iure ut consequuntur, alias consectetur?', 2, 1, '2022-02-24 09:43:03', '2023-01-25 07:28:49'),
(6, 'Khalid and Khalid Holdings', 'Dummy', 'http://127.0.0.1:8000/storage/photos/5/2.jpg', 'link', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium molestiae enim similique deleniti harum repellat expedita blanditiis inventore, sit delectus nemo libero magnam nulla repudiandae, iure ut consequuntur, alias consectetur?', 3, 1, '2022-02-25 06:35:46', '2023-01-25 07:28:57'),
(7, 'Dolore nihil est et', 'Some label wachaws', 'http://127.0.0.1:8000/storage/photos/5/slider.jpg', 'Anim fugiat omnis do', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium molestiae enim similique deleniti harum repellat expedita blanditiis inventore, sit delectus nemo libero magnam nulla repudiandae, iure ut consequuntur, alias consectetur?', 5, 1, '2023-01-23 21:37:36', '2023-01-25 07:27:42');

-- --------------------------------------------------------

--
-- Table structure for table `wq_subcategories`
--

DROP TABLE IF EXISTS `wq_subcategories`;
CREATE TABLE IF NOT EXISTS `wq_subcategories` (
  `subcategory_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `subcategory_name` varchar(255) NOT NULL,
  `subcategory_slug` varchar(255) NOT NULL,
  `subcategory_order` int(11) DEFAULT NULL,
  `subcategory_image` varchar(255) DEFAULT NULL,
  `_status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`subcategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_subcategories`
--

INSERT INTO `wq_subcategories` (`subcategory_id`, `category_id`, `subcategory_name`, `subcategory_slug`, `subcategory_order`, `subcategory_image`, `_status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Bus Sub Category', 'bus-sub-category', 2, 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/products/subcategories/wheel-excavator.jpg', 1, '2022-03-27 07:30:10', '2022-04-02 04:40:32'),
(2, 6, 'Mehran', 'mehran', 2, 'http://127.0.0.1:8000/storage/photos/5/Untitled-1.png', 1, '2023-01-23 21:23:49', '2023-01-23 21:23:49');

-- --------------------------------------------------------

--
-- Table structure for table `wq_theme`
--

DROP TABLE IF EXISTS `wq_theme`;
CREATE TABLE IF NOT EXISTS `wq_theme` (
  `theme_id` int(11) NOT NULL,
  `theme_title` varchar(255) DEFAULT NULL,
  `theme_logo` varchar(255) DEFAULT NULL,
  `theme_weoffer_title` varchar(255) DEFAULT NULL,
  `theme_weoffer_content` text,
  `theme_weoffer_image` text,
  `theme_weoffer_link` text,
  `theme_about` text,
  `theme_instagram` text,
  `theme_facebook` text,
  `theme_twitter` text,
  `theme_linkdin` text,
  `theme_email` varchar(255) DEFAULT NULL,
  `theme_copyright` varchar(255) DEFAULT NULL,
  `theme_phone` varchar(255) DEFAULT NULL,
  `theme_address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`theme_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_theme`
--

INSERT INTO `wq_theme` (`theme_id`, `theme_title`, `theme_logo`, `theme_weoffer_title`, `theme_weoffer_content`, `theme_weoffer_image`, `theme_weoffer_link`, `theme_about`, `theme_instagram`, `theme_facebook`, `theme_twitter`, `theme_linkdin`, `theme_email`, `theme_copyright`, `theme_phone`, `theme_address`, `created_at`, `updated_at`) VALUES
(1, 'Khalid & Khalid Holdings', 'http://127.0.0.1:8000/storage/photos/5/Group 1702@2x.png', 'About Us', '<p>Khalid and Khalid Group of Companies launches its pioneer venture into the assembly of automobile, under the umbrella of its nascent division, <strong>Khalid and Khalid Holdings</strong>; a fully operational and specialized Assembly Plant of Trucks,Trailers and Buses. We have partnered with world-renowned Chinese brands&nbsp;Shacman, CIMC, LGMG and Sunlong for the introduction of Machinery and Heavy Equipment into the growing Pakistani market.</p>', 'https://panel.khalidandkhalidholdings.com.pk/storage/photos/5/theme/DSC_0352-min.JPG', '/aboutus', 'Khalid and Khalid Holdings', 'https://www.instagram.com/khalidandkhalid', 'https://www.facebook.com/khalidandkhalidholdings', 'https://twitter.com/khalidandkhalidholdings', 'https://www.linkedin.com/khalidandkhalidholdings', 'info@khalidandkhalidholdings.com', '© All rights Reserve Khalid & Khalid Companies', '051 4917200-5', 'Islamabad Pakistan', '2022-01-23 14:58:38', '2023-02-09 05:42:06');

-- --------------------------------------------------------

--
-- Table structure for table `wq_themecontent`
--

DROP TABLE IF EXISTS `wq_themecontent`;
CREATE TABLE IF NOT EXISTS `wq_themecontent` (
  `themecontent_id` int(11) NOT NULL AUTO_INCREMENT,
  `themecontent_vision` text,
  `themecontent_mission` text,
  `themecontent_achivement` text,
  `themecontent_products` text,
  `themecontent_services` text,
  `themecontent_career` text,
  `themecontent_contact` text,
  `themecontent_about` text,
  `themecontent_about_image` text,
  `themecontent_groupof_companies` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`themecontent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_themecontent`
--

INSERT INTO `wq_themecontent` (`themecontent_id`, `themecontent_vision`, `themecontent_mission`, `themecontent_achivement`, `themecontent_products`, `themecontent_services`, `themecontent_career`, `themecontent_contact`, `themecontent_about`, `themecontent_about_image`, `themecontent_groupof_companies`, `created_at`, `updated_at`) VALUES
(1, 'Khalid & Khalid Holdings strives to become the largest part of ancillary sector of Trucks, Trailers and Buses. It is our vision to relentlessly pursue new opportunities of development and technology that create room for economic development in the field of industrial equipment and reduce environmental foot prints. As  CPEC is in progress this effort will increase opportunities in the future, further enhancing economical and efficient transportation for everyone.', 'Khalid & Khalid Holdings has set itself the mission to provide sustainable premium mobility and real value for customers & society with the most updated technology. Based on our Core values we work to drive local industry solutions by providing reduced cost of production and increased employment to boost economic growth. Since the inception of Khalid & Khalid Holdings, our highly qualified, trained and dedicated team members ensure to follow the visual inspection, quality control and test everything meticulously for endurance, performance and attributes in line with the international standards set by the manufacturers.', 'For Edition go to Theme Content - Check by Waqas', 'Unfortunately, as I do not have any information about your company and what products and services you provide, I am unable to give specific details. However, generally speaking, a product can be a tangible item or a digital offering that a company creates or acquires in order to sell to customers. A service, on the other hand, is an intangible offering, such as consulting, training, or technical support, that a company provides to customers. Some companies may offer a combination of products and services, while others may specialize in one or the other.', 'Unfortunately, as I do not have any information about your company and what products and services you provide, I am unable to give specific details. However, generally speaking, a product can be a tangible item or a digital offering that a company creates or acquires in order to sell to customers. A service, on the other hand, is an intangible offering, such as consulting, training, or technical support, that a company provides to customers. Some companies may offer a combination of products and services, while others may specialize in one or the other.', 'Unfortunately, as I do not have any information about your company and what products and services you provide, I am unable to give specific details. However, generally speaking, a product can be a tangible item or a digital offering that a company creates or acquires in order to sell to customers. A service, on the other hand, is an intangible offering, such as consulting, training, or technical support, that a company provides to customers. Some companies may offer a combination of products and services, while others may specialize in one or the other.', 'For Edition go to Theme Content - Check by Waqas', 'Khalid & Khalid Group of Companies has established an eminent reputation with a well-balanced unique business profile for the past two decade. The Group is a diversified conglomerate, head quartered in Rawalpindi, Pakistan. We stand tall in the corporate world encompassing several business units that operate in Industrial Equipment, Ceramic Tile manufacturing, Automobiles, Trucks , Buses , Heavy Equipment and Construction. We aim to stay at the cutting edge of technological development and services that further distinguish us from others .\r\nBeyond business we commit significant amount of resources to several philanthropic initiatives under the Islah Trust.\r\nOur Group deeply invests in Employees well-being, work place excellence and environmental consciousness.', 'http://127.0.0.1:8000/storage/photos/5/mach.png', 'information about group of companies', '2022-02-14 10:55:42', '2023-01-26 05:58:52');

-- --------------------------------------------------------

--
-- Table structure for table `wq_theme_videosection`
--

DROP TABLE IF EXISTS `wq_theme_videosection`;
CREATE TABLE IF NOT EXISTS `wq_theme_videosection` (
  `videosection_id` int(11) NOT NULL,
  `first_title` varchar(255) DEFAULT NULL,
  `second_title` varchar(255) DEFAULT NULL,
  `videosection_content` text,
  `video_url` text,
  `video_cover` text,
  `firstsection_title` varchar(255) DEFAULT NULL,
  `firstsection_details` text,
  `secondsection_title` varchar(255) DEFAULT NULL,
  `secondsection_details` text,
  `thirdsection_title` varchar(255) DEFAULT NULL,
  `thirdsection_details` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`videosection_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wq_theme_videosection`
--

INSERT INTO `wq_theme_videosection` (`videosection_id`, `first_title`, `second_title`, `videosection_content`, `video_url`, `video_cover`, `firstsection_title`, `firstsection_details`, `secondsection_title`, `secondsection_details`, `thirdsection_title`, `thirdsection_details`, `created_at`, `updated_at`) VALUES
(1, 'A Progressive Group, Having Vision With', 'High Professionalism & Customers Trust', '<p>The assembly line is&nbsp;located in Daudkheli, Miawali District, adjacent to the hub of CPEC&nbsp;covering an area of 380,000 sq ft. This collabration between Khalid &amp;&nbsp;Khalid Holdings and the world&#39;s largest manufacturing is contributing direct capital investment and technology transfer resulting in boosting the economy.</p>', 'https://www.youtube.com/embed/PNXLXCV9nXA', 'http://127.0.0.1:8000/storage/photos/5/ved.png', 'Experience', 'Proven record of two decades of thousands of\r\n\r\nsatisfied customers', 'Facilities', 'The Assembly Line is equipped with state of the art ELECTRODISPOSITION process', 'Work Force', 'Our success is driven by our team of resolute professionals, competent engineers and proficient work force, who are committed to meeting the futuristic market trends and getting results to achieve the targets', '2022-02-04 07:17:57', '2023-01-26 02:05:18');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_profile`
--
ALTER TABLE `admin_profile`
  ADD CONSTRAINT `admin_profile_ibfk_1` FOREIGN KEY (`aduser_id`) REFERENCES `admin_users` (`aduser_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
