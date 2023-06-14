/*
  Warnings:

  - You are about to drop the column `dayMaSoQuanLy` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `centerProvince` to the `RegistCenter` table without a default value. This is not possible if the table is not empty.
  - Made the column `statusValidUntil` on table `RegistStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userId_fkey`;

-- AlterTable
ALTER TABLE `Account` MODIFY `accStatus` VARCHAR(191) NOT NULL DEFAULT 'Invalidate';

-- AlterTable
ALTER TABLE `Car` DROP COLUMN `dayMaSoQuanLy`;

-- AlterTable
ALTER TABLE `RegistCenter` ADD COLUMN `centerProvince` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `RegistStatus` MODIFY `statusUpdatedAt` DATETIME(3) NULL,
    MODIFY `statusValidUntil` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;
