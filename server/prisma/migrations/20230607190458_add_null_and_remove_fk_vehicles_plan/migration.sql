/*
  Warnings:

  - You are about to drop the column `planId` on the `vehicle` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_planId_fkey";

-- DropForeignKey
ALTER TABLE "vehicle" DROP CONSTRAINT "vehicle_planId_fkey";

-- AlterTable
ALTER TABLE "client" ALTER COLUMN "planId" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "birthDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "paymentDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "plan" ALTER COLUMN "finalDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "reservation" ALTER COLUMN "endTime" DROP NOT NULL;

-- AlterTable
ALTER TABLE "vehicle" DROP COLUMN "planId";

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
