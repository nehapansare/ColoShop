const config = {
    products: [
      {
        id: "1",
        title: "Loose-fit Cotton Shirt",
        price: "Rs. 1,499.00",
        color: "Blue/Striped",
        description: `Loose-fit shirt in a soft cotton weave with a collar, buttons down the
          front, and a patch chest pocket. Yoke at the back, gently dropped
          shoulders, and long sleeves with buttoned cuffs and a sleeve placket
          with a link button. Gently curved hem.`,
        deliveryTime: "2-7 days",
        reviews: "⭐⭐⭐⭐⭐ (8 Reviews)",
        sizeOptions: ["XXS", "XS", "S", "M", "L", "XL"],
        sizes: {
          XXS: { width: "1.05 m", length: "67 cm" },
          XS: { width: "1.09 m", length: "68 cm" },
          S: { width: "1.17 m", length: "70 cm" },
          M: { width: "1.23 m", length: "71 cm" },
          L: { width: "1.29 m", length: "72 cm" },
          XL: { width: "1.39 m", length: "73 cm" },
        },
        images: {
          main: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9c%2F9d%2F9c9d9583b2539b85dc20fa6e002157d22095fb25.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          thumbnails: [
            "https://image.hm.com/assets/hm/df/7f/df7ffa17fc4662cc0a06b2b9b9c6a53ff03f7d10.jpg?imwidth=1260",
            "https://image.hm.com/assets/hm/47/9b/479ba85e56486873913c5987cb88f0d613347967.jpg?imwidth=1260",
            "https://image.hm.com/assets/hm/97/ed/97edbf68c4f4036d9d7aacb2e5db90eb8eb4e798.jpg?imwidth=1260",
            "https://image.hm.com/assets/hm/d9/60/d96080874009e68894cf8b94eabbfa7476958e45.jpg?imwidth=1260",
          ],
        },
        otherDetails: [
          "Length: Long",
          "Fit: Loose fit",
          "Collar: Turn-down collar",
          "Description: Blue/White, Striped",
          "Price (MRP): Rs. 1,499.00 incl. of all taxes",
          "Country of Production: Bangladesh",
          "Common Generic Name: Shirt",
          "Net Quantity: 1 N",
        ],
      },
      {
        id: "2",
        title: "Slim-fit Chino Pants",
        price: "Rs. 1,699.00",
        color: "Khaki",
        description: `Slim-fit chino pants with a zip fly and button closure. Two slanted side pockets and two welt pockets at the back. Soft cotton twill fabric for a comfortable fit.`,
        deliveryTime: "3-7 days",
        reviews: "⭐⭐⭐⭐⭐ (12 Reviews)",
        sizeOptions: ["S", "M", "L", "XL"],
        sizes: {
          S: { waist: "30", length: "76 cm" },
          M: { waist: "32", length: "78 cm" },
          L: { waist: "34", length: "80 cm" },
          XL: { waist: "36", length: "82 cm" },
        },
        images: {
          main: "https://image.hm.com/assets/hm/df/6f/6f6a9440b250401b8acbcbebad58d3d658b69e18.jpg?imwidth=1260",
          thumbnails: [
            "https://image.hm.com/assets/hm/df/6f/6f6a9440b250401b8acbcbebad58d3d658b69e18.jpg?imwidth=1260",
            "https://image.hm.com/assets/hm/97/ed/97edbf68c4f4036d9d7aacb2e5db90eb8eb4e798.jpg?imwidth=1260",
            "https://image.hm.com/assets/hm/d9/60/d96080874009e68894cf8b94eabbfa7476958e45.jpg?imwidth=1260",
          ],
        },
        otherDetails: [
          "Fit: Slim fit",
          "Material: 100% Cotton",
          "Price (MRP): Rs. 1,299.00 incl. of all taxes",
          "Country of Production: India",
          "Common Generic Name: Chino Pants",
          "Net Quantity: 1 N",
        ],
      },
    ],
    customerService: {
      complaintAddress:
        "H&M Hennes & Mauritz Retail Pvt. Ltd., A Wing, D3, 2nd Floor, District Center, Saket, New Delhi 110017, India",
      telephone: "1800-889-8000",
      email: "customerservice.in@hm.com",
    },
    disclaimer: `This information is based on a sample of the product displayed on the website.
      There may be changes in the information on the label attached to the product delivered to the
      customer due to the size chosen, date of import, name of manufacturer (in case of manufacturing in India), country of manufacture, etc.`,
  };
  
  export default config;