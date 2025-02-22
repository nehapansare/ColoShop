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
      description:
        "Slim-fit chino pants with a zip fly and button closure. Two slanted side pockets and two welt pockets at the back. Soft cotton twill fabric for a comfortable fit.",
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
        main: "https://i.pinimg.com/474x/f2/df/c7/f2dfc73493b1e9a8c3c8c71bc0336b77.jpg",
        thumbnails: [
          "https://i.pinimg.com/474x/f2/df/c7/f2dfc73493b1e9a8c3c8c71bc0336b77.jpg",
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
    {
      id: "11",
      title: "Women Short Dress In Purple",
      price: "Rs. 2,299.00",
      color: "Purple",
      description:
        "A stylish short dress in purple featuring a flattering silhouette, adjustable straps, and a flared skirt for a comfortable, chic look.",
      deliveryTime: "2-5 days",
      reviews: "⭐⭐⭐⭐ (5 Reviews)",
      sizeOptions: ["S", "M", "L", "XL"],
      sizes: {
        S: { bust: "32 in", waist: "26 in", length: "35 in" },
        M: { bust: "34 in", waist: "28 in", length: "36 in" },
        L: { bust: "36 in", waist: "30 in", length: "37 in" },
        XL: { bust: "38 in", waist: "32 in", length: "38 in" },
      },
      images: {
        main:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSckly7Nw_sGs4BrbwxTgyPYDgPl5KR__B1Hjyc6k2Ut7BCVCyuexzbUeLXPyaY2HVZRnOXoC7aTtMKXpACdOVw4wU45ml7r4q6sbg2RAGvGES4PJpui7w5&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxVPPRd32ftVR7tBxxqN9iYflYXGX8MtFieUJfvBDsjmYE69d34mioLg0DJd0of8nGZD5fs2ZdSGWcZ9pkDof4xGdeETfdFdQQtMRRf-PtCg1g0pAZQJlG&usqp=CAE",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJF1q2_GAKAMr5sgNMHsCYNwr9Uj05Sw_sgV8-nNZ0K-nJwbx6RdRv2ulP81sT5lkLGEcCCRnVC1ilyeKfX0vEQn6XcIevjM9GM7ZmR4yPRmRRMu78Eq6d&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSckly7Nw_sGs4BrbwxTgyPYDgPl5KR__B1Hjyc6k2Ut7BCVCyuexzbUeLXPyaY2HVZRnOXoC7aTtMKXpACdOVw4wU45ml7r4q6sbg2RAGvGES4PJpui7w5&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Regular fit",
        "Material: Cotton blend",
        "Price (MRP): Rs. 2,299.00 incl. of all taxes",
        "Country of Production: Bangladesh",
        "Common Generic Name: Dress",
        "Net Quantity: 1 N",
      ],
    },
    {
      id: "12",
      title: "Tokyo Talkies Women Green Printed Fit and Flare Dress",
      price: "Rs. 1,799.00",
      color: "White",
      description:
        "A crisp formal shirt suitable for office wear, made from high-quality cotton.",
      deliveryTime: "2-4 days",
      reviews: "⭐⭐⭐⭐ (15 Reviews)",
      sizeOptions: ["S", "M", "L", "XL"],
      sizes: {
        S: { chest: "36 in", length: "29 in" },
        M: { chest: "38 in", length: "30 in" },
        L: { chest: "40 in", length: "31 in" },
        XL: { chest: "42 in", length: "32 in" },
      },
      images: {
        main: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSm0fBU5y9meXArsZr0PyLJ_9cviD_U6hDgzljH1xQu8rB8CF8HYHz8tDlqAgj6DFHHqEVmwcnY5LHrqtr2btTNZ4gHLLS12C0QPB5CWZ1zAiHhN8_F24z2IA&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO3OQdk-Y-F2CVtVBlM0L4lnwFdgQu-V54u4s_KWpMILyX-gdlIGBzKGld9C3kJtFRCdx7CpnKX7ZPmYjgIrFqkb9sBwyBLnDawRMBfjDi&usqp=CAE",
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVSu_oLI8N_9XPZIzGG_yC4UlobBT7sCJlIM6rgVUP4uoTJOwlWwrEKvNSEIUci5VmfNu--nQCF8wX_6fpRcZLGRovj_u8vRG5JvIloXyrMNlMXW224xUkFw&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO3OQdk-Y-F2CVtVBlM0L4lnwFdgQu-V54u4s_KWpMILyX-gdlIGBzKGld9C3kJtFRCdx7CpnKX7ZPmYjgIrFqkb9sBwyBLnDawRMBfjDi&usqp=CAE",
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi1kM_YBbUNMkjkUP4bWVnvZjVOYqLW0r1UcKMeIJSM0IMC59F_6RZA8F1H_MPt458ySJmMvL-owhIstOvhW10b9ZaTkdQezIOEdgtiVcFUzCYQvtrWzqr&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Slim fit",
        "Material: 100% Cotton",
        "Price (MRP): Rs. 1,799.00 incl. all taxes",
        "Country of Production: Italy",
        "Common Generic Name: Formal Shirt",
      ],
    },
    {
      id: "13",
      title: "Ruched Bodycon Dress With Floral Print And Spaghetti Straps",
      price: "Rs. 1,299.00",
      color: "Red",
      description:
        "A light, breezy summer blouse perfect for hot weather, crafted from breathable fabric.",
      deliveryTime: "3-5 days",
      reviews: "⭐⭐⭐⭐ (8 Reviews)",
      sizeOptions: ["S", "M", "L"],
      sizes: {
        S: { bust: "32 in", length: "23 in" },
        M: { bust: "34 in", length: "24 in" },
        L: { bust: "36 in", length: "25 in" },
      },
      images: {
        main: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLxOt4i0DHYzqWfGkWK2W8sDLmk9D-kmIP8Df1vn--xmaxb-u9nr8zwhoEZ34FuZNjNlqfsNrV3aZbVpam5jvquDkstbtZenjUU8CdjN9w&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQORfwle8VCeK1YADeHSAUnbFXyePQn2ekuMQUAVIJNpmHTEh8M7SIFKHuEsnKi-uHCH3Rf3MGwoGmY4V5L6wk3e6Yw-yEL-RnTKeDTLJI_&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIaX3BRpcQVkMhvElKa9fZQX0H7wwzHClmyzV4XvWeBTSj5nayjw-Jj4ZL4P-U64cmo6F8KfnWwFcP4nSm-khFiS1Xuahi57JQKtU1msHI&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtfnopqwkfjngTOSocIQZt1zyKH08iFUguKGFzPGpv6-b-95PO7xu81ieZQssd96pO9n9G2011raPAJMXQHCaGKz_GN2VO0cl51HbKb7-VXnTp5ImvyGHutw&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Regular fit",
        "Material: 100% Cotton",
        "Price (MRP): Rs. 1,299.00 incl. all taxes",
        "Country of Production: India",
        "Common Generic Name: Blouse",
      ],
    },
    {
      id: "14",
      title: "AAHWAN Puff Sleeves Sweetheart Neck Ruched A-Line Mini Dress",
      price: "Rs. 2,099.00",
      color: "Black",
      description:
        "A comfortable unisex hoodie made from a soft blend of cotton and polyester.",
      deliveryTime: "2-6 days",
      reviews: "⭐⭐⭐⭐⭐ (20 Reviews)",
      sizeOptions: ["S", "M", "L", "XL", "XXL"],
      sizes: {
        S: { chest: "36 in", length: "24 in" },
        M: { chest: "38 in", length: "25 in" },
        L: { chest: "40 in", length: "26 in" },
        XL: { chest: "42 in", length: "27 in" },
        XXL: { chest: "44 in", length: "28 in" },
      },
      images: {
        main: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKHPdaxZ-aZMvUMq-i1hB_EnizyWVfYPKXSSrPsxQuUpfwiXV_40LO0t8McypmyS-ci2cbZPCK3g6g8PTxYYtjOkyPqMMcL1_mm1W1T5I&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-Xj3VFkMfqNhPBh8tBqrdAJhl1jIwUegOnhyjTtI03iobn51cCtHbRcYlpGuEGQYUzzGlOFuEspwz3qNh_nkMyqu5KXhX9_2_w4TSa3c&usqp=CAE",
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS46wHfCvEBsjzbzFTPkzcksBgJUsfjrOvDbs5QJGdWeRA1Y8yMTT8s1IzATZrsIeXWbSD_VU1Rwrla9272Mm3HZ3imvRPIyHj4gqMnn6OW&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsqJZL3d0d89M_NJ52QO35yC3lAl_iQ7TsOi2l6FAnGI3erw-IPbEDOem8zzfSQePxOSChRSs5KTWFEx223wNFgZprs5jxIG1RbR2LebmQ&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Relaxed fit",
        "Material: Cotton/Polyester blend",
        "Price (MRP): Rs. 2,099.00 incl. all taxes",
        "Country of Production: China",
        "Common Generic Name: Hoodie",
      ],
    },
    {
      id: "15",
      title: "ADDYVERO Women Red Mini Dress",
      price: "Rs. 799.00",
      color: "Multi",
      description:
        "A fun graphic t-shirt for kids featuring vibrant colors and playful designs.",
      deliveryTime: "1-3 days",
      reviews: "⭐⭐⭐⭐ (10 Reviews)",
      sizeOptions: ["XS", "S", "M"],
      sizes: {
        XS: { chest: "20 in", length: "15 in" },
        S: { chest: "22 in", length: "16 in" },
        M: { chest: "24 in", length: "17 in" },
      },
      images: {
        main: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOkZOLBZ6tf6Vy4m7rXWUSaoQGW0PktwS5i-C62kV3FNnOn-lkd3DgzW_CY98RYoP7FE0vzIbOY9irWl4d9EC_Irua9tA0RN8OJG59Y1iG&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQZMkHqUbA9thCq2XZKGH9sNKBY71N2bGgsu0Pik6mzHFMwhUPEMGV7CvBTJRs8OkRD6h3ZxvxVcuIMy3xvft17bdk_owggQ8mxf7pHreZsHhIASISNOhv&usqp=CAE",
           "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSV_Y8-R5CZ1W2sw0Whs7eongiWCCLsXWaK2UMvqN1dZMkVwgxIzYEs-vZe-aqNSEK_BRflLPDZdv8JWsVt3JuAApNbDpToLO__SgCOacJ5&usqp=CAE",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdmM76dROFxBx3ebwVvOfBiz7HsVdEzBobpFTue6ogzRZLpmqTH3VYoyumP5WdKIv42Dh3lwY1DMjf5Sw2p2X4cb9vhgRE_KfTPRYjhh9XKFf1JPWFRmLC&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Regular fit",
        "Material: 100% Cotton",
        "Price (MRP): Rs. 799.00 incl. all taxes",
        "Country of Production: Bangladesh",
        "Common Generic Name: T-Shirt",
      ],
    },
    {
      id: "16",
      title: "Tokyo Talkies Women Maroon Printed A-Line Dress",
      price: "Rs. 2,499.00",
      color: "Blue",
      description:
        "Trendy skinny jeans that offer a flattering fit, made with stretch denim for comfort.",
      deliveryTime: "3-7 days",
      reviews: "⭐⭐⭐⭐⭐ (18 Reviews)",
      sizeOptions: ["S", "M", "L", "XL"],
      sizes: {
        S: { waist: "26 in", length: "40 in" },
        M: { waist: "28 in", length: "41 in" },
        L: { waist: "30 in", length: "42 in" },
        XL: { waist: "32 in", length: "43 in" },
      },
      images: {
        main: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSddT2LhvQNrYj9c0ktmLCthoZjWEygTm8oi5es_ZQAM_bubPJsS8AYBXh1qBncV8AlqFDf4RGWFvSPKnL8fYZUupJqfF4Rz19Dj21ZMItU&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTK3Meb6Do3wmr2JUINO7SWpgoU48qg2tK3NB_62caGcwjHHB0fK6q59GKL-OAepOUvzzeFUTjc24t_Ff5CorS1NQxamwyHxmKXJjckteMtoc-pMiuMhOH9iQ&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQWfhdNDhQ6dLq6Hy9DSEdUfCBdsAaBVSoGLyBFbJrtlC4ig08oUtIpNEW5uaVFzwWsfovr_-wEozqrOIzg7lj3Kzo8I7lAi_m8tiZfbWE7x51O9Bwna2_&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwZ2bazKgda22bj_57gE7Cja_9Rcva4syez41AdckqdMl9w6983CClDwigON00ELFNLFswdrlAu_vag7wQ3MeXSVb-5TyzL8Hun0eZEqxZ&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Skinny fit",
        "Material: Stretch Denim",
        "Price (MRP): Rs. 2,499.00 incl. all taxes",
        "Country of Production: Vietnam",
        "Common Generic Name: Jeans",
      ],
    },
    {
      id: "17",
      title: "Tokyo Talkies Women Blue Printed Fitted Tops",
      price: "Rs. 1,599.00",
      color: "Grey",
      description:
        "Relaxed fit jogger pants perfect for casual wear and exercise.",
      deliveryTime: "2-5 days",
      reviews: "⭐⭐⭐⭐ (12 Reviews)",
      sizeOptions: ["S", "M", "L", "XL"],
      sizes: {
        S: { waist: "28 in", length: "40 in" },
        M: { waist: "30 in", length: "42 in" },
        L: { waist: "32 in", length: "44 in" },
        XL: { waist: "34 in", length: "46 in" },
      },
      images: {
        main: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQix7E4TuIN8RKa7wsf5PRqBIzaq9tk9SYHEtztmhEyHiNkQ3pcE7LVfySQ_R2d1tqMTEnLimLZBnv2_fL5zCPKl1D35uo0hBBd2QZY00YYyJx_rWo0OzVj&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8Q7sQwyPNPpIYJnfs7WHItOBcGrv34gfrdwDlk5t8GOft94_1BIwky0Dc3tD6HstZ3u0RJwb5WlsKQR895Ta73493kaYmmGvleVu_l_k&usqp=CAE",
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmHQfhTxNEeJSMn5eOzl8RQc2kFVY5eD-Gauv0lzQwjmZNTJrOPO4DaRsQPPe7K3aFsy0bqnTmKe-kXYoZoG5y6SbnW0DNJMeEyVas2pYI1CurC4tIJnRc&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZqtHsmz5PrB_ZcMU_iFoX9ksSkANbW02xW1YDfT8ybRhkSOgdp0aD-gX441Ym1bXrHiPS-GP0Vrd_5M2n73HJFAY5ExsO8D_WHdWBjin8bq6x8Ee6-sas0Q&usqp=CAE",
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRoIrK0CzbNmZNmIC-tQDoGFiLy_rd8Kp_FTY6IcAWPBoeDAv4gzs7pHiwQk9LD6mOlnQQLzKRTWuF8TdhU2atW9G9bF1rXjtaf5FpZeMPO&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Relaxed fit",
        "Material: Cotton/Polyester",
        "Price (MRP): Rs. 1,599.00 incl. all taxes",
        "Country of Production: India",
        "Common Generic Name: Jogger Pants",
      ],
    },
    {
      id: "18",
      title: "Women's Full Sleeves Top",
      price: "Rs. 3,299.00",
      color: "Floral",
      description:
        "An elegant maxi dress with a floral print, perfect for summer outings.",
      deliveryTime: "3-5 days",
      reviews: "⭐⭐⭐⭐ (14 Reviews)",
      sizeOptions: ["S", "M", "L"],
      sizes: {
        S: { bust: "32 in", waist: "26 in", length: "40 in" },
        M: { bust: "34 in", waist: "28 in", length: "41 in" },
        L: { bust: "36 in", waist: "30 in", length: "42 in" },
      },
      images: {
        main: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoRGhfQv5kvejZCVLQXhDBFHhRmcWDhbb4ZPqESrr1EIVbZcx1600KvH1wl0iYdgh64AumqTyONa3_AV6E740szYazMR9c9lC5Yr-e6OqN1CNnYRPAuOz1&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTM7p4P5onR0lfRR8lKZ90onSIje_Y87u3N6PIAu63D-lBbMbh1ZcU0tqurN8pNUT7gCIkSK7IyoQ9nbAJ-1ITBuyVyRGL9JbinaLcdKHIP1suie0OLq0PXcA&usqp=CAE",
         "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs6oL850dA2XUW2FP21ex5wuApCS07nl6m5CBR9gVgiVwq9Jd8NrDc1d-X8pt3n7ai_ITdvGDuHCOc8F_wuPrfKtU0OVWTl9ZVI0PxaDabMwUSbvrOApSq&usqp=CAE",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRo9C8CfmbfXjH4w4Kv1mtJ5T3fyww3Z3IeEuhnLc1gi2nHOVBLV90pEjRI292CjxiufoeJTrPSjqmh-JJWAjZxFkN5x88l_Q&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Regular fit",
        "Material: Chiffon",
        "Price (MRP): Rs. 3,299.00 incl. all taxes",
        "Country of Production: India",
        "Common Generic Name: Maxi Dress",
      ],
    },
    {
      id: "19",
      title: "Men's Leather Jacket",
      price: "Rs. 4,999.00",
      color: "Brown",
      description:
        "A premium leather jacket designed for style and durability.",
      deliveryTime: "2-7 days",
      reviews: "⭐⭐⭐⭐⭐ (25 Reviews)",
      sizeOptions: ["M", "L", "XL"],
      sizes: {
        M: { chest: "40 in", length: "26 in" },
        L: { chest: "42 in", length: "27 in" },
        XL: { chest: "44 in", length: "28 in" },
      },
      images: {
        main: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQWfhdNDhQ6dLq6Hy9DSEdUfCBdsAaBVSoGLyBFbJrtlC4ig08oUtIpNEW5uaVFzwWsfovr_-wEozqrOIzg7lj3Kzo8I7lAi_m8tiZfbWE7x51O9Bwna2_&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCRyh0Gmm-rRNjCck4ZhXaRAbSB8vaEr76bDva3SQjBJ3kKVn8EWW3_uzzlAe2kLBXW1TrFs2ZLYnVNjDvHcDBOmHzSJZFJargeK2nvK8&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCgd39vhNSTduZK4MxfNp7n7qx7uxEYoJ4MkxS2HAwewZMHN5I7Bj37G8vaY4pCKv4WRZivjK_TY6N0hIyIE717ZtywjU3QdVF29naiZlC&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Regular fit",
        "Material: Genuine Leather",
        "Price (MRP): Rs. 4,999.00 incl. all taxes",
        "Country of Production: Italy",
        "Common Generic Name: Leather Jacket",
      ],
    },
    {
      id: "20",
      title: "Sweetheart Neck Puff Sleeve Styled Back Crop Top",
      price: "Rs. 2,199.00",
      color: "Beige",
      description:
        "A cozy cardigan sweater ideal for layering, crafted from soft knitted fabric.",
      deliveryTime: "3-6 days",
      reviews: "⭐⭐⭐⭐ (11 Reviews)",
      sizeOptions: ["S", "M", "L", "XL"],
      sizes: {
        S: { bust: "30 in", length: "20 in" },
        M: { bust: "32 in", length: "21 in" },
        L: { bust: "34 in", length: "22 in" },
        XL: { bust: "36 in", length: "23 in" },
      },
      images: {
        main: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-xQqXtflMyPRcTTXKXMNSILT6CjtXqqXEEqEYeAJl6lZOtbd60IWfdjHvmZB6CJ3rhk7MqBbTnROXd-mTzuoA5vGgpSGYSHSE530LsjY&usqp=CAE",
        thumbnails: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrH4eueDA9WLEWWOBjmdtEy21s7veB00UI6Ehnom-tkrXugp26u5oPcI4R_fRq54t-nG0gKf53UEixdwZt2KlQMh4OSBYkDGDbyzaoY-di&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdXDwC9NuJkpnxapBxu1yxXMU2i7kCQCWK-lz57cDNV7K9fCXS1s-obgxTH6hFONj1oOnAKx2cG_gf3ZGWHKki0HlYKIh9GeEkhaCD7mg&usqp=CAE",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIA43Ok1gB47kTy3d3NR4if4PCnE0HwyVkLviXd1OMBCKAa0nGUiB5cU0zaFxaL4UZGGUwl1i3Ee0ffjUMP5KKh60Wjay3V1ATw9Rw_5KKtyAQsh6yN1zQdQ&usqp=CAE",
        ],
      },
      otherDetails: [
        "Fit: Relaxed fit",
        "Material: Knitted Fabric",
        "Price (MRP): Rs. 2,199.00 incl. all taxes",
        "Country of Production: India",
        "Common Generic Name: Cardigan Sweater",
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
