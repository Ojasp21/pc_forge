const mongoose = require('mongoose');
const Part = require('./models/Part'); 

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
            "title": "Gigabyte MB GBT AMD AM4 B450M K",
            "price": "3,819",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/Gigabyte-GBT-AMD-AM4-B450M/dp/B0BNYVSPPD/ref=sr_1_3?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-3",
            "image_url": "https://m.media-amazon.com/images/I/610t8B83DcL._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "GIGABYTE",
                "Manufacturer": "Gigabyte",
                "Model": "B450M K",
                "Model Name": "AM4 B450M",
                "Product Dimensions": "16.5 x 2.8 x 24.6 cm; 660 g",
                "Batteries": "1 12V batteries required. (included)",
                "Item model number": "B450M K",
                "Memory Storage Capacity": "32 GB",
                "Memory Slots Available": "2",
                "Memory technology": "DDR4",
                "Ram Memory Technology": "DDR4",
                "Processor Type": "Athlon",
                "Processor Socket": "Socket AM4",
                "Compatible Processor Types": "AMD AM4",
                "Graphics Card Interface": "PCI Express",
                "Compatible Devices": "Personal Computer",
                "Chipset Type": "AMD B450",
                "Number of items": "1",
                "Batteries Included": "Yes",
                "Batteries Required": "Yes",
                "Battery cell composition": "Lithium Manganese Dioxide",
                "Number of Ports": "8",
                "Total USB ports": "6",
                "Form Factor": "Micro ATX",
                "Country of Origin": "China",
                "Item Weight": "660 g"
            }
        },
        {
            "title": "MSI PRO H610M-E DDR4 Motherboard, Micro-ATX - Supports 14th/13th/12th Gen Intel Core Processors, LGA 1700-2 x DIMMs (3200MHz), 1x PCIe 4.0 x16 Slot, 1 x M.2 Gen3, USB 3.2 Gen1, 1G LAN, HDMI 1.4 & VGA",
            "price": "5,741",
            "rating": "4.1 out of 5 stars",
            "link": "https://www.amazon.in/MSI-H610M-DDR4-Motherboard-Micro-ATX/dp/B0BKRDV1V3/ref=sr_1_5?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-5",
            "image_url": "https://m.media-amazon.com/images/I/81MY4UCX8wL._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Form Factor": "Micro ATX",
                "Item Height": "28 Centimeters",
                "Item Width": "50 Centimeters",
                "Product Dimensions": "50 x 50 x 28 cm; 193 g",
                "Item model number": "245569A1",
                "Processor Type": "Pentium",
                "Processor Socket": "LGA 1700",
                "Memory Technology": "DDR4",
                "Computer Memory Type": "DIMM",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "3200 MHz",
                "Graphics Card Interface": "Integrated",
                "Number of USB 2.0 Ports": "2",
                "Number of HDMI Ports": "2",
                "Number of Ethernet Ports": "1",
                "Voltage": "1 Volts",
                "Are Batteries Included": "No",
                "Lithium Battery Energy Content": "170 Milliampere Hour (mAh)",
                "Lithium Battery Weight": "3 Grams",
                "Number of Lithium Metal Cells": "1",
                "Country of Origin": "China",
                "Item Weight": "193 g"
            }
        },
        {
            "title": "MSI B450M-A PRO MAX II Motherboard, Micro-ATX, AM4 DDR4 USB 3.2 Gen 1 HDMI",
            "price": "4,445",
            "rating": "3.8 out of 5 stars",
            "link": "https://www.amazon.in/MSI-PRO-MAX-II-Motherboard/dp/B0CJ2PXTQ5/ref=sr_1_6?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-6",
            "image_url": "https://m.media-amazon.com/images/I/8160IdmH2-L._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "B450M-A PRO MAX II",
                "Item Height": "6 Centimeters",
                "Item Width": "20 Centimeters",
                "Product Dimensions": "23.6 x 20 x 6 cm; 480 g",
                "Item model number": "B450M-A PRO MAX II",
                "Processor Type": "Athlon",
                "Processor Socket": "Socket AM4",
                "Memory Technology": "DDR4",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "4133 MHz",
                "Graphics Card Interface": "PCI-Express x4, PCI-Express x16",
                "Number of USB 2.0 Ports": "2",
                "Number of HDMI Ports": "1",
                "Number of Ethernet Ports": "1",
                "Are Batteries Included": "No",
                "Item Weight": "480 g"
            }
        },
        {
            "title": "GIGABYTE B450M DS3H V2 (AMD Ryzen AM4/Micro ATX/M.2/HMDI/DVI/USB 3.1/DDR4/Motherboard)",
            "price": "6,125",
            "rating": "4.2 out of 5 stars",
            "link": "https://www.amazon.in/GIGABYTE-B450M-DS3H-V2-Motherboard/dp/B08KWMXGQW/ref=sr_1_7?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-7",
            "image_url": "https://m.media-amazon.com/images/I/61ek0c7+-3L._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "GIGABYTE",
                "Manufacturer": "GIGABYTE",
                "Series": "B450M DS3H V2",
                "Form Factor": "Micro ATX",
                "Item Height": "2.12 Inches",
                "Item Width": "10.43 Inches",
                "Standing screen display size": "7",
                "Product Dimensions": "26.49 x 26.49 x 5.38 cm; 800 g",
                "Item model number": "B450M",
                "Processor Type": "Athlon",
                "Processor Socket": "Socket AM4",
                "RAM Size": "8",
                "Memory Technology": "DDR4",
                "Computer Memory Type": "DDR4 SDRAM",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "3600 MHz",
                "Graphics Card Interface": "PCI Express",
                "Connectivity Type": "Wi-Fi",
                "Number of USB 2.0 Ports": "1",
                "Number of HDMI Ports": "1",
                "Number of Ethernet Ports": "1",
                "Are Batteries Included": "No",
                "Country of Origin": "China",
                "Item Weight": "800 g"
            }
        },
        {
            "title": "MSI A520M-A PRO Motherboard (AMD Ryzen 3000 3rd Gen AM4, DDR4, M.2, USB 3.2 Gen 1, HDMI, Micro ATX)",
            "price": "3,999",
            "rating": "4.4 out of 5 stars",
            "link": "https://www.amazon.in/A520M-Motherboard-Ryzen-3000-Micro/dp/B08HHMCCXV/ref=sr_1_8?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-8",
            "image_url": "https://m.media-amazon.com/images/I/81sffemYJJS._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "MSI A520M A PRO",
                "Form Factor": "Micro ATX",
                "Item Height": "23.6 Centimeters",
                "Item Width": "7 Centimeters",
                "Product Dimensions": "20 x 7 x 23.6 cm; 635 g",
                "Item model number": "7C96-001R",
                "Processor Type": "AMD Ryzen 7",
                "Processor Socket": "Socket AM4",
                "RAM Size": "64 GB",
                "Memory Technology": "DDR4",
                "Computer Memory Type": "DDR4 SDRAM",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "3200 MHz",
                "Graphics Card Interface": "PCI-Express x16",
                "Number of USB 2.0 Ports": "2",
                "Number of HDMI Ports": "1",
                "Number of Ethernet Ports": "1",
                "Are Batteries Included": "No",
                "Included Components": "Motherboard, Manual, Sata Cables, MSI Case Badge, IO Shield, Product Registration Card, USB",
                "Country of Origin": "Taiwan",
                "Item Weight": "635 g"
            }
        },
        {
            "title": "MSI B760M Bomber WiFi Motherboard, Micro-ATX - Supports 14th/13th/12th Gen Intel Core Processors, LGA 1700 - DDR5 Memory Boost 6400MHz/MAX, PCIe 4.0 x16 Slot, M.2 Gen4 Slot",
            "price": "12,094",
            "rating": "4.1 out of 5 stars",
            "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDYyNjk2ODQxMzE0MjUzOjE3MzcwMjM2ODc6c3BfbXRmOjMwMDE2MDQ5Mzk5MjQzMjo6MDo6&url=%2FMSI-B760M-Bomber-Motherboard-Micro-ATX%2Fdp%2FB09YXVF9G4%2Fref%3Dsr_1_11_sspa%3Fdib%3DeyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118%26dib_tag%3Dse%26keywords%3Dmotherboard%26qid%3D1737023687%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
            "image_url": "https://m.media-amazon.com/images/I/71kGiZIL-BL._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "B760M BOMBER WIFI",
                "Colour": "Multicolor",
                "Item Height": "50 Millimeters",
                "Item Width": "22 Centimeters",
                "Product Dimensions": "24.4 x 22 x 5 cm; 1 kg",
                "Item model number": "B760M BOMBER WIFI",
                "Processor Type": "Pentium",
                "Processor Socket": "LGA 1700",
                "Memory Technology": "DDR5",
                "Memory Clock Speed": "6400 MHz",
                "Graphics Card Interface": "PCI Express",
                "Connectivity Type": "Wi-Fi",
                "Number of USB 2.0 Ports": "4",
                "Number of HDMI Ports": "3",
                "Number of Ethernet Ports": "1",
                "Country of Origin": "China",
                "Item Weight": "1 kg"
            }
        },
        {
            "title": "MSI B650M Gaming WiFi Motherboard, mATX - Supports AMD Ryzen 7000 Series Processors, AM5 - DDR5 Memory Boost 7800+ MHz/OC, PCIe 4.0 x16, M.2 Gen4, Wi-Fi 6E",
            "price": "11,125",
            "rating": "4.0 out of 5 stars",
            "link": "https://www.amazon.in/MSI-B650M-GAMING-WIFI-Motherboard/dp/B0CRKR3HXN/ref=sr_1_13?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-13",
            "image_url": "https://m.media-amazon.com/images/I/51ZDK86KO-L._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "B650M GAMING WIFI",
                "Colour": "Black",
                "Item Height": "5 Centimeters",
                "Item Width": "22.6 Centimeters",
                "Product Dimensions": "24.38 x 22.6 x 5 cm; 2 kg",
                "Item model number": "B650M GAMING WIFI",
                "Processor Socket": "Socket AM5",
                "Memory Technology": "DDR5",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "7800 MHz",
                "Graphics Card Interface": "PCI-Express x16",
                "Wireless Type": "Bluetooth",
                "Number of HDMI Ports": "2",
                "Country of Origin": "China",
                "Item Weight": "2 kg"
            }
        },
        {
            "title": "MSI PRO B760M-E Motherboard, Micro-ATX - Supports 14th/13th/12th Gen Intel Core Processors, LGA 1700 - DDR5 Memory Boost 5600MHz, PCIe 4.0 x16 Slot, M.2 Gen4 Slot",
            "price": "9,442",
            "rating": "4.7 out of 5 stars",
            "link": "https://www.amazon.in/MSI-PRO-B760M-Motherboard-Micro-ATX/dp/B0CC9F9X7S/ref=sr_1_17?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-17",
            "image_url": "https://m.media-amazon.com/images/I/81DpGpHUe+L._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "PRO B760M-E",
                "Item Height": "20 Millimeters",
                "Item Width": "20 Centimeters",
                "Product Dimensions": "23.6 x 20 x 2 cm; 710 g",
                "Item model number": "7D48-020R",
                "Processor Socket": "LGA 1700",
                "Memory Technology": "DDR5",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "6400 MHz",
                "Graphics Card Interface": "PCI Express",
                "Connectivity Type": "Wi-Fi",
                "Number of USB 2.0 Ports": "2",
                "Number of HDMI Ports": "2",
                "Number of Ethernet Ports": "1",
                "Country of Origin": "China",
                "Item Weight": "710 g"
            }
        },
        {
            "title": "ASUS Prime B450M-K II (AMD AM4 Socket for AMD Ryzen 5000/4000/ 3rd/2nd/1st Gen) DIMM Micro ATX Motherboard with M.2 HDMI/DVI-D/D-Sub SATA 6 Gbps 1 Gb Ethernet USB 3.2 Gen 1 Type-A, BIOS Flashback",
            "price": "4,599",
            "rating": "4.4 out of 5 stars",
            "link": "https://www.amazon.in/ASUS-Graphics-Motherboard-Ethernet-Flashback/dp/B08K96B2CT/ref=sr_1_18?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-18",
            "image_url": "https://m.media-amazon.com/images/I/81YD10dTZ0L._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "ASUS",
                "Manufacturer": "Asus",
                "Series": "PRIME B450M-K II",
                "Form Factor": "Micro ATX",
                "Item Height": "22.6 Centimeters",
                "Item Width": "4.5 Centimeters",
                "Product Dimensions": "22.1 x 4.5 x 22.6 cm; 500 g",
                "Batteries": "1 A batteries required.",
                "Item model number": "90MB1600-M0EAY0",
                "Processor Socket": "Socket AM4",
                "Memory Technology": "DIMM",
                "Maximum Memory Supported": "64 GB",
                "Memory Clock Speed": "4400 MHz",
                "Graphics Card Interface": "PCI Express",
                "Connectivity Type": "Wi-Fi",
                "Number of USB 2.0 Ports": "2",
                "Number of HDMI Ports": "1",
                "Number of Ethernet Ports": "1",
                "Voltage": "12 Volts",
                "Wattage": "50",
                "Are Batteries Included": "No",
                "Lithium Battery Energy Content": "2.6 British Thermal Units (BTUs)",
                "Lithium Battery Weight": "0.5 Milligrams",
                "Number of Lithium Ion Cells": "7",
                "Number of Lithium Metal Cells": "7",
                "Included Components": "Cables 2 x SATA 6Gb/s cables Miscellaneous 1 x I/O Shield 1 x M.2 SSD screw package Installation Media 1 x Support DVD Documentation 1 x User manual",
                "Item Weight": "500 g"
            }
        },
        {
            "title": "MSI B760M Bomber WiFi Motherboard, Micro-ATX - Supports 14th/13th/12th Gen Intel Core Processors, LGA 1700 - DDR5 Memory Boost 6400MHz/MAX, PCIe 4.0 x16 Slot, M.2 Gen4 Slot",
            "price": "12,094",
            "rating": "4.1 out of 5 stars",
            "link": "https://www.amazon.in/MSI-B760M-Bomber-Motherboard-Micro-ATX/dp/B09YXVF9G4/ref=sr_1_19?dib=eyJ2IjoiMSJ9.s2cbRY6PpUwGho-_H_B9pfWuBofODS49GxrS60SQDLI4o_M5moHoMDw3ZLMbd7aEknUMPc8DQyGrH3MSZHakYbzd3lura7wXpzAJN-LAjYpEW2RFSi7BCXViDSodeIADpXtcACXP5Mxhku_JnfGvXL5A3tcL8klUe_WErCRtbjuwjcwSmSJ-VNmlKjPwmUmAViSAl1XomKw9_6xZDmb_SBEqfy4J6Y9fk92sHifp1Dg.5djEGVA7lYvM2TLc0j6_d09U3b1MfVaih157NEyU118&dib_tag=se&keywords=motherboard&qid=1737023687&sr=8-19",
            "image_url": "https://m.media-amazon.com/images/I/71kGiZIL-BL._AC_UY218_.jpg",
            "category": "Motherboard",
            "details": {
                "Brand": "MSI",
                "Manufacturer": "MSI",
                "Series": "B760M BOMBER WIFI",
                "Colour": "Multicolor",
                "Item Height": "50 Millimeters",
                "Item Width": "22 Centimeters",
                "Product Dimensions": "24.4 x 22 x 5 cm; 1 kg",
                "Item model number": "B760M BOMBER WIFI",
                "Processor Type": "Pentium",
                "Processor Socket": "LGA 1700",
                "Memory Technology": "DDR5",
                "Memory Clock Speed": "6400 MHz",
                "Graphics Card Interface": "PCI Express",
                "Connectivity Type": "Wi-Fi",
                "Number of USB 2.0 Ports": "4",
                "Number of HDMI Ports": "3",
                "Number of Ethernet Ports": "1",
                "Country of Origin": "China",
                "Item Weight": "1 kg"
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