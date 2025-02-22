const products = [
    { 
      id: 11, 
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSckly7Nw_sGs4BrbwxTgyPYDgPl5KR__B1Hjyc6k2Ut7BCVCyuexzbUeLXPyaY2HVZRnOXoC7aTtMKXpACdOVw4wU45ml7r4q6sbg2RAGvGES4PJpui7w5&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJF1q2_GAKAMr5sgNMHsCYNwr9Uj05Sw_sgV8-nNZ0K-nJwbx6RdRv2ulP81sT5lkLGEcCCRnVC1ilyeKfX0vEQn6XcIevjM9GM7ZmR4yPRmRRMu78Eq6d&usqp=CAE',
      title: 'Women Short Dress In Purple', 
      price: '$19.99', 
      rating: 4.5 
    },
    { 
      id: 12, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSm0fBU5y9meXArsZr0PyLJ_9cviD_U6hDgzljH1xQu8rB8CF8HYHz8tDlqAgj6DFHHqEVmwcnY5LHrqtr2btTNZ4gHLLS12C0QPB5CWZ1zAiHhN8_F24z2IA&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi1kM_YBbUNMkjkUP4bWVnvZjVOYqLW0r1UcKMeIJSM0IMC59F_6RZA8F1H_MPt458ySJmMvL-owhIstOvhW10b9ZaTkdQezIOEdgtiVcFUzCYQvtrWzqr&usqp=CAE',
      title: 'Tokyo Talkies Women Green Printed Fit and Flare Dress', 
      price: '$24.99', 
      rating: 4 
    },
    { 
      id: 13, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLxOt4i0DHYzqWfGkWK2W8sDLmk9D-kmIP8Df1vn--xmaxb-u9nr8zwhoEZ34FuZNjNlqfsNrV3aZbVpam5jvquDkstbtZenjUU8CdjN9w&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIaX3BRpcQVkMhvElKa9fZQX0H7wwzHClmyzV4XvWeBTSj5nayjw-Jj4ZL4P-U64cmo6F8KfnWwFcP4nSm-khFiS1Xuahi57JQKtU1msHI&usqp=CAE',
      title: 'Ruched Bodycon Dress With Floral Print And Spaghetti Straps', 
      price: '$29.99', 
      rating: 5 
    },
    { 
      id: 14, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKHPdaxZ-aZMvUMq-i1hB_EnizyWVfYPKXSSrPsxQuUpfwiXV_40LO0t8McypmyS-ci2cbZPCK3g6g8PTxYYtjOkyPqMMcL1_mm1W1T5I&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBoaOg2eNG6BV6Ewn1x77dSMEqSg71g_5Us492mIMDwfMXVWJJgReqfLpPsxJog--ZaA6VlPcXD5SkYgvnksX6Ofio4rjYwjGqqHcEzl4&usqp=CAE',
      title: 'Product 4', 
      price: '$14.99', 
      rating: 4.2 
    },
    { 
      id: 15, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOkZOLBZ6tf6Vy4m7rXWUSaoQGW0PktwS5i-C62kV3FNnOn-lkd3DgzW_CY98RYoP7FE0vzIbOY9irWl4d9EC_Irua9tA0RN8OJG59Y1iG&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQZMkHqUbA9thCq2XZKGH9sNKBY71N2bGgsu0Pik6mzHFMwhUPEMGV7CvBTJRs8OkRD6h3ZxvxVcuIMy3xvft17bdk_owggQ8mxf7pHreZsHhIASISNOhv&usqp=CAE',
      title: 'AAHWAN Puff Sleeves Sweetheart Neck Ruched A-Line Mini Dress', 
      price: '$34.99', 
      rating: 3.8 
    },
    { 
      id: 16, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSddT2LhvQNrYj9c0ktmLCthoZjWEygTm8oi5es_ZQAM_bubPJsS8AYBXh1qBncV8AlqFDf4RGWFvSPKnL8fYZUupJqfF4Rz19Dj21ZMItU&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcovk6i4AHBslQOSvg-z6DPgMYmX_2dT8OMoLeXLs_G5NdlMGp-JL17Lybj-vpZiHJ1pD8d9ydzhLLiD5jxbVXcH9uJ8AR40RsNLiF4cQuDs0jyEGQLAxz&usqp=CAE',
      title: 'Tokyo Talkies Women Maroon Printed A-Line Dress', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 17, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQix7E4TuIN8RKa7wsf5PRqBIzaq9tk9SYHEtztmhEyHiNkQ3pcE7LVfySQ_R2d1tqMTEnLimLZBnv2_fL5zCPKl1D35uo0hBBd2QZY00YYyJx_rWo0OzVj&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8Q7sQwyPNPpIYJnfs7WHItOBcGrv34gfrdwDlk5t8GOft94_1BIwky0Dc3tD6HstZ3u0RJwb5WlsKQR895Ta73493kaYmmGvleVu_l_k&usqp=CAE',
      title: 'Tokyo Talkies Women Blue Printed Fitted Tops', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 18, 
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoRGhfQv5kvejZCVLQXhDBFHhRmcWDhbb4ZPqESrr1EIVbZcx1600KvH1wl0iYdgh64AumqTyONa3_AV6E740szYazMR9c9lC5Yr-e6OqN1CNnYRPAuOz1&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTM7p4P5onR0lfRR8lKZ90onSIje_Y87u3N6PIAu63D-lBbMbh1ZcU0tqurN8pNUT7gCIkSK7IyoQ9nbAJ-1ITBuyVyRGL9JbinaLcdKHIP1suie0OLq0PXcA&usqp=CAE',
      title: 'Womens Full Sleeves Top', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 19, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTl8Bf54-gqN2SCCgkOeKO8ORxUxjZoGlZrsusAfAHMj9v_oe6BLd9PQI8aSj0GfIS6IU9X0EbwNBWNJfvCe5EIIX7JR0JTAiQTuQdo-eA&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSCgd39vhNSTduZK4MxfNp7n7qx7uxEYoJ4MkxS2HAwewZMHN5I7Bj37G8vaY4pCKv4WRZivjK_TY6N0hIyIE717ZtywjU3QdVF29naiZlC&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 20, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-xQqXtflMyPRcTTXKXMNSILT6CjtXqqXEEqEYeAJl6lZOtbd60IWfdjHvmZB6CJ3rhk7MqBbTnROXd-mTzuoA5vGgpSGYSHSE530LsjY&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIA43Ok1gB47kTy3d3NR4if4PCnE0HwyVkLviXd1OMBCKAa0nGUiB5cU0zaFxaL4UZGGUwl1i3Ee0ffjUMP5KKh60Wjay3V1ATw9Rw_5KKtyAQsh6yN1zQdQ&usqp=CAE',
      title: 'Sweetheart Neck Puff Sleeve Styled Back Crop Top', 
      price: '$39.99', 
      rating: 4.7 
    },
   
    
  ];


  const beauty = [
      { 
        id: 51, 
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZvEBPFIsucF-dKl7xhIBX8WhXW0FSH3XV5GkkOBvMXadV0caxtmFUpmiU3bzBrAN11PWST-ufG4ifZaq7QdrIl44RJ_HQQheK_QQRMSJyCt8afXb7X9EfMA', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+1',
        title: 'Product 1', 
        price: '$19.99', 
        rating: 4.5 
      },
      { 
        id: 52, 
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVTnH_w1r5Y-zrs_9AMYkzQzYhf8kH1Xm7d2OdB9e8Y4bHf9HLEs9_0S9hswlTMWna30yBbmWDzw-_f5JNQRKUJJaF5Uw7J-u8Ois-RrjNQ_nXr-2a0knA&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+2',
        title: 'Product 2', 
        price: '$24.99', 
        rating: 4 
      },
      { 
        id: 53, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3CvE8USpoywCBDDm7zZVce5RtbZxhZcjkbQHNO2P_rGIK42D53AK5JM1dN4cUi_ycc-arnpNjCSWxmv3NHtbz59EwHba7ezLtHQr2laZPGETc-sb0HhcQdg', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+3',
        title: 'Product 3', 
        price: '$29.99', 
        rating: 5 
      },
      { 
        id: 54, 
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVXGOGwpTKkJpJr_9RF4y-_DMuRklkFlJgyJYx1l1ONNtzMBx1Ln5Igec7SdaG5f9eU_fhtYEX0JLgc2pezRlIsPqS9k6PZNZY_qZhHGzhlLB5ucw8JNg_Wg&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+4',
        title: 'Product 4', 
        price: '$14.99', 
        rating: 4.2 
      },
      { 
        id: 55, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7wA9hxYlJkNN5qWOsOrAEYGHRlUqZnx3QstoipkDsk1ZWUFj01rWce74DMRifUmkXlNloMyD-TrEqUl1frd4cZbzdc8p1up2qvFuN0gcjwE3OY5CqYA-ENQ&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+5',
        title: 'Product 5', 
        price: '$34.99', 
        rating: 3.8 
      },
      { 
        id: 56, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIH7Xm3-0M08l-l_lpenLPQPJOao3M2iR0PXZTjPvSKxvFHL6yk0kBC-VpWw73kXKmNDsrr_MYKCXvVKTeSO57HTlqkzdQcEdpUqgnVh8fP8N9T-JlRamX&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+6',
        title: 'Product 6', 
        price: '$39.99', 
        rating: 4.7 
      },
    ];

