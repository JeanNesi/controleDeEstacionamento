/*
  Warnings:

  - You are about to drop the `parkingLott` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reservation" DROP CONSTRAINT "reservation_parkingId_fkey";

-- DropTable
DROP TABLE "parkingLott";

-- CreateTable
CREATE TABLE "parkingLot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amountPerHour" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "parkingLot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parkingLot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
