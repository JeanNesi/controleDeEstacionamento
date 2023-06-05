/*
  Warnings:

  - Added the required column `parkingId` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservations" ADD COLUMN     "parkingId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "parkigLot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parkigLot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "parkigLot_id_key" ON "parkigLot"("id");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parkigLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
