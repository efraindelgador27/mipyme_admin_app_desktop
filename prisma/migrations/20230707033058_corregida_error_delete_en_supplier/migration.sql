-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemToSupplier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cost" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    CONSTRAINT "ItemToSupplier_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemToSupplier_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ItemToSupplier" ("cost", "id", "item_id", "supplier_id") SELECT "cost", "id", "item_id", "supplier_id" FROM "ItemToSupplier";
DROP TABLE "ItemToSupplier";
ALTER TABLE "new_ItemToSupplier" RENAME TO "ItemToSupplier";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