// Accessories configuration for HomeCart.js

const accessories = [
    {
      id: 101,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkNp-I4K1ySRWPJ_M0wjNhsFuKLzg6JcSQzmcoRdUC-Qj6_3dhR6OkxixsmtGStM_fHhFsp-raQgVC6AUV1AXiJNzOxiKFMr5BN2YCS98vNzXVqT109Soq6Q&usqp=CAE",        // Replace with your actual image path
      hoverImg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfyHvZo3uF-xvMOq-9tIiSegU2FHVaIfC8m-hFtQUkP7a7bWrchJTb-z2385lz1O9MZcFnwtmIGIzvuvW9plbN1lzE01B4AhaFIuT4aODm&usqp=CAE", // Replace with your actual image path for hover effect
      title: "Classic Leather Belt",
      price: "₹499",
      rating: "4.5"
    },
    {
      id: 102,
      img: "path/to/accessory2.png",
      hoverImg: "path/to/accessory2-hover.png",
      title: "Stylish Sunglasses",
      price: "₹799",
      rating: "4.7"
    },
    {
      id: 103,
      img: "path/to/accessory3.png",
      hoverImg: "path/to/accessory3-hover.png",
      title: "Luxury Wrist Watch",
      price: "₹1499",
      rating: "4.8"
    },
    {
        id: 104,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      },
      {
        id: 105,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      }, {
        id: 106,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      }, {
        id: 107,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      },
      {
        id: 108,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      },
      {
        id: 109,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      },
      {
        id: 100,
        img: "path/to/accessory3.png",
        hoverImg: "path/to/accessory3-hover.png",
        title: "Luxury Wrist Watch",
        price: "₹1499",
        rating: "4.8"
      },

  ];
  


export{products,beauty,accessories}