const products = [
    { 
      id: 11, 
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-JTbnjQQZL5LlIU3F4Kzn66xj-Ex9SS_-MLBqt5ubBXtFxtbUYBnRmQEUrz0btQ4SwnOI9s1M1YG8Koi5ElUCU6gQEbn9LS-sMBY-rHr-v8zgUs5eod8ZKQ&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+1',
      title: 'Product 1', 
      price: '$19.99', 
      rating: 4.5 
    },
    { 
      id: 12, 
      img: 'https://image.hm.com/assets/hm/e9/d6/e9d6185fcb10f4756c7e84464dfed9a071f5c810.jpg?imwidth=396', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+2',
      title: 'Product 2', 
      price: '$24.99', 
      rating: 4 
    },
    { 
      id: 13, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLxOt4i0DHYzqWfGkWK2W8sDLmk9D-kmIP8Df1vn--xmaxb-u9nr8zwhoEZ34FuZNjNlqfsNrV3aZbVpam5jvquDkstbtZenjUU8CdjN9w&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIaX3BRpcQVkMhvElKa9fZQX0H7wwzHClmyzV4XvWeBTSj5nayjw-Jj4ZL4P-U64cmo6F8KfnWwFcP4nSm-khFiS1Xuahi57JQKtU1msHI&usqp=CAE',
      title: 'Product 3', 
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
      title: 'Product 5', 
      price: '$34.99', 
      rating: 3.8 
    },
    { 
      id: 16, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSddT2LhvQNrYj9c0ktmLCthoZjWEygTm8oi5es_ZQAM_bubPJsS8AYBXh1qBncV8AlqFDf4RGWFvSPKnL8fYZUupJqfF4Rz19Dj21ZMItU&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcovk6i4AHBslQOSvg-z6DPgMYmX_2dT8OMoLeXLs_G5NdlMGp-JL17Lybj-vpZiHJ1pD8d9ydzhLLiD5jxbVXcH9uJ8AR40RsNLiF4cQuDs0jyEGQLAxz&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 17, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSddT2LhvQNrYj9c0ktmLCthoZjWEygTm8oi5es_ZQAM_bubPJsS8AYBXh1qBncV8AlqFDf4RGWFvSPKnL8fYZUupJqfF4Rz19Dj21ZMItU&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcovk6i4AHBslQOSvg-z6DPgMYmX_2dT8OMoLeXLs_G5NdlMGp-JL17Lybj-vpZiHJ1pD8d9ydzhLLiD5jxbVXcH9uJ8AR40RsNLiF4cQuDs0jyEGQLAxz&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 18, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSddT2LhvQNrYj9c0ktmLCthoZjWEygTm8oi5es_ZQAM_bubPJsS8AYBXh1qBncV8AlqFDf4RGWFvSPKnL8fYZUupJqfF4Rz19Dj21ZMItU&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcovk6i4AHBslQOSvg-z6DPgMYmX_2dT8OMoLeXLs_G5NdlMGp-JL17Lybj-vpZiHJ1pD8d9ydzhLLiD5jxbVXcH9uJ8AR40RsNLiF4cQuDs0jyEGQLAxz&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 19, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLQ06-Qsa3PKqx3HXl99ew2Dfj4T8YKlKILuhZL2WyZc6J896vHTOiRHCWUTwwIM-N7rli0gru8raS1pqsuInSdRa5ou9-ra1GfdlIGXKC&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9V3JK4I1RW07K_eHi4bmz-fssidsZYqhrLzFhTKsk7m-J8rxcu34-L8aUeiajg40F10mjUSbRBibxQwUqiGSqn5iufvQwgkmQ6rK6isE&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
    { 
      id: 20, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSf7iYD4YZx_mbADaxocoiWbzSDspdKgab8IiTCHZzh69cSYY2NKN2SCUTSvWckp12RowPLJh3NN_SRwLMd-jj2wcT-G6_SwD4JOCjfwz42&usqp=CAE', 
      hoverImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6E5rEkoBSKb2n_D83C95d3tmwi7-h3O-udygFcRYz01atanpsH8elLXsHKcMrXtN4RnCa1HumQt9Qbnry990iOOYHuvHRlMN0Nk3g-SoJuyvaegFvB2iE&usqp=CAE',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
   
    
  ];


  const beauty = [
      { 
        id: 1, 
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZvEBPFIsucF-dKl7xhIBX8WhXW0FSH3XV5GkkOBvMXadV0caxtmFUpmiU3bzBrAN11PWST-ufG4ifZaq7QdrIl44RJ_HQQheK_QQRMSJyCt8afXb7X9EfMA', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+1',
        title: 'Product 1', 
        price: '$19.99', 
        rating: 4.5 
      },
      { 
        id: 2, 
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVTnH_w1r5Y-zrs_9AMYkzQzYhf8kH1Xm7d2OdB9e8Y4bHf9HLEs9_0S9hswlTMWna30yBbmWDzw-_f5JNQRKUJJaF5Uw7J-u8Ois-RrjNQ_nXr-2a0knA&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+2',
        title: 'Product 2', 
        price: '$24.99', 
        rating: 4 
      },
      { 
        id: 3, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3CvE8USpoywCBDDm7zZVce5RtbZxhZcjkbQHNO2P_rGIK42D53AK5JM1dN4cUi_ycc-arnpNjCSWxmv3NHtbz59EwHba7ezLtHQr2laZPGETc-sb0HhcQdg', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+3',
        title: 'Product 3', 
        price: '$29.99', 
        rating: 5 
      },
      { 
        id: 4, 
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVXGOGwpTKkJpJr_9RF4y-_DMuRklkFlJgyJYx1l1ONNtzMBx1Ln5Igec7SdaG5f9eU_fhtYEX0JLgc2pezRlIsPqS9k6PZNZY_qZhHGzhlLB5ucw8JNg_Wg&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+4',
        title: 'Product 4', 
        price: '$14.99', 
        rating: 4.2 
      },
      { 
        id: 5, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7wA9hxYlJkNN5qWOsOrAEYGHRlUqZnx3QstoipkDsk1ZWUFj01rWce74DMRifUmkXlNloMyD-TrEqUl1frd4cZbzdc8p1up2qvFuN0gcjwE3OY5CqYA-ENQ&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+5',
        title: 'Product 5', 
        price: '$34.99', 
        rating: 3.8 
      },
      { 
        id: 6, 
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIH7Xm3-0M08l-l_lpenLPQPJOao3M2iR0PXZTjPvSKxvFHL6yk0kBC-VpWw73kXKmNDsrr_MYKCXvVKTeSO57HTlqkzdQcEdpUqgnVh8fP8N9T-JlRamX&usqp=CAE', 
        hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+6',
        title: 'Product 6', 
        price: '$39.99', 
        rating: 4.7 
      },
    ];
export{products,beauty}