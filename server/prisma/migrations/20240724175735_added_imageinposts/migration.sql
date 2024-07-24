/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "isPublished",
ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
