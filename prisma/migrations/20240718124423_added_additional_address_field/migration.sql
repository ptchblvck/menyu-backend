-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "dateAvailable" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "address4" TEXT;
