/*
  Warnings:

  - You are about to alter the column `title` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - Changed the type of `image_src` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `passwordHash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "title" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "date_added" SET DATA TYPE TIMESTAMPTZ,
DROP COLUMN "image_src",
ADD COLUMN     "image_src" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ADD COLUMN     "passwordHash" VARCHAR(64) NOT NULL;
