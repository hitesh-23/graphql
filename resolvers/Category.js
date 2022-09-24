export const Category = {
  products: ({ id: categoryId }, { filter }, { products, reviews }) => {
    let filteredProducts = products.filter(
      (product) => product.categoryId === categoryId
    );
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          console.log(avgProductRating, sumRating, product.name, "yuuyuyuy");
          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
};
