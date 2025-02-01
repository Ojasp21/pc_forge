// const mongoose = require('mongoose');
// const Part = require('./models/Part'); 

import mongoose from "mongoose";
import Part from "./models/Part.js";
import Accessories from "./models/Accessories.js";

mongoose.connect('mongodb+srv://akashkawle2995:mongodb2995@cluster0.85no6.mongodb.net/pcforge?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
const seedParts = async () => {
  try {
    
    // await Part.deleteMany({ category: "Keyboard"});
    // console.log("Existing parts removed.");

    const parts =[
        {
            "title": "Logitech G435 Light Speed and Lightweight Gaming Bluetooth Wireless Over Ear Headphones with Mic, 18H Battery, Compatible for Dolby Atmos, Pc, Ps4, Ps5, Mobile - (Black)",
            "price": "5,495",
            "rating": "3.9 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MzM1NDM5OTIyNzc4NzE2OjE3MzgzNDAwMjg6c3BfYXRmOjMwMDQ1Nzg3OTc2NDYzMjo6MDo6&url=%2FLogitech-G435-Lightspeed-Bluetooth-Wireless%2Fdp%2FB09GFYV9YJ%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.emjpkmLAXJb47aExK_UN7-sX9T9ArnPsq4nvrttjtss4DkQtCXRpdmPBrkWqrBwTU3J8hPfSjUeq5adb4KIfim2ttxW5nHTBWYL6IGhpSCOa8k1rgIW-od0E24Sgk6BgSpk1m_ikcUn6Ll7UC5j1ugjhPkD4RkQeY7fWX6U6lzFrWMdxVH4_WnGeqJoKgcJUaJGuluXGyHC2U6-ZMgZe2HcfGKgN26wJPeH7Tkg8Onc.IsvpEG98i4vAm6TStBQ6LFWoOzv09pr6UUUT4jc8QsE%26dib_tag%3Dse%26keywords%3Dlogitech%2Bheadphones%26nsdOptOutParam%3Dtrue%26qid%3D1738340028%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/81bQEkMevBL._AC_UY218_.jpg",
            "category": "Headphones"
        },
        {
            "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Over Ear Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - Black",
            "price": "14,995",
            "rating": "4.3 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MzM1NDM5OTIyNzc4NzE2OjE3MzgzNDAwMjg6c3BfYXRmOjIwMDc5MDIzMjk2MjA0OjowOjo&url=%2FLogitech-Lightspeed-Suspension-LIGHTSYNC-Technology%2Fdp%2FB08HNCG8WQ%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.emjpkmLAXJb47aExK_UN7-sX9T9ArnPsq4nvrttjtss4DkQtCXRpdmPBrkWqrBwTU3J8hPfSjUeq5adb4KIfim2ttxW5nHTBWYL6IGhpSCOa8k1rgIW-od0E24Sgk6BgSpk1m_ikcUn6Ll7UC5j1ugjhPkD4RkQeY7fWX6U6lzFrWMdxVH4_WnGeqJoKgcJUaJGuluXGyHC2U6-ZMgZe2HcfGKgN26wJPeH7Tkg8Onc.IsvpEG98i4vAm6TStBQ6LFWoOzv09pr6UUUT4jc8QsE%26dib_tag%3Dse%26keywords%3Dlogitech%2Bheadphones%26nsdOptOutParam%3Dtrue%26qid%3D1738340028%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/71xNjrzG69L._AC_UY218_.jpg",
            "category": "Headphones"
        },
        
            {
                "title": "HyperX Cloud Stinger 2 Core Gaming Headset PS, 3.5mm Wired Connection, 40mm Sound Drivers, Lightweight, Over-Ear, Swivel-to-Mute mic, PlayStation-Licensed, Soft Foam Ear Cushion, White, 275g, 6H9B5AA",
                "price": "3,690",
                "rating": "4.0 out of 5 stars",
                "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MTczNzM4NDA3MzQ2Mjc6MTczODMzOTkzMzpzcF9hdGY6MzAwMjU5NjI5MTUwNDMyOjowOjo&url=%2FHyperX-Connection-Lightweight-PlayStation-Licensed-6H9B5AA%2Fdp%2FB0BDGMNF6V%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.EticCW57cQlKe1fiXCB_E6x8yp6o4pD-GZPffHyVWz1bEdvdAuuvY5lwY1OnhC7BKNSLgwEHJgCRVtR33PdUwiMOZJ7bNaRqG5qsqP-dXq-KYR3QKIXNKJVfgBq37H_aPdJQSx5CX4yLwSZnmTodvBIi5Zyz3PlghbsC88qTzfhBz9O1DJnR0h72svOPzs7Gdntkx4XRxHChOjPypLmQIhu0mPZENBJGYF6SYAKSEGU.rYfSwGgelD2vEwfbo6qowdCo9aNGcYrz2zo7uxh2gf8%26dib_tag%3Dse%26keywords%3Dgaming%2Bheadphones%26qid%3D1738339933%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
                "image_url": "https://m.media-amazon.com/images/I/61GywIq-pwL._AC_UY218_.jpg",
                "category": "Headphones"
            },
            {
                "title": "HyperX Cloud Stinger 2 Core Essential PC Gaming Wired Headset, Lightweight Over-Ear Headset with mic, Swivel-to-Mute Function, 40mm Drivers (683L9AA, Black)",
                "price": "3,337",
                "rating": "3.9 out of 5 stars",
                "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4MTczNzM4NDA3MzQ2Mjc6MTczODMzOTkzMzpzcF9hdGY6MzAwMTQ1ODg3MDg0MDMyOjowOjo&url=%2FHyperX-Essential-Lightweight-Over-Ear-683L9AA%2Fdp%2FB0BCFKG49M%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.EticCW57cQlKe1fiXCB_E6x8yp6o4pD-GZPffHyVWz1bEdvdAuuvY5lwY1OnhC7BKNSLgwEHJgCRVtR33PdUwiMOZJ7bNaRqG5qsqP-dXq-KYR3QKIXNKJVfgBq37H_aPdJQSx5CX4yLwSZnmTodvBIi5Zyz3PlghbsC88qTzfhBz9O1DJnR0h72svOPzs7Gdntkx4XRxHChOjPypLmQIhu0mPZENBJGYF6SYAKSEGU.rYfSwGgelD2vEwfbo6qowdCo9aNGcYrz2zo7uxh2gf8%26dib_tag%3Dse%26keywords%3Dgaming%2Bheadphones%26qid%3D1738339933%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
                "image_url": "https://m.media-amazon.com/images/I/71WXVepOnFL._AC_UY218_.jpg",
                "category": "Headphones"
            },
            {
                "title": "Ant Esports H520W World Of Warships Edition Lightweight Gaming Over Ear Wired Headphones with Mic| 3.5MM Jack |50 MM Drivers | Compatible with PC/ PS4 / Xbox One / Nintendo / Mobile (White)",
                "price": "749",
                "rating": "3.6 out of 5 stars",
                "link": "https://www.amazon.in/Ant-Esports-Nintendo-Computer-Warships/dp/B081Q7S6YX/ref=sr_1_8?dib=eyJ2IjoiMSJ9.EticCW57cQlKe1fiXCB_E6x8yp6o4pD-GZPffHyVWz1bEdvdAuuvY5lwY1OnhC7BKNSLgwEHJgCRVtR33PdUwiMOZJ7bNaRqG5qsqP-dXq-KYR3QKIXNKJVfgBq37H_aPdJQSx5CX4yLwSZnmTodvBIi5Zyz3PlghbsC88qTzfhBz9O1DJnR0h72svOPzs7Gdntkx4XRxHChOjPypLmQIhu0mPZENBJGYF6SYAKSEGU.rYfSwGgelD2vEwfbo6qowdCo9aNGcYrz2zo7uxh2gf8&dib_tag=se&keywords=gaming+headphones&qid=1738339933&sr=8-8",
                "image_url": "https://m.media-amazon.com/images/I/51g8jKlBg9L._AC_UY218_.jpg",
                "category": "Headphones"
            },
            {
                "title": "Ant Esports H530 Multi-Platform Pro RGB Gaming Headsetfor PC / PS4 / PS5 / Xbox One / Switch1 with mic, Black Red",
                "price": "999",
                "rating": "3.6 out of 5 stars",
                "link": "https://www.amazon.in/Ant-Esports-Gaming-Headset-H530/dp/B08D5ZK45K/ref=sr_1_18?dib=eyJ2IjoiMSJ9.EticCW57cQlKe1fiXCB_E6x8yp6o4pD-GZPffHyVWz1bEdvdAuuvY5lwY1OnhC7BKNSLgwEHJgCRVtR33PdUwiMOZJ7bNaRqG5qsqP-dXq-KYR3QKIXNKJVfgBq37H_aPdJQSx5CX4yLwSZnmTodvBIi5Zyz3PlghbsC88qTzfhBz9O1DJnR0h72svOPzs7Gdntkx4XRxHChOjPypLmQIhu0mPZENBJGYF6SYAKSEGU.rYfSwGgelD2vEwfbo6qowdCo9aNGcYrz2zo7uxh2gf8&dib_tag=se&keywords=gaming+headphones&qid=1738339933&sr=8-18",
                "image_url": "https://m.media-amazon.com/images/I/51eOGiQbsgL._AC_UY218_.jpg",
                "category": "Headphones"
            }
        ,
        
        {
                "title": "Logitech G435 Light Speed and Lightweight Gaming Bluetooth Wireless Over Ear Headphones with Mic, 18H Battery, Compatible for Dolby Atmos, Pc, Ps4, Ps5, Mobile - (Black)",
                "price": "5,495",
                "rating": "3.9 out of 5 stars",
                "link": "https://www.amazon.in/Logitech-G435-Lightspeed-Bluetooth-Wireless/dp/B09GFYV9YJ/ref=sr_1_5?dib=eyJ2IjoiMSJ9.emjpkmLAXJb47aExK_UN7-sX9T9ArnPsq4nvrttjtss4DkQtCXRpdmPBrkWqrBwTU3J8hPfSjUeq5adb4KIfim2ttxW5nHTBWYL6IGhpSCOa8k1rgIW-od0E24Sgk6BgSpk1m_ikcUn6Ll7UC5j1ugjhPkD4RkQeY7fWX6U6lzFrWMdxVH4_WnGeqJoKgcJUaJGuluXGyHC2U6-ZMgZe2HcfGKgN26wJPeH7Tkg8Onc.IsvpEG98i4vAm6TStBQ6LFWoOzv09pr6UUUT4jc8QsE&dib_tag=se&keywords=logitech+headphones&nsdOptOutParam=true&qid=1738340028&sr=8-5",
                "image_url": "https://m.media-amazon.com/images/I/81bQEkMevBL._AC_UY218_.jpg",
                "category": "Headphones"
            },
            {
                "title": "Logitech G435 Lightspeed and Bluetooth Wireless Over Ear Gaming Headphones - Lightweight with Dual mics, 18h Battery, Compatible with Dolby Atmos, PC, PS4, PS5, Mobile - White",
                "price": "4,999",
                "rating": "3.8 out of 5 stars",
                "link": "https://www.amazon.in/Logitech-G435-Lightspeed-Bluetooth-Wireless/dp/B09GFZCC7V/ref=sr_1_10?dib=eyJ2IjoiMSJ9.emjpkmLAXJb47aExK_UN7-sX9T9ArnPsq4nvrttjtss4DkQtCXRpdmPBrkWqrBwTU3J8hPfSjUeq5adb4KIfim2ttxW5nHTBWYL6IGhpSCOa8k1rgIW-od0E24Sgk6BgSpk1m_ikcUn6Ll7UC5j1ugjhPkD4RkQeY7fWX6U6lzFrWMdxVH4_WnGeqJoKgcJUaJGuluXGyHC2U6-ZMgZe2HcfGKgN26wJPeH7Tkg8Onc.IsvpEG98i4vAm6TStBQ6LFWoOzv09pr6UUUT4jc8QsE&dib_tag=se&keywords=logitech+headphones&nsdOptOutParam=true&qid=1738340028&sr=8-10",
                "image_url": "https://m.media-amazon.com/images/I/81WfRjLX93L._AC_UY218_.jpg",
                "category": "Headphones"
            }
        ]
    await Accessories.insertMany(parts);
    console.log("Database seeded with parts.");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedParts();