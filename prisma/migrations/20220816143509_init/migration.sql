/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Playlist` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `duration` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "updateAt",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "updateAt",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updateAt",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
