/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `registerCenterId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedByAccount` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `licensePlate` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `registerCenterId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Car` table. All the data in the column will be lost.
  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the `RegisterCenter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegisterStatus` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[accUsername]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bienSo]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RegistCenterId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accPassword` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accRole` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accUsername` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bienSo` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caiTao` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `camera` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chieuDaiCoSo` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `congThucBanhXe` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dayMaSoQuanLy` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `khoiLuongBanThan` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `khongCapTemKiemDinh` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kichThuocBao` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kinhDoanh` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loai` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namSx` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nhanHieu` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nuocSx` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soKhung` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soLoai` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soMay` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soQuanLy` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thietBiGiamSatHanhTrinh` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vetBanhXe` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerAddress` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerEmail` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerPhone` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerType` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_registerCenterId_fkey`;

-- DropForeignKey
ALTER TABLE `Car` DROP FOREIGN KEY `Car_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `Car` DROP FOREIGN KEY `Car_registerCenterId_fkey`;

-- DropForeignKey
ALTER TABLE `RegisterStatus` DROP FOREIGN KEY `RegisterStatus_carId_fkey`;

-- DropForeignKey
ALTER TABLE `RegisterStatus` DROP FOREIGN KEY `RegisterStatus_registerCenterId_fkey`;

-- DropIndex
DROP INDEX `Account_username_key` ON `Account`;

-- DropIndex
DROP INDEX `Car_licensePlate_key` ON `Car`;

-- AlterTable
ALTER TABLE `Account` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `password`,
    DROP COLUMN `registerCenterId`,
    DROP COLUMN `role`,
    DROP COLUMN `status`,
    DROP COLUMN `username`,
    DROP COLUMN `verifiedAt`,
    DROP COLUMN `verifiedByAccount`,
    ADD COLUMN `RegistCenterId` VARCHAR(191) NOT NULL,
    ADD COLUMN `accId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `accPassword` VARCHAR(191) NOT NULL,
    ADD COLUMN `accRole` VARCHAR(191) NOT NULL,
    ADD COLUMN `accStatus` VARCHAR(191) NOT NULL DEFAULT 'unverified',
    ADD COLUMN `accUsername` VARCHAR(191) NOT NULL,
    ADD COLUMN `accVerifiedAt` DATETIME(3) NULL,
    ADD COLUMN `accVerifiedByAccount` INTEGER NULL,
    ADD PRIMARY KEY (`accId`);

-- AlterTable
ALTER TABLE `Car` DROP PRIMARY KEY,
    DROP COLUMN `brand`,
    DROP COLUMN `color`,
    DROP COLUMN `id`,
    DROP COLUMN `licensePlate`,
    DROP COLUMN `model`,
    DROP COLUMN `registerCenterId`,
    DROP COLUMN `year`,
    ADD COLUMN `bienSo` VARCHAR(191) NOT NULL,
    ADD COLUMN `caiTao` BOOLEAN NOT NULL,
    ADD COLUMN `camera` BOOLEAN NOT NULL,
    ADD COLUMN `carId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `chieuDaiCoSo` INTEGER NOT NULL,
    ADD COLUMN `congSuatLonNhat` INTEGER NULL,
    ADD COLUMN `congThucBanhXe` VARCHAR(191) NOT NULL,
    ADD COLUMN `dayMaSoQuanLy` VARCHAR(191) NOT NULL,
    ADD COLUMN `ghiChu` VARCHAR(191) NULL,
    ADD COLUMN `khoiLuongBanThan` INTEGER NOT NULL,
    ADD COLUMN `khoiLuongHangCc` INTEGER NULL,
    ADD COLUMN `khoiLuongKeoTheo` VARCHAR(191) NULL,
    ADD COLUMN `khoiLuongToanBo` VARCHAR(191) NULL,
    ADD COLUMN `khongCapTemKiemDinh` BOOLEAN NOT NULL,
    ADD COLUMN `kichThuocBao` VARCHAR(191) NOT NULL,
    ADD COLUMN `kinhDoanh` BOOLEAN NOT NULL,
    ADD COLUMN `ktKhoangHanhLyLonNhat` INTEGER NULL,
    ADD COLUMN `loai` VARCHAR(191) NOT NULL,
    ADD COLUMN `lopTruc` VARCHAR(191) NULL,
    ADD COLUMN `namSx` INTEGER NOT NULL,
    ADD COLUMN `nhanHieu` VARCHAR(191) NOT NULL,
    ADD COLUMN `nhienLieu` VARCHAR(191) NULL,
    ADD COLUMN `nienHanSd` INTEGER NULL,
    ADD COLUMN `nuocSx` VARCHAR(191) NOT NULL,
    ADD COLUMN `seri` VARCHAR(191) NULL,
    ADD COLUMN `soKhung` VARCHAR(191) NOT NULL,
    ADD COLUMN `soLoai` VARCHAR(191) NOT NULL,
    ADD COLUMN `soMay` VARCHAR(191) NOT NULL,
    ADD COLUMN `soNguoi` VARCHAR(191) NULL,
    ADD COLUMN `soQuanLy` VARCHAR(191) NOT NULL,
    ADD COLUMN `theTichLamViecCuaDongCo` INTEGER NULL,
    ADD COLUMN `thietBiGiamSatHanhTrinh` BOOLEAN NOT NULL,
    ADD COLUMN `tocDoQuay` INTEGER NULL,
    ADD COLUMN `vetBanhXe` VARCHAR(191) NOT NULL,
    MODIFY `ownerId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`carId`);

-- AlterTable
ALTER TABLE `Owner` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `ownerAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerType` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ownerId`);

-- DropTable
DROP TABLE `RegisterCenter`;

-- DropTable
DROP TABLE `RegisterStatus`;

-- CreateTable
CREATE TABLE `RegistCenter` (
    `centerId` VARCHAR(191) NOT NULL,
    `centerName` VARCHAR(191) NOT NULL,
    `centerHotline` VARCHAR(191) NOT NULL,
    `centerAddress` VARCHAR(191) NOT NULL,
    `centerEmail` VARCHAR(191) NOT NULL,
    `centerManager` VARCHAR(191) NOT NULL,
    `centerCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`centerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegistStatus` (
    `statusId` INTEGER NOT NULL AUTO_INCREMENT,
    `RegistCenterId` VARCHAR(191) NOT NULL,
    `carId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `statusCreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statusUpdatedAt` DATETIME(3) NOT NULL,
    `statusNote` VARCHAR(191) NULL,
    `statusValidUntil` DATETIME(3) NULL,

    PRIMARY KEY (`statusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ValidPeriod` (
    `periodId` INTEGER NOT NULL AUTO_INCREMENT,
    `periodNameCode` VARCHAR(191) NOT NULL,
    `periodName` VARCHAR(191) NULL,
    `periodLawEffectiveDate` DATETIME(3) NOT NULL,
    `firstPeriod` INTEGER NOT NULL,
    `fromSecondPeriod` INTEGER NOT NULL,

    PRIMARY KEY (`periodId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Account_accUsername_key` ON `Account`(`accUsername`);

-- CreateIndex
CREATE UNIQUE INDEX `Car_bienSo_key` ON `Car`(`bienSo`);

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Owner`(`ownerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistStatus` ADD CONSTRAINT `RegistStatus_RegistCenterId_fkey` FOREIGN KEY (`RegistCenterId`) REFERENCES `RegistCenter`(`centerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistStatus` ADD CONSTRAINT `RegistStatus_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`carId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_RegistCenterId_fkey` FOREIGN KEY (`RegistCenterId`) REFERENCES `RegistCenter`(`centerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
