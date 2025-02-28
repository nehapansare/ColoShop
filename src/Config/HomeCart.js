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
        hoverImg: 'https://images.mamaearth.in/catalog/product/8/_/8_68.jpg?format=auto&height=600',
        title: 'Moisture Matte Longstay Lipstick - 2g', 
        price: '$19.99', 
        rating: 4.5 
      },
      { 
        id: 52, 
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb_DbgO9xiArEgj7_TX-yWrsb-8sQqHc_QEchfiHjdDi1WE9SKE7BjnsrdTlDzVuJj8Mgh1W8jiJcQ7Mq_ZgwNhr2EYhaCsVa91pWNmpQzNhgkcIVNqXNm8g&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmaEmABRHSc5uD0Iq8CAthn8wfZXCgtKYSp3utLG-WXBa035czEC-q30nFXyIMpuP7M1C29qUTHA1IKctHTLXi5R9zTW1JsrvyRrLBST7t78KhbG4vxIoW6g&usqp=CAE',
        title: '	Swiss Beauty Pure Matte Lipstick 230 Brandy Harrington 3.8g', 
        price: '$24.99', 
        rating: 4 
      },
      { 
        id: 53, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3CvE8USpoywCBDDm7zZVce5RtbZxhZcjkbQHNO2P_rGIK42D53AK5JM1dN4cUi_ycc-arnpNjCSWxmv3NHtbz59EwHba7ezLtHQr2laZPGETc-sb0HhcQdg', 
        hoverImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0P-upeDsSMBcQASG5OVQOu7klDwjBPv1e-dIp4G03aX54_Ogv09K38aJcS2XOUJKcFM1KBus5iItcjxbVfH5Yxf_zkzemSvXIKwt08M2RhU79a9cFUrqfUw&usqp=CAE',
        title: '	Swiss Beauty Power Stage Eyeshadow Palette - Royal Tribe (25 g)', 
        price: '$29.99', 
        rating: 5 
      },
      { 
        id: 54, 
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVXGOGwpTKkJpJr_9RF4y-_DMuRklkFlJgyJYx1l1ONNtzMBx1Ln5Igec7SdaG5f9eU_fhtYEX0JLgc2pezRlIsPqS9k6PZNZY_qZhHGzhlLB5ucw8JNg_Wg&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbV9xVPD0-UXFZE75vpCV6nyof-97UuQ1lD4wtNHYbEihtyTlG8FKkyyKUeGtPiNt1ZrfvsvB2Nn8e2teLgJoBk9wqfc0I5xVnc3lcToHPsv0EGwRd1xzd&usqp=CAE',
        title: '	Swiss Beauty Cream It Up Blush - Natural Flush (10 ml)', 
        price: '$14.99', 
        rating: 4.2 
      },
      { 
        id: 55, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7wA9hxYlJkNN5qWOsOrAEYGHRlUqZnx3QstoipkDsk1ZWUFj01rWce74DMRifUmkXlNloMyD-TrEqUl1frd4cZbzdc8p1up2qvFuN0gcjwE3OY5CqYA-ENQ&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsr-fqFarlgP0MtFd7oLBF4ZtCZ4k-I_UiTXRmpaSoh2ASHyb1I3JDuRCXWn6whypEtpZj1DGS3xmCZvEXnnU0PCgvqGRjP9mcnflGR-c&usqp=CAE',
        title: 'MAYBELLINE New YORK Instant Age Rewind Eraser 120', 
        price: '$34.99', 
        rating: 3.8 
      },
      { 
        id: 56, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIH7Xm3-0M08l-l_lpenLPQPJOao3M2iR0PXZTjPvSKxvFHL6yk0kBC-VpWw73kXKmNDsrr_MYKCXvVKTeSO57HTlqkzdQcEdpUqgnVh8fP8N9T-JlRamX&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5vJNMVDC3f5bnCOS_AYsUKJpCIkPtEC2mv0IDyMbSLbOTDwmzVv9kz6YsyeMlrvvnKZfMOtkq4kAEFeSkkf1hbCbwyuHxtBI9y0Fd-RgSn5VTaQbYTliEYA&usqp=CAE',
        title: '	Maybelline New York Fit Me Matte + Poreless Foundation (30ml) ', 
        price: '$39.99', 
        rating: 4.7 
      },
      { 
        id: 57, 
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkCWTSAOQ-76eZxPyNy2SDmBRQoDxRq7AO96ygzMAjfek5woIgH_ojv4Ri4C82nBrmMxH4238ZcDVp3r8K38rTxRQKOcHyV-JoCMXIJGg&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqq3aviIzSLn6DmVLqz-lc9fuNp1PtjbtFirIr_KoZSqR5iAjMhkGm9q_xwu9Ei18pSVauIjk4WMjjHztzws6nZCzaIAXBcg5fRN-fFgdELfjKwIXDsuEv&usqp=CAE',
        title: 'Swiss Beauty Natural Makeup Fixer ', 
        price: '$39.99', 
        rating: 4.7 
      },
      { 
        id: 58, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGY-NCXrRwboneS2gtyZ9oKKA0a01_qtoazcZSz0gI0ygu3zGWE0Pnr2Xj-UVF3cbAnJsCYlkIlFd4Ffu-tb39iG7-mZa_3WLu40sar_xsi6oP65lcQHxq&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSmASPP92fTRMliGzl3v4KwjS7jC4kWfi6l4R4sMkDjbvMf8CucoJM3yTtaMuYHkmFZHnANM_BV6-a4ftyfhm-k4IHP-KwJw&usqp=CAE',
        title: '	MARS Fabulash Volumising Mascara', 
        price: '$39.99', 
        rating: 4.7 
      },
      { 
        id: 59, 
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdg6Yjr8UQTngTa_t0VYQ236t6RlQ-J0QB2-1K_JCkVquSrIrkdSFy2QB5OBPaTvNYxBlMAZYfsIS3RN3Sj1wqowMggP58i34h3ZNP2K9WnV_9dj25Efw&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRm7-Iyca1n0BVVlqOcx0oYCRWZnkB3lZIwHs7BU-xWdk6K6UhPz7yceBormQ3nbjK8PBIYBjXnB1RH45GHz0_6wx0rG6mbBzbb95D10nKbOrHommkVTRd2&usqp=CAE',
        title: '	Maybelline New York Colossal Kajal, Black ', 
        price: '$39.99', 
        rating: 4.7 
      },
      { 
        id: 60, 
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSv1Ub9F9d1UB-8Rk2RDP4MtPcA7Dz-CL1JRG2AhutscXLrfHxgDRzQzB9etH0hp35_XFXW5Xs69Wm903CRqCBblJNuR-ok7gfaZxET_gk1mzbB0TpTVbY0&usqp=CAE', 
        hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSv80iZidNQPVtlvtnDEqgOu80uU119zq8pvZplbRCCglVqpsQt6sh6a-EmhT28XHs-vSG8LSdpXiSbfKYlVXY6p2UgAPrrwzG8hRmgFZtWxFsn7yfQSZg-YQ&usqp=CAE',
        title: '	Maybelline New York Face Studio Master Chrome Metallic Highlighter  ', 
        price: '$39.99', 
        rating: 4.7 
      },
    ];

// Accessories configuration for HomeCart.js
const accessories = [
  {
      id: 101,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjtN3PHNRWjojOfbg57AC-dwwhFO--UQuHmpmyzd4j_66a31gD-W7E_O6-wKFDg_7Atsxxy_IS7L0cP0Kr5Q6-3kU-tl8Y&usqp=CAE",
      hoverImg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1vG28LFwUboy7wOICGjCtp4Mtpu-LwfqHOB-PNSjFSBg0_909D2HdGdflzU_GuKvuc_4iJ2KVWSElXRCBXmVmOs-Kq5N8Iey2pWFhClmw1e8cScMoxUaPxA&usqp=CAE",
      title: "Elegant Pearl Necklace",
      price: "₹1,299",
      rating: "4.8"
  },
  {
      id: 102,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXtzjDVf2_Exs75uf0jtIgeEpzFSdDg9mVhmKfFrBLWD0zwGA4CUW0Ao4LyURcgKSHxrchyQwjFCFLD7gJakAX3AgI1ItyXOGnoCCiq1T_&usqp=CAE",
      hoverImg: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBDrheeBguqLfCyaO5vS0KppT4emNYnB_2unqfyNfXMjdJ-y0b3r5-qU4kWygMI8ZG8LukB9JQZEs8nvdza_ot9_LeMgFkoBQ2HSjtfht7&usqp=CAE",
      title: "Luxury Handbag",
      price: "₹2,999",
      rating: "4.9"
  },
  {
      id: 103,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-8_INR4kr7_xqF2iezSBDZo3pLP27Ce7LAG433dpOIphGpMPECCSQ-8oZGa-qNiODUCGXqrkVAbmZKSubmXynwCbyyi0mBZrMSuopsCzA&usqp=CAEE",
      hoverImg: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSamzZW4MYYffYJyKBJjpJ9WY1v137n-YTW_W2foGefarSPp_S0G7mCEALk0hmBiiFe1WLDvFFc36Q8T1VN_LSeuY_ihJcDGhplLQw7_wmygN7ZKRm7as54&usqp=CAE",
      title: "Stylish Sunglasses",
      price: "₹899",
      rating: "4.7"
  },
  {
      id: 104,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvPgvqakmTsrbiuBMz0HV8Pk7_4mdjit7vq7brLhkdX6rcb4HbV0vvNW2it4xUFWFg535dbjquWo1b_9cZuoC5pyyp4SkMadVssQsDhB9PgSzsqlfPczos&usqp=CAE",
      hoverImg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3rN8VaeThOe2dA2xij0tA6JmVxVDXS0Em52BKrr5lHyEkJ4wvDUWBgVa_SYcqHgQo42AijR3NojPFtgouyVb25phfJnTwlFG6aVJREjLporyf3wvQWoIt&usqp=CAE",
      title: "Trendy Hoop Earrings",
      price: "₹499",
      rating: "4.6"
  },
  {
      id: 105,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCQ9XELII7HiD-Ab6Qh-mgbmiI-Z-aYe0krcE076ySMVHmY7AhLGuet40-Vp2ENt28kXpiDmaqgNeZZb0XW-O42F_FhWy5xe9spwy8BfXB9zrzPvaOXttX&usqp=CAE",
      hoverImg: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCBu7TBuftmrlYm8iV59S5F8hA_Bmce9YchekIqz6C22ap5moVBtX6-k9bUiYM5MCjrCMIky8hViN_1knmaebHOwOlNpLh3MAzhR7kCMWx_SFjdk3q_7uk6A&usqp=CAE",
      title: "Designer Watch",
      price: "₹1,999",
      rating: "4.8"
  },
  {
      id: 106,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpKQYWqa1d12Itjlm14WQFgX7f3bx9GSOw1DSbjQBWOdOnfKw7LPcuMkyhZnQE-Lh_H5bbpnE2ELRMHEZLKFbSDrtqR4B8beZ0mQi5Thgxw28kTN8rsrcEIA&usqp=CAE",
      hoverImg: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS2smzygaxlx60vJoJKGFr7tIn_FwOsrSicNMsFEdThiiakbZJsOQ5uYZJhD3Gx2SYuvkeGzm2fyGpIWdgZG2y483NADxyoDcUCGthayUo&usqp=CAE",
      title: "Silk Scarf",
      price: "₹799",
      rating: "4.7"
  },
  {
      id: 107,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBAzqYJanv6SexUhAlfRbrwRNhjDcbOopUZFz8Q2NKLeZGu0VUrjrAL5BCWf2bIREyCilJeExwME0iysg0jJkMPDCUdkGWGx3ufivk-uRu&usqp=CAE",
      hoverImg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT93fw9-1tMZCt5hIhwjMiM_hK6_PbxxotGbtoSaTbWkGIkGh53UgZRGgEDIGZOraHOS7ZbkR6B0TjyncsEMg-VYS5ihrXLTJXRvlfTIkNCsVyDKqzt6ELk&usqp=CAE",
      title: "Elegant Hair Clips Set",
      price: "₹299",
      rating: "4.5"
  },
  {
      id: 108,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTn2TnpZ-akssPeLiy-u2skHsH-iP7U7X8ZTfCjNloI4xBXyUw7TMl8RzR4m5gAkSOOX7pi6sIUDkvaVg6NSt851luj1lX4WDIaGgQmyQY&usqp=CAE",
      hoverImg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIKRXORo31C-4t-bZ2e9aFW94VWZYv70McTuJYfGchd1sdPO6GKW1daOrzrfmfIZoZVRT3ohYwS74oDgNfpUKVf9NMc7Q-gZZCxBBO5A4&usqp=CAE",
      title: "Chic Anklet",
      price: "₹399",
      rating: "4.6"
  },
  {
      id: 109,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRw9y-yMrVRuFt9es-RceMvTZrIPPsVK4BrGWuZ3kqieGSxyeiukzAKyr1DcTbORSIdXffJ4BloUiC1daCqW6jEOghrEQkhXCoQPX7Ft1OAOrew8In3O6ZYgw&usqp=CAE",
      hoverImg: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxt4HYgAKRVCPM5YFfyHZ1HzfvKhniI6a0vkRuw_kzDAYnx0L2AiAhdHW7NT5taNnNaYtu7KtKhijumwDg77ap84Y4PE4Y-jlxRJ0wHsaW&usqp=CAE",
      title: "Trendy Tote Bag",
      price: "₹1,799",
      rating: "4.8"
  },
  {
      id: 110,
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6E2IW2n2oicbxpdg97LzKtY87SgAY9jSE4LdpDYFgq13QPiMMmaEwfSCDbBQnURPuJylKeJn8LVCQP2D0tPOrdDDAE7f0JNPp7ipb38cJfvFcEBeqC75EVw&usqp=CAE",
      hoverImg: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3fabe2TjjbuR8hPESwcOh67rhLcR7bjNF06hTPhLBm1rgUnL7M-XaRrXCTm5_N0a3lESKUap_zLPXR-tcpbHJZ-Y9T1MAVYrrRHJcJ1ed&usqp=CAE",
      title: "Elegant Bracelet Set",
      price: "₹599",
      rating: "4.7"
  }
];

// Add up to 108+ items...



export{products,beauty,accessories}