/*
  Warnings:

  - You are about to drop the column `parkingLotId` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the `parkingLogs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `parkingLot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `licensePlate` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "parkingLogs" DROP CONSTRAINT "parkingLogs_parkingLotId_fkey";

-- DropForeignKey
ALTER TABLE "parkingLogs" DROP CONSTRAINT "parkingLogs_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_parkingLotId_fkey";

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "parkingLotId",
ADD COLUMN     "licensePlate" TEXT NOT NULL;

-- DropTable
DROP TABLE "parkingLogs";

-- DropTable
DROP TABLE "parkingLot";
