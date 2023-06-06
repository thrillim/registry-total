/*
  Warnings:

  - You are about to alter the column `RegistCenterId` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `RegistCenter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `centerId` on the `RegistCenter` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `RegistCenterId` on the `RegistStatus` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_RegistCenterId_fkey`;

-- DropForeignKey
ALTER TABLE `RegistStatus` DROP FOREIGN KEY `RegistStatus_RegistCenterId_fkey`;

-- AlterTable
ALTER TABLE `Account` MODIFY `RegistCenterId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `RegistCenter` DROP PRIMARY KEY,
    MODIFY `centerId` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `centerHotline` VARCHAR(191) NULL,
    MODIFY `centerAddress` VARCHAR(191) NULL,
    MODIFY `centerManager` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`centerId`);

-- AlterTable
ALTER TABLE `RegistStatus` MODIFY `RegistCenterId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ValidPeriod` MODIFY `periodLawEffectiveDate` DATE NOT NULL;

-- AddForeignKey
ALTER TABLE `RegistStatus` ADD CONSTRAINT `RegistStatus_RegistCenterId_fkey` FOREIGN KEY (`RegistCenterId`) REFERENCES `RegistCenter`(`centerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_RegistCenterId_fkey` FOREIGN KEY (`RegistCenterId`) REFERENCES `RegistCenter`(`centerId`) ON DELETE RESTRICT ON UPDATE CASCADE;
