/*
  Warnings:

  - You are about to drop the column `accVerifiedByAccount` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Account` DROP COLUMN `accVerifiedByAccount`,
    MODIFY `accStatus` VARCHAR(191) NOT NULL DEFAULT 'Unverified';
