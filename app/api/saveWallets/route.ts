import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import {
  ENDPOINT as _ENDPOINT} from '@raydium-io/raydium-sdk';





export async function POST(request: Request) {
  const { userId } = await auth();

   
  if (!userId) {
    return NextResponse.json({ status: false, message: "No Logged In User" })
  }

  try {

    const body = await request.json();
   const  {
      baseTokenMint,
      privateWallets,
      generatedWallets 
    } = body;
    const prisma = new PrismaClient();


    const tokenMetaOld = await prisma.tokenMetadata.findFirst({ where: { tokenAddress: baseTokenMint, userId: userId } })

    if(tokenMetaOld){ 

      const pwallets =[];
      const gwallets =[];


      for(var i=0;i<privateWallets.length;i++){
        pwallets.push({
          tokenAddress: baseTokenMint,
          privateKey : privateWallets[i].privateKey,
          address: privateWallets[i].address,
          snipeAmount: ''+privateWallets[i].snipeAmount, 
          userId:userId
        })
      }

      await prisma.privateWallet.deleteMany({where :{tokenAddress: baseTokenMint, userId: userId }})
       

      await prisma.privateWallet.createMany({data :pwallets})

      for(var i=0;i<generatedWallets.length;i++){
        gwallets.push({
          tokenAddress: baseTokenMint,
          privateKey : generatedWallets[i].privateKey,
          address: generatedWallets[i].address,
          snipeAmount: ''+generatedWallets[i].snipeAmount, 
          userId:userId
        })
      }


      await prisma.generatedWallet.deleteMany({where :{tokenAddress: baseTokenMint, userId: userId }}) 
      await prisma.generatedWallet.createMany({data :gwallets})

    }else {
      throw Error('Unable to Execute Transaction, Failed or TimeOut Occured')
    } 
    
  } catch (error) {
    console.error('Failed to save settings:', error);
    //throw new Error('Failed to fetch settings'); 

    return NextResponse.json({ status: false, message: new String(error) })

  }
  return NextResponse.json({
    status: true,
    message: `PoolInfo   Created`
  })

}