-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OPERATIONAL', 'MANAGER');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "username" VARCHAR(256) NOT NULL,
    "password" VARCHAR(256) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OPERATIONAL',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loader" (
    "id" UUID NOT NULL,
    "productivity" REAL DEFAULT 0,
    "assign" VARCHAR(256) DEFAULT '-',
    "workingHours" INTEGER DEFAULT 0,
    "operator" VARCHAR(256) DEFAULT '-',
    "isReady" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Loader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hauler" (
    "id" UUID NOT NULL,
    "assign" VARCHAR(256) DEFAULT '-',
    "distance" INTEGER DEFAULT 0,
    "operator" VARCHAR(256) DEFAULT '-',
    "isReady" BOOLEAN NOT NULL DEFAULT true,
    "idFleet" VARCHAR(256),

    CONSTRAINT "Hauler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prodty" (
    "id" UUID NOT NULL,
    "prodty" REAL,
    "fleetId" VARCHAR(256),

    CONSTRAINT "Prodty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fleet" (
    "id" UUID NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "prodtyLoader" REAL,
    "rate" REAL,

    CONSTRAINT "Fleet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" UUID NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FleetProblems" (
    "fleetId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "longTime" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FleetProblems_pkey" PRIMARY KEY ("fleetId","problemId")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "id" UUID NOT NULL,
    "jumlahFront" INTEGER NOT NULL,
    "targetProfit" REAL NOT NULL,
    "oocLoader" REAL NOT NULL,
    "oocHauler" REAL NOT NULL,
    "rate" REAL NOT NULL,
    "ohda" REAL NOT NULL,
    "fuelPrice" REAL NOT NULL,
    "batasEmissi" REAL NOT NULL,
    "targetProduksi" REAL NOT NULL,
    "rfuLoader" REAL NOT NULL,
    "rfuHauler" REAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Hauler" ADD CONSTRAINT "Hauler_idFleet_fkey" FOREIGN KEY ("idFleet") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prodty" ADD CONSTRAINT "Prodty_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FleetProblems" ADD CONSTRAINT "FleetProblems_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FleetProblems" ADD CONSTRAINT "FleetProblems_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
