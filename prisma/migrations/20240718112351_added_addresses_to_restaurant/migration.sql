/*
  Warnings:

  - You are about to drop the column `state` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `country` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "state",
ADD COLUMN     "address2" TEXT,
ADD COLUMN     "address3" TEXT,
ADD COLUMN     "country" VARCHAR(2) NOT NULL;
