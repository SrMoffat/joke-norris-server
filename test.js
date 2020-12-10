const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient;

async function main() {
    const user = await prisma.user.findMany()
    console.log(user)
  }

main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })



