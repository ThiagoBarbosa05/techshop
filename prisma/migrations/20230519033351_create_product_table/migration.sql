-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,
    "img_url" TEXT,
    "price" REAL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
