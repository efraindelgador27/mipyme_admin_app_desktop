-- CreateTable
CREATE TABLE "Maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "min_level" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "cost" INTEGER,
    "ingredient" TEXT NOT NULL,
    "marker_id" INTEGER NOT NULL,
    CONSTRAINT "Item_marker_id_fkey" FOREIGN KEY ("marker_id") REFERENCES "Maker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Rotation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quentity" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT NOT NULL DEFAULT 'egreso',
    "reason" TEXT NOT NULL DEFAULT 'venta',
    "detail" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "stock_id" INTEGER NOT NULL,
    "orders_id" INTEGER NOT NULL,
    CONSTRAINT "Rotation_orders_id_fkey" FOREIGN KEY ("orders_id") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rotation_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "Stock" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rotation_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ItemToSupplier" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ItemToSupplier_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemToSupplier_B_fkey" FOREIGN KEY ("B") REFERENCES "Supplier" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_type_key" ON "Item"("type");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToSupplier_AB_unique" ON "_ItemToSupplier"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToSupplier_B_index" ON "_ItemToSupplier"("B");
