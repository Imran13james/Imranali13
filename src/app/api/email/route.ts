// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_KEY);

// export async function POST(req: Request) {
//     const { name, email, message } = await req.json();
//     await resend.sendEmail({
//         from: 'Acme <imraan.dev@proton.me>',
//         to: 'imraan.dev@proton.me',
//         subject: 'hello world',
//         text: JSON.stringify({ name, email, message }),
//     });

//     return NextResponse.json({
//         status: 'ok',
//     });
// }
