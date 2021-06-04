-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: car_rental
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `brand_id` int NOT NULL,
  `type_id` int NOT NULL,
  `image` blob NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `partner_id` int NOT NULL,
  `station_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `car_ibfk_1` (`brand_id`),
  KEY `car_ibfk_4` (`partner_id`),
  KEY `car_ibfk_5` (`station_id`),
  KEY `car_ibfk_2` (`type_id`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `car_brand` (`id`),
  CONSTRAINT `car_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `car_type` (`id`),
  CONSTRAINT `car_ibfk_4` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`id`),
  CONSTRAINT `car_ibfk_5` FOREIGN KEY (`station_id`) REFERENCES `rental_station` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'Golf 7',1,1,'',225.00,1,1);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_brand`
--

DROP TABLE IF EXISTS `car_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_brand`
--

LOCK TABLES `car_brand` WRITE;
/*!40000 ALTER TABLE `car_brand` DISABLE KEYS */;
INSERT INTO `car_brand` VALUES (1,'Volkswagen'),(2,'Opel'),(3,'Mercedes-Benz'),(4,'Ford'),(5,'Audi'),(6,'BMW'),(7,'Skoda'),(8,'Renault'),(9,'Toyota'),(10,'Hyundai');
/*!40000 ALTER TABLE `car_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_class`
--

DROP TABLE IF EXISTS `car_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_class`
--

LOCK TABLES `car_class` WRITE;
/*!40000 ALTER TABLE `car_class` DISABLE KEYS */;
INSERT INTO `car_class` VALUES (1,'Kleinwagen'),(2,'Kompaktklasse'),(3,'Mittelklasse'),(4,'Oberklasse'),(5,'Van'),(6,'SUV'),(7,'Sportwagen');
/*!40000 ALTER TABLE `car_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_type`
--

DROP TABLE IF EXISTS `car_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class_id` int NOT NULL,
  `doors` enum('2','4') NOT NULL,
  `seats` enum('2-3','4-5','6-7','8-9') NOT NULL,
  `navigation` tinyint(1) DEFAULT '0',
  `air_conditioner` tinyint(1) DEFAULT '0',
  `automatic` tinyint(1) DEFAULT '0',
  `winter_tires` tinyint(1) DEFAULT '0',
  `insurance` tinyint(1) DEFAULT '0',
  `free_kilometers` enum('750','1500') DEFAULT NULL,
  `protection` tinyint(1) DEFAULT '0',
  `two_drivers` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `car_type_ibfk_1` (`class_id`),
  CONSTRAINT `car_type_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `car_class` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_type`
--

LOCK TABLES `car_type` WRITE;
/*!40000 ALTER TABLE `car_type` DISABLE KEYS */;
INSERT INTO `car_type` VALUES (1,2,'4','4-5',0,0,0,0,0,NULL,0,0);
/*!40000 ALTER TABLE `car_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charge`
--

DROP TABLE IF EXISTS `charge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `charge` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charge`
--

LOCK TABLES `charge` WRITE;
/*!40000 ALTER TABLE `charge` DISABLE KEYS */;
INSERT INTO `charge` VALUES (1,'Wochentarif',180.00);
/*!40000 ALTER TABLE `charge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
INSERT INTO `partner` VALUES (1,'Ezra Champken','+33 820 905 5579','echampken0@whitehouse.gov','kqoZTJ9vGDc'),(2,'Verina Usborn','+86 642 712 5746','vusborn1@reference.com','XxUElfyW'),(3,'Jessie Billson','+1 404 556 0631','jbillson2@yolasite.com','xZHUEcfcN'),(4,'Shay Birkwood','+58 989 902 2075','sbirkwood3@scribd.com','Xq3cxY2o'),(5,'Janka O\' Bee','+86 727 205 1352','jo4@unicef.org','ji8FCUKA0mw'),(6,'Gerty MacGinley','+51 797 368 8540','gmacginley5@bloomberg.com','eAe8gNLdr8OB'),(7,'Noella Standell','+7 676 356 3708','nstandell6@illinois.edu','wVpHQcS3'),(8,'Dreddy Bearn','+62 342 162 0376','dbearn7@nyu.edu','j2If0bmoD'),(9,'Kip Mackett','+54 512 880 3527','kmackett8@ask.com','HHJ8MfsT'),(10,'Clayson Novak','+55 749 752 9518','cnovak9@parallels.com','KFN1Oy'),(11,'Bobbye Glazebrook','+353 646 100 5883','bglazebrooka@dell.com','mGDH82u3lhUZ'),(12,'Tiffany Metcalfe','+46 523 202 6372','tmetcalfeb@taobao.com','Hs5z4C8Ovq'),(13,'Juliet Elmar','+86 649 736 5832','jelmarc@liveinternet.ru','bY5HyjrUWiM'),(14,'Harwilll Horry','+351 285 350 3882','hhorryd@delicious.com','WxEqCSNH'),(15,'Kevina Panas','+62 626 204 2367','kpanase@people.com.cn','zYRcWeEZ2NT'),(16,'Jelene Pepye','+62 513 143 0018','jpepyef@blogspot.com','bb4xuY'),(17,'Mitchell Yanele','+86 770 316 1755','myaneleg@china.com.cn','dsHoG1'),(18,'Lionello Mangenot','+66 384 655 2734','lmangenoth@sourceforge.net','OKtW2Sb72'),(19,'Mathilde Siddall','+7 758 829 2277','msiddalli@alexa.com','ESSswp'),(20,'Royall Antonchik','+595 335 150 5522','rantonchikj@pbs.org','S15WPppz9');
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental`
--

DROP TABLE IF EXISTS `rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rental_ibfk_1` (`car_id`),
  KEY `rental_ibfk_2` (`customer_id`),
  CONSTRAINT `rental_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`),
  CONSTRAINT `rental_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental`
--

LOCK TABLES `rental` WRITE;
/*!40000 ALTER TABLE `rental` DISABLE KEYS */;
/*!40000 ALTER TABLE `rental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_station`
--

DROP TABLE IF EXISTS `rental_station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_station` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_station`
--

LOCK TABLES `rental_station` WRITE;
/*!40000 ALTER TABLE `rental_station` DISABLE KEYS */;
INSERT INTO `rental_station` VALUES (1,'Berlin'),(2,'Münster'),(3,'Hamburg'),(4,'München'),(5,'Köln'),(6,'Frankfurt am Main'),(7,'Stuttgart'),(8,'Düsseldorf'),(9,'Leipzig'),(10,'Dortmund'),(11,'Essen'),(12,'Bremen'),(13,'Dresden'),(14,'Hannover'),(15,'Nürnberg'),(16,'Duisburg'),(17,'Bochum'),(18,'Wuppertal'),(19,'Bielefeld'),(20,'Bonn');
/*!40000 ALTER TABLE `rental_station` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-03 22:05:43
