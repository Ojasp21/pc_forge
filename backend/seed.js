// const mongoose = require('mongoose');
// const Part = require('./models/Part'); 

import mongoose from "mongoose";
import Part from "./models/Part.js";

mongoose.connect('mongodb+srv://akashkawle2995:mongodb2995@cluster0.85no6.mongodb.net/pcforge?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
const seedParts = async () => {
  try {
    
    // await Part.deleteMany({});
    // console.log("Existing parts removed.");

    const parts = [
        {
            "title": "Cooler Master MWE 850 Gold V2 Power Supply - Fully Modular | 80 Plus Gold Certified | 120mm HDB Fan | DC-to-DC Circuit Design | 2 EPS Connectors | 850 Watt",
            "price": "10,488",
            "rating": "4.0 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMTA0OTAxMDk2ODcwMjc0OjE3MzczOTQ1OTk6c3BfYXRmOjIwMDY3NTAxNjIwNTAxOjowOjo&url=%2FCooler-Master-Certified-Modular-Supply%2Fdp%2FB08H2PJS7G%2Fref%3Dsr_1_1_sspa%3Fdib%3DeyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo%26dib_tag%3Dse%26keywords%3DPower%2BSupply%26qid%3D1737394599%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/81xSZbfz8fL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Cooler Master",
                "Manufacturer": "Cooler Master",
                "Series": "MWE Gold",
                "Colour": "MWE V850 Gold V2",
                "Form Factor": "ATX",
                "Item Height": "8.6 Centimeters",
                "Item Width": "15 Centimeters",
                "Product Dimensions": "14 x 15 x 8.6 cm; 2.25 kg",
                "Item model number": "MPE-8501-AFAAG-IN",
                "Wattage": "850 Watts",
                "Are Batteries Included": "No",
                "Country of Origin": "China",
                "Item Weight": "2 kg 250 g"
            }
        },
        {
            "title": "CORSAIR CX Series CX750 80 Plus Bronze ATX Power Supply, A 120mm thermally Controlled Low-Noise Cooling Fan, Compact 125mm-long casing,",
            "price": "6,288",
            "rating": "4.7 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMTA0OTAxMDk2ODcwMjc0OjE3MzczOTQ1OTk6c3BfYXRmOjMwMDI1ODU5Mjk1MDMzMjo6MDo6&url=%2FCORSAIR-thermally-controlled-low-noise-125mm-long%2Fdp%2FB0CRKKDF88%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo%26dib_tag%3Dse%26keywords%3DPower%2BSupply%26qid%3D1737394599%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/710YVc9mZ1L._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Corsair",
                "Manufacturer": "CORSAIR",
                "Series": "CORSAIR CX Series CX750 80 PLUS Bronze ATX Power Supply",
                "Colour": "BLACK",
                "Form Factor": "ATX",
                "Item Height": "8.6 Centimeters",
                "Item Width": "15 Centimeters",
                "Product Dimensions": "12.5 x 15 x 8.6 cm; 2 kg",
                "Item model number": "CP-9020279-IN",
                "Wattage": "750 Watts",
                "Are Batteries Included": "No",
                "Country of Origin": "China",
                "Item Weight": "2 kg"
            }
        },
        {
            "title": "Ant Esports VS400L NonModular High Efficiency Gaming Power Supply/PSU with Continuous Power and 120mm Silent Fan",
            "price": "1,241",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/Ant-Esports-VS400L-Power-Supply/dp/B09XQRMBCK/ref=sr_1_3?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-3",
            "image_url": "https://m.media-amazon.com/images/I/81oRnnKIzTL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Ant Esports",
                "Manufacturer": "Ant Esports",
                "Product Dimensions": "26.7 x 11.3 x 19.5 cm; 1.4 kg",
                "Hardware Platform": "PC",
                "Compatible Devices": "pc",
                "Mounting Hardware": "Power Supply, Power Cable, Mounting Screws, User Manual",
                "Number of items": "1",
                "Audio Wattage": "400 Watts",
                "Wattage": "400 Watts",
                "Batteries Included": "No",
                "Batteries Required": "No",
                "Material": "other",
                "Form Factor": "ATX",
                "Country of Origin": "China",
                "Item Weight": "1 kg 400 g"
            }
        },
        {
            "title": "Ant Esports VS450L Non-Modular High Efficiency Gaming Power Supply/PSU with 1 x PCIe and 120mm Silent Fan",
            "price": "1,673",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/Ant-Esports-VS450L-Power-Supply/dp/B09XQS95CR/ref=sr_1_5?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-5",
            "image_url": "https://m.media-amazon.com/images/I/81tVHkPgIJL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Ant Esports",
                "Manufacturer": "Ant Esports",
                "Product Dimensions": "26.7 x 11.3 x 19.5 cm; 1.4 kg",
                "Hardware Platform": "PC",
                "Compatible Devices": "pc",
                "Mounting Hardware": "Power Supply, Power Cable, Mounting Screws, User Manual",
                "Number of items": "1",
                "Audio Wattage": "450 Watts",
                "Wattage": "450 Watts",
                "Batteries Included": "No",
                "Batteries Required": "No",
                "Material": "other",
                "Form Factor": "ATX",
                "Country of Origin": "China",
                "Item Weight": "1 kg 400 g"
            }
        },
        {
            "title": "FRONTECH 450 Watts SMPS Power Supply Unit, Compliant with ATX 12V, 20/24 Pin Main Power, Power Protection, (PS-0005, Grey)",
            "price": "600",
            "rating": "3.5 out of 5 stars",
            "link": "https://www.amazon.in/FRONTECH-Supply-Compliant-Protection-PS-0005/dp/B009CVTPZE/ref=sr_1_7?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-7",
            "image_url": "https://m.media-amazon.com/images/I/81y-qVnfcJL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "FRONTECH",
                "Manufacturer": "Nuevotech Industries Pvt Ltd",
                "Model": "PS-0005",
                "Model Name": "SMPS ( PS-0005 )",
                "Product Dimensions": "15 x 11 x 8.4 cm; 620 g",
                "Item model number": "PS-0005",
                "Operating System": "Windows 7, Windows 10",
                "Hardware Platform": "PC",
                "Compatible Devices": "pc",
                "Special Features": "Compliant with ATX 12V. \u2022 20/24 pin Main Power Connector. \u2022 Supports Multi-Core CPU.(Intel/AMD) \u2022Supports Serial ATA (SATA) Interface-2 Connectors & PATA Interface-2 \u2022 Support Power Protections \u2022. Over Current. (OCP) \u2022. Over Voltage. (OVP) \u2022. Short-Circuit (SCP) \u2022 8 cm Cooling fan, 1.5 Meter power Cable free",
                "Mounting Hardware": "PSU",
                "Number of items": "1",
                "Audio Wattage": "450 Watts",
                "Voltage": "12 Volts (DC)",
                "Wattage": "450 Watts",
                "Power Source": "AC",
                "Batteries Included": "No",
                "Batteries Required": "No",
                "Form Factor": "ATX",
                "Has Auto Focus": "No",
                "Programmable Buttons": "No",
                "Item Weight": "620 g"
            }
        },
        {
            "title": "Cooler Master MWE 450 Bronze V2 Power Supply - Non-Modular | 80 Plus Bronze Certified | 120mm HDB Fan | DC-to-DC Circuit Design | ATX 2.52 Version | 450 Watt",
            "price": "3,349",
            "rating": "4.4 out of 5 stars",
            "link": "https://www.amazon.in/Cooler-Master-Bronze-Certified-Non-Modular/dp/B08GTF8224/ref=sr_1_8?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-8",
            "image_url": "https://m.media-amazon.com/images/I/810FP1fdX5L._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Cooler Master",
                "Manufacturer": "Cooler Master",
                "Series": "MWE Gold",
                "Form Factor": "ATX",
                "Item Height": "8.6 Centimeters",
                "Item Width": "15 Centimeters",
                "Product Dimensions": "14 x 15 x 8.6 cm; 1.33 kg",
                "Item model number": "MPE-4501-ACABW-BIN",
                "Wattage": "450 Watts",
                "Are Batteries Included": "No",
                "Item Weight": "1 kg 330 g"
            }
        },
        {
            "title": "Ant Esports VS600L Non-Modular High Efficiency Gaming Power Supply/PSU with 1 x PCIe and 120mm Silent Fan",
            "price": "2,229",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/Ant-Esports-VS600L-Power-Supply/dp/B09173G65X/ref=sr_1_9?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-9",
            "image_url": "https://m.media-amazon.com/images/I/61nLCaWm+pL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Ant Esports",
                "Manufacturer": "Ant Esports",
                "Model": "VS600L",
                "Product Dimensions": "26.7 x 11.3 x 19.5 cm; 1.8 kg",
                "Item model number": "VS600L",
                "Hardware Platform": "PC",
                "Compatible Devices": "pc",
                "Mounting Hardware": "Power Supply, Power Cable, Mounting Screws, User Manual",
                "Number of items": "1",
                "Audio Wattage": "600 Watts",
                "Wattage": "600 Watts",
                "Batteries Included": "No",
                "Batteries Required": "No",
                "Form Factor": "ATX",
                "Country of Origin": "China",
                "Item Weight": "1 kg 800 g"
            }
        },
        {
            "title": "MSI MAG A650BN Power Supply Unit - 650W, 80 Plus Bronze Certified, 12V Single-Rail, DC-to-DC Circuit, 120mm Fan, Active PFC Design, Multiple Connectivity, for Gaming PC, 5-Year Warranty",
            "price": "4,790",
            "rating": "4.4 out of 5 stars",
            "link": "https://www.amazon.in/MSI-A650BN-Gaming-Power-Supply/dp/B09GW3QZLJ/ref=sr_1_10?dib=eyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo&dib_tag=se&keywords=Power+Supply&qid=1737394599&sr=8-10",
            "image_url": "https://m.media-amazon.com/images/I/71pU8A2UE9L._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Model": "306-7ZP2B18-CE0",
                "Model Name": "MAG A650BN",
                "Product Dimensions": "16 x 15 x 8.6 cm; 1.59 kg",
                "Item model number": "306-7ZP2B18-CE0",
                "Compatible Devices": "gaming pc,pc",
                "Number of items": "1",
                "Audio Wattage": "650",
                "Voltage": "240 Volts",
                "Wattage": "650 Watts",
                "Batteries Included": "No",
                "Batteries Required": "No",
                "Form Factor": "ATX12V",
                "Country of Origin": "China",
                "Item Weight": "1 kg 590 g"
            }
        },
        {
            "title": "Ant Esports FG650 Gaming Power Supply I Force Series 80 Plus Gold Certified PSU I 120mm Silent Fan I 8 Pin (4+4) CPU Connector I 3 Years Warranty",
            "price": "5,999",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMTA0OTAxMDk2ODcwMjc0OjE3MzczOTQ1OTk6c3BfbXRmOjMwMDQ1NDcwODQ3MTEzMjo6MDo6&url=%2FAnt-Esports-FG650-Certified-Connector%2Fdp%2FB0CGTSN9W8%2Fref%3Dsr_1_11_sspa%3Fdib%3DeyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo%26dib_tag%3Dse%26keywords%3DPower%2BSupply%26qid%3D1737394599%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/81Eo1ExtPfL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Ant Esports",
                "Manufacturer": "Ant Esports",
                "Series": "FG650",
                "Form Factor": "ATX",
                "Item Height": "19.5 Centimeters",
                "Item Width": "11.3 Centimeters",
                "Product Dimensions": "26.7 x 11.3 x 19.5 cm; 1.5 kg",
                "Item model number": "FG650",
                "Wattage": "650 Watts",
                "Are Batteries Included": "No",
                "Country of Origin": "China",
                "Item Weight": "1 kg 500 g"
            }
        },
        {
            "title": "CORSAIR RM1000e (2023) Fully Modular Low-Noise ATX Power Supply - ATX 3.0 & PCIe 5.0 Compliant - 105\u00b0C-Rated Capacitors - 80 Plus Gold Efficiency - Modern Standby Support",
            "price": "19,499",
            "rating": "4.7 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozMTA0OTAxMDk2ODcwMjc0OjE3MzczOTQ1OTk6c3BfbXRmOjMwMDAxNTM2ODc1MjUzMjo6MDo6&url=%2FCORSAIR-RM1000e-Modular-Low-Noise-Supply%2Fdp%2FB0C4TWH4JK%2Fref%3Dsr_1_12_sspa%3Fdib%3DeyJ2IjoiMSJ9.IBhuYN7_wnftzjsFAzBczvPDMVqT9_o3d34afcuGN6W932f2IkVX4mB_H7jRJpXJ3NnskosNOoV8GsihGN8LjdwKrBJiS4UUOmojKY-U2bc1ooxj5stxBZjREh-0S_gtp1OQLcqAqRH5JlwIGBJwosgQ7nFgU0ooXoPOhyLIfvSVs4J9nmC18xRZoTWM9nkI5CM3yFvB4FXdhFLtoiE37yuAoGDyGc5SCK-1ppfQaMY._uuShvNFFyJCQpDdI6b5FsWQ45XDWCfl6pe7Jtmw9Vo%26dib_tag%3Dse%26keywords%3DPower%2BSupply%26qid%3D1737394599%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/61S-P42paWL._AC_UY218_.jpg",
            "category": "PSU",
            "details": {
                "Brand": "Corsair",
                "Manufacturer": "Corsair",
                "Series": "RM1000e",
                "Form Factor": "ATX",
                "Item Height": "14 Centimeters",
                "Item Width": "8.6 Centimeters",
                "Product Dimensions": "15 x 8.6 x 14 cm; 1.66 kg",
                "Item model number": "CP-9020264-IN",
                "Hardware Platform": "PC",
                "Are Batteries Included": "No",
                "Country of Origin": "China",
                "Item Weight": "1 kg 660 g"
            }
        }
    ]
    await Part.insertMany(parts);
    console.log("Database seeded with parts.");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedParts();