-- CreateTable
CREATE TABLE "Allergenics" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Allergenics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AllergenicsToMenu" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Allergenics_name_key" ON "Allergenics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AllergenicsToMenu_AB_unique" ON "_AllergenicsToMenu"("A", "B");

-- CreateIndex
CREATE INDEX "_AllergenicsToMenu_B_index" ON "_AllergenicsToMenu"("B");

-- AddForeignKey
ALTER TABLE "_AllergenicsToMenu" ADD CONSTRAINT "_AllergenicsToMenu_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergenics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AllergenicsToMenu" ADD CONSTRAINT "_AllergenicsToMenu_B_fkey" FOREIGN KEY ("B") REFERENCES "Menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;
